import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export default async function createImage(
  image: string,
  imageType: string,
  userId: string
): Promise<string | { error: string }> {
  try {
    if ((imageType !== "avatar" && imageType !== "profile") || !userId)
      return { error: "Invalid imageType" };

    const file = dataURLtoFile(image, userId);

    const fileName: string = `${userId}-${imageType}.${
      file.type.split("/")[1]
    }`;
    const bufferedImage = await file.arrayBuffer();

    await s3.putObject({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: file.type,
    });

    return fileName;
  } catch {
    return { error: "Something went wrong!" };
  }
}

// Helper function which convret base64 string to file
function dataURLtoFile(dataurl: any, filename: string) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
