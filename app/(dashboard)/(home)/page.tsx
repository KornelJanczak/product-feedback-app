import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/options";
import FilterBar from "../_components/find-bar";

export default async function Home() {
  const isLogged = await getServerSession(authOptions);
  console.log(isLogged, "CHUJ");

  const sections = [];

  if (!isLogged) redirect("/login");

  return <FilterBar />;
}
