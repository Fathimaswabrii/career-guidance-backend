// import React from "react";

// function DashboardUI({
//   loading,
//   profile,
//   result,
//   getGreeting,
//   navigate
// }) {
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
//           <p className="mt-4 text-gray-500 dark:text-slate-400">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-6xl mx-auto px-4 py-8">
        
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
//             {getGreeting()}
//             {profile?.name && <span className="font-semibold text-teal-600"> {profile.name}</span>}
//             <span className="font-light">.</span>
//           </h1>
//           <p className="text-gray-400 dark:text-slate-500 mt-1 text-sm">Your career companion</p>
//         </div>

//         {/* Stats Row - Minimal Cards */}
//         <div className="grid grid-cols-3 gap-4 mb-8">
//           <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
//             <p className="text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wide">Profile</p>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mt-1">{profile ? "Done" : "Pending"}</p>
//           </div>
//           <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
//             <p className="text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wide">Test</p>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mt-1">{result ? "Done" : "Pending"}</p>
//           </div>
//           <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
//             <p className="text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wide">Match</p>
//             <p className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mt-1">{result ? `${result.match}%` : "—"}</p>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-6">
          
//           {/* Left Column - Profile & Result */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Profile Card */}
//             {profile ? (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-lg font-medium text-gray-800 dark:text-slate-200">Profile</h2>
//                   <button 
//                     onClick={() => navigate("/profile")}
//                     className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
//                   >
//                     Edit
//                   </button>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center text-sm">
//                     <span className="text-gray-400 dark:text-slate-500 w-20">Age</span>
//                     <span className="text-gray-700 dark:text-slate-300">{profile.age} years</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <span className="text-gray-400 dark:text-slate-500 w-20">Education</span>
//                     <span className="text-gray-700 dark:text-slate-300 capitalize">{profile.education_level}</span>
//                   </div>
//                   <div className="text-sm">
//                     <span className="text-gray-400 dark:text-slate-500">Interests</span>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {profile.interests?.length > 0 ? (
//                         profile.interests.map((item, i) => (
//                           <span key={i} className="px-2 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-md">
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="text-sm">
//                     <span className="text-gray-400 dark:text-slate-500">Skills</span>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {profile.skills?.length > 0 ? (
//                         profile.skills.map((item, i) => (
//                           <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-md">
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 text-center">
//                 <p className="text-gray-500 dark:text-slate-400 mb-3">No profile yet</p>
//                 <button
//                   onClick={() => navigate("/profile")}
//                   className="px-4 py-2 bg-teal-500 text-white rounded-xl text-sm hover:bg-teal-600 transition"
//                 >
//                   Create Profile
//                 </button>
//               </div>
//             )}

//             {/* Result Card */}
//             {result ? (
//               <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-6 text-white">
//                 <p className="text-sm opacity-90">Your recommended career</p>
//                 <h3 className="text-2xl font-semibold mt-1">{result.career}</h3>
//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-sm opacity-90">Match: {result.match}%</span>
//                   <button
//                     onClick={() => navigate("/result")}
//                     className="px-4 py-1.5 bg-white text-teal-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
//                   >
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 text-center">
//                 <p className="text-gray-500 dark:text-slate-400 mb-3">No test taken yet</p>
//                 <button
//                   onClick={() => navigate("/test")}
//                   className="px-4 py-2 bg-teal-500 text-white rounded-xl text-sm hover:bg-teal-600 transition"
//                 >
//                   Take Test
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Quick Actions */}
//           <div className="space-y-4">
//             <h2 className="text-sm font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wide">Quick Actions</h2>
            
//             <button
//               onClick={() => navigate("/test")}
//               className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Aptitude Test</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Find your path</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/skills")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Skills</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">What to learn next</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/courses")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Courses</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Recommended learning</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/streams")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Streams</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Education paths</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Profile</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Update your info</p>
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardUI;
// import React from "react";

// function DashboardUI({
//   loading,
//   profile,
//   result,
//   getGreeting,
//   navigate
// }) {
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
//           <p className="mt-4 text-gray-500 dark:text-slate-400">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-6xl mx-auto px-4 py-8">
        
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
//             {getGreeting()}
//             {profile?.name && <span className="font-semibold text-teal-600"> {profile.name}</span>}
//             <span className="font-light">.</span>
//           </h1>
//           <p className="text-gray-400 dark:text-slate-500 mt-1 text-sm">Your career companion</p>
//         </div>

