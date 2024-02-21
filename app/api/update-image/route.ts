import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import createImage from "@/lib/user/create-image";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    console.log(formData, "sended data");

    const imageRaw = formData.get("image");
    const imageTypeRaw = formData.get("imageType") as "profile" | "avatar";

    const image: File | null = imageRaw instanceof File ? imageRaw : null;
    const imageType: "profile" | "avatar" = imageTypeRaw;

    if (!image || !imageType) {
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

    const img = (await createImage(image, imageType, currentUser.id)) as string;

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
          id: currentUser!.id,
        },
        data: {
          image: img,
        },
      });

      console.log("Avatar query", prismaQuery);
    } else {
      prismaQuery = await prisma.profile.upsert({
        where: {
          userId: currentUser?.id,
        },
        update: {
          bgImage: img,
        },
        create: {
          userId: currentUser?.id,
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
