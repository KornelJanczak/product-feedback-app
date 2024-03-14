"use client";
import ActionAlertDialog from "@/app/(dashboard)/_components/leave-or-delete-alert-dialog";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user/user-card";
import UsersCards from "./users-cards";
import SearchInput from "@/components/search-input";
import { useState } from "react";

interface IContainer {
  currentUser: ICurrentUser;
  sectionId: string;
  members: { user: IFeedbackSectionUser }[];
  admins: { user: IFeedbackSectionUser }[];
}

export default function Container({
  currentUser,
  members,
  admins,
  sectionId,
}: IContainer) {
  const [searchValue, setSearchValue] = useState("");

  const currentUserIsAdmin = admins.some(
    ({ user }) => user?.id === currentUser.id
  );

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredMembers = members.filter(({ user }) =>
    user.userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredAdmins = admins.filter(({ user }) =>
    user.userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const isResult = filteredMembers.length > 0 || filteredAdmins.length > 0;

  const isSearch = searchValue.length > 0;

  return (
    <>
      <SearchInput
        className="w-full px-0 pb-5 sm:pb-5"
        searchHandler={onSearchHandler}
        value={searchValue}
      />
      <div className="rounded pt-2">
        <Separator />
        {!isSearch && (
          <UserCard
            id={currentUser.id}
            userName={currentUser.name}
            image={currentUser.image}
            firstName={currentUser.firstName}
            lastName={currentUser.lastName}
            avatarClassName="w-14 h-14"
            className="flex flex-row bg-basicWhite px-2 py-4 rounded sm:flex-row"
            actionButton={
              currentUserIsAdmin && (
                <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                  Admin
                </span>
              )
            }
          >
            <ActionAlertDialog
              dialogType="leave"
              sectionId={sectionId}
              currentUserId={currentUser.id}
              className="text-sm ml-auto bg-red text-darkWhite py-1 px-2 rounded hover:bg-red hover:text-darkWhite hover:opacity-70 hover:transition-all hover:duration-300"
            />
          </UserCard>
        )}
        {isSearch && (
          <h3 className="text-secondDark font-semibold  pt-6 pb-2 text-lg sm:text-xl md:text-2xl ">
            Search results
          </h3>
        )}
        {isResult && (
          <UsersCards
            currentUserIsAdmin={currentUserIsAdmin}
            currentUserId={currentUser.id}
            sectionId={sectionId}
            sectionUsers={filteredAdmins}
            isAdmin={true}
            isSearch={isSearch}
            headline={`Admins: ${admins.length}`}
          />
        )}
        {isResult && (
          <UsersCards
            currentUserIsAdmin={currentUserIsAdmin}
            currentUserId={currentUser.id}
            sectionId={sectionId}
            sectionUsers={filteredMembers}
            isSearch={isSearch}
            headline={`Members: ${members.length}`}
          />
        )}
        {!isResult && (
          <div className="flex justify-center items-center px-4 py-14">
            <span className="text-grey font-semibold">
              No results for{" "}
              <strong className="text-pink">&quot;{searchValue}&quot;</strong>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
