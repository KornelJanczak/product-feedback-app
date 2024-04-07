import UserAvatar from "../user/user-avatar";

interface IUserInfoCard {
  userImage?: string | null;
  userName?: string | null;
  userEmail?: string | null;
}

export default function UserInfoCard({
  userImage,
  userName,
  userEmail,
}: IUserInfoCard) {
  return (
    <>
      <UserAvatar userImage={userImage} className="m-auto h-24 w-24" />
      <h2 className="pt-2 text-dark font-semibold text-xl sm:text-2xl md:text-3xl text-center">
        Hello {userName}!
      </h2>
      <span className="flex justify-center text-center text-grey text-base pb-1">
        {userEmail}
      </span>
    </>
  );
}
