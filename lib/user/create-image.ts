import * as fs from "fs";
import path from "path";
import uniqid from "uniqid";

export default async function createImage(image: string, imageType: string) {
  try {
    const randomId = uniqid();

    const typePath =
      imageType === "avatar" ? "/avatar-images" : "/profile-images";

    if (imageType !== "avatar" && imageType !== "profile")
      return { error: "Invalid imageType" };

    //@ts-ignore
    const extension = path.extname(image);
    const fileName = `${typePath}${randomId}.${extension}`;

    console.log(fileName);
    

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    //@ts-ignore
    const bufferedImage = await image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        return { error: "Saving image failed!" };
      }
    });

    const imagePath = `/images/${fileName}`;

    return imagePath;
  } catch {
    return { error: "Something went wrong!" };
  }
}
