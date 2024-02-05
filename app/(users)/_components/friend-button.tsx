"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { useAction } from "next-safe-action/hooks";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { deleteFriendRequest } from "@/server-actions/user/delete-friend-request";
import { acceptFriendRequest } from "@/server-actions/user/accept-friend-request";
import ClipLoader from "react-spinners/ClipLoader";

export default function FriendButton({
  userId,
  friendRequestExist,
  existingInvitation,
}: {
  userId: string;
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
}) {
  // Send friend request handler
  const { status, execute } = useAction(sendFriendRequest);

  // Delete friend request handler
  const { status: deleteStatus, execute: deleteExecute } =
    useAction(deleteFriendRequest);

  // Accept friend request handler
  const { status: acceptStatus, execute: acceptExecute } =
    useAction(acceptFriendRequest);

  const btnClass =
    "w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 mt-0 flex gap-x-1 sm:w-11/12 ";

  console.log(friendRequestExist, "FRIENDREQEXIST");
  console.log(existingInvitation, "EXINVEXIST");

  if (friendRequestExist)
    return (
      <Button
        className={btnClass}
        onClick={() => deleteExecute({ userId })}
        aria-disabled={deleteStatus === "executing"}
      >
        {deleteStatus === "executing" ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : (
          <DeleteUserIcon />
        )}
        Cancel Invitation
      </Button>
    );

  if (!friendRequestExist && !existingInvitation)
    return (
      <Button
        className={btnClass}
        onClick={() => execute({ userId })}
        aria-disabled={status === "executing"}
      >
        {status === "executing" ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : (
          <AddUserIcon />
        )}
        Add User
      </Button>
    );

  if (existingInvitation) {
    return (
      <div className="flex flex-col items-center w-full gap-1 pt-1 sm:pt-2">
        <Button
          className={btnClass}
          onClick={() => acceptExecute({ userId })}
          aria-disabled={acceptStatus === "executing"}
        >
          {acceptStatus === "executing" ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            <AddUserIcon />
          )}
          Accept Request
        </Button>
        <Button
          className={btnClass + " bg-dark hover:bg-dark"}
          onClick={() => deleteExecute({ userId })}
          aria-disabled={deleteStatus === "executing"}
        >
          {deleteStatus === "executing" ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            <DeleteUserIcon />
          )}
          Reject Request
        </Button>
      </div>
    );
  }
}
