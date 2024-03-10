import getUserFriends from "@/lib/user/get-user-friends";
import AddUsersDrawer from "./add-users-drawer";
import UserCard from "@/components/user/user-card";
import AdminActionButton from "./admin-action-button";
import { ScrollArea } from "@/components/ui/scroll-area";

// actionButton: ReactNode;
// image?: string | null;
// id: string;
// firstName?: string | null;
// lastName?: string | null;
// userName: string;
// avatarClassName?: string;

const a = {
  image: null,
  name: "chuj",
  id: " asdas",
  firstName: "szlptos",
  lastName: "asdsa",
  userName: "dsad",
  actionButton: <div></div>,
};

export default async function AddUsers({ currentUser }: { currentUser: User }) {
  const friends = await getUserFriends(currentUser);

  console.log(friends);

  const chujwcy = [
    ...friends,
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
    {
      image: null,
      name: "chuj",
      id: " asdas",
      firstName: "szlptos",
      lastName: "asdsa",
      userName: "dsad",
      actionButton: <div></div>,
    },
  ];

  return (
    <>
      <AddUsersDrawer>
        <ScrollArea>
          {chujwcy.map(
            ({
              id,
              userName,
              lastName,
              firstName,
              image,
              // userFriend,
              // email,
            }) => (
              <UserCard
                key={id}
                id={id}
                userName={userName}
                lastName={lastName}
                firstName={firstName}
                image={image}
                avatarClassName="h-20 w-20"
                actionButton={<AdminActionButton />}
              />
            )
          )}
        </ScrollArea>
      </AddUsersDrawer>
    </>
  );
}
