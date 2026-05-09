// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// function ResultUI({
//   loading,
//   data,
//   skillRecommendations,
//   courseRecommendations,
//   scoreData,
//   pieData,
//   getMatchColor,
//   getMatchMessage,
//   navigate
// }) {
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading your results...</div>
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">No Results Found</h2>
//           <p className="text-gray-600 mb-6">
//             Please take aptitude test to see your career recommendations
//           </p>
//           <button
//             onClick={() => window.location.href = "/test"}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Take Test
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Career Analysis</h1>
//           <p className="text-gray-600">Personalized recommendations based on your aptitude test</p>
//         </div>

//         {/* Main Career Recommendation */}
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-8 text-white">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-4">Recommended Career</h2>
//             <div className="text-5xl font-bold mb-4">{data.career}</div>
//             <div className={`text-2xl font-semibold ${getMatchColor(data.match)}`}>
//               Match: {data.match}%
//             </div>
//             <p className="text-lg mt-2">{getMatchMessage(data.match)}</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Bar Chart */}
//           <div className="bg-gray-50 rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Score Breakdown</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={scoreData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="score" fill="#3B82F6" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Pie Chart */}
//           <div className="bg-gray-50 rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Strength Distribution</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="score"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.fill} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Detailed Scores */}
//         <div className="bg-gray-50 rounded-lg p-6 mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Scores</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {scoreData.map((item) => (
//               <div key={item.name} className="bg-white rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold" style={{ color: item.fill }}>
//                   {item.score}
//                 </div>
//                 <div className="text-sm text-gray-600">{item.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Skill Recommendations */}
//         {skillRecommendations && (
//           <div className="bg-blue-50 rounded-lg p-6 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Development Recommendations</h3>
//             {skillRecommendations.weak_areas && skillRecommendations.weak_areas.length > 0 ? (
//               <div>
//                 <p className="text-gray-700 mb-4">Areas to improve:</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {skillRecommendations.weak_areas.map((area, index) => (
//                     <div key={index} className="bg-white rounded-lg p-4">
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">{area}</h4>
//                       <p className="text-sm text-gray-600">{skillRecommendations.suggestions[area]}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <p className="text-gray-700">Great job! You have balanced strengths across all areas.</p>
//             )}
//           </div>
//         )}

//         {/* Course Recommendations */}
//         {courseRecommendations && (
//           <div className="bg-green-50 rounded-lg p-6 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Courses</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {courseRecommendations.recommended_courses.map((course, index) => (
//                 <div key={index} className="bg-white rounded-lg p-4 text-center">
//                   <div className="text-lg font-medium text-gray-800">{course}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="space-y-6">
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={() => navigate("/dashboard")}
//               className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-200"
//             >
//               Back to Dashboard
//             </button>
//             <button
//               onClick={() => navigate("/test")}
//               className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               Retake Test
//             </button>
//           </div>

//           <div className="border-t pt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
//               Get Personalized Recommendations
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <button
//                 onClick={() => navigate("/skills")}
//                 className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition duration-200"
//               >
//                 <div className="text-lg font-semibold mb-2">Get Skill Suggestions</div>
//                 <div className="text-sm opacity-90">Improve your weak areas</div>
//               </button>

//               <button
//                 onClick={() => navigate("/courses")}
//                 className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition duration-200"
//               >
//                 <div className="text-lg font-semibold mb-2">Get Course Recommendations</div>
//                 <div className="text-sm opacity-90">Find relevant courses</div>
//               </button>

//               <button
//                 onClick={() => navigate("/streams")}
//                 className="bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition duration-200"
//               >
//                 <div className="text-lg font-semibold mb-2">Get Stream Recommendations</div>
//                 <div className="text-sm opacity-90">Explore educational streams</div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResultUI;


