/* eslint-disable no-undef */
import axios from "axios";
import { toast } from "react-toastify";

API_KEY='wxbl5ou3d0x03rx93'
BASE_URL='https://techhk.aoscdn.com/'


console.log("API Base URL:", BASE_URL);

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded with task ID:", taskId);

        const enhancedImageUrl = await pollForEnhancedImage(taskId);
        console.log("Enhanced Image URL:", enhancedImageUrl);

        return enhancedImageUrl;  
    } catch (error) {
        console.error("Error in enhancedImageAPI:", error);
        toast.error("Failed to enhance the image");
        return null;
    }
};

// ✅ Upload Image and Get Task ID
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });

    if (!data?.data?.taskId) {
        throw new Error("Failed to upload image! Please try again.");
    }

    return data.data.taskId;
};

// ✅ Fetch Enhanced Image
const fetchEnhancedImage = async (taskId) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
            headers: { "X-API-KEY": API_KEY },
        });

        console.log("Fetch Enhanced Image API Response:", data);

        return { image: data?.data?.image || null, status: data?.data?.status || "processing" };
    } catch (error) {
        console.error("Error fetching enhanced image:", error);
        return { image: null, status: "error" };
    }
};

// ✅ Poll for Enhanced Image
const pollForEnhancedImage = async (taskId, retries = 0) => {
    if (retries >= 20) {
        throw new Error("Failed to enhance the image after 20 retries! Please try again.");
    }

    const result = await fetchEnhancedImage(taskId);
    console.log(`Polling attempt ${retries + 1}:`, result);

    if (!result.image) {
        console.log("Image still processing...");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2s before retrying
        return pollForEnhancedImage(taskId, retries + 1);
    }

    console.log("Final Enhanced Image URL:", result.image);
    return result.image;  
};