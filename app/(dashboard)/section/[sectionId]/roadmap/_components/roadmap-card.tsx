import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { cn } from "@/lib/utils";
import LikeButton from "../../_components/feedback-card/like-button";
import { IRoadmapFeedback } from "./roadmap";
import { MessageCircle } from "lucide-react";
import AuthorInfoPanel from "../../_components/author-info-panel";
import Link from "next/link";
import { cva } from "class-variance-authority";
import capitalizeFirstLetter from "@/lib/capitalize-first-letter";

interface IRoadmapCard extends IRoadmapFeedback {
  suggestion: ITransformedFeedbackSection;
  currentUserId: string;
}

const borderColorsVariants = cva("border-t-8 h-full", {
  variants: {
    variant: {
      planned: `border-t-orange`,
      inprogress: `border-t-primary`,
      live: `border-t-lighterBlue`,
    },
  },
});

const backgroundColorsVariants = cva("p-1 rounded-full", {
  variants: {
    variant: {
      planned: `bg-orange`,
      inprogress: `bg-primary`,
      live: `bg-lighterBlue`,
    },
  },
});

export default function RoadmapCard({
  suggestion,
  variant,
  currentUserId,
  label,
}: IRoadmapCard) {
  const transformedCategory = capitalizeFirstLetter(suggestion.category);
  const commentsNumber = suggestion.comments.length;

  const { author } = suggestion;

  return (
    <Card className={cn(borderColorsVariants({ variant }))}>
      <CardHeader className="flex pt-4 pb-3 px-4">
        <div className="flex justify-between items-center">
          <AuthorInfoPanel authorId={author.id} {...author} />
          <div className="flex items-center gap-2">
            <span className={cn(backgroundColorsVariants({ variant }))}/>
            <span className="text-sm lg:text-base text-grey">{label}</span>
          </div>
        </div>
      </CardHeader>
      <Link
        href={`/section/${suggestion.feedbackSectionId}/feedback/${suggestion.id}`}
      >
        <CardContent className="flex flex-col pb-4 px-5">
          <CardTitle className="text-sm lg:text-base text-dark">
            {suggestion.title}
          </CardTitle>
          <CardDescription className="pt-1">
            {suggestion.detail}
          </CardDescription>
          <span className="text-blue text-sm lg:text-base font-semibold px-2 pt-2">
            {transformedCategory}
          </span>
        </CardContent>
      </Link>
      <CardFooter className="justify-between pb-3 px-7">
        <LikeButton
          currentUserId={currentUserId}
          likedBy={suggestion.likedBy}
          feedbackId={suggestion.id}
          sectionId={suggestion.feedbackSectionId}
        />
        <div className="flex items-center justify-center gap-1">
          <MessageCircle
            width={20}
            height={20}
            color="#CDD2EE"
            fill="#CDD2EE"
          />
          <span className="text-dark font-semibold">{commentsNumber}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
