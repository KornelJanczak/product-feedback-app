import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  const isLogged = await getServerSession(authOptions);
  console.log(isLogged);

  if (!isLogged) redirect("/login");

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
