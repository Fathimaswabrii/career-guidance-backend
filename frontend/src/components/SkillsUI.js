import React from "react";

function SkillsUI({
  loading,
  resultData,
  skillData,
  intelligenceTypes,
  topStrengths,
  getScoreColor,
  getScoreBg,
  navigate
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-400 dark:text-slate-500 text-sm">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
                Skill Development<span className="font-semibold text-teal-500">.</span>
              </h1>
              <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
                Personalized suggestions to improve your abilities
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
                onClick={() => navigate("/result")}
                className="px-4 py-2 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-600 transition"
              >
                Results
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Weak Areas & Suggestions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-teal-500 px-6 py-3">
                <h2 className="text-white font-medium">Areas to Improve</h2>
                <p className="text-white/80 text-xs mt-0.5">Focus on these skills</p>
              </div>
              
              <div className="p-6">
                {skillData && skillData.weak_areas && skillData.weak_areas.length > 0 ? (
                  <div className="space-y-4">
                    {skillData.weak_areas.map((area, index) => (
                      <div key={index} className="border-l-4 border-teal-500 bg-teal-50/30 dark:bg-teal-900/20 p-4 rounded-r-xl">
                        <h3 className="font-semibold text-gray-800 dark:text-slate-200 capitalize mb-2">{area}</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                          {skillData.suggestions[area]}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">Excellent Work!</h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">
                      You have balanced strengths across all intelligence types.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-3">Explore More</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => navigate("/courses")}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  📚 Find Courses
                </button>
                <button
                  onClick={() => navigate("/streams")}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  🎯 Explore Streams
                </button>
                <button
                  onClick={() => navigate("/test")}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-sm rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  📝 Retake Test
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Scores (REDESIGNED) */}
          <div className="space-y-6">
            {/* Top Strengths Card */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-5 text-white">
              <p className="text-xs opacity-80 mb-2">🌟 Your Top Strengths</p>
              <div className="space-y-2">
                {topStrengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xl">{strength.icon}</span>
                    <span className="flex-1 text-sm font-medium">{strength.label}</span>
                    <span className="text-lg font-bold">{strength.score}</span>
                    <span className="text-xs opacity-80">/5</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Scores Grid */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">All Intelligence Scores</h3>
                <span className="text-xs text-gray-400 dark:text-slate-500">Scale: 1-5</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {intelligenceTypes.map((type) => (
                  <div key={type.key} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                    <span className="text-lg">{type.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 dark:text-slate-400 capitalize">{type.label}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              resultData[type.key] >= 4 ? "bg-teal-500" :
                              resultData[type.key] >= 3 ? "bg-yellow-500" : "bg-red-500"
                            }`}
                            style={{ width: `${(resultData[type.key] / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${getScoreColor(resultData[type.key])}`}>
                          {resultData[type.key]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight Card */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-4">
              <div className="flex gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-xs text-indigo-700 dark:text-indigo-400 font-medium">Quick Insight</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-300 mt-0.5">
                    Your highest score is in <strong>{topStrengths[0]?.label}</strong>. 
                    Consider careers that leverage this strength!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsUI;
