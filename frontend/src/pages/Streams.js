// import { useState, useEffect } from "react";
// import { getResult, getStreams } from "../services/recommendationService";
// import { useNavigate } from "react-router-dom";

// function Streams() {
//   const [resultData, setResultData] = useState(null);
//   const [streamData, setStreamData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStreamRecommendations();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const fetchStreamRecommendations = async () => {
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

//       // Get stream recommendations
//       const streamRes = await getStreams(result);
//       setStreamData(streamRes.data);

//     } catch (err) {
//       console.log(err);
//       alert("Error loading stream recommendations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading stream recommendations...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Stream Recommendations</h1>
//           <p className="text-gray-600">Educational streams that match your aptitude profile</p>
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
//             onClick={() => navigate("/courses")}
//             className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
//           >
//             Courses
//           </button>
//         </div>

//         {/* Stream Recommendations */}
//         {streamData ? (
//           <div>
//             {streamData.message ? (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
//                 <h3 className="text-xl font-semibold text-yellow-800 mb-3">
//                   No Suitable Streams Found
//                 </h3>
//                 <p className="text-gray-700 mb-4">
//                   Based on your current scores, no educational streams match the minimum requirements.
//                 </p>
//                 <p className="text-gray-600">
//                   Consider improving your skills in different areas or explore alternative career paths.
//                 </p>
//               </div>
//             ) : (
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Streams</h2>
//                 <div className="space-y-6">
//                   {streamData.results.map((stream, index) => (
//                     <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-6">
//                       <h3 className="text-xl font-semibold text-purple-800 mb-3">
//                         {stream.stream}
//                       </h3>
//                       <div className="mb-4">
//                         <h4 className="font-medium text-gray-800 mb-2">Career Options:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {stream.careers.map((career, careerIndex) => (
//                             <span
//                               key={careerIndex}
//                               className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm"
//                             >
//                               {career}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-center text-gray-600">
//             <p>No stream recommendations available.</p>
//           </div>
//         )}

//         {/* Your Scores Reference */}
//         {resultData && (
//           <div className="mt-8 bg-gray-50 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Aptitude Scores</h3>
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

//         {/* Information */}
//         <div className="mt-8 bg-blue-50 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">About Stream Recommendations</h3>
//           <p className="text-gray-700 mb-3">
//             Stream recommendations are based on your aptitude test scores and the minimum requirements 
//             for each educational stream. Each stream has specific score requirements for different 
//             intelligence types.
//           </p>
//           <p className="text-gray-600">
//             If no streams are recommended, consider retaking the test or exploring skill development 
//             options to improve your scores in specific areas.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Streams;

import { useState, useEffect } from "react";
import { getResult, getStreams } from "../services/recommendationService";
import { useNavigate } from "react-router-dom";
import StreamsUI from "../components/StreamsUI";

function Streams() {
  const [resultData, setResultData] = useState(null);
  const [streamData, setStreamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStreamRecommendations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchStreamRecommendations = async () => {
    try {
      const resultRes = await getResult();
      const result = resultRes.data;
      
      if (result.message) {
        alert("No test results found. Please take test first.");
        navigate("/test");
        return;
      }
      
      setResultData(result);
      const streamRes = await getStreams(result);
      setStreamData(streamRes.data);

    } catch (err) {
      console.log(err);
      alert("Error loading stream recommendations");
    } finally {
      setLoading(false);
    }
  };

  return <StreamsUI 
    loading={loading}
    resultData={resultData}
    streamData={streamData}
    navigate={navigate}
  />;
}

export default Streams;