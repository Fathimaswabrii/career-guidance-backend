
// import { useState } from "react";
// import { loginUser } from "../services/authService";
// import { setToken } from "../utils/token";
// import { useNavigate } from "react-router-dom";  // 👈 ADD

// function Login() {
//   const navigate = useNavigate(); // 👈 ADD

//   const [form, setForm] = useState({
//     username: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await loginUser(form);

//       setToken(res.data.access);

//       alert("Login successful");

//       console.log(res.data);

//       // 🔥 REDIRECT AFTER LOGIN
//       navigate("/dashboard");

//     } catch (err) {
//       console.log("FULL ERROR:", err);

//       if (err.response) {
//         alert(JSON.stringify(err.response.data));
//       } else if (err.request) {
//         alert("Server not responding. Check backend.");
//       } else {
//         alert(err.message);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or{' '}
//             <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
//               create a new account
//             </a>
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Username"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign in
//             </button>
//           </div>

//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Demo credentials: admin / admin123
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { loginUser } from "../services/authService";
import { setToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import LoginUI from "../components/LoginUI";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(form);
      setToken(res.data.access);
      
      // Show success message briefly before redirect
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (err) {
      console.log("FULL ERROR:", err);

      if (err.response) {
        if (err.response.data.detail) {
          setError(err.response.data.detail);
        } else if (typeof err.response.data === 'object') {
          const firstError = Object.values(err.response.data)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          setError("Invalid username or password");
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

  return <LoginUI 
    form={form}
    loading={loading}
    error={error}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />;
}

export default Login;