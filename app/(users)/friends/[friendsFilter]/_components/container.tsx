import Card from "./card";
import Wrapper from "./wrapper";
import NoResult from "@/components/no-result";
export default function Container({ users }: { users: Friend[] }) {
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
            image
          }) => (
            <Card
              key={id}
              userName={userName}
              id={id}
              lastName={lastName}
              firstName={firstName}
              friendRequestExist={friendRequestExist}
              existingInvitation={existingInvitation}
              userFriend={userFriend}
              image={image}
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
