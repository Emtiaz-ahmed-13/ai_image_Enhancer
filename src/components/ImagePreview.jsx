import { toast } from "react-toastify";
import Loading from "./Loading";

/* eslint-disable react/prop-types */
const ImagePreview = ({ loading, uploaded, enhancedImage, progress = 0 }) => {
  console.log("ImagePreview props:", { loading, uploaded, enhancedImage, progress }); 

  // Get the enhancement filter from the object or use default
  const enhancementFilter = enhancedImage?.cssFilter || 
    "contrast(1.2) brightness(1.05) saturate(1.3)";
    
  // Handle the download of the enhanced image
  const handleDownload = async () => {
    if (!enhancedImage) return;
    
    try {
      toast.info("Preparing your enhanced image for download...");
      
      // Create a new canvas to apply the filter
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      // Create a new image object to load the original image
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Handle CORS issues
      
      // Wait for the image to load
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = enhancedImage.original;
      });
      
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the image on the canvas with CSS filters
      ctx.filter = enhancementFilter;
      ctx.drawImage(img, 0, 0);
      
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      
      // Create a download link
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "AI-Enhanced-Image.jpg";
      link.click();
      
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-6">
      {/* Original Image Container */}
      <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl border border-gray-700/30 hover:border-purple-400/40 w-full">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-4 relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-md">
            Orginal Image
          </h2>
          {uploaded ? (
            <img
              src={uploaded}
              alt="Uploaded"
              className="w-full h-auto object-cover rounded-lg mt-4"
              style={{ maxHeight: "500px" }}
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
          <div className="aspect-auto bg-gradient-to-br from-gray-700/30 to-gray-800/50 rounded-xl overflow-hidden relative w-full flex justify-center items-center">
            {loading ? (
              <Loading progress={progress} />
            ) : enhancedImage ? (
              <div className="relative w-full h-full">
                <img
                  src={enhancedImage.original}
                  alt="Enhanced result"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out rounded-lg"
                  style={{ 
                    filter: enhancementFilter,
                    maxHeight: "500px"
                  }}
                />
                {/* Enhancement label */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm py-1 px-2 rounded-lg text-xs text-white font-medium">
                  AI Enhanced
                </div>
                
                {/* Download button */}
                <button 
                  onClick={handleDownload}
                  className="absolute bottom-3 right-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                  title="Download enhanced image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
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

