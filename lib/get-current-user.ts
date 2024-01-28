import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function GetCurrentUser() {
  try {
    const user = await getServerSession(authOptions);

    return user;
  } catch {
    throw new Error("User doesn't exist!");
  }
}
