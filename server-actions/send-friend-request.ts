import getCurrentUser from "@/lib/get-current-user";
import { action } from "@/lib/safe-action-client";
import { inputSchema } from "@/models/@input-schema";

// export default async function sendFriendRequest(userId: string) {
//   try {
//     const currentUser = await getCurrentUser();

//     console.log(currentUser);

//     if (!currentUser) throw new Error("Unauthorized!");

//     const friendRequest = await prisma?.friendRequest.create({
//       data: {
//         friendRequestOfId: currentUser.id,
//         friendRequestId: userId,
//       },
//     });

//     return friendRequest;
//   } catch {
//     throw new Error("Something went wrong!");
//   }
// }

const sendFriendRequest = action(inputSchema, async ({ inputValue }) => {
  try {
    const currentUser = await getCurrentUser();
    console.log(currentUser);
    if (!currentUser) throw new Error("Unauthorized!");
    const friendRequest = await prisma?.friendRequest.create({
      data: {
        friendRequestOfId: currentUser.id,
        friendRequestId: userId,
      },
    });
    return friendRequest;
  } catch {
    throw new Error("Something went wrong!");
  }
});
