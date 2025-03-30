const ImagePreview = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* Original Image Container */}
      <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl border border-gray-700/30 hover:border-purple-400/40">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-md">
            Original Image
          </h2>
        </div>
        
        <div className="p-4 relative">
          <div className="aspect-square bg-gray-700/30 rounded-xl overflow-hidden animate-pulse-slow">
            {/* Empty State */}
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 text-gray-400 group-hover:text-purple-300 transition-colors">
              <svg 
                className="w-16 h-16 animate-float" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-medium text-lg">Select an Image</p>
            </div>
            
            {/* Image Preview */}
            <img 
              src="" 
              alt="Original upload" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 ease-out"
            />
          </div>
          
          {/* Comparison Badge */}
          <div className="absolute top-4 right-4 bg-purple-500/20 px-3 py-1 rounded-full text-sm text-purple-200 backdrop-blur-sm">
            BEFORE
          </div>
        </div>
        
        {/* Animated Border Elements */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] group-hover:animate-border-gradient transition-all" />
      </div>

      {/* Enhanced Image Container */}
      <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl border border-gray-700/30 hover:border-green-400/40">
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 drop-shadow-md">
              Enhanced Image
            </h2>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-green-400 to-emerald-500" />
            </span>
          </div>
        </div>
        
        <div className="p-4 relative">
          <div className="aspect-square bg-gradient-to-br from-gray-700/30 to-gray-800/50 rounded-xl overflow-hidden animate-pulse-slow relative">
            {/* Processing Overlay */}
            <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="animate-spin-slow mx-auto text-emerald-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-emerald-200 font-medium animate-pulse">Enhancing Magic...</p>
              </div>
            </div>
            
            {/* Enhanced Image */}
            <img 
              src="" 
              alt="Enhanced result" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 ease-out"
            />
          </div>
          
          {/* Quality Badge */}
          <div className="absolute top-4 right-4 bg-emerald-500/20 px-3 py-1 rounded-full text-sm text-emerald-200 backdrop-blur-sm flex items-center gap-1">
            <span className="text-emerald-400">★</span> HD QUALITY
          </div>
        </div>
        
        {/* Download Button */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg font-semibold text-sm text-gray-900 hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-emerald-500/20">
            <svg 
              className="w-5 h-5 animate-bounce-slow" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </button>
        </div>

        {/* Animated Border Elements */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent [mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] group-hover:animate-border-gradient transition-all" />
        
        {/* Result Badge */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500 to-green-500 text-xs font-bold px-3 py-1 rounded-full animate-trophy-glow">
          🏆 BEST RESULT
        </div>
      </div>
    </div>
  )
}

export default ImagePreview;