import { toast } from "sonner";
import axios, { AxiosResponse } from "axios";

export async function uploadImage(
  image: string,
  imageType: "avatar" | "profile"
) {
  //   const file = ev.target.files?.[0];

  if (image) {
    const uploadPromise = new Promise((resolve, reject) => {
      //   const data = new FormData();
      //   data.set("file", file);

      const data = { image, imageType };

      //   fetch("/api/update-image", {
      //     method: "POST",
      //     body: data,
      //     headers: {
      //       "Content-Type": "application/json",
      //       'Authorization': 'Bearer your-access-token'
      //     },
      //   }).then((response) => {
      //     if (response.ok) {
      //       response.json().then((link) => {
      //         callbackFn(link);
      //         resolve(link);
      //       });
      //     } else {
      //       reject();
      //     }
      //   });

      axios
        .post<{ success: any; error: string }>("/api/update-image", data)
        .then((response) => {
          if (response.data) {
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
