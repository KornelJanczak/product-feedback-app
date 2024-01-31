"use client";
import SubmitBtn from "@/app/(auth)/_components/submit-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { sendFriendRequest } from "@/server-actions/user/send-friend-request";
import AddUserIcon from "@/public/icons/add-user";
import DeleteUserIcon from "@/public/icons/delete-user";
import { deleteFriendRequest } from "@/server-actions/user/delete-friend-request";

export default function FriendsSection({ users }: { users: Friend[] }) {
  return (
    <section className="container pt-2">
      <ul className="flex flex-col items-center justify-center gap-2 p-2">
        {users.map(({ id, userName, image, friendRequestExist }) => {
          console.log(friendRequestExist);
          const { status, execute } = useAction(sendFriendRequest, {
            onSuccess({ error }) {
              if (error) toast.error(error);
              toast.success("Request has been sended!");
            },
            onError({ serverError }) {
              toast.error(serverError);
            },
          });

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
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="user image"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-col gap-2">
                <h3 className="text-center text-xl py-2">{userName}</h3>
                <div>
                  {!friendRequestExist ? (
                    <SubmitBtn
                      className="mt-0 flex gap-x-1"
                      pending={status === "executing"}
                      onClick={() => execute({ userId: id })}
                    >
                      <AddUserIcon />
                      Add User
                    </SubmitBtn>
                  ) : (
                    <SubmitBtn
                      className="mt-0 flex gap-x-1"
                      pending={deleteStatus === "executing"}
                      onClick={() => deleteExecute({ userId: id })}
                    >
                      <DeleteUserIcon />
                      Cancel Invitation
                    </SubmitBtn>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
