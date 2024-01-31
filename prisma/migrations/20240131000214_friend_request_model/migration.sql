-- CreateTable
CREATE TABLE "FriendRequest" (
    "friendRequestOfId" TEXT NOT NULL,
    "friendRequestId" TEXT NOT NULL,

    PRIMARY KEY ("friendRequestId", "friendRequestOfId"),
    CONSTRAINT "FriendRequest_friendRequestOfId_fkey" FOREIGN KEY ("friendRequestOfId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendRequest_friendRequestId_fkey" FOREIGN KEY ("friendRequestId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
