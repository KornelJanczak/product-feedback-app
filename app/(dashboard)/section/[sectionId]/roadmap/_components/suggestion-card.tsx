"use client";
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

export default function SuggestionCard({
  suggestion,
  theme,
  label,
}: {
  suggestion: ITransformedFeedbackSection;
  theme: string;
  label: string;
}) {
  console.log(`before:${theme}`);

  return (
    <Card>
      <CardHeader>
        <span
          className={cn(
            `flex items-center text-sm sm:text-base text-grey before:absolute before:content-[''] before:h-2 before:w-2 before:block before:${theme}`
          )}
        >
          {label}
        </span>
        <CardTitle className="text-sm sm:text-base text-dark ">
          {suggestion.title}
        </CardTitle>
        <CardDescription>{suggestion.detail}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
