import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SuggestionColumn({
  suggestions,
  variant,
}: {
  suggestions: ITransformedFeedbackSection[];
  variant: "planned" | "in-progress" | "live";
}) {
  const isPlanned = variant === "planned";
  const isInProgress = variant === "in-progress";
  const isLive = variant === "live";

  const theme = cn(
    isPlanned && "bg-orange",
    isInProgress && "bg-primary",
    isLive && "bg-lighterBlue"
  );

  return (
    <div className="flex flex-col">
      {suggestions.map((suggestion) => (
        <Card key={suggestion.id}>
            {suggestion.title}
        </Card>
      ))}
    </div>
  );
}
