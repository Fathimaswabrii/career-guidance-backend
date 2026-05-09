import React from "react";

function TestUI({
  questions,
  answers,
  currentIndex,
  progress,
  handleChange,
  handleSubmit,
  setCurrentIndex
}) {
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-400 dark:text-slate-500 text-sm">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-800 dark:text-slate-200">
            Aptitude Test<span className="font-semibold text-teal-500">.</span>
          </h1>
          <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
            Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree)
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 dark:text-slate-400">Your Progress</span>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
              {Object.keys(answers).length}/{questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
            <div 
              className="bg-teal-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {progress === 100 && (
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">✓ All questions answered!</p>
          )}
        </div>

        {/* Question Card - Single Question View */}
        {currentIndex < questions.length && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="bg-teal-500 px-6 py-3">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-medium">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                {answers[questions[currentIndex].id] && (
                  <span className="text-white text-xs bg-white/20 px-2 py-1 rounded-full">
                    Answered
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 font-medium">Q{currentIndex + 1}.</span>
                  <p className="text-gray-800 dark:text-slate-200 font-medium leading-relaxed">
                    {questions[currentIndex].question}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 text-xs rounded-full">
                  {questions[currentIndex].category}
                </span>
              </div>
            </div>

            {/* Rating Options */}
            <div className="space-y-2">
              {[
                { value: 1, label: "Strongly Disagree", emoji: "😞" },
                { value: 2, label: "Disagree", emoji: "😕" },
                { value: 3, label: "Neutral", emoji: "😐" },
                { value: 4, label: "Agree", emoji: "🙂" },
                { value: 5, label: "Strongly Agree", emoji: "😊" }
              ].map(option => (
                <label 
                  key={option.value}
                  className={`flex items-center p-3 rounded-xl border-2 transition-all cursor-pointer ${
                    answers[questions[currentIndex].id] === option.value
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-900/30"
                      : "border-gray-100 dark:border-slate-600 hover:border-gray-200 dark:hover:border-slate-500 bg-white dark:bg-slate-800"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questions[currentIndex].id}`}
                    value={option.value}
                    checked={answers[questions[currentIndex].id] === option.value}
                    onChange={() => handleChange(questions[currentIndex].id, option.value)}
                    className="w-4 h-4 text-teal-500 focus:ring-teal-500"
                  />
                  <span className="ml-3 text-gray-700 dark:text-slate-300 text-sm flex-1">{option.label}</span>
                  <span className="text-xl">{option.emoji}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              currentIndex === 0
                ? "bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-slate-500 cursor-not-allowed"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-600 hover:border-teal-300 dark:hover:border-teal-600"
            }`}
          >
            ← Previous
          </button>
          
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="flex-1 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition-all"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
              className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                Object.keys(answers).length === questions.length
                  ? "bg-teal-500 text-white hover:bg-teal-600"
                  : "bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-slate-500 cursor-not-allowed"
              }`}
            >
              {Object.keys(answers).length === questions.length 
                ? "✓ Submit Test" 
                : `Answer ${questions.length - Object.keys(answers).length} more`
              }
            </button>
          )}
        </div>

        {/* Progress Indicator Dots */}
        <div className="flex justify-center gap-1 mt-6">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-6 bg-teal-500"
                  : answers[questions[idx]?.id]
                  ? "w-2 bg-teal-300"
                  : "w-2 bg-gray-300 dark:bg-slate-600"
              }`}
            />
          ))}
        </div>

        {/* Summary Card (when all answered) */}
        {Object.keys(answers).length === questions.length && (
          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/30 rounded-xl text-center">
            <p className="text-sm text-teal-700 dark:text-teal-300">
              ✓ All questions answered! Ready to submit your test.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestUI;
