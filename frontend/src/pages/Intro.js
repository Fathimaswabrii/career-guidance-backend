// import { useNavigate } from "react-router-dom";

// function Intro() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-x-hidden">
      
//       {/* HERO SECTION */}
//       <div className="flex flex-col items-center justify-center text-center px-6 py-24">
//         <h1 className="text-5xl font-bold mb-6 animate-fade-in">
//           AI Career Guidance System
//         </h1>

//         <p className="text-lg max-w-xl opacity-90 mb-8 animate-fade-in delay-200">
//           Discover your perfect career path using Artificial Intelligence. 
//           Take aptitude tests, analyze your skills, and get personalized recommendations.
//         </p>

//         <div className="flex gap-4 animate-fade-in delay-300">
//           <button
//             onClick={() => navigate("/register")}
//             className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
//           >
//             Get Started
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-600 transition"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       {/* FEATURES SECTION */}
//       <div className="bg-white text-gray-800 py-20 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Features
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
//             <h3 className="font-bold text-lg mb-2">Aptitude Test</h3>
//             <p>Analyze your skills and interests with smart questions.</p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
//             <h3 className="font-bold text-lg mb-2">AI Prediction</h3>
//             <p>Machine learning suggests best career paths for you.</p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition">
//             <h3 className="font-bold text-lg mb-2">Stream Guidance</h3>
//             <p>Choose between Science, Commerce, or Arts confidently.</p>
//           </div>
//         </div>
//       </div>

//       {/* HOW IT WORKS */}
//       <div className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold mb-10">How It Works</h2>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="font-bold mb-2">1. Register</h3>
//             <p>Create your account</p>
//           </div>

//           <div>
//             <h3 className="font-bold mb-2">2. Take Test</h3>
//             <p>Answer aptitude questions</p>
//           </div>

//           <div>
//             <h3 className="font-bold mb-2">3. Get Results</h3>
//             <p>View career & stream recommendations</p>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER CTA */}
//       <div className="bg-black/20 text-center py-12">
//         <h2 className="text-2xl mb-4">Start Your Career Journey Today 🚀</h2>

//         <button
//           onClick={() => navigate("/register")}
//           className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:scale-105 transition"
//         >
//           Join Now
//         </button>
//       </div>

//       {/* SIMPLE ANIMATIONS */}
//       <style jsx>{`
//         .animate-fade-in {
//           animation: fadeIn 1s ease forwards;
//           opacity: 0;
//         }
//         .delay-200 {
//           animation-delay: 0.2s;
//         }
//         .delay-300 {
//           animation-delay: 0.3s;
//         }
//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Intro;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Intro() {
//   const navigate = useNavigate();
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const features = [
//     { title: "AI-Powered Career Prediction", desc: "Machine learning algorithms predict your ideal career path based on your unique profile" },
//     { title: "Smart Aptitude Assessment", desc: "Intelligent tests designed to analyze your interests, skills, and personality" },
//     { title: "Personalized Recommendations", desc: "Tailored suggestions for streams, courses, and careers based on your strengths" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-700">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//               </svg>
//             </div>
//             <h1 className="text-xl font-light text-gray-800 dark:text-slate-200">
//               Career<span className="font-semibold text-teal-500">Compass</span>
//             </h1>
//           </div>
//           <div className="hidden md:flex gap-8">
//             <a href="#features" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">Features</a>
//             <a href="#how-it-works" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">How It Works</a>
//             <a href="#testimonials" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">Testimonials</a>
//           </div>
//           <div className="flex gap-3">
//             <button 
//               onClick={() => navigate("/login")}
//               className="px-5 py-2 text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition"
//             >
//               Sign In
//             </button>
//             <button 
//               onClick={() => navigate("/register")}
//               className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <div>
//               <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 rounded-full px-4 py-1.5 mb-6">
//                 <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
//                 <span className="text-sm text-teal-600 dark:text-teal-400">AI-Based Career Guidance System</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-slate-200 mb-6 leading-tight">
//                 Find Your
//                 <span className="text-teal-500"> Perfect Career</span>
//                 <br />
//                 With AI Guidance
//               </h1>
              
//               <p className="text-gray-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
//                 An intelligent platform that helps school and college students discover their ideal career path 
//                 using Machine Learning, aptitude analysis, and personalized recommendations.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button 
//                   onClick={() => navigate("/register")}
//                   className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-semibold transition shadow-lg shadow-teal-500/25"
//                 >
//                   Start Your Journey →
//                 </button>  
//                 <button 
//                   onClick={() => navigate("/login")}
//                   className="px-8 py-3 border border-gray-300 dark:border-slate-600 hover:border-teal-400 text-gray-600 dark:text-slate-300 rounded-xl font-semibold transition"
//                 >
//                   Sign In
//                 </button>
//               </div>
              
//               {/* Stats */}
//               <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">10K+</div>
//                   <div className="text-sm text-gray-500 dark:text-slate-400">Students Guided</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">95%</div>
//                   <div className="text-sm text-gray-500 dark:text-slate-400">Match Accuracy</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">50+</div>
//                   <div className="text-sm text-gray-500 dark:text-slate-400">Career Paths</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Content - Animated Card */}
//             <div className="relative">
//               <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full"></div>
//               <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-8">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
//                     <span className="text-2xl">🤖</span>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 dark:text-slate-400 text-sm">AI Assistant</p>
//                     <p className="text-gray-800 dark:text-slate-200 font-semibold">CareerCompass Predictor</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   {features.map((feature, idx) => (
//                     <div 
//                       key={idx}
//                       className={`p-4 rounded-xl transition-all duration-500 ${
//                         idx === currentFeature 
//                           ? "bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700" 
//                           : "bg-gray-50 dark:bg-slate-700"
//                       }`}
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className={`w-2 h-2 rounded-full mt-2 transition-colors ${
//                           idx === currentFeature ? "bg-teal-500" : "bg-gray-400 dark:bg-slate-500"
//                         }`}></div>
//                         <div>
//                           <h4 className="text-gray-800 dark:text-slate-200 font-medium mb-1">{feature.title}</h4>
//                           <p className="text-gray-500 dark:text-slate-400 text-sm">{feature.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="flex justify-center gap-2 mt-6">
//                   {[0, 1, 2].map((idx) => (
//                     <div 
//                       key={idx}
//                       className={`h-1.5 rounded-full transition-all duration-300 ${
//                         idx === currentFeature ? "w-6 bg-teal-500" : "w-1.5 bg-gray-300 dark:bg-slate-600"
//                       }`}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Based on Project Documentation */}
//       <section id="features" className="py-20 px-6 bg-white dark:bg-slate-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-teal-500 font-semibold mb-2">What We Offer</p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">Complete Career Guidance Solution</h2>
//             <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
//               Everything you need to make informed career decisions - from stream selection to skill development
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { icon: "📝", title: "Registration & Profile", desc: "Create your profile with interests, skills, and education background" },
//               { icon: "🧪", title: "Aptitude & Interest Test", desc: "Smart assessment to analyze your strengths and preferences" },
//               { icon: "🎯", title: "Stream Selection", desc: "Guidance for Science, Commerce, or Arts after 10th" },
//               { icon: "📚", title: "Course Recommendation", desc: "Find suitable courses after 12th based on your profile" },
//               { icon: "🤖", title: "ML Career Prediction", desc: "Machine learning predicts your ideal career path" },
//               { icon: "📈", title: "Skill-Based Recommendations", desc: "Personalized suggestions for career improvement" },
//               { icon: "📊", title: "Interactive Dashboard", desc: "Track your progress and view analytics" },
//               { icon: "💡", title: "Match Percentage", desc: "See how well careers match your profile" },
//               { icon: "🎓", title: "Career Details", desc: "In-depth information about recommended careers" }
//             ].map((feature, idx) => (
//               <div key={idx} className="bg-gray-50 dark:bg-slate-700 border border-gray-100 dark:border-slate-600 rounded-xl p-6 hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-md transition group">
//                 <div className="text-3xl mb-4">{feature.icon}</div>
//                 <h3 className="text-gray-800 dark:text-slate-200 font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-500 dark:text-slate-400 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works - Based on Methodology */}
//       <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-teal-500 font-semibold mb-2">Simple 5-Step Process</p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">How CareerCompass Works</h2>
//             <p className="text-gray-500 dark:text-slate-400 mt-4">From registration to career discovery - we guide you every step</p>
//           </div>
          
//           <div className="grid md:grid-cols-5 gap-6">
//             {[
//               { step: "01", title: "Register", desc: "Create your account", icon: "📝" },
//               { step: "02", title: "Create Profile", desc: "Add interests & skills", icon: "👤" },
//               { step: "03", title: "Take Aptitude Test", desc: "Complete smart assessment", icon: "🧪" },
//               { step: "04", title: "ML Processing", desc: "AI analyzes your data", icon: "🤖" },
//               { step: "05", title: "Get Results", desc: "Receive recommendations", icon: "🎯" }
//             ].map((item, idx) => (
//               <div key={idx} className="relative text-center">
//                 <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
//                   {item.icon}
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
//                   {item.step}
//                 </div>
//                 <h3 className="text-gray-800 dark:text-slate-200 font-semibold text-sm mb-1">{item.title}</h3>
//                 <p className="text-gray-500 dark:text-slate-400 text-xs">{item.desc}</p>
//                 {idx < 4 && (
//                   <div className="hidden md:block absolute top-8 -right-3 text-gray-300 text-xl">→</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Problem Statement Section */}
//       <section className="py-20 px-6 bg-white dark:bg-slate-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-teal-500 font-semibold mb-2">The Challenge</p>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200 mb-4">Why Students Need Career Guidance</h2>
//               <div className="space-y-4">
//                 {[
//                   "Lack of personalized career guidance",
//                   "Limited awareness about courses and career options",
//                   "Difficulty in choosing streams after 10th",
//                   "No structured roadmap for career growth"
//                 ].map((problem, idx) => (
//                   <div key={idx} className="flex items-center gap-3">
//                     <div className="w-5 h-5 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
//                       <span className="text-red-500 dark:text-red-400 text-xs">!</span>
//                     </div>
//                     <p className="text-gray-600 dark:text-slate-300">{problem}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl p-8">
//               <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">Our Solution</p>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-4">AI-Powered Personalized Guidance</h3>
//               <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
//                 CareerCompass uses Machine Learning and rule-based logic to analyze student interests, 
//                 skills, and aptitude scores. It provides personalized recommendations for streams, 
//                 courses, careers, and skill development - helping students make confident decisions 
//                 about their future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-teal-500 font-semibold mb-2">Technology Stack</p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">Built With Modern Technologies</h2>
//             <p className="text-gray-500 dark:text-slate-400 mt-4">Combining AI, ML, and modern web development</p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
//               { name: "Django", icon: "🐍", color: "from-green-500 to-emerald-500" },
//               { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
//               { name: "Scikit-learn", icon: "🤖", color: "from-orange-500 to-red-500" },
//               { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-500" },
//               { name: "JWT", icon: "🔐", color: "from-purple-500 to-pink-500" },
//               { name: "Pandas", icon: "📊", color: "from-yellow-500 to-orange-500" },
//               { name: "NumPy", icon: "🔢", color: "from-teal-500 to-emerald-500" }
//             ].map((tech, idx) => (
//               <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center hover:shadow-md transition group">
//                 <div className="text-3xl mb-2">{tech.icon}</div>
//                 <h3 className="text-gray-800 dark:text-slate-200 font-semibold text-sm">{tech.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="py-20 px-6 bg-white dark:bg-slate-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-teal-500 font-semibold mb-2">Success Stories</p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">What Our Students Say</h2>
//             <p className="text-gray-500 dark:text-slate-400 mt-4">Join thousands of students who found their path with CareerCompass</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               { name: "Sarah Chen", role: "Computer Science Student", text: "CareerCompass helped me discover my passion for AI. The stream recommendation after 10th was spot on!", image: "👩‍💻", stream: "Science" },
//               { name: "Michael Rodriguez", role: "Commerce Graduate", text: "The course recommendations after 12th helped me choose the right path. Now I'm in my dream career!", image: "👨‍💻", stream: "Commerce" },
//               { name: "Priya Patel", role: "Arts Student", text: "I was confused about stream selection. CareerCompass's guidance made me confident about choosing Arts!", image: "👩‍🎓", stream: "Arts" },
//               { name: "James Wilson", role: "Software Engineer", text: "The skill recommendations helped me improve and land my dream job. Best career guidance platform!", image: "👨‍🎨", stream: "Science" }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="bg-gray-50 dark:bg-slate-700 border border-gray-100 dark:border-slate-600 rounded-xl p-6 hover:shadow-md transition">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white">
//                     {testimonial.image}
//                   </div>
//                   <div>
//                     <h4 className="text-gray-800 dark:text-slate-200 font-semibold">{testimonial.name}</h4>
//                     <p className="text-gray-500 dark:text-slate-400 text-sm">{testimonial.role}</p>
//                     <span className="inline-block px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-full mt-1">
//                       {testimonial.stream} Stream
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 dark:text-slate-300">"{testimonial.text}"</p>
//                 <div className="flex gap-1 mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//               Ready to Find Your Perfect Career?
//             </h2>
//             <p className="text-teal-100 mb-8">
//               Join thousands of students who discovered their ideal career path with CareerCompass
//             </p>
//             <button 
//               onClick={() => navigate("/register")}
//               className="px-8 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-lg transition"
//             >
//               Start Your Journey Today →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-6 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//               </svg>
//             </div>
//             <span className="text-gray-600 dark:text-slate-300 font-light">Career<span className="font-bold text-teal-500">Compass</span></span>
//           </div>
//           <p className="text-gray-400 dark:text-slate-500 text-sm">© 2026 AI-Based Career Guidance System. All rights reserved.</p>
//           <p className="text-gray-400 dark:text-slate-500 text-xs mt-2">Empowering students with AI-driven career guidance</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Intro;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Hi! I'm CareerBot 👋. Ask me anything about careers, streams, or courses!" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const features = [
    { title: "AI-Powered Career Prediction", desc: "Machine learning algorithms predict your ideal career path based on your unique profile" },
    { title: "Smart Aptitude Assessment", desc: "Intelligent tests designed to analyze your interests, skills, and personality" },
    { title: "Personalized Recommendations", desc: "Tailored suggestions for streams, courses, and careers based on your strengths" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes("career") || msg.includes("job")) {
      return "CareerCompass helps you find the perfect career based on your interests, skills, and aptitude! Take our AI-powered test to get personalized recommendations. 🎯";
    } else if (msg.includes("stream") || msg.includes("science") || msg.includes("commerce") || msg.includes("arts")) {
      return "We help you choose the right stream after 10th - Science, Commerce, or Arts. Each stream opens different career opportunities! 📚";
    } else if (msg.includes("course") || msg.includes("study")) {
      return "Based on your career choice, we recommend the best courses after 12th. From engineering to medicine, arts to business - we've got you covered! 🎓";
    } else if (msg.includes("test") || msg.includes("aptitude")) {
      return "Our aptitude test analyzes your strengths, interests, and personality. It takes about 15-20 minutes and gives you accurate career matches! 🧪";
    } else if (msg.includes("skill") || msg.includes("improve")) {
      return "We provide personalized skill development recommendations based on your weak areas. Focus on what matters most for your career growth! 💪";
    } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello there! 👋 Ready to discover your perfect career? Ask me anything about streams, courses, or the aptitude test!";
    } else if (msg.includes("how") && msg.includes("work")) {
      return "Simple! Register → Create Profile → Take Aptitude Test → Get AI-powered career recommendations. It's that easy! 🚀";
    } else if (msg.includes("price") || msg.includes("cost") || msg.includes("free")) {
      return "CareerCompass is completely FREE for students! No hidden charges. Start your career journey today! 🎉";
    } else {
      return "Great question! 🤔 I'd recommend taking our aptitude test to get personalized answers. Register now and discover your perfect career path! ✨";
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, { type: "user", text: userInput }]);
    setUserInput("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(userInput);
      setChatMessages(prev => [...prev, { type: "bot", text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-xl font-light text-gray-800 dark:text-slate-200">
              Career<span className="font-semibold text-teal-500">Compass</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">How It Works</a>
            <a href="#testimonials" className="text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition">Testimonials</a>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate("/login")}
              className="px-5 py-2 text-gray-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate("/register")}
              className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-teal-600 dark:text-teal-400">AI-Based Career Guidance System</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-slate-200 mb-6 leading-tight">
                Find Your
                <span className="text-teal-500"> Perfect Career</span>
                <br />
                With AI Guidance
              </h1>
              
              <p className="text-gray-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                An intelligent platform that helps school and college students discover their ideal career path 
                using Machine Learning, aptitude analysis, and personalized recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate("/register")}
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-semibold transition shadow-lg shadow-teal-500/25"
                >
                  Start Your Journey →
                </button>  
                <button 
                  onClick={() => navigate("/login")}
                  className="px-8 py-3 border border-gray-300 dark:border-slate-600 hover:border-teal-400 text-gray-600 dark:text-slate-300 rounded-xl font-semibold transition"
                >
                  Sign In
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">10K+</div>
                  <div className="text-sm text-gray-500 dark:text-slate-400">Students Guided</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">95%</div>
                  <div className="text-sm text-gray-500 dark:text-slate-400">Match Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-slate-200">50+</div>
                  <div className="text-sm text-gray-500 dark:text-slate-400">Career Paths</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Animated Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">AI Assistant</p>
                    <p className="text-gray-800 dark:text-slate-200 font-semibold">CareerCompass Predictor</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl transition-all duration-500 ${
                        idx === currentFeature 
                          ? "bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700" 
                          : "bg-gray-50 dark:bg-slate-700"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 transition-colors ${
                          idx === currentFeature ? "bg-teal-500" : "bg-gray-400 dark:bg-slate-500"
                        }`}></div>
                        <div>
                          <h4 className="text-gray-800 dark:text-slate-200 font-medium mb-1">{feature.title}</h4>
                          <p className="text-gray-500 dark:text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center gap-2 mt-6">
                  {[0, 1, 2].map((idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentFeature ? "w-6 bg-teal-500" : "w-1.5 bg-gray-300 dark:bg-slate-600"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-500 font-semibold mb-2">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">Complete Career Guidance Solution</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Everything you need to make informed career decisions - from stream selection to skill development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📝", title: "Registration & Profile", desc: "Create your profile with interests, skills, and education background" },
              { icon: "🧪", title: "Aptitude & Interest Test", desc: "Smart assessment to analyze your strengths and preferences" },
              { icon: "🎯", title: "Stream Selection", desc: "Guidance for Science, Commerce, or Arts after 10th" },
              { icon: "📚", title: "Course Recommendation", desc: "Find suitable courses after 12th based on your profile" },
              { icon: "🤖", title: "ML Career Prediction", desc: "Machine learning predicts your ideal career path" },
              { icon: "📈", title: "Skill-Based Recommendations", desc: "Personalized suggestions for career improvement" },
              { icon: "📊", title: "Interactive Dashboard", desc: "Track your progress and view analytics" },
              { icon: "💡", title: "Match Percentage", desc: "See how well careers match your profile" },
              { icon: "🎓", title: "Career Details", desc: "In-depth information about recommended careers" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-slate-700 border border-gray-100 dark:border-slate-600 rounded-xl p-6 hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-md transition group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-gray-800 dark:text-slate-200 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-500 font-semibold mb-2">Simple 5-Step Process</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">How CareerCompass Works</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-4">From registration to career discovery - we guide you every step</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Register", desc: "Create your account", icon: "📝" },
              { step: "02", title: "Create Profile", desc: "Add interests & skills", icon: "👤" },
              { step: "03", title: "Take Aptitude Test", desc: "Complete smart assessment", icon: "🧪" },
              { step: "04", title: "ML Processing", desc: "AI analyzes your data", icon: "🤖" },
              { step: "05", title: "Get Results", desc: "Receive recommendations", icon: "🎯" }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-gray-800 dark:text-slate-200 font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-xs">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-gray-300 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-500 font-semibold mb-2">The Challenge</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200 mb-4">Why Students Need Career Guidance</h2>
              <div className="space-y-4">
                {[
                  "Lack of personalized career guidance",
                  "Limited awareness about courses and career options",
                  "Difficulty in choosing streams after 10th",
                  "No structured roadmap for career growth"
                ].map((problem, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <span className="text-red-500 dark:text-red-400 text-xs">!</span>
                    </div>
                    <p className="text-gray-600 dark:text-slate-300">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl p-8">
              <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">Our Solution</p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-4">AI-Powered Personalized Guidance</h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                CareerCompass uses Machine Learning and rule-based logic to analyze student interests, 
                skills, and aptitude scores. It provides personalized recommendations for streams, 
                courses, careers, and skill development - helping students make confident decisions 
                about their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-500 font-semibold mb-2">Technology Stack</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">Built With Modern Technologies</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-4">Combining AI, ML, and modern web development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
              { name: "Django", icon: "🐍", color: "from-green-500 to-emerald-500" },
              { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
              { name: "Scikit-learn", icon: "🤖", color: "from-orange-500 to-red-500" },
              { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-500" },
              { name: "JWT", icon: "🔐", color: "from-purple-500 to-pink-500" },
              { name: "Pandas", icon: "📊", color: "from-yellow-500 to-orange-500" },
              { name: "NumPy", icon: "🔢", color: "from-teal-500 to-emerald-500" }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center hover:shadow-md transition group">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="text-gray-800 dark:text-slate-200 font-semibold text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-500 font-semibold mb-2">Success Stories</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-200">What Our Students Say</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-4">Join thousands of students who found their path with CareerCompass</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Sarah Chen", role: "Computer Science Student", text: "CareerCompass helped me discover my passion for AI. The stream recommendation after 10th was spot on!", image: "👩‍💻", stream: "Science" },
              { name: "Michael Rodriguez", role: "Commerce Graduate", text: "The course recommendations after 12th helped me choose the right path. Now I'm in my dream career!", image: "👨‍💻", stream: "Commerce" },
              { name: "Priya Patel", role: "Arts Student", text: "I was confused about stream selection. CareerCompass's guidance made me confident about choosing Arts!", image: "👩‍🎓", stream: "Arts" },
              { name: "James Wilson", role: "Software Engineer", text: "The skill recommendations helped me improve and land my dream job. Best career guidance platform!", image: "👨‍🎨", stream: "Science" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-slate-700 border border-gray-100 dark:border-slate-600 rounded-xl p-6 hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-slate-200 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">{testimonial.role}</p>
                    <span className="inline-block px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs rounded-full mt-1">
                      {testimonial.stream} Stream
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-slate-300">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Career?
            </h2>
            <p className="text-teal-100 mb-8">
              Join thousands of students who discovered their ideal career path with CareerCompass
            </p>
            <button 
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Start Your Journey Today →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-gray-600 dark:text-slate-300 font-light">Career<span className="font-bold text-teal-500">Compass</span></span>
          </div>
          <p className="text-gray-400 dark:text-slate-500 text-sm">© 2026 AI-Based Career Guidance System. All rights reserved.</p>
          <p className="text-gray-400 dark:text-slate-500 text-xs mt-2">Empowering students with AI-driven career guidance</p>
        </div>
      </footer>

      {/* CareerBot Chat Widget */}
      <>
        {/* Chat Button */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 group"
          >
            <div className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </div>
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden animate-slide-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">CareerBot</h3>
                  <p className="text-white/70 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-900/50">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.type === "user"
                        ? "bg-teal-500 text-white rounded-br-none"
                        : "bg-white dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about careers, streams, courses..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-slate-200"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400 dark:text-slate-500 mt-2 text-center">
                💡 Ask about careers, streams, courses, or the aptitude test!
              </p>
            </div>
          </div>
        )}
      </>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Intro;