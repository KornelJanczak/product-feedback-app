"use client";
import FriendCard from "./friend-card";
import UlCard from "./ul-card";
export default function FriendsContainer({ users }: { users: Friend[] }) {
  return (
    <UlCard>
      {users!.map(
        ({
          id,
          userName,
          friendRequestExist,
          existingInvitation,
          userFriend,
          lastName,
          firstName,
        }) => (
          <FriendCard
            key={id}
            userName={userName}
            id={id}
            lastName={lastName}
            firstName={firstName}
            friendRequestExist={friendRequestExist}
            existingInvitation={existingInvitation}
            userFriend={userFriend}
          />
        )
      )}
    </UlCard>
  );
}
