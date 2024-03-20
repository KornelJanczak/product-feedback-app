import SearchBar from "@/components/search-bar/search-bar";
import { SelectSort } from "@/components/search-bar/select-sort";
import FilterPopover from "./_components/filter-popover";

const sortValues = [
  { value: "most-comments", label: "Most Comments" },
  { value: "least-comments", label: "Least Comments" },
  { value: "most-likes", label: "Most Likes" },
  { value: "least-likes", label: "Least Likes" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="md:container px-5 py-5">
      <SearchBar
        route="?suggestionTitle="
        className=" rounded-md py-2 px-3"
        selectBar={<SelectSort sortValues={sortValues} />}
        button={<FilterPopover />}
      />

      {children}
    </section>
  );
}