"use client";
import { useState } from "react";
import TextAreaCard from "./textarea-card";

export default function ReplyBox({ commentId }: { commentId: string }) {
  const [replyBoxCommentId, setReplyBoxCommentId] = useState<string | null>(
    null
  );

  

  const toggleReplyBox = () => {
    if (replyBoxCommentId === commentId) {
      setReplyBoxCommentId(null);
    } else {
      setReplyBoxCommentId(commentId);
    }
  };

  return (
    <div>
      {/* <TextAreaCard /> */}
    </div>
  );
}