//         {/* Stats Row - Enhanced Cards */}
//         <div className="grid grid-cols-3 gap-4 mb-8">
//           {/* Profile Card */}
//           <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wide">Profile</p>
//                 <p className={`text-2xl font-semibold mt-1 ${
//                   profile ? "text-teal-600 dark:text-teal-400" : "text-gray-800 dark:text-slate-200"
//                 }`}>
//                   {profile ? "Done" : "Pending"}
//                 </p>
//               </div>
//               <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
//                 profile 
//                   ? "bg-teal-100 dark:bg-teal-900/50" 
//                   : "bg-gray-100 dark:bg-slate-700"
//               }`}>
//                 {profile ? (
//                   <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 ) : (
//                   <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                 )}
//               </div>
//             </div>
//             {/* Progress bar for profile completion */}
//             <div className="mt-3">
//               <div className="h-1 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
//                 <div 
//                   className={`h-full rounded-full transition-all duration-500 ${
//                     profile ? "bg-teal-500 w-full" : "bg-gray-300 dark:bg-slate-600 w-0"
//                   }`}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Test Card */}
//           <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wide">Test</p>
//                 <p className={`text-2xl font-semibold mt-1 ${
//                   result ? "text-teal-600 dark:text-teal-400" : "text-gray-800 dark:text-slate-200"
//                 }`}>
//                   {result ? "Done" : "Pending"}
//                 </p>
//               </div>
//               <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
//                 result 
//                   ? "bg-teal-100 dark:bg-teal-900/50" 
//                   : "bg-gray-100 dark:bg-slate-700"
//               }`}>
//                 {result ? (
//                   <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ) : (
//                   <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 )}
//               </div>
//             </div>
//             {/* Progress bar for test completion */}
//             <div className="mt-3">
//               <div className="h-1 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
//                 <div 
//                   className={`h-full rounded-full transition-all duration-500 ${
//                     result ? "bg-teal-500 w-full" : "bg-gray-300 dark:bg-slate-600 w-0"
//                   }`}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Match Card - Enhanced */}
//           <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
//             {/* Animated background effect */}
//             <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            
//             <div className="relative z-10">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-white/80 text-xs uppercase tracking-wide">Match Score</p>
//                   <p className="text-3xl font-bold text-white mt-1">
//                     {result ? `${result.match}%` : "—"}
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
//                   {result ? (
//                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   ) : (
//                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
              
//               {/* Circular progress indicator */}
//               {result && (
//                 <div className="mt-3">
//                   <div className="flex items-center gap-2">
//                     <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-white rounded-full transition-all duration-1000"
//                         style={{ width: `${result.match}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-white text-xs font-medium">{result.match}%</span>
//                   </div>
//                   <p className="text-white/70 text-xs mt-2">
//                     {result.match >= 70 ? "Excellent match! 🎯" : 
//                      result.match >= 50 ? "Good match! 📈" : 
//                      "Room to grow 💪"}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-3 gap-6">
          
//           {/* Left Column - Profile & Result */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Profile Card */}
//             {profile ? (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-lg font-medium text-gray-800 dark:text-slate-200">Profile</h2>
//                   <button 
//                     onClick={() => navigate("/profile")}
//                     className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
//                   >
//                     Edit
//                   </button>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center text-sm">
//                     <span className="text-gray-400 dark:text-slate-500 w-20">Age</span>
//                     <span className="text-gray-700 dark:text-slate-300">{profile.age} years</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <span className="text-gray-400 dark:text-slate-500 w-20">Education</span>
//                     <span className="text-gray-700 dark:text-slate-300 capitalize">{profile.education_level}</span>
//                   </div>
//                   <div className="text-sm">
//                     <span className="text-gray-400 dark:text-slate-500">Interests</span>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {profile.interests?.length > 0 ? (
//                         profile.interests.map((item, i) => (
//                           <span key={i} className="px-2 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-md">
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="text-sm">
//                     <span className="text-gray-400 dark:text-slate-500">Skills</span>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {profile.skills?.length > 0 ? (
//                         profile.skills.map((item, i) => (
//                           <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-md">
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 text-center">
//                 <p className="text-gray-500 dark:text-slate-400 mb-3">No profile yet</p>
//                 <button
//                   onClick={() => navigate("/profile")}
//                   className="px-4 py-2 bg-teal-500 text-white rounded-xl text-sm hover:bg-teal-600 transition"
//                 >
//                   Create Profile
//                 </button>
//               </div>
//             )}

//             {/* Result Card */}
//             {result ? (
//               <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-6 text-white">
//                 <p className="text-sm opacity-90">Your recommended career</p>
//                 <h3 className="text-2xl font-semibold mt-1">{result.career}</h3>
//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-sm opacity-90">Match: {result.match}%</span>
//                   <button
//                     onClick={() => navigate("/result")}
//                     className="px-4 py-1.5 bg-white text-teal-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
//                   >
//                     Details
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 text-center">
//                 <p className="text-gray-500 dark:text-slate-400 mb-3">No test taken yet</p>
//                 <button
//                   onClick={() => navigate("/test")}
//                   className="px-4 py-2 bg-teal-500 text-white rounded-xl text-sm hover:bg-teal-600 transition"
//                 >
//                   Take Test
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Quick Actions */}
//           <div className="space-y-4">
//             <h2 className="text-sm font-medium text-gray-400 dark:text-slate-500 uppercase tracking-wide">Quick Actions</h2>
            
