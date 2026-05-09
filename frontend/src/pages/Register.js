// import { useState } from "react";
// import { registerUser } from "../services/authService";

// function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await registerUser(form);
//       alert("User registered!");
//       console.log(res.data);
//     } catch (err) {
//   console.log("FULL ERROR:", err);  // 👈 important for debugging

//   if (err.response) {
//     console.log("Backend error:", err.response.data);
//     alert(JSON.stringify(err.response.data));
//   } else if (err.request) {
//     console.log("No response from server");
//     alert("Server not responding. Check backend.");
//   } else {
//     console.log("Error:", err.message);
//     alert(err.message);
//   }
// }
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit}>
//         <input name="username" placeholder="Username" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


// import { useState } from "react";
// import { registerUser } from "../services/authService";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await registerUser(form);

//       alert("User registered!");

//       console.log(res.data);

//       // 🔥 Go to login page after register
//       navigate("/");

//     } catch (err) {
//       console.log("FULL ERROR:", err);

//       if (err.response) {
//         alert(JSON.stringify(err.response.data));
//       } else if (err.request) {
//         alert("Server not responding.");
//       } else {
//         alert(err.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit}>
//         <input name="username" placeholder="Username" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} />

//         <button type="submit">Register</button>
//       </form>
import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import RegisterUI from "../components/RegisterUI";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    setSuccess("");

    // Check password strength when password field changes
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let score = 0;
    let message = "";

    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9]/)) score++;

    if (score <= 2) message = "Weak password";
    else if (score <= 4) message = "Medium password";
    else message = "Strong password";

    setPasswordStrength({ score, message });
  };

  const validateForm = () => {
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Please enter a valid email address");
      return false;
    }

    if (form.username.length < 3) {
      setError("Username must be at least 3 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const res = await registerUser({
        username: form.username,
        email: form.email,
        password: form.password
      });

      setSuccess("Account created successfully! Redirecting to login...");

      console.log(res.data);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      console.log("FULL ERROR:", err);

      if (err.response) {
        if (err.response.data.username) {
          setError(`Username: ${err.response.data.username[0]}`);
        } else if (err.response.data.email) {
          setError(`Email: ${err.response.data.email[0]}`);
        } else if (err.response.data.detail) {
          setError(err.response.data.detail);
        } else if (typeof err.response.data === 'object') {
          const firstError = Object.values(err.response.data)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setError("Registration failed. Please try again.");
        }
      } else if (err.request) {
        setError("Unable to connect to server. Please check your connection.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength.score <= 2) return "bg-red-500";
    if (passwordStrength.score <= 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthWidth = () => {
    return `${(passwordStrength.score / 5) * 100}%`;
  };

  return <RegisterUI 
    loading={loading}
    form={form}
    error={error}
    success={success}
    passwordStrength={passwordStrength}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    getPasswordStrengthColor={getPasswordStrengthColor}
    getPasswordStrengthWidth={getPasswordStrengthWidth}
  />;
}

export default Register;