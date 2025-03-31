/* eslint-disable react/prop-types */
const Loading = ({ progress = 0 }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 w-full">
      <div className="w-full max-w-xs bg-gray-700/50 rounded-full h-2.5 mb-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="w-10 h-10 border-4 border-t-transparent border-emerald-300 rounded-full animate-spin"></div>
      <p className="text-emerald-200 font-medium mt-2 animate-pulse">
        {progress > 0 ? `Enhancing... ${progress}%` : 'Enhancing...'}
      </p>
    </div>
  );
};
export default Loading;  