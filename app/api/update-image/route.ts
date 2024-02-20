import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "@/lib/user/get-current-user";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import createImage from "@/lib/user/create-image";

export async function POST(request: NextRequest) {
  try {
    const { image, imageType } = await request.json();

    console.log(image, imageType);

    const currentUser = await getCurrentUser();

    if (!currentUser)
      return NextResponse.json(
        {
          error: "Unauthorizated!",
        },
        { status: 401 }
      );

    const img = (await createImage(image, imageType, currentUser.id)) as string;

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
    }

    if (!prismaQuery)
      return NextResponse.json(
        {
          error: "The creation of the user profile has failed!",
        },
        { status: 404 }
      );

    revalidatePath("/account");
    return NextResponse.json({ success: prismaQuery }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        error: "An error occurred while updating the image!",
      },
      { status: 500 }
    );
  }
}
