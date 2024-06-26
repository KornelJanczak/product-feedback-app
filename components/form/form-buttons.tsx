import { Button } from "@/components/ui/button";

export default function FormButtons({
  actionButtonContent,
  onClick,
}: {
  actionButtonContent: string;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-3.5 sm:flex-row sm:pt-10 sm:justify-end">
      <Button
        type="submit"
        className="w-full bg-pink hover:bg-pink hover:opacity-70 
        text-sm sm:text-base
        transition-all duration-300 sm:w-auto sm:order-2"
      >
        {actionButtonContent}
      </Button>
      <Button
        type="button"
        className="w-full bg-secondDark hover:bg-secondDark 
        text-sm sm:text-base
        hover:opacity-70 transition-all duration-300 sm:w-auto"
        onClick={onClick}
      >
        Cancel
      </Button>
    </div>
  );
}
