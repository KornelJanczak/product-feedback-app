import UserCard from "@/components/user/user-card";
import Wrapper from "./wrapper";
import NoResult from "@/components/no-result";
import ActionButton from "@/app/(users)/_components/action-button";
export default async function Container({
  users,
}: {
  users: IFriendOfButton[];
}) {
  if (users.length > 0)
    return (
      <Wrapper>
        {users!.map(
          ({
            id,
            userName,
            friendRequestExist,
            existingInvitation,
            userFriend,
            lastName,
            firstName,
            image,
          }) => (
            <UserCard
              key={id}
              id={id}
              userName={userName}
              lastName={lastName}
              firstName={firstName}
              contentBoxClassName="sm:items-center"
              image={image}
              actionButton={
                <ActionButton
                  userName={userName}
                  userId={id}
                  friendRequestExist={friendRequestExist}
                  existingInvitation={existingInvitation}
                  userFriend={userFriend}
                />
              }
            />
          )
        )}
      </Wrapper>
    );

  if (users.length === 0)
    return (
      <NoResult
        title="There is no users."
        description="The user with this name has not been found. Please provide the correct username and try again."
      />
    );
}
