"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAction } from "next-safe-action/hooks";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { deleteFriendRequest } from "@/server-actions/user/delete-friend-request";
import FriendButton from "./friend-button";
import { acceptFriendRequest } from "@/server-actions/user/accept-friend-request";

export default function FriendCard({
  userName,
  friendRequestExist,
  existingInvitation,
  id,
  image,
}: Friend) {
  // Send friend request handler
  const { status, execute } = useAction(sendFriendRequest);

  // Delete friend request handler
  const { status: deleteStatus, execute: deleteExecute } =
    useAction(deleteFriendRequest);

  // Accept friend request handler
  const { status: acceptStatus, execute: acceptExecute } =
    useAction(acceptFriendRequest);

  console.log(existingInvitation);
  console.log(friendRequestExist);

  //filter slug
  return (
    <li
      key={id}
      className="flex flex-row items-center justify-between w-full bg-basicWhite p-4 
      gap-x-4 sm:flex-col sm:gap-x-2 sm:p-4"
    >
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" alt="User image" />
        <AvatarFallback className="text-center">{userName}</AvatarFallback>
      </Avatar>
      <div className="flex-col gap-2 w-full">
        <h3 className="text-xl py-2 mr-auto sm:text-center">{userName}</h3>
        <div className="flex items-center justify-center">
          {!friendRequestExist && (
            <FriendButton
              onClick={() => execute({ userId: id })}
              pending={status === "executing"}
              icon={<AddUserIcon />}
            >
              Add User
            </FriendButton>
          )}
          {friendRequestExist && (
            <FriendButton
              onClick={() => deleteExecute({ userId: id })}
              pending={deleteStatus === "executing"}
              icon={<DeleteUserIcon />}
            >
              Cancel Invitation
            </FriendButton>
          )}
          {existingInvitation && (
            <div className="flex flex-col items-center w-full gap-1">
              <FriendButton
                onClick={() => acceptExecute({ userId: id })}
                pending={acceptStatus === "executing"}
                icon={<AddUserIcon />}
              >
                Accept Request
              </FriendButton>
              <FriendButton
                className="bg-dark hover:bg-dark"
                onClick={() => deleteExecute({ userId: id })}
                pending={deleteStatus === "executing"}
                icon={<DeleteUserIcon />}
              >
                Reject Request
              </FriendButton>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
