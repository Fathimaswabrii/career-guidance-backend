import { useEffect, useState } from "react";
import { getResult, getSkills, getCourses } from "../services/recommendationService";
import { useNavigate } from "react-router-dom";
import ResultUI from "../components/ResultUI";

function Result() {
  const [data, setData] = useState(null);
  const [skillRecommendations, setSkillRecommendations] = useState(null);
  const [courseRecommendations, setCourseRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResultData();
  }, []);

  const fetchResultData = async () => {
    try {
      // Get basic result
      const resultRes = await getResult();
      const resultData = resultRes.data;
      
      if (resultData.message) {
        alert("No test results found. Please take test first.");
        return;
      }
      
      setData(resultData);

      // Get skill recommendations
      try {
        const skillRes = await getSkills(resultData);
        setSkillRecommendations(skillRes.data);
      } catch (err) {
        console.log("Skill recommendations not available");
      }

      // Get course recommendations
      try {
        const courseRes = await getCourses(resultData.career);
        setCourseRecommendations(courseRes.data);
      } catch (err) {
        console.log("Course recommendations not available");
      }

    } catch (err) {
      console.log(err);
      alert("Error loading results");
    } finally {
      setLoading(false);
    }
  };

  // Prepare chart data
  const scoreData = data ? [
    { name: 'Linguistic', score: data.linguistic, fill: '#3B82F6' },
    { name: 'Logical', score: data.logical, fill: '#10B981' },
    { name: 'Spatial', score: data.spatial, fill: '#F59E0B' },
    { name: 'Interpersonal', score: data.interpersonal, fill: '#EF4444' },
    { name: 'Intrapersonal', score: data.intrapersonal, fill: '#8B5CF6' },
    { name: 'Naturalist', score: data.naturalist, fill: '#06B6D4' },
    { name: 'Bodily', score: data.bodily, fill: '#F97316' },
    { name: 'Musical', score: data.musical, fill: '#EC4899' }
  ] : [];

  const pieData = scoreData.filter(item => item.score > 0);

  const getMatchColor = (match) => {
    if (match >= 70) return 'text-green-600';
    if (match >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMatchMessage = (match) => {
    if (match >= 70) return 'Excellent Match!';
    if (match >= 40) return 'Good Match';
    return 'Consider Exploring More Options';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading your results...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Results Found</h2>
          <p className="text-gray-600 mb-6">
            Please take the aptitude test to see your career recommendations
          </p>
          <button
            onClick={() => window.location.href = "/test"}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Take Test
          </button>
        </div>
      </div>
    );
  }

  return <ResultUI 
    loading={loading}
    data={data}
    skillRecommendations={skillRecommendations}
    courseRecommendations={courseRecommendations}
    scoreData={scoreData}
    pieData={pieData}
    getMatchColor={getMatchColor}
    getMatchMessage={getMatchMessage}
    navigate={navigate}
  />;
}

export default Result;