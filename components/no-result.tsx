import { cn } from "@/lib/utils";
import EmptyIcon from "@/public/icons/empty";
export default function NoResult({
  title,
  description,
  button,
  className,
}: {
  title: string;
  description: string;
  button?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-24 px-10",
        className
      )}
    >
      <EmptyIcon />
      <h2 className="text-center text-dark font-bold text-xl pt-5">{title}</h2>
      <p className="text-center text-grey pt-2 max-w-72 ">{description}</p>
      {button}
    </div>
  );
}
