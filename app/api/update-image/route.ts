import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import createImage from "@/lib/user/create-image";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export async function POST(request: NextRequest) {
  try {
    const s3Client = new S3Client({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID2 as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY2 as string,
      },
    });
    
    const formData = await request.formData();
    console.log(formData, "sended data");

    const imageRaw = formData.get("image");
    const imageTypeRaw = formData.get("imageType");

    const image: File | null = imageRaw instanceof File ? imageRaw : null;
    const imageType = imageTypeRaw as "avatar" | "profile";

    if (!image || !imageTypeRaw) {
      return NextResponse.json({ error: "Invalid data type" }, { status: 400 });
    }

    const currentUser = await getCurrentUser();
    console.log(currentUser, "user");

    if (!currentUser)
      return NextResponse.json(
        {
          error: "Unauthorizated!",
        },
        { status: 401 }
      );

    // const img = await createImage(image, imageType, currentUser.id);
    const originalFileExtension = image.name.split(".").pop();
    const fileName: string = `${currentUser.id}-${imageType}.${originalFileExtension}`;
    const bufferedImage = await image.arrayBuffer();

    console.log(originalFileExtension, "File ex");
    console.log(fileName, "file Name");
    console.log(bufferedImage, "Buffered Image");

    const chunks = [];
    //@ts-ignore
    for await (const chunk of image.stream()) {
      chunks.push(chunk);
    }
    console.log(chunks, "CHUNKS");

    console.log(process.env.BUCKET_NAME, "BUCKET ENV");

    const send = await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
        ACL: "public-read",
        Body: Buffer.concat(chunks),
        ContentType: image.type,
      })
    );

    const img = fileName;
    console.log(img, "path of image");

    if (!img)
      return NextResponse.json(
        {
          error: "The creation of image failed!",
        },
        { status: 404 }
      );

    let prismaQuery;

    if (imageType === "avatar") {
      prismaQuery = await prisma.user.update({
        where: {
          id: currentUser.id,
        },
        data: {
          image: img,
        },
      });

      console.log("Avatar query", prismaQuery);
    } else {
      prismaQuery = await prisma.profile.upsert({
        where: {
          userId: currentUser.id,
        },
        update: {
          bgImage: img,
        },
        create: {
          userId: currentUser.id,
          bgImage: img,
        },
      });
      console.log("Profile query", prismaQuery);
    }

    if (!prismaQuery)
      return NextResponse.json(
        {
          error: "The creation of the user profile has failed!",
        },
        { status: 404 }
      );

    console.log(prismaQuery, "Query befor end of execute");

    revalidatePath("/account");
    return NextResponse.json({ success: prismaQuery }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
      },
      { status: 500 }
    );
  }
}
