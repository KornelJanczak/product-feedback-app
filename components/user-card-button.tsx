import { LucideIcon } from "lucide-react";

export default function UserCardButton({ Icon }: { Icon: LucideIcon }) {
  return (
    <button
      type="button"
      className="flex items-center gap-x-2 text-grey text-base 
        font-[500] md:pl-6 transition-all hover:text-slate-600 
        hover:bg-darkWhite md:ml-auto lg:pl-0"
    >
      <div className="flex items-center gap-x-1.5 py-2">
        Manage Account
        <Icon size={22} className="text-grey" />
      </div>
      <div className=" opacity-0 h-full transition-all" />
    </button>
  );
}
