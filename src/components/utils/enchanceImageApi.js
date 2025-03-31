/* eslint-disable no-undef */
import { toast } from "react-toastify";

// Enhancement presets for different image types
const ENHANCEMENT_PRESETS = {
  default: {
    contrast: 1.2,
    brightness: 1.05,
    saturation: 1.3,
  },
  portrait: {
    contrast: 1.1,
    brightness: 1.1,
    saturation: 1.2,
  },
  landscape: {
    contrast: 1.3,
    brightness: 1.1,
    saturation: 1.4,
  },
};

export const enhancedImageAPI = async (file) => {
  console.log("Processing file:", file);
  try {
    // Process the image using client-side techniques only
    toast.info("Processing your image...");

    // Create object URL for the original image
    const originalUrl = URL.createObjectURL(file);
    console.log("Original Image URL:", originalUrl);

    // Apply enhancement directly via CSS filters
    const enhancedData = {
      original: originalUrl,
      enhanced: originalUrl,
      cssFilter: generateEnhancementFilter("default"),
    };

    return enhancedData;
  } catch (error) {
    console.error("Error in enhancedImageAPI:", error);
    toast.error(
      `Failed to process the image: ${error.message || "Unknown error"}`
    );
    return null;
  }
};

// Generate CSS filter string based on preset
const generateEnhancementFilter = (presetName = "default") => {
  const preset = ENHANCEMENT_PRESETS[presetName] || ENHANCEMENT_PRESETS.default;

  return `contrast(${preset.contrast}) 
          brightness(${preset.brightness}) 
          saturate(${preset.saturation})`;
};
