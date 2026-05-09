import React from "react";

function StreamsUI({
  loading,
  resultData,
  streamData,
  navigate
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-400 dark:text-slate-500 text-sm">Loading streams...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
                Stream Recommendations<span className="font-semibold text-teal-500">.</span>
              </h1>
              <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
                Educational streams that match your profile
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
                Result
              </button>
            </div>
          </div>
        </div>

        {/* Information Card */}
        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 rounded-2xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-2xl">ℹ️</div>
            <div>
              <p className="text-sm font-medium text-teal-800 dark:text-teal-400">How streams are recommended</p>
              <p className="text-xs text-teal-700 dark:text-teal-300 mt-1 leading-relaxed">
                Stream recommendations are based on your aptitude test scores. Each stream has minimum score requirements 
                for different intelligence types. We match your scores against Science, Commerce, and Arts stream requirements 
                to find the best fit for you.
              </p>
            </div>
          </div>
        </div>

        {/* Stream Cards */}
        <div className="space-y-6">
          {streamData ? (
            streamData.message ? (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-12 text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-slate-200 mb-2">{streamData.message}</h3>
                <p className="text-gray-400 dark:text-slate-500 text-sm">
                  Your scores don't match any stream requirements yet.
                </p>
                <button
                  onClick={() => navigate("/skills")}
                  className="mt-4 px-4 py-2 bg-teal-500 text-white text-sm rounded-lg hover:bg-teal-600 transition"
                >
                  Improve Your Skills
                </button>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-slate-200">{streamData.stream}</h2>
                      <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">Recommended Stream</p>
                    </div>
                    <div className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-full">
                      Best Match
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">Career paths you can pursue:</p>
                    <div className="flex flex-wrap gap-2">
                      {streamData.careers && Array.isArray(streamData.careers) && streamData.careers.map((career, careerIndex) => (
                        <span
                          key={careerIndex}
                          className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-sm rounded-lg"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-12 text-center">
              <p className="text-gray-400 dark:text-slate-500">No recommendations available</p>
            </div>
          )}
        </div>

        {/* Your Scores Section */}
        {resultData && (
          <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200 mb-4">Your Aptitude Scores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.linguistic}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Linguistic</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.logical}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Logical</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.spatial}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Spatial</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.interpersonal}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Interpersonal</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.intrapersonal}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Intrapersonal</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.naturalist}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Naturalist</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.bodily}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Bodily</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">{resultData.musical}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">Musical</div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Navigation */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate("/skills")}
            className="px-4 py-2 text-sm text-gray-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
          >
            ← Skills
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="px-4 py-2 text-sm text-gray-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
          >
            Courses →
          </button>
        </div>
      </div>
    </div>
  );
}

export default StreamsUI;
