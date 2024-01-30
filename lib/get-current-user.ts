import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

type User = {
  user: {
    email: string;
    name: string;
    id: string;
  };
};
export default async function getCurrentUser() {
  try {
    const data: User | null = await getServerSession(authOptions);

    if (!data) throw new Error("User doesn't exist!");

    return {
      email: data.user.email,
      name: data.user.name,
      id: data.user.id,
    };
    
  } catch {
    throw new Error("User doesn't exist!");
  }
}
