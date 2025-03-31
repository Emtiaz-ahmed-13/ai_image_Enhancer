import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen h-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white px-6 py-8 animate-gradient overflow-y-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse-slow">
          AI Image Enhancer
        </h1>
        <p className="text-gray-300 mt-2 text-lg transition-transform hover:scale-105">
        Powered By ©Emtiaz <span className="text-purple-300 font-semibold hover:text-purple-200 cursor-pointer">©Emtiaz</span>
        </p>
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-3xl transition-all hover:shadow-3xl border border-gray-700/30">
        <Home />
      </div>

      <footer className="mt-12 text-gray-400 text-center text-sm space-y-2 pb-4">
        <p className="animate-float">
          ✨ Upload your Image and Let AI Enhance it in seconds! ✨
        </p>
        <p className="opacity-80">
          &copy; {new Date().getFullYear()} AI Image Enhancer. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;