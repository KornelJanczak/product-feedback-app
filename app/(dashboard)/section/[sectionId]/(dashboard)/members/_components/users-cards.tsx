import UserCard from "@/components/user/user-card";
import AdminActionPopover from "./admin-action-popover";
import LeaveOrDeleteAlertDialog from "@/app/(dashboard)/_components/leave-or-delete-alert-dialog";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface IUsersCards {
  sectionUsers: { user: IFeedbackSectionUser }[];
  currentUserIsAdmin: boolean;
  currentUserId: string;
  sectionId: string;
  headline: string;
  isAdmin?: boolean;
  isSearch?: boolean;
}

export default function UsersCards({
  sectionUsers,
  currentUserIsAdmin,
  currentUserId,
  sectionId,
  headline,
  isAdmin,
  isSearch,
}: IUsersCards) {
  const isSectionUsers = sectionUsers.length > 0;

  return (
    <ul className={cn("pb-4 pt-6", isSearch && "pt-0")}>
      {isSectionUsers && <Separator />}

      {isSectionUsers && !isSearch && (
        <h3 className="text-secondDark font-semibold pb-2 pt-2 text-lg  md:text-xl ">
          {headline}
        </h3>
      )}
      {sectionUsers.map(({ user }) => {
        const isCurrentUser = user.id === currentUserId;

        return (
          <UserCard
            key={user.id}
            id={user.id}
            userName={user.userName}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            avatarClassName="w-14 h-14"
            className="flex flex-row  bg-basicWhite px-2 py-2 rounded sm:flex-row"
            actionButton={
              isAdmin && (
                <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                  Admin
                </span>
              )
            }
          >
            {currentUserIsAdmin && !isCurrentUser && (
              <AdminActionPopover
                userName={user.userName}
                adminId={currentUserId}
                memberId={user.id}
                sectionId={sectionId}
                isAdmin={isAdmin}
              />
            )}
            {isCurrentUser && (
              <LeaveOrDeleteAlertDialog
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
