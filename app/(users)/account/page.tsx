import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import UserInfo from "./_components/user-info";

export default async function AccountPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  return (
    <section className="container flex justify-center items-center pt-8">
      <UserInfo
        username={currentUser.name}
        email={currentUser.email}
        lastName={currentUser.lastName}
        firstName={currentUser.firstName}
      />
    </section>
  );
}
