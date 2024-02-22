import { revalidatePath } from "next/cache";
export const revalidateFriends = () => {
  revalidatePath("/friends/sugesstions");
  revalidatePath("/friends/sended-invitations");
  revalidatePath("/friends/your-friends");
  revalidatePath("/friends/recived-invitations");
  revalidatePath("/profile");
};
