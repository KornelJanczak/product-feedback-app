"use client";
import { toast } from "sonner";
import axios from "axios";

export function uploadImage(image: File, imageType: "avatar" | "profile") {
  if (image) {
    const uploadPromise = new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.set("image", image);
      formData.set("imageType", imageType);

      console.log(formData);

      axios.post("/api/update-image", formData).then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject();
        }
      });
    });

    toast.promise(uploadPromise, {
      loading: "Uploading...",
      success: `We uploaded your ${imageType} image!`,
      error: "Image uploading failed!",
    });
  }
}