//             <button
//               onClick={() => navigate("/test")}
//               className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Aptitude Test</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Find your path</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/skills")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Skills</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">What to learn next</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/courses")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Courses</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Recommended learning</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/streams")}
//               disabled={!result}
//               className={`w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left transition-shadow ${!result ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Streams</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Education paths</p>
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => navigate("/profile")}
//               className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
//                   <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800 dark:text-slate-200">Profile</p>
//                   <p className="text-xs text-gray-400 dark:text-slate-500">Update your info</p>
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardUI;

import React from "react";

// Match level helper — replaces percentage display
function getMatchLevel(match) {
  if (!match) return null;
  if (match >= 80) return { label: "Excellent Match", emoji: "🎯", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30", bar: "bg-emerald-500", dot: "bg-emerald-400" };
  if (match >= 65) return { label: "Strong Match",    emoji: "🚀", color: "text-teal-600 dark:text-teal-400",    bg: "bg-teal-50 dark:bg-teal-900/30",    bar: "bg-teal-500",    dot: "bg-teal-400" };
  if (match >= 50) return { label: "Good Match",      emoji: "📈", color: "text-sky-600 dark:text-sky-400",      bg: "bg-sky-50 dark:bg-sky-900/30",      bar: "bg-sky-500",     dot: "bg-sky-400" };
  return           { label: "Keep Growing",           emoji: "💪", color: "text-amber-600 dark:text-amber-400",  bg: "bg-amber-50 dark:bg-amber-900/30",  bar: "bg-amber-500",   dot: "bg-amber-400" };
}

function DashboardUI({ loading, profile, result, getGreeting, navigate, isProfileComplete }) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-500 dark:text-slate-400 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const matchLevel = getMatchLevel(result?.match);

  return (
    <div className="min-h-screen bg-[#f6f7fb] dark:bg-[#0f1117]">
      <div className="max-w-6xl mx-auto px-5 py-10">

        {/* ── Header ── */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-500 dark:text-teal-400 mb-1">Career Guidance</p>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
              {getGreeting()}
              {isProfileComplete(profile) && profile?.name && (
                <span className="text-teal-600 dark:text-teal-400"> {profile.name}</span>
              )}
            </h1>
            <p className="text-gray-400 dark:text-slate-500 mt-1 text-sm">Your personal career companion</p>
          </div>
          {/* Live indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-gray-100 dark:border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-gray-500 dark:text-slate-400">Active session</span>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          {/* Profile Stat */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${isProfileComplete(profile) ? "bg-teal-50 dark:bg-teal-900/40" : "bg-gray-100 dark:bg-slate-700"}`}>
                {isProfileComplete(profile) ? (
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                )}
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isProfileComplete(profile) ? "bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400" : "bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-slate-500"}`}>
                {isProfileComplete(profile) ? "Complete" : "Pending"}
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">Profile</p>
            <p className={`text-xl font-semibold ${isProfileComplete(profile) ? "text-gray-800 dark:text-slate-200" : "text-gray-400 dark:text-slate-500"}`}>
              {isProfileComplete(profile) ? profile.name?.split(" ")[0] || "User" : "Incomplete"}
            </p>
            <div className="mt-3 h-1 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-700 ${isProfileComplete(profile) ? "bg-teal-500 w-full" : "w-0"}`}></div>
            </div>
          </div>

          {/* Test Stat */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${result ? "bg-teal-50 dark:bg-teal-900/40" : "bg-gray-100 dark:bg-slate-700"}`}>
                {result ? (
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                )}
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${result ? "bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400" : "bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-slate-500"}`}>
                {result ? "Done" : "Pending"}
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">Aptitude Test</p>
            <p className={`text-xl font-semibold ${result ? "text-gray-800 dark:text-slate-200" : "text-gray-400 dark:text-slate-500"}`}>
              {result ? "Completed" : "Not taken"}
            </p>
            <div className="mt-3 h-1 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-700 ${result ? "bg-teal-500 w-full" : "w-0"}`}></div>
            </div>
          </div>

          {/* Match Level Card — no percentage */}
          <div className={`rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden ${
            matchLevel
              ? "bg-gradient-to-br from-teal-500 to-emerald-500 border-transparent"
              : "bg-white dark:bg-slate-800/80 border-gray-100 dark:border-slate-700/50"
          }`}>
            {matchLevel && (
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none"></div>
            )}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${matchLevel ? "bg-white/20" : "bg-gray-100 dark:bg-slate-700"}`}>
                  {matchLevel ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )}
                </div>
                {matchLevel && (
                  <span className="text-lg">{matchLevel.emoji}</span>
                )}
              </div>
              <p className={`text-xs uppercase tracking-wide mb-1 ${matchLevel ? "text-white/70" : "text-gray-400 dark:text-slate-500"}`}>Career Match</p>
              <p className={`text-xl font-semibold ${matchLevel ? "text-white" : "text-gray-400 dark:text-slate-500"}`}>
                {matchLevel ? matchLevel.label : "Take test first"}
              </p>
              {matchLevel && (
                <div className="mt-3 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-full transition-all duration-700"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left — Profile & Result */}
          <div className="lg:col-span-2 space-y-5">

            {/* Profile Card */}
            {profile ? (
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/40 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <h2 className="text-base font-semibold text-gray-800 dark:text-slate-200">Your Profile</h2>
                  </div>
                  <button onClick={() => navigate("/profile")} className="text-xs font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 px-3 py-1.5 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition">
                    Edit
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-0.5">Age</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-slate-300">{profile.age} years</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-0.5">Education</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-slate-300 capitalize">{profile.education_level}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-2">Interests</p>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.interests?.length > 0 ? (
                        profile.interests.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-lg font-medium">{item}</span>
                        ))
                      ) : <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.skills?.length > 0 ? (
                        profile.skills.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-lg">{item}</span>
                        ))
                      ) : <span className="text-gray-400 dark:text-slate-500 text-xs">—</span>}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Complete your profile to get started</p>
                <button onClick={() => navigate("/profile")} className="px-5 py-2 bg-teal-500 text-white rounded-xl text-sm font-medium hover:bg-teal-600 transition">
                  Create Profile
                </button>
              </div>
            )}

            {/* Result Card — match level label instead of % */}
            {result ? (
              <div className="relative bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-16 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Recommended career</p>
                      <h3 className="text-2xl font-bold">{result.career}</h3>
                      {matchLevel && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-base">{matchLevel.emoji}</span>
                          <span className="text-white/90 text-sm font-medium">{matchLevel.label}</span>
                        </div>
                      )}
                    </div>
                    <button onClick={() => navigate("/result")} className="px-4 py-2 bg-white text-teal-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition shrink-0">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm p-8 text-center">
                <div className="w-14 h-14 bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
                <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">Take the aptitude test to get your career recommendation</p>
                <button onClick={() => navigate("/test")} className="px-5 py-2 bg-teal-500 text-white rounded-xl text-sm font-medium hover:bg-teal-600 transition">
                  Take Test
                </button>
              </div>
            )}
          </div>

          {/* Right — Quick Actions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-[0.14em] mb-4">Quick Actions</p>

            {[
              {
                label: "Aptitude Test",
                sub: "Discover your strengths",
                route: "/test",
                disabled: false,
                iconBg: "bg-blue-50 dark:bg-blue-900/30",
                icon: <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              },
              {
                label: "Skills",
                sub: "What to learn next",
                route: "/skills",
                disabled: !result,
                iconBg: "bg-orange-50 dark:bg-orange-900/30",
                icon: <svg className="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                label: "Courses",
                sub: "Recommended learning",
                route: "/courses",
                disabled: !result,
                iconBg: "bg-green-50 dark:bg-green-900/30",
                icon: <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              },
              {
                label: "Streams",
                sub: "Education paths",
                route: "/streams",
                disabled: !result,
                iconBg: "bg-purple-50 dark:bg-purple-900/30",
                icon: <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              },
              {
                label: "Profile",
                sub: "Update your info",
                route: "/profile",
                disabled: false,
                iconBg: "bg-gray-100 dark:bg-slate-700",
                icon: <svg className="w-5 h-5 text-gray-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              },
            ].map(({ label, sub, route, disabled, iconBg, icon }) => (
              <button
                key={label}
                onClick={() => navigate(route)}
                disabled={disabled}
                className={`w-full bg-white dark:bg-slate-800/80 rounded-xl p-4 text-left border border-gray-100 dark:border-slate-700/50 transition-all duration-200 group ${
                  disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:shadow-md hover:border-gray-200 dark:hover:border-slate-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 ${iconBg} ${!disabled ? "group-hover:scale-105" : ""}`}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 dark:text-slate-200 text-sm">{label}</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 truncate">{sub}</p>
                  </div>
                  {!disabled && (
                    <svg className="w-4 h-4 text-gray-300 dark:text-slate-600 group-hover:text-gray-400 dark:group-hover:text-slate-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUI;