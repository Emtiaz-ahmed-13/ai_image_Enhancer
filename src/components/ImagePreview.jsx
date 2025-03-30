import Loading from "./Loading"

/* eslint-disable react/prop-types */
const ImagePreview = (props) => {
  console.log("ImagePreview props:", props) // Log props to see the data

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      {/* Original Image Container */}
      <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl border border-gray-700/30 hover:border-purple-400/40 w-full">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-4 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-md">
            Original Image
          </h2>
          {props.uploaded ? (
            <img
              src={props.uploaded || "/placeholder.svg"}
              alt="Uploaded"
              className="w-full h-auto object-cover rounded-lg mt-4"
            />
          ) : (
            <p className="text-gray-400 mt-4">No Photo Selected</p>
          )}
        </div>
      </div>

      {/* Enhanced Image Container */}
      <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl border border-gray-700/30 hover:border-green-400/40 w-full">
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-4 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 drop-shadow-md">
            Enhanced Image
          </h2>
        </div>
        <div className="p-4 relative flex justify-center items-center">
          <div className="aspect-square bg-gradient-to-br from-gray-700/30 to-gray-800/50 rounded-xl overflow-hidden relative w-full flex justify-center items-center">
            {props.loading ? (
              <Loading />
            ) : props.enhancedImage ? (
              <img
                src={props.enhancedImage || "/placeholder.svg"}
                alt="Enhanced result"
                className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-700 ease-out rounded-lg"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center backdrop-blur-sm text-center">
                <p className="text-emerald-200 font-medium animate-pulse">No Enhancing Magic</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview

