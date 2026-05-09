// import { useEffect, useState } from "react";
// import { getQuestions, submitTest } from "../services/testService";
// import { useNavigate } from "react-router-dom";

// function Test() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const navigate = useNavigate();

//  useEffect(() => {
//   getQuestions()
//     .then(res => {
//       console.log("QUESTIONS API:", res.data);  // 👈 ADD THIS
//       setQuestions(res.data);
//     })
//     .catch(err => {
//       console.log("ERROR:", err);  // 👈 ADD THIS
//     });
// }, []);

//   const handleChange = (id, value) => {
//     setAnswers({
//       ...answers,
//       [id]: Number(value)   // important
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Check if all questions are answered
//       if (Object.keys(answers).length < questions.length) {
//         alert(`Please answer all ${questions.length} questions before submitting!`);
//         return;
//       }

//       // Check if any answer is invalid
//       const invalidAnswers = Object.entries(answers).filter(([id, score]) => 
//         !score || score < 1 || score > 5
//       );
      
//       if (invalidAnswers.length > 0) {
//         alert("Please enter valid scores (1-5) for all questions!");
//         return;
//       }

//       // Convert answers object to array format expected by backend
//       const answersArray = Object.entries(answers).map(([question_id, score]) => ({
//         question_id: parseInt(question_id),
//         score: parseInt(score)
//       }));

//       await submitTest({ answers: answersArray });

//       alert("Test submitted successfully!");

//       // redirect to result
//       navigate("/result");

//     } catch (err) {
//       console.log(err);
//       alert("Error submitting test");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Aptitude Test</h1>
//           <p className="text-gray-600 mb-4">
//             Please rate each statement based on how well it describes you
//           </p>
          
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
//             <div 
//               className="bg-blue-600 h-3 rounded-full transition-all duration-300"
//               style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-600">
//             Progress: {Object.keys(answers).length}/{questions.length} questions answered
//           </p>
//         </div>

//         {/* Questions */}
//         <div className="space-y-6 mb-8">
//           {questions.map(q => (
//             <div 
//               key={q.id} 
//               className={`border rounded-lg p-6 transition-all duration-200 ${
//                 answers[q.id] 
//                   ? "border-green-500 bg-green-50" 
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   Question {q.id}
//                 </h3>
//                 <p className="text-gray-700 mb-2">{q.question}</p>
//                 <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
//                   {q.category}
//                 </span>
//               </div>

//               {/* Radio Button Options */}
//               <div className="space-y-2">
//                 {[
//                   { value: 1, label: "Strongly Disagree", color: "red" },
//                   { value: 2, label: "Disagree", color: "orange" },
//                   { value: 3, label: "Neutral", color: "yellow" },
//                   { value: 4, label: "Agree", color: "green" },
//                   { value: 5, label: "Strongly Agree", color: "emerald" }
//                 ].map(option => (
//                   <label 
//                     key={option.value}
//                     className="flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:bg-gray-50"
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${q.id}`}
//                       value={option.value}
//                       checked={answers[q.id] === option.value}
//                       onChange={() => handleChange(q.id, option.value)}
//                       className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                     />
//                     <span className="ml-3 text-gray-700">{option.label}</span>
//                   </label>
//                 ))}
//               </div>

//               {answers[q.id] && (
//                 <div className="mt-3 p-2 bg-green-100 rounded text-green-800 text-sm">
//                   Your response: {answers[q.id] === 1 ? "Strongly Disagree" : 
//                                 answers[q.id] === 2 ? "Disagree" :
//                                 answers[q.id] === 3 ? "Neutral" :
//                                 answers[q.id] === 4 ? "Agree" : "Strongly Agree"}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button 
//             onClick={handleSubmit}
//             disabled={Object.keys(answers).length !== questions.length}
//             className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
//               Object.keys(answers).length === questions.length
//                 ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             {Object.keys(answers).length === questions.length 
//               ? "Submit Test" 
//               : `Answer All Questions (${Object.keys(answers).length}/${questions.length})`
//             }
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

import { useEffect, useState } from "react";
import { getQuestions, submitTest } from "../services/testService";
import { useNavigate } from "react-router-dom";
import TestUI from "../components/TestUI";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestions()
      .then(res => {
        console.log("QUESTIONS API:", res.data);
        setQuestions(res.data);
      })
      .catch(err => {
        console.log("ERROR:", err);
      });
  }, []);

  const handleChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: Number(value)
    });
  };

  const handleSubmit = async () => {
    try {
      if (Object.keys(answers).length < questions.length) {
        alert(`Please answer all ${questions.length} questions before submitting!`);
        return;
      }

      const invalidAnswers = Object.entries(answers).filter(([id, score]) => 
        !score || score < 1 || score > 5
      );
      
      if (invalidAnswers.length > 0) {
        alert("Please enter valid scores (1-5) for all questions!");
        return;
      }

      const answersArray = Object.entries(answers).map(([question_id, score]) =>({
        question_id: parseInt(question_id),
        score: parseInt(score)
      }));

      await submitTest({ answers: answersArray });

      alert("Test submitted successfully!");
      navigate("/result");

    } catch (err) {
      console.log(err);
      alert("Error submitting test");
    }
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return <TestUI 
    questions={questions}
    answers={answers}
    currentIndex={currentIndex}
    progress={progress}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    setCurrentIndex={setCurrentIndex}
  />;
}

export default Test;