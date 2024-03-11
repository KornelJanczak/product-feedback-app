import UserCard from "@/components/user/user-card";
import AdminActionPopover from "./admin-action-popover";
import ActionAlertDialog from "@/app/(dashboard)/_components/action-alert-dialog";

interface IUsersCards {
  sectionUsers: IFeedbackSectionUser[];
  currentUserIsAdmin: boolean;
  currentUserId: string;
  sectionId: string;
}

export default function UsersCards({
  sectionUsers,
  currentUserIsAdmin,
  currentUserId,
  sectionId,
}: IUsersCards) {
  return (
    <ul className="pb-4 pt-6">
      <h3 className="text-secondDark font-semibold pb-1 text-lg sm:text-xl md:text-2xl ">
        Admins: {sectionUsers.length}
      </h3>
      {sectionUsers.map(({ id, image, userName, lastName, firstName }) => {
        const isCurretUser = id === currentUserId;
        const isAdminButNotCurrentUser =
          currentUserIsAdmin && id !== currentUserId;

        return (
          <UserCard
            key={id}
            id={id}
            userName={userName}
            image={image}
            firstName={firstName}
            lastName={lastName}
            avatarClassName="w-14 h-14"
            className="flex flex-row bg-basicWhite px-2 py-2 rounded"
            actionButton={
              <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                Admin
              </span>
            }
          >
            {isAdminButNotCurrentUser && <AdminActionPopover />}
            {isCurretUser && (
              <ActionAlertDialog
                dialogType="leave"
                sectionId={sectionId}
                currentUserId={currentUserId}
                className="text-sm ml-auto bg-red text-darkWhite py-1 px-2 rounded hover:bg-red hover:text-darkWhite hover:opacity-70 hover:transition-all hover:duration-300"
              />
            )}
          </UserCard>
        );
      })}
    </ul>
  );
}
