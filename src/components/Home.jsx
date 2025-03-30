"use client"

import { useState } from "react"
import ImagePreview from "./ImagePreview"
import ImageUpload from "./ImageUpload"

import { toast } from "react-toastify"
import { enhancedImageAPI } from "./utils/enchanceImageApi"

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setEnhancedImage(null) // Reset enhanced image when uploading a new one
    setLoading(true)

    try {
      // Calling the API to enhance the image
      const enhancedData = await enhancedImageAPI(file)
      console.log("Enhanced Image Data:", enhancedData) // Log to inspect

      if (enhancedData) {
        setEnhancedImage(enhancedData)
      } else {
        toast.error("Failed to get enhanced image URL")
      }
    } catch (error) {
      console.error("Error in uploadImageHandler:", error)
      toast.error("Failed to enhance the image")
    } finally {
      setLoading(false)
    }
  }

  console.log("Enhanced Image State:", enhancedImage) // Log the enhanced image state

  return (
    <div>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview loading={loading} uploaded={uploadImage} enhancedImage={enhancedImage} />
    </div>
  )
}

export default Home

