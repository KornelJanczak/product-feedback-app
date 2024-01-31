"use client";
import SubmitBtn from "@/app/(auth)/_components/submit-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import sendFriendRequest from "@/server-actions/send-friend-request";
import { toast } from "sonner";

export default function FriendsSection({ users }: { users: Friend[] }) {
  console.log(users);

  return (
    <section className="container pt-2">
      <ul className="flex items-center justify-center p-2">
        {users.map(({ id, userName, image }) => {
          const sendRequest = async () => {
            try {
              console.log("`asdsa");

              const request = await sendFriendRequest(id);
              if (!request) toast.error("Something went wrong!");
              toast.success("Friend request has been sended!");
            } catch {
              toast.error("Something went wrong!");
            }
          };

          return (
            <li key={id} className="bg-basicWhite p-4">
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
                  <SubmitBtn className="mt-0" onClick={sendRequest}>
                    Add user
                  </SubmitBtn>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
