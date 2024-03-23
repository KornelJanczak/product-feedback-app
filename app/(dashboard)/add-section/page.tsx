import getCurrentUser from "@/lib/user/get-current-user";
import BackButton from "@/components/back-button";
import AddForm from "./_components/form";
import { redirect } from "next/navigation";
import FormHeader from "@/components/form/form-header";
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

  return (
    <>
      <BackButton />
      <div className="px-2 sm:pt-3 sm:px-6">
        <FormHeader
          headerTitle="Create New Section"
          userName={name}
          firstName={firstName}
          userImage={image ? image : undefined}
          lastName={lastName}
          additonalContent={<span className="text-sm text-grey">Admin</span>}
        />

        <AddForm friends={friends} currentUserId={currentUser.id} />
      </div>
    </>
  );
}
