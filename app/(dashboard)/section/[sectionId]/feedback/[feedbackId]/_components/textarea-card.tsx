import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

type CommentField = ControllerRenderProps<
  {
    feedbackId: string;
    sectionId: string;
    content: string;
  },
  "content"
>;

type ReplyField = ControllerRenderProps<
  {
    feedbackId: string;
    sectionId: string;
    commentId: string;
    content: string;
  },
  "content"
>;

export default function TextAreaCard({
  isPending,
  placeholder,
  field,
}: {
  isPending: boolean;
  placeholder: string;
  field: CommentField | ReplyField;
}) {
  return (
    <div className="relative">
      <Textarea
        placeholder={placeholder}
        className="w-full h-auto pr-10 text-sm sm:text-base"
        {...field}
      />
      <button type="submit" className="absolute top-2 right-2">
        {!isPending && <SendHorizonal color="#AD1EFA" width={24} height={24} />}
        {isPending && <ClipLoader size={24} color="#AD1EFA" />}
      </button>
    </div>
  );
}
