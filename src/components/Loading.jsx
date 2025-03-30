const Loading = () => {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <div className="w-10 h-10 border-4 border-t-transparent border-emerald-300 rounded-full animate-spin"></div>
        <p className="text-emerald-200 font-medium mt-2 animate-pulse">Enhancing...</p>
      </div>
    );
  };
export default Loading;  