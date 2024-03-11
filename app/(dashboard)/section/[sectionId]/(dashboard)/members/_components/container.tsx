import ActionAlertDialog from "@/app/(dashboard)/_components/action-alert-dialog";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user/user-card";

interface IContainer {
  currentUser: ICurrentUser;
  sectionId: string;
  members: { user: IFeedbackSectionUser }[];
  admins: { user: IFeedbackSectionUser }[];
}

export default function Container({
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
      <div className="flex flex-row bg-basicWhite px-2 py-2 rounded">
        <UserCard
          id={currentUser.id}
          userName={currentUser.name}
          image={currentUser.image}
          firstName={currentUser.firstName}
          lastName={currentUser.lastName}
          avatarClassName="w-14 h-14"
          className="gap-x-1 px-0 py-2"
          actionButton={
            currentUserIsAdmin && (
              <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                Admin
              </span>
            )
          }
        />
        <ActionAlertDialog
          dialogType="leave"
          sectionId={sectionId}
          currentUserId={currentUser.id}
          className="text-sm ml-auto bg-red text-darkWhite py-1 px-2 rounded hover:bg-red hover:text-darkWhite hover:opacity-70 hover:transition-all hover:duration-300"
        />
      </div>
      <Separator />
      <ul className="pb-4 pt-6">
        <h3 className="text-secondDark font-semibold pb-1 text-lg sm:text-xl md:text-2xl ">
          Admins: {admins.length}
        </h3>
        {admins.map(({ user }) => (
          <UserCard
            key={user.id}
            id={user.id}
            userName={user.userName}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            avatarClassName="w-14 h-14"
            className="gap-x-1 px-2 py-2"
            actionButton={
              <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                Admin
              </span>
            }
          />
        ))}
      </ul>
    </div>
  );
}

{
  /* <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
Admin
</span> */
}
