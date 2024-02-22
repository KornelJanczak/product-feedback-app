"use client";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { rejectOrDeleteFriendRequest } from "@/server-actions/user/reject-or-delete-friend-request";
import { acceptFriendRequest } from "@/server-actions/user/accept-friend-request";
import ClipLoader from "react-spinners/ClipLoader";
import { cn } from "@/lib/utils";
import { deleteUserFriend } from "@/server-actions/user/delete-user-friend";
import { useState } from "react";
import { DeleteImageDialog } from "./delete-image-dialog";
import DeleteFriendDialog from "./delete-friend-dialog";

export default function ActionButton({
  userId,
  friendRequestExist,
  existingInvitation,
  userFriend,
  className,
  userName,
}: {
  userId: string;
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
  userFriend?: boolean;
  className?: string;
  userName: string;
}) {
  const btnClass =
    "w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 mt-0 flex gap-x-1 sm:w-11/12";

  const cnBtnClass = cn(btnClass, className);

  // Send friend request
  const { status: sendInvitateStatus, execute: sendInvitateExecute } =
    useAction(sendFriendRequest);

  // Accept friend request
  const { status: acceptRequestStatus, execute: acceptRequestExecute } =
    useAction(acceptFriendRequest);

  // Reject or Delete friend request
  const { status: rejOrDelStatus, execute: rejOrDelExecute } = useAction(
    rejectOrDeleteFriendRequest
  );

  // Delete user from friends
  const [openDeleteDialog, setDeleteDialog] = useState<boolean>(false);

  if (friendRequestExist)
    return (
      <Button
        className={cnBtnClass}
        onClick={() => rejOrDelExecute({ userId, actionType: "delete" })}
        aria-disabled={rejOrDelStatus === "executing"}
      >
        {rejOrDelStatus === "executing" ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : (
          <DeleteUserIcon />
        )}
        Cancel Invitation
      </Button>
    );

  if (!friendRequestExist && !existingInvitation && !userFriend)
    return (
      <Button
        className={cnBtnClass}
        onClick={() => sendInvitateExecute({ userId })}
        aria-disabled={sendInvitateStatus === "executing"}
      >
        {sendInvitateStatus === "executing" ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : (
          <AddUserIcon />
        )}
        Add User
      </Button>
    );

  if (existingInvitation)
    return (
      <div className="flex flex-col items-center w-full gap-1 pt-1 sm:pt-2">
        <Button
          className={cnBtnClass}
          onClick={() => acceptRequestExecute({ userId })}
          aria-disabled={acceptRequestStatus === "executing"}
        >
          {acceptRequestStatus === "executing" ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            <AddUserIcon />
          )}
          Accept Request
        </Button>
        <Button
          className={cnBtnClass + " bg-dark hover:bg-dark"}
          onClick={() => rejOrDelExecute({ userId, actionType: "reject" })}
          aria-disabled={rejOrDelStatus === "executing"}
        >
          {rejOrDelStatus === "executing" ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            <DeleteUserIcon />
          )}
          Reject Request
        </Button>
      </div>
    );

  if (userFriend)
    return (
      <>
        <Button
          className={cn(btnClass, "bg-red hover:bg-red", className)}
          onClick={() => setDeleteDialog((open) => !open)}
        >
          <DeleteUserIcon />
          Delete friend
        </Button>
        <DeleteFriendDialog
          userName={userName}
          userId={userId}
          onClick={() => setDeleteDialog((open) => !open)}
          open={openDeleteDialog}
        />
      </>
    );
}
