import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../clients/s3-client";

export default async function createImage(
  image: File,
  imageType: string,
  userId: string
): Promise<string | { error: string }> {
  try {
    if ((imageType !== "avatar" && imageType !== "profile") || !userId)
      throw new Error("Image type is valid");

    // const file = dataURLtoFile(image, userId);

    const originalFileExtension = image.name.split(".").pop();
    const fileName: string = `${userId}-${imageType}.${originalFileExtension}`;
    const bufferedImage = await image.arrayBuffer();

    console.log("Buffered Image");

    // await s3Client.send(new PutObjectCommand(({
    //   Bucket: process.env.BUCKET_NAME,
    //   Key: fileName,
    //   Body: Buffer.from(bufferedImage),
    //   ContentType: file.type,
    // }));

    const send = await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
        ACL: "public-read",
        Body: Buffer.from(bufferedImage),
        ContentType: image.type,
      })
    );

    console.log(send, "S3 Client send");

    return fileName;
  } catch (err) {
    throw new Error(err as string);
  }
}

// Helper function which convret base64 string to file
// function dataURLtoFile(dataurl: any, filename: string) {
//   var arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], filename, { type: mime });
// }
