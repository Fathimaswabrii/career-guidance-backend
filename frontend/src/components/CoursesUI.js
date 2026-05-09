import React from "react";

function CoursesUI({
  loading,
  resultData,
  courseData,
  navigate
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-400 dark:text-slate-500 text-sm">Loading courses...</p>
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
                Course Recommendations<span className="font-semibold text-teal-500">.</span>
              </h1>
              <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
                Personalized courses for your career path
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
              <button
                onClick={() => navigate("/skills")}
                className="px-4 py-2 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-600 transition"
              >
                Skills
              </button>
            </div>
          </div>
        </div>

        {/* Career Highlight Card */}
        {resultData && (
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Your Recommended Career</p>
                <h2 className="text-2xl font-bold text-white">{resultData.career}</h2>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-2">
                <span className="text-white font-medium">{resultData.match}% Match</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Course List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-teal-500 px-6 py-3">
                <h2 className="text-white font-medium">Recommended Courses</h2>
                <p className="text-white/80 text-xs mt-0.5">Based on your career match</p>
              </div>
              
              <div className="p-6">
                {courseData && courseData.recommended_courses && courseData.recommended_courses.length > 0 ? (
                  <div className="space-y-3">
                    {courseData.recommended_courses.map((course, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 transition group">
                        <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition">
                          <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 dark:text-slate-200">{course}</h3>
                          <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                            Recommended for {resultData?.career}
                          </p>
                        </div>
                        <button className="text-teal-500 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.07 0l-.548.547A3.374 3.374 0 0014.18 469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">No course recommendations available.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Next Steps */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-800 dark:bg-slate-900 px-6 py-3">
                <h2 className="text-white font-medium">Next Steps</h2>
                <p className="text-white/60 text-xs mt-0.5">Your action plan</p>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">Research</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      Learn more about these courses and their prerequisites
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">Institutions</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      Find colleges and universities offering these programs
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">Career Outlook</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      Research job prospects and salary expectations
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 dark:text-orange-400 text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">Skill Development</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                      Focus on improving weak areas identified in your assessment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tip Card */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl p-4">
              <div className="flex gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">Pro Tip</p>
                  <p className="text-xs text-teal-600 dark:text-teal-300 mt-0.5">
                    Start with the top recommended course - it's most aligned with your career goals!
                  </p>
                </div>
              </div>
            </div>

            {/* Related Link */}
            <button
              onClick={() => navigate("/skills")}
              className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 text-left hover:shadow-md transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-slate-200">Need skill improvement?</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Check skill recommendations →</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesUI;
