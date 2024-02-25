import getCurrentUser from "@/lib/user/get-current-user";
import BackButton from "./_components/back-button";
import AddForm from "./_components/form";
import { redirect } from "next/navigation";
import FormHeader from "./_components/form-header";

export default async function AddSectionPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const { name, firstName, image, lastName } = currentUser;

  

  return (
    <>
      <BackButton />
      <div className="px-2">
        <FormHeader
          userName={name}
          firstName={firstName}
          userImage={image}
          lastName={lastName}
        />
        <AddForm />
      </div>
    </>
  );
}
