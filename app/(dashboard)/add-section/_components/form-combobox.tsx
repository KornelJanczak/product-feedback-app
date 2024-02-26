"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
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
import UserAvatar from "@/components/user-avatar";
import useSelectFriend from "@/hooks/use-selected-friends";

interface IFormComboBox {
  form: createFeedbackSectionReturn;
  friends: IFriend[];
  // formField: ControllerRenderProps<
  //   {
  //     title: string;
  //     membersIds: string[];
  //   },
  //   "membersIds"
  // >;
}

export function FormCombobox({ form, friends }: IFormComboBox) {
  const [open, setOpen] = React.useState(false);
  const addFriend = useSelectFriend((state) => state.addFriend);
  const selectedFriends = useSelectFriend((state) => state.selectedFriends);

  console.log(selectedFriends);

  const filteredFriends = [...selectedFriends, ...friends];
  const filterExistingFriends = filteredFriends.filter((item, index, self) => {
    return index == self.findIndex((friend) => friend.id !== item.id);
  });

  console.log(filterExistingFriends, "EXISTIONG");

  // const connectFriends =

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {/* {formField.value
            ? frameworks.find((friend) => friend.value === value)?.label
            : "Select friend..."} */}
          Select friend
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search friend..." />
          <ScrollArea className="h-20">
            <CommandEmpty>No friend found.</CommandEmpty>
            <CommandGroup>
              {friends.map(({ id, userName, image, firstName, lastName }) => (
                <CommandItem
                  key={id}
                  value={userName}
                  className="flex flex-row  items-center gap-1.5"
                  onSelect={(currentValue) => {
                    console.log("CHUJ");

                    addFriend({ id, userName, image, firstName, lastName });
                    form.setValue("membersIds", selectedFriends);
                    console.log(selectedFriends);

                    setOpen(false);
                  }}
                >
                  <UserAvatar
                    userImage={image ? image : undefined}
                    className="w-5 h-5"
                  />
                  {userName}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
