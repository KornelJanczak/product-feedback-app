import getCurrentUser from "@/lib/user/get-current-user";
import BackButton from "./_components/back-button";
import AddForm from "./_components/form";
import { redirect } from "next/navigation";
import FormHeader from "./_components/form-header";
import getUserFriends from "@/lib/user/get-user-friends";

export default async function AddSectionPage({
  searchParams,
}: {
  searchParams: { userName?: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const { name, firstName, image, lastName } = currentUser;

  const friends: IFriend[] = await getUserFriends(
    currentUser,
    searchParams?.userName
  );

  console.log(image);

  return (
    <>
      <BackButton />
      <div className="px-2">
        <FormHeader
          userName={name}
          firstName={firstName}
          userImage={image ? image : undefined}
          lastName={lastName}
        />
        <AddForm friends={friends} />
      </div>
    </>
  );
}
