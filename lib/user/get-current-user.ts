import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

type User = {
  user: {
    email: string;
    lastName?: string;
    firstName?: string;
    name: string;
    id: string;
    image: string;
  };
};

export async function getSession() {
  const session: User | null = await getServerSession(authOptions);
  return session;
}

export default async function getCurrentUser() {
  try {
    const data: User | null = await getSession();

    if (!data) return null;

    return {
      email: data.user.email,
      name: data.user.name,
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      id: data.user.id,
      image: data.user.image,
    };
  } catch {
    return null;
  }
}
