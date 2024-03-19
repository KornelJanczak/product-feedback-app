"use client";
import SearchBar from "@/components/search-bar/search-bar";
import { SelectSort } from "@/components/search-bar/select-sort";
import AddSectionButton from "./add-section-button";

const selectValues = [
  {
    value: "most-suggestions",
    label: "Most suggestions",
  },
  {
    value: "least-suggestions",
    label: "Least suggestions",
  },
  {
    value: "most-members",
    label: "Most members",
  },
  {
    value: "least-members",
    label: "Least members",
  },
];

export default function FilterBar() {
  return (
    <SearchBar
      route="?sectionTitle="
      selectBar={<SelectSort sortValues={selectValues} />}
      button={<AddSectionButton />}
    />
  );
}
