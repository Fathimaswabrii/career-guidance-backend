// import { useState, useEffect } from "react";
// import { createProfile, getProfile, updateProfile } from "../services/profileService";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [profile, setProfile] = useState({
//     name: "",
//     age: "",
//     education_level: "",
//     interests: [],
//     skills: []
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const educationOptions = [
//     "10th",
//     "12th", 
//     "College",
//     "Graduate",
//     "Post Graduate"
//   ];

//   const interestOptions = [
//     "Technology",
//     "Science",
//     "Arts",
//     "Sports",
//     "Music",
//     "Literature",
//     "Business",
//     "Healthcare"
//   ];

//   const skillOptions = [
//     "Programming",
//     "Communication",
//     "Leadership",
//     "Problem Solving",
//     "Creativity",
//     "Analytical Thinking",
//     "Team Work",
//     "Time Management"
//   ];

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const res = await getProfile();
//       if (res.data) {
//         setProfile(res.data);
//         setIsEditing(true);
//       }
//     } catch (err) {
//       console.log("No profile found, creating new one");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!profile.name || !profile.age || !profile.education_level) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       if (isEditing) {
//         await updateProfile(profile);
//         alert("Profile updated successfully!");
//       } else {
//         await createProfile(profile);
//         alert("Profile created successfully!");
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error saving profile");
//     }
//   };

//   const handleInterestChange = (interest) => {
//     setProfile(prev => ({
//       ...prev,
//       interests: prev.interests && prev.interests.includes(interest)
//         ? prev.interests.filter(i => i !== interest)
//         : [...(prev.interests || []), interest]
//     }));
//   };

//   const handleSkillChange = (skill) => {
//     setProfile(prev => ({
//       ...prev,
//       skills: prev.skills && prev.skills.includes(skill)
//         ? prev.skills.filter(s => s !== skill)
//         : [...(prev.skills || []), skill]
//     }));
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           {isEditing ? "Edit Profile" : "Create Profile"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Name *
//             </label>
//             <input
//               type="text"
//               value={profile.name}
//               onChange={(e) => setProfile({...profile, name: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           {/* Age */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Age *
//             </label>
//             <input
//               type="number"
//               value={profile.age}
//               onChange={(e) => setProfile({...profile, age: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your age"
//               min="15"
//               max="60"
//               required
//             />
//           </div>

//           {/* Education */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Education Level *
//             </label>
//             <select
//               value={profile.education_level}
//               onChange={(e) => setProfile({...profile, education_level: e.target.value})}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Education Level</option>
//               {educationOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Interests */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Interests
//             </label>
//             <div className="grid grid-cols-2 gap-3">
//               {interestOptions.map(interest => (
//                 <label key={interest} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={profile?.interests && profile.interests.includes(interest)}
//                     onChange={() => handleInterestChange(interest)}
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-700">{interest}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Skills
//             </label>
//             <div className="grid grid-cols-2 gap-3">
//               {skillOptions.map(skill => (
//                 <label key={skill} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={profile?.skills && profile.skills.includes(skill)}
//                     onChange={() => handleSkillChange(skill)}
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="text-sm text-gray-700">{skill}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex space-x-4">
//             <button
//               type="submit"
//               className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               {isEditing ? "Update Profile" : "Save Profile"}
//             </button>
//             {isEditing && (
//               <button
//                 type="button"
//                 onClick={() => navigate("/dashboard")}
//                 className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import { useState, useEffect } from "react";
import { createProfile, getProfile, updateProfile } from "../services/profileService";
import { useNavigate } from "react-router-dom";
import ProfileUI from "../components/ProfileUI";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    education_level: "",
    interests: [],
    skills: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const educationOptions = [
    "10th",
    "12th", 
    "College",
    "Graduate",
    "Post Graduate"
  ];

  const interestOptions = [
    "Technology",
    "Science",
    "Arts",
    "Sports",
    "Music",
    "Literature",
    "Business",
    "Healthcare"
  ];

  const skillOptions = [
    "Programming",
    "Communication",
    "Leadership",
    "Problem Solving",
    "Creativity",
    "Analytical Thinking",
    "Team Work",
    "Time Management"
  ];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      if (res.data) {
        setProfile(res.data);
        setIsEditing(true);
      }
    } catch (err) {
      console.log("No profile found, creating new one");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!profile.name || !profile.age || !profile.education_level) {
      alert("Please fill all required fields");
      return;
    }

    try {
      if (isEditing) {
        await updateProfile(profile);
        alert("Profile updated successfully!");
      } else {
        await createProfile(profile);
        alert("Profile created successfully!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      alert("Error saving profile");
    }
  };

  const handleInterestChange = (interest) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests && prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...(prev.interests || []), interest]
    }));
  };

  const handleSkillChange = (skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills && prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...(prev.skills || []), skill]
    }));
  };

  return <ProfileUI 
    loading={loading}
    profile={profile}
    isEditing={isEditing}
    educationOptions={educationOptions}
    interestOptions={interestOptions}
    skillOptions={skillOptions}
    handleSubmit={handleSubmit}
    handleInterestChange={handleInterestChange}
    handleSkillChange={handleSkillChange}
    navigate={navigate}
    setProfile={setProfile}
  />;
}

export default Profile;