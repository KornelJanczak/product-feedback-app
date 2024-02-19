"use client";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { rejectOrDeleteFriendRequest } from "@/server-actions/user/reject-or-delete-friend-request";
import { acceptFriendRequest } from "@/server-actions/user/accept-friend-request";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";

export default function ActionButton({
  userId,
  friendRequestExist,
  existingInvitation,
  userFriend,
}: {
  userId: string;
  friendRequestExist?: boolean;
  existingInvitation?: boolean;
  userFriend?: boolean;
}) {
  const router = useRouter();
  const btnClass =
    "w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 mt-0 flex gap-x-1 sm:w-11/12 ";

  // Send friend request
  const { status: sendStatus, execute: sendExecute } =
    useAction(sendFriendRequest);

  // Accept friend request
  const { status: acceptStatus, execute: acceptExecute } =
    useAction(acceptFriendRequest);

  // Reject or Delete friend request
  const { status: rejOrDelStatus, execute: rejOrDelExecute } = useAction(
    rejectOrDeleteFriendRequest
  );

  if (friendRequestExist)
    return (
      <Button
        className={btnClass}
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
        className={btnClass}
        onClick={() => sendExecute({ userId })}
        aria-disabled={sendStatus === "executing"}
      >
        {sendStatus === "executing" ? (
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
      <Button
        className={btnClass}
        onClick={() => router.push(`account/${userId}`)}
      >
        Show Profile
      </Button>
    );
}
