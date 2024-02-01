"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { deleteFriendRequest } from "@/server-actions/user/delete-friend-request";
import FriendButton from "./friend-button";

export default function FriendCard({
  userName,
  friendRequestExist,
  id,
  image,
}: Friend) {
  // Send friend request handler
  const { status, execute } = useAction(sendFriendRequest, {
    onSuccess({ error }) {
      if (error) toast.error(error);
      toast.success("Request has been sended!");
    },
    onError({ serverError }) {
      toast.error(serverError);
    },
  });

  // Delete friend request handler
  const { status: deleteStatus, execute: deleteExecute } = useAction(
    deleteFriendRequest,
    {
      onSuccess({ error }) {
        if (error) toast.error(error);
        toast.success("Request has been deleted!");
      },
      onError({ serverError }) {
        toast.error(serverError);
      },
    }
  );

  return (
    <li
      key={id}
      className="flex flex-col items-center justify-center bg-basicWhite p-4"
    >
      <Avatar className="w-36 h-36">
        <AvatarImage src="https://github.com/shadcn.png" alt="user image" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-col gap-2">
        <h3 className="text-center text-xl py-2">{userName}</h3>
        <div>
          {!friendRequestExist ? (
            <FriendButton
              className="mt-0 flex gap-x-1"
              onClick={() => execute({ userId: id })}
              pending={status === "executing"}
              icon={<AddUserIcon />}
            >
              Add User
            </FriendButton>
          ) : (
            <FriendButton
              className="mt-0 flex gap-x-1"
              onClick={() => deleteExecute({ userId: id })}
              pending={deleteStatus === "executing"}
              icon={<DeleteUserIcon />}
            >
              Cancel Invitation
            </FriendButton>
          )}
        </div>
      </div>
    </li>
  );
}
