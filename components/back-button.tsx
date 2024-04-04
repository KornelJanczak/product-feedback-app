import { cn } from "@/lib/utils";
import ArrowLeft from "@/public/icons/arrow-left";
import Link from "next/link";

export default function BackButton({
  href,
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <div className="mr-auto sm:pt-4">
      <Link
        href={href || "/"}
        className={cn(
          "flex flex-row text-grey font-semibold justify-center items-center gap-1.5 hover:underline-offset-1",
          className
        )}
      >
        <ArrowLeft />
        Go back
      </Link>
    </div>
  );
}
