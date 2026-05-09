import React from "react";

function ProfileUI({
  loading,
  profile,
  isEditing,
  educationOptions,
  interestOptions,  
  skillOptions,
  handleSubmit,
  handleInterestChange,
  handleSkillChange,
  navigate,
  setProfile
}) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-teal-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-500 dark:text-slate-400">Loading profile...</p>
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
            {isEditing ? "Edit Profile" : "Create Profile"}
            <span className="font-semibold text-teal-500">.</span>
          </h1>
          <p className="text-gray-400 dark:text-slate-500 text-sm mt-1">
            Tell us about yourself to get better career recommendations
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
            
            {/* Basic Info Section */}
            <div className="p-6 border-b border-gray-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                <h2 className="text-base font-medium text-gray-800 dark:text-slate-200">Basic Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-900 dark:text-slate-200 placeholder-gray-500 dark:placeholder-slate-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Age *</label>
                    <input
                      type="number"
                      value={profile.age}
                      onChange={(e) => setProfile({...profile, age: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-900 dark:text-slate-200 placeholder-gray-500 dark:placeholder-slate-400"
                      placeholder="Your age"
                      min="15"
                      max="60"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 dark:text-slate-400 mb-1">Education Level *</label>
                    <select
                      value={profile.education_level}
                      onChange={(e) => setProfile({...profile, education_level: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-900 dark:text-slate-200"
                      required
                    >
                      <option value="">Select level</option>
                      {educationOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="p-6 border-b border-gray-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                <h2 className="text-base font-medium text-gray-800 dark:text-slate-200">Interests</h2>
                <span className="text-xs text-gray-400 dark:text-slate-500 ml-2">(Select all that apply)</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {interestOptions.map(interest => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      profile?.interests && profile.interests.includes(interest)
                        ? "bg-teal-500 text-white shadow-sm"
                        : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-6 border-b border-gray-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
                <h2 className="text-base font-medium text-gray-800 dark:text-slate-200">Skills</h2>
                <span className="text-xs text-gray-400 dark:text-slate-500 ml-2">(Select all that apply)</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillChange(skill)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      profile?.skills && profile.skills.includes(skill)
                        ? "bg-teal-500 text-white shadow-sm"
                        : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 bg-gray-50 dark:bg-slate-700 flex gap-3">
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 transition-colors"
              >
                {isEditing ? "Update Profile" : "Save Profile"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="px-6 py-2.5 bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-xl font-medium border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Optional: Preview Section */}
        {((profile.interests && profile.interests.length > 0) || (profile.skills && profile.skills.length > 0)) && (
          <div className="mt-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl text-center">
            <p className="text-xs text-gray-400 dark:text-slate-500">
              {(profile.interests ? profile.interests.length : 0)} interests • {(profile.skills ? profile.skills.length : 0)} skills selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUI;
