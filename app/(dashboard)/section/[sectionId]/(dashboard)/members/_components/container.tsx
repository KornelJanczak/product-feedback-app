import ActionAlertDialog from "@/app/(dashboard)/_components/action-alert-dialog";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user/user-card";
import AdminActionPopover from "./admin-action-popover";
import UsersCards from "./users-cards";

interface IContainer {
  currentUser: ICurrentUser;
  sectionId: string;
  members: { user: IFeedbackSectionUser }[];
  admins: { user: IFeedbackSectionUser }[];
}

export default async function Container({
  currentUser,
  members,
  admins,
  sectionId,
}: IContainer) {
  const currentUserIsAdmin = admins.some(
    ({ user }) => user?.id === currentUser.id
  );

  return (
    <div className="rounded pt-2">
      <Separator />
      <UserCard
        id={currentUser.id}
        userName={currentUser.name}
        image={currentUser.image}
        firstName={currentUser.firstName}
        lastName={currentUser.lastName}
        avatarClassName="w-14 h-14"
        className="flex flex-row bg-basicWhite px-2 py-4 rounded"
        actionButton={
          currentUserIsAdmin && (
            <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
              Admin
            </span>
          )
        }
      >
        <ActionAlertDialog
          dialogType="leave"
          sectionId={sectionId}
          currentUserId={currentUser.id}
          className="text-sm ml-auto bg-red text-darkWhite py-1 px-2 rounded hover:bg-red hover:text-darkWhite hover:opacity-70 hover:transition-all hover:duration-300"
        />
      </UserCard>
      <Separator />
      <UsersCards
        currentUserIsAdmin={currentUserIsAdmin}
        currentUserId={currentUser.id}
        sectionId={sectionId}
        sectionUsers={admins}
        isAdmins={true}
        headline={`Admins: ${admins.length}`}
      />
      <UsersCards
        currentUserIsAdmin={currentUserIsAdmin}
        currentUserId={currentUser.id}
        sectionId={sectionId}
        sectionUsers={members}
        headline={`Members: ${members.length}`}
      />
    </div>
  );
}
