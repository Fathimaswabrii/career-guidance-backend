

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getProfile } from "../services/profileService";
// import { getResult } from "../services/testService";

// function Dashboard() {
//   const [profile, setProfile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       try {
//         const profileRes = await getProfile();
//         setProfile(profileRes.data);
//       } catch (err) {
//         console.log("No profile found");
//       }

//       try {
//         const resultRes = await getResult();
//         if (resultRes.data && !resultRes.data.message) {
//           setResult(resultRes.data);
//         }
//       } catch (err) {
//         console.log("No results found");
//       }
//     } catch (err) {
//       console.log("Error fetching user data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 17) return "Good Afternoon";
//     return "Good Evening";
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
//           <p className="mt-4 text-gray-600">Loading your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Welcome Header */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">
//                 {getGreeting()}
//                 {profile?.name && <span className="text-indigo-600"> {profile.name}</span>}
//                 !
//               </h1>
//               <p className="text-gray-500 mt-1">Your AI-powered career journey starts here</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
//                 {result ? "Test Completed" : "Test Pending"}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Profile Status</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">
//                   {profile ? "Completed" : "Pending"}
//                 </p>
//               </div>
//               <div className={`rounded-full p-3 ${profile ? 'bg-green-100' : 'bg-yellow-100'}`}>
//                 <svg className={`w-6 h-6 ${profile ? 'text-green-600' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Test Status</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">
//                   {result ? "Completed" : "Not Taken"}
//                 </p>
//               </div>
//               <div className={`rounded-full p-3 ${result ? 'bg-green-100' : 'bg-gray-100'}`}>
//                 <svg className={`w-6 h-6 ${result ? 'text-green-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm">Match Score</p>
//                 <p className="text-2xl font-bold text-gray-800 mt-1">
//                   {result ? `${result.match}%` : "N/A"}
//                 </p>
//               </div>
//               <div className={`rounded-full p-3 ${result ? 'bg-purple-100' : 'bg-gray-100'}`}>
//                 <svg className={`w-6 h-6 ${result ? 'text-purple-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Profile Section */}
//         {profile ? (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
//               <h2 className="text-white font-semibold text-lg">Your Profile</h2>
//             </div>
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span className="text-gray-600 text-sm">Age:</span>
//                     <span className="text-gray-800 font-medium">{profile.age} years</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                     </svg>
//                     <span className="text-gray-600 text-sm">Education:</span>
//                     <span className="text-gray-800 font-medium capitalize">{profile.education_level}</span>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div>
//                     <div className="flex items-center space-x-2 mb-2">
//                       <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                       <span className="text-gray-600 text-sm">Interests:</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 ml-7">
//                       {profile?.interests && profile.interests.length > 0 ? (
//                         profile.interests.map((interest, idx) => (
//                           <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
//                             {interest}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-500 text-sm">Not specified</span>
//                       )}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-2 mb-2">
//                       <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                       <span className="text-gray-600 text-sm">Skills:</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 ml-7">
//                       {profile?.skills && profile.skills.length > 0 ? (
//                         profile.skills.map((skill, idx) => (
//                           <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
//                             {skill}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-500 text-sm">Not specified</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6 mb-8">
//             <div className="flex items-center justify-between flex-wrap gap-4">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-yellow-100 rounded-full p-2">
//                   <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Complete Your Profile</h3>
//                   <p className="text-gray-600 text-sm">Add your interests and skills for better recommendations</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
//               >
//                 Create Profile
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Test Result Section */}
//         {result ? (
//           <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 mb-8">
//             <div className="flex items-center justify-between flex-wrap gap-4">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-green-100 rounded-full p-3">
//                   <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Your Recommended Career Path</p>
//                   <h3 className="text-2xl font-bold text-green-700">{result.career}</h3>
//                   <p className="text-sm text-gray-600 mt-1">Match Score: {result.match}%</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => navigate("/result")}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-8 text-center">
//             <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//             </svg>
//             <h3 className="font-semibold text-gray-800 mb-2">No Test Results Yet</h3>
//             <p className="text-gray-600 mb-4">Take the aptitude test to get personalized career recommendations</p>
//             <button
//               onClick={() => navigate("/test")}
//               className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//             >
//               Start Test Now
//             </button>
//           </div>
//         )}

//         {/* Action Cards */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <button
//               onClick={() => navigate("/test")}
//               className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition-all hover:scale-[1.02]"
//             >
//               <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
//                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-1">Aptitude Test</h3>
//               <p className="text-sm text-gray-500">Discover your career matches</p>
//             </button>

//             <button
//               onClick={() => navigate("/skills")}
//               disabled={!result}
//               className={`group bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left transition-all hover:shadow-md hover:scale-[1.02] ${!result && 'opacity-50 cursor-not-allowed'}`}
//             >
//               <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
//                 <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-1">Skill Development</h3>
//               <p className="text-sm text-gray-500">Get personalized skill suggestions</p>
//             </button>

//             <button
//               onClick={() => navigate("/courses")}
//               disabled={!result}
//               className={`group bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left transition-all hover:shadow-md hover:scale-[1.02] ${!result && 'opacity-50 cursor-not-allowed'}`}
//             >
//               <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-1">Courses</h3>
//               <p className="text-sm text-gray-500">Find recommended courses</p>
//             </button>

//             <button
//               onClick={() => navigate("/streams")}
//               disabled={!result}
//               className={`group bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left transition-all hover:shadow-md hover:scale-[1.02] ${!result && 'opacity-50 cursor-not-allowed'}`}
//             >
//               <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
//                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-1">Streams</h3>
//               <p className="text-sm text-gray-500">Explore educational streams</p>
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition-all hover:scale-[1.02]"
//             >
//               <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
//                 <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-800 mb-1">Profile Settings</h3>
//               <p className="text-sm text-gray-500">Update your information</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/profileService";
import { getResult } from "../services/recommendationService";
import DashboardUI from "../components/DashboardUI";
import ChatbotWidget from "../components/ChatbotWidget";

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      try {
        const profileRes = await getProfile();
        setProfile(profileRes.data);
      } catch (err) {
        console.log("No profile found");
      }

      try {
        const resultRes = await getResult();
        if (resultRes.data && !resultRes.data.message) {
          setResult(resultRes.data);
        }
      } catch (err) {
        console.log("No results found");
      }
    } catch (err) {
      console.log("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const isProfileComplete = (profile) => {
    if (!profile) return false;
    
    // Check required fields
    const hasName = profile.name && profile.name.trim().length > 0;
    const hasAge = profile.age && profile.age > 0;
    const hasEducation = profile.education_level && profile.education_level.trim().length > 0;
    const hasInterests = profile.interests && profile.interests.length > 0;
    const hasSkills = profile.skills && profile.skills.length > 0;
    
    return hasName && hasAge && hasEducation && hasInterests && hasSkills;
  };

  return (
    <>
      <DashboardUI 
        loading={loading}
        profile={profile}
        result={result}
        getGreeting={getGreeting}
        navigate={navigate}
        isProfileComplete={isProfileComplete}
      />
      <ChatbotWidget />
    </>
  );
}

export default Dashboard;