import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface ISearchInput {
  className?: string;
  searchHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export default function SearchInput({
  className,
  searchHandler,
  inputRef,
}: ISearchInput) {
  return (
    <div className={cn("px-4 pb-5 sm:pb-0", className)}>
      <div className="flex items-center gap-1 w-full border-[#cdd2ee] border-2 rounded-lg px-2 py-1.5">
        <Search width={22} height={22} color="#cdd2ee" />
        <input
          className="border-0 outline-none bg-transparent w-full text-base text-darkGray"
          type="text"
          onChange={searchHandler}
          ref={inputRef}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
