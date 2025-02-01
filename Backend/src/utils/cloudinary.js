import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;
  try {
    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File is uploaded on Cloudinary:", response.url);

    // Remove the local file after successful upload
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      } else {
        console.log("Local file deleted successfully.");
      }
    });

    return response;
  } catch (error) {
    // If an error occurs during upload, remove the file (if exists) and rethrow the error
    if (fs.existsSync(localFilePath)) {
      try {
        fs.unlinkSync(localFilePath);
        console.log("Local file deleted after failed upload.");
      } catch (unlinkError) {
        console.error("Error deleting local file after failed upload:", unlinkError);
      }
    }
    throw error;
  }
};

export { uploadOnCloudinary };
