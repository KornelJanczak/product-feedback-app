import UserAvatar from "@/components/user-avatar";

type sectionUser = {
  user: {
    id: string;
    userName: string;
    lastName?: string | null;
    firstName?: string | null;
    image?: string | null;
  };
}[];

interface ICard {
  id: string;
  title: string;
  members: sectionUser;
  admins: sectionUser;
}

export default function Card({ id, title, members, admins }: ICard) {
  console.log(members);

  const sectionMembers: sectionUser = [...members, ...admins];

  return (
    <div className="bg-darkWhite rounded">
      <h2 className="text-dark text-lg sm:text-xl md:text-2xl">{title}</h2>
      <div className="flex">
        {sectionMembers.map(({ user }) => (
          <UserAvatar key={1} userImage={user.image} className="h-8 w-8" />
        ))}
      </div>
    </div>
  );
}
