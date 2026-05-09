// import { useState, useEffect } from "react";
// import { getResult, getCourses } from "../services/recommendationService";
// import { useNavigate } from "react-router-dom";

// function Courses() {
//   const [resultData, setResultData] = useState(null);
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCourseRecommendations();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const fetchCourseRecommendations = async () => {
//     try {
//       // Get result data first
//       const resultRes = await getResult();
//       const result = resultRes.data;
      
//       if (result.message) {
//         alert("No test results found. Please take the test first.");
//         navigate("/test");
//         return;
//       }
      
//       setResultData(result);

//       // Get course recommendations
//       const courseRes = await getCourses(result.career);
//       setCourseData(courseRes.data);

//     } catch (err) {
//       console.log(err);
//       alert("Error loading course recommendations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading course recommendations...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Recommendations</h1>
//           <p className="text-gray-600">Recommended courses for your career path</p>
//         </div>

//         {/* Navigation */}
//         <div className="flex space-x-4 mb-8">
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
//           >
//             Dashboard
//           </button>
//           <button
//             onClick={() => navigate("/result")}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Results
//           </button>
//           <button
//             onClick={() => navigate("/skills")}
//             className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-200"
//           >
//             Skills
//           </button>
//           <button
//             onClick={() => navigate("/streams")}
//             className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
//           >
//             Streams
//           </button>
//         </div>

//         {/* Career Info */}
//         {resultData && (
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-8 text-white">
//             <h2 className="text-2xl font-bold mb-2">Recommended Career</h2>
//             <div className="text-3xl font-bold">{resultData.career}</div>
//             <div className="text-lg mt-2">Match: {resultData.match}%</div>
//           </div>
//         )}

//         {/* Course Recommendations */}
//         {courseData ? (
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Courses</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {courseData.recommended_courses.map((course, index) => (
//                 <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
//                   <div className="text-lg font-medium text-gray-800 mb-3">{course}</div>
//                   <div className="text-sm text-gray-600">Recommended for {resultData?.career}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-center text-gray-600">
//             <p>No course recommendations available.</p>
//           </div>
//         )}

//         {/* Additional Information */}
//         <div className="mt-8 bg-gray-50 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-gray-800 mb-2">Research</h4>
//               <p className="text-sm text-gray-600">
//                 Learn more about these courses and their prerequisites
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-gray-800 mb-2">Institutions</h4>
//               <p className="text-sm text-gray-600">
//                 Find colleges and universities offering these programs
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-gray-800 mb-2">Career Outlook</h4>
//               <p className="text-sm text-gray-600">
//                 Research job prospects and salary expectations
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-gray-800 mb-2">Skill Development</h4>
//               <p className="text-sm text-gray-600">
//                 Focus on improving weak areas identified in your assessment
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;

import { useState, useEffect } from "react";
import { getResult, getCourses } from "../services/recommendationService";
import { useNavigate } from "react-router-dom";
import CoursesUI from "../components/CoursesUI";

function Courses() {
  const [resultData, setResultData] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseRecommendations();
  }, []);

  const fetchCourseRecommendations = async () => {
    try {
      const resultRes = await getResult();
      const result = resultRes.data;
      
      if (result.message) {
        alert("No test results found. Please take test first.");
        navigate("/test");
        return;
      }
      
      setResultData(result);

      const courseRes = await getCourses(result.career);
      setCourseData(courseRes.data);

    } catch (err) {
      console.log(err);
      alert("Error loading course recommendations");
    } finally {
      setLoading(false);
    }
  };

  return <CoursesUI 
    loading={loading}
    resultData={resultData}
    courseData={courseData}
    navigate={navigate}
  />;
}

export default Courses;