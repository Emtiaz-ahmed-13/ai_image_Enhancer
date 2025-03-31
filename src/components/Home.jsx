
import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"

import { toast } from "react-toastify"
import { enhancedImageAPI } from "./utils/enchanceImageApi"

// Enhancement preset options
const PRESET_OPTIONS = [
  { id: 'default', name: 'Standard Enhancement' },
  { id: 'vivid', name: 'Vivid Colors' },
  { id: 'dramatic', name: 'Dramatic Contrast' },
  { id: 'soft', name: 'Soft & Warm' },
  { id: 'cool', name: 'Cool Tones' }
];

// Custom filter values for each preset
const FILTER_VALUES = {
  default: "contrast(1.2) brightness(1.05) saturate(1.3)",
  vivid: "contrast(1.3) brightness(1.1) saturate(1.5) hue-rotate(2deg)",
  dramatic: "contrast(1.5) brightness(0.9) saturate(1.3) sepia(0.1)",
  soft: "contrast(1.1) brightness(1.15) saturate(1.1) sepia(0.15)",
  cool: "contrast(1.2) brightness(1.05) saturate(1.1) hue-rotate(-10deg)"
};

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedPreset, setSelectedPreset] = useState('default')

  const uploadImageHandler = async (file) => {
    console.log("Uploading Image:", file) // Log the file
    
    try {
      setLoading(true)
      setProgress(10) // Start progress
      setUploadImage(URL.createObjectURL(file))
      setEnhancedImage(null) // Reset enhanced image when uploading a new one
      
      // Simple progress simulation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 15)
          return newProgress > 90 ? 90 : newProgress // Cap at 90% until actual completion
        })
      }, 400)
      
      // Process the image
      toast.info("Processing your image...")
      const enhancedData = await enhancedImageAPI(file)
      
      clearInterval(progressInterval) // Clear the interval
      setProgress(100) // Complete progress
      
      console.log("Enhanced Image Data:", enhancedData) // Log to inspect

      if (enhancedData) {
        // Use the custom preset filters instead
        enhancedData.cssFilter = FILTER_VALUES[selectedPreset]; 
        setEnhancedImage(enhancedData)
        toast.success("Image enhancement complete!")
      } else {
        toast.error("Failed to process image. Please try again.")
      }
    } catch (error) {
      console.error("Error in uploadImageHandler:", error)
      // The specific error message is already displayed by the API function via toast
    } finally {
      setLoading(false)
      // Reset progress after a delay
      setTimeout(() => setProgress(0), 1000)
    }
  }

  // Handle preset change
  const handlePresetChange = (preset) => {
    setSelectedPreset(preset);
    
    // If we already have an enhanced image, update its filter
    if (enhancedImage) {
      setEnhancedImage({
        ...enhancedImage,
        cssFilter: FILTER_VALUES[preset]
      });
      toast.info(`Applied "${PRESET_OPTIONS.find(p => p.id === preset).name}" filter`);
    }
  }

  return (
    <div>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      
      {/* Enhancement Presets */}
      {enhancedImage && (
        <div className="mt-6 bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30">
          <h3 className="text-center text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-3">
            Enhancement Presets
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {PRESET_OPTIONS.map(preset => (
              <button
                key={preset.id}
                onClick={() => handlePresetChange(preset.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedPreset === preset.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <ImagePreview 
        loading={loading} 
        uploaded={uploadImage} 
        enhancedImage={enhancedImage} 
        progress={progress} 
      />
    </div>
  )
}

export default Home;

