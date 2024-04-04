"use client";
import { likeFeedback } from "@/server-actions/product/feedback/like-feedback";
import { Heart } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

interface ILikeButton {
  likedBy: string[];
  feedbackId: string;
  sectionId: string;
  currentUserId: string;
}

export default function LikeButton({
  likedBy,
  feedbackId,
  sectionId,
  currentUserId,
}: ILikeButton) {
  const isLiked = likedBy.some((id) => id === currentUserId);
  const likeCount = likedBy.length;

  const { execute } = useAction(likeFeedback);

  const onClickHandler = () => {
    execute({ feedbackId, sectionId, currentUserId });
  };

  return (
    <button
      className="flex justify-center items-center gap-1"
      onClick={onClickHandler}
    >
      <Heart
        width={20}
        height={20}
        color="#4661E6"
        fill={isLiked ? "#4661E6" : "#fff"}
      />
      <span className="text-dark font-semibold">{likeCount}</span>
    </button>
  );
}