import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function ResultUI({
  loading,
  data,
  skillRecommendations,
  courseRecommendations,
  scoreData,
  pieData,
  getMatchColor,
  getMatchMessage,
  navigate
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-400 dark:text-slate-500 text-sm">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-12 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-2xl font-light text-gray-800 dark:text-slate-200 mb-2">No Results Found</h2>
            <p className="text-gray-400 dark:text-slate-500 text-sm mb-6">
              Please take the aptitude test to see your career recommendations
            </p>
            <button
              onClick={() => window.location.href = "/test"}
              className="px-6 py-2.5 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition"
            >
              Take Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
                Your Career Analysis<span className="font-semibold text-teal-500">.</span>
              </h1>
              <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
                Personalized recommendations based on your aptitude test
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-600 transition"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate("/test")}
                className="px-4 py-2 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-600 transition"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>

        {/* Main Career Recommendation Card */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-8 mb-8">
          <div className="text-center text-white">
            <p className="text-sm opacity-80 mb-2">Your Recommended Career</p>
            <h2 className="text-4xl font-bold mb-3">{data.career}</h2>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
              <span className="text-lg">🎯</span>
              <span className="font-semibold">Match: {data.match}%</span>
            </div>
            <p className="text-sm mt-3 opacity-90">{getMatchMessage(data.match)}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-4">Score Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="score" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-4">Strength Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="score"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Scores Grid */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 mb-8">
          <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-4">Detailed Scores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {scoreData.map((item) => (
              <div key={item.name} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-3 text-center hover:bg-teal-50 dark:hover:bg-teal-900/30 transition">
                <div className="text-2xl font-bold" style={{ color: item.fill }}>
                  {item.score}
                </div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Recommendations */}
        {skillRecommendations && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="bg-teal-500 px-6 py-3">
              <h3 className="text-white font-medium">Skill Development</h3>
              <p className="text-white/80 text-xs mt-0.5">Areas to focus on</p>
            </div>
            <div className="p-6">
              {skillRecommendations.weak_areas && skillRecommendations.weak_areas.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillRecommendations.weak_areas.map((area, index) => (
                    <div key={index} className="border-l-4 border-teal-500 bg-teal-50/30 dark:bg-teal-900/20 p-4 rounded-r-xl">
                      <h4 className="font-semibold text-gray-800 dark:text-slate-200 capitalize mb-2">{area}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-300">{skillRecommendations.suggestions[area]}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-gray-600 dark:text-slate-300">Great job! You have balanced strengths across all areas.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Course Recommendations */}
        {courseRecommendations && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="bg-teal-500 px-6 py-3">
              <h3 className="text-white font-medium">Recommended Courses</h3>
              <p className="text-white/80 text-xs mt-0.5">Based on your career match</p>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {courseRecommendations.recommended_courses.map((course, index) => (
                  <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-xl text-sm hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-4 text-center">Get Personalized Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => navigate("/skills")}
              className="group bg-gray-50 dark:bg-slate-700 rounded-xl p-4 text-center hover:bg-teal-50 dark:hover:bg-teal-900/30 transition"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-gray-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">Skill Suggestions</div>
              <div className="text-xs text-gray-400 dark:text-slate-500 mt-1">Improve your weak areas</div>
            </button>

            <button
              onClick={() => navigate("/courses")}
              className="group bg-gray-50 dark:bg-slate-700 rounded-xl p-4 text-center hover:bg-teal-50 dark:hover:bg-teal-900/30 transition"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium text-gray-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">Course Recommendations</div>
              <div className="text-xs text-gray-400 dark:text-slate-500 mt-1">Find relevant courses</div>
            </button>

            <button
              onClick={() => navigate("/streams")}
              className="group bg-gray-50 dark:bg-slate-700 rounded-xl p-4 text-center hover:bg-teal-50 dark:hover:bg-teal-900/30 transition"
            >
              <div className="text-2xl mb-2">🏫</div>
              <div className="font-medium text-gray-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">Stream Recommendations</div>
              <div className="text-xs text-gray-400 dark:text-slate-500 mt-1">Explore educational streams</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultUI;