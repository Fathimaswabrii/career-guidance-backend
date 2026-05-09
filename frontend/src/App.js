

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>Career Guidance</h1>

//         {/* Simple navigation */}
//         <nav>
//           <Link to="/">Login</Link> |{" "}
//           <Link to="/register">Register</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Test from "./pages/Test";
// import Result from "./pages/Result";
// import Profile from "./pages/Profile";
// import Skills from "./pages/Skills";
// import Courses from "./pages/Courses";
// import Streams from "./pages/Streams";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-50">
//         {/* Navigation Header */}
//         <nav className="bg-white shadow-md">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               <div className="flex items-center">
//                 <h1 className="text-xl font-bold text-gray-800">Career Guidance AI</h1>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
//                   Login
//                 </Link>
//                 <Link to="/register" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
//                   Register
//                 </Link>
//                 <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
//                   Dashboard
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } />
//             <Route path="/profile" element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             } />
//             <Route path="/test" element={
//               <ProtectedRoute>
//                 <Test />
//               </ProtectedRoute>
//             } />
//             <Route path="/result" element={
//               <ProtectedRoute>
//                 <Result />
//               </ProtectedRoute>
//             } />
//             <Route path="/skills" element={
//               <ProtectedRoute>
//                 <Skills />
//               </ProtectedRoute>
//             } />
//             <Route path="/courses" element={
//               <ProtectedRoute>
//                 <Courses />
//               </ProtectedRoute>
//             } />
//             <Route path="/streams" element={
//               <ProtectedRoute>
//                 <Streams />
//               </ProtectedRoute>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Test from "./pages/Test";
// import Result from "./pages/Result";
// import Profile from "./pages/Profile";
// import Skills from "./pages/Skills";
// import Courses from "./pages/Courses";
// import Streams from "./pages/Streams";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { isAuthenticated } from "./utils/token";

// // Navigation component that shows different links based on auth state
// function Navigation() {
//   const location = useLocation();
//   const authenticated = isAuthenticated();

//   // Don't show navigation on login and register pages
//   if (location.pathname === "/" || location.pathname === "/register") {
//     return null;
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/dashboard" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 CareerCompass
//               </h1>
//             </Link>
//           </div>

//           {authenticated && (
//             <div className="flex items-center space-x-4">
//               <Link 
//                 to="/dashboard" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Dashboard
//               </Link>
//               <Link 
//                 to="/profile" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Profile
//               </Link>
//               <Link 
//                 to="/test" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Aptitude Test
//               </Link>
//               <Link 
//                 to="/skills" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Skills
//               </Link>
//               <Link 
//                 to="/courses" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Courses
//               </Link>
//               <Link 
//                 to="/streams" 
//                 className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Streams
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//         <Navigation />
        
//         {/* Main Content */}
//         <main>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             } />
//             <Route path="/profile" element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             } />
//             <Route path="/test" element={
//               <ProtectedRoute>
//                 <Test />
//               </ProtectedRoute>
//             } />
//             <Route path="/result" element={
//               <ProtectedRoute>
//                 <Result />
//               </ProtectedRoute>
//             } />
//             <Route path="/skills" element={
//               <ProtectedRoute>
//                 <Skills />
//               </ProtectedRoute>
//             } />
//             <Route path="/courses" element={
//               <ProtectedRoute>
//                 <Courses />
//               </ProtectedRoute>
//             } />
//             <Route path="/streams" element={
//               <ProtectedRoute>
//                 <Streams />
//               </ProtectedRoute>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route,Link, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Courses from "./pages/Courses";
import Streams from "./pages/Streams";
import ProtectedRoute from "./components/ProtectedRoute";
import { isAuthenticated, logout } from "./utils/token";
import Intro from "./pages/Intro";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

// Navigation component that shows different links based on auth state
function Navigation() {
  const location = useLocation();
  const authenticated = isAuthenticated();
  const { isDark, toggleTheme } = useTheme();

  // Don't show navigation on login and register pages
  if (location.pathname === "/" || location.pathname === "/register") {
    return null;
  }

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-xl font-light text-gray-800 dark:text-slate-200">
              Career<span className="font-semibold text-teal-500">Compass</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          {authenticated && (
            <div className="flex items-center space-x-1">
              <Link 
                to="/dashboard" 
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Profile
              </Link>
              <Link 
                to="/test" 
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Test
              </Link>
              <Link 
                to="/skills" 
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Skills
              </Link>
              <Link 
                to="/courses" 
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Courses
              </Link>
              <Link 
                to="/streams"
                className="px-3 py-2 text-sm text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
              >
                Streams
              </Link>
              
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-900/20"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              <button
                onClick={handleLogout}
                className="ml-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
          <Navigation />
          
          {/* Main Content */}
          <main>
            
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/test" element={
                <ProtectedRoute>
                  <Test />
                </ProtectedRoute>
              } />
              <Route path="/result" element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              } />
              <Route path="/skills" element={
                <ProtectedRoute>
                  <Skills />
                </ProtectedRoute>
              } />
              <Route path="/courses" element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              } />
              <Route path="/streams" element={
                <ProtectedRoute>
                  <Streams />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;