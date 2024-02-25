"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { createFeedbackSectionReturn } from "@/models/@product-actions-types";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

interface IFormComboBox {
  form: createFeedbackSectionReturn;
  friends: IFriend[];
  formField: ControllerRenderProps<
    {
      title: string;
      membersIds: string[];
    },
    "membersIds"
  >;
}

export function FormCombobox({ formField, form, friends }: IFormComboBox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {/* {formField.value
            ? frameworks.find((friend) => friend.value === value)?.label
            : "Select friend..."} */}
          Select friend
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search friend..." />
          <ScrollArea className="h-20">
            <CommandEmpty>No friend found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((friend) => (
                <CommandItem
                  key={friend.value}
                  value={friend.value}
                  className=""
                  onSelect={(currentValue) => {
                    form.setValue("membersIds", [currentValue]);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === friend.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {friend.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
