//it is used to provide path of file that has been sent to server
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //fs is a file system. it is a default library of node js

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("NOO FILE PATH");
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto"
    })
    //if file has been uploaded successfully
    console.log("FILLEEE",response.url) //eta public url print huncha
    return response
  } catch (err) {
    //server bata nachaine file hatauna (locally saved temporary file as upload operation got failed)
    fs.unlinkSync(localFilePath)
    return null
  }
};
export {uploadOnCloudinary}