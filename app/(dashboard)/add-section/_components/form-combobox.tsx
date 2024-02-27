"use client";
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
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
import { createFeedbackSectionReturn } from "@/models/@product-actions-types";
import UserAvatar from "@/components/user-avatar";
import useSelectFriend from "@/hooks/use-selected-friends";

interface IFormComboBox {
  form: createFeedbackSectionReturn;
  friends: IFriend[];
}

export function FormCombobox({ form, friends }: IFormComboBox) {
  const [open, setOpen] = React.useState(false);
  const addFriend = useSelectFriend((state) => state.addFriend);
  const selectedFriends = useSelectFriend((state) => state.selectedFriends);

  console.log(selectedFriends);

  const filteredFriends = friends.filter(
    (friend) =>
      !selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id)
  );

  const friendsExist = filteredFriends.length > 0;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-secondDark"
        >
          Find friend
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[450px]">
        <Command>
          <CommandInput placeholder="Search friend..." className="text-grey" />
          <ScrollArea className="max-h-28">
            {friendsExist && (
              <CommandEmpty className="text-sm sm:text-base font-semibold text-dark text-center px-2.5 py-7">
                No friend found.
              </CommandEmpty>
            )}
            <CommandGroup className="w-full">
              {friendsExist &&
                filteredFriends.map(
                  ({ id, userName, image, firstName, lastName }) => (
                    <CommandItem
                      key={id}
                      value={userName}
                      className="flex flex-row  items-center gap-1.5 cursor-pointer"
                      onSelect={() => {
                        addFriend({ id, userName, image, firstName, lastName });
                      }}
                    >
                      <UserAvatar
                        userImage={image ? image : undefined}
                        className="w-8 h-8"
                      />
                      <span className="text-sm sm:text-base font-semibold text-dark">
                        {userName}
                      </span>
                    </CommandItem>
                  )
                )}
              {!friendsExist && (
                <div className="flex items-center justify-center px-2.5 py-7">
                  <span className="text-sm sm:text-base font-semibold text-dark text-center">
                    You dont have more friends.
                  </span>
                </div>
              )}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
