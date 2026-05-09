// import { useState, useEffect } from "react";
// import { getResult, getSkills } from "../services/recommendationService";
// import { useNavigate } from "react-router-dom";

// function Skills() {
//   const [resultData, setResultData] = useState(null);
//   const [skillData, setSkillData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchSkillRecommendations();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const fetchSkillRecommendations = async () => {
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

//       // Get skill recommendations
//       const skillRes = await getSkills(result);
//       setSkillData(skillRes.data);

//     } catch (err) {
//       console.log(err);
//       alert("Error loading skill recommendations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading skill recommendations...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Skill Development Recommendations</h1>
//           <p className="text-gray-600">Personalized suggestions to improve your abilities</p>
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
//             onClick={() => navigate("/courses")}
//             className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
//           >
//             Courses
//           </button>
//           <button
//             onClick={() => navigate("/streams")}
//             className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
//           >
//             Streams
//           </button>
//         </div>

//         {/* Skill Recommendations */}
//         {skillData ? (
//           <div>
//             {skillData.weak_areas && skillData.weak_areas.length > 0 ? (
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Areas to Improve</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {skillData.weak_areas.map((area, index) => (
//                     <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
//                       <h3 className="text-lg font-semibold text-red-800 capitalize mb-3">
//                         {area}
//                       </h3>
//                       <p className="text-gray-700">{skillData.suggestions[area]}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
//                 <h3 className="text-xl font-semibold text-green-800 mb-3">
//                   Excellent Work!
//                 </h3>
//                 <p className="text-gray-700">
//                   You have balanced strengths across all intelligence types. Keep up the great work!
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-center text-gray-600">
//             <p>No skill recommendations available.</p>
//           </div>
//         )}

//         {/* Current Scores Reference */}
//         {resultData && (
//           <div className="mt-8 bg-gray-50 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Current Scores</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">{resultData.linguistic}</div>
//                 <div className="text-sm text-gray-600">Linguistic</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-600">{resultData.logical}</div>
//                 <div className="text-sm text-gray-600">Logical</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-yellow-600">{resultData.spatial}</div>
//                 <div className="text-sm text-gray-600">Spatial</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-red-600">{resultData.interpersonal}</div>
//                 <div className="text-sm text-gray-600">Interpersonal</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-purple-600">{resultData.intrapersonal}</div>
//                 <div className="text-sm text-gray-600">Intrapersonal</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-cyan-600">{resultData.naturalist}</div>
//                 <div className="text-sm text-gray-600">Naturalist</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-orange-600">{resultData.bodily}</div>
//                 <div className="text-sm text-gray-600">Bodily</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-pink-600">{resultData.musical}</div>
//                 <div className="text-sm text-gray-600">Musical</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Skills;

import { useState, useEffect } from "react";
import { getResult, getSkills } from "../services/recommendationService";
import { useNavigate } from "react-router-dom";
import SkillsUI from "../components/SkillsUI";

function Skills() {
  const [resultData, setResultData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSkillRecommendations();
  }, []);

  const fetchSkillRecommendations = async () => {
    try {
      const resultRes = await getResult();
      const result = resultRes.data;
      
      if (result.message) {
        alert("No test results found. Please take test first.");
        navigate("/test");
        return;
      }
      
      setResultData(result);
      const skillRes = await getSkills(result);
      setSkillData(skillRes.data);

    } catch (err) {
      console.log(err);
      alert("Error loading skill recommendations");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 4) return "text-teal-600";
    if (score >= 3) return "text-yellow-600";
    return "text-red-500";
  };

  const getScoreBg = (score) => {
    if (score >= 4) return "bg-teal-50 border-teal-200";
    if (score >= 3) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const intelligenceTypes = resultData ? [
    { key: "linguistic", label: "Linguistic", icon: "📖", color: "blue" },
    { key: "logical", label: "Logical", icon: "🧮", color: "green" },
    { key: "spatial", label: "Spatial", icon: "🎨", color: "purple" },
    { key: "interpersonal", label: "Interpersonal", icon: "🤝", color: "pink" },
    { key: "intrapersonal", label: "Intrapersonal", icon: "🧠", color: "orange" },
    { key: "naturalist", label: "Naturalist", icon: "🌿", color: "emerald" },
    { key: "bodily", label: "Bodily", icon: "💪", color: "indigo" },
    { key: "musical", label: "Musical", icon: "🎵", color: "rose" }
  ] : [];

  // Find top 3 strengths
  const topStrengths = resultData ? Object.entries(resultData)
    .filter(([key]) => key !== "career" && key !== "match")
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => ({
      label: intelligenceTypes.find(t => t.key === key)?.label || key,
      score,
      icon: intelligenceTypes.find(t => t.key === key)?.icon
    })) : [];

  return <SkillsUI 
    loading={loading}
    resultData={resultData}
    skillData={skillData}
    intelligenceTypes={intelligenceTypes}
    topStrengths={topStrengths}
    getScoreColor={getScoreColor}
    getScoreBg={getScoreBg}
    navigate={navigate}
  />;
}

export default Skills;