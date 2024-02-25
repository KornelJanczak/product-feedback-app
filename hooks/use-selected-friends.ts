import { create } from "zustand";

type selectedFriends = {
  id: string;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
};

interface IuseSelectedFriends {
  selectedFriends: selectedFriends[] | [];
  addFriend: (friend: selectedFriends) => void;
  deleteFriend: (id: string) => void;
}

const useSelectFriend = create<IuseSelectedFriends>((set) => ({
  selectedFriends: [],
  addFriend: (friend) =>
    set((state) => {
      const updatedFriends = [...state.selectedFriends, friend];
      return { selectedFriends: updatedFriends };
    }),
  deleteFriend: (id) =>
    set((state) => {
      const updatedFriends = state.selectedFriends.filter(
        (friend) => friend.id !== id
      );
      return { selectedFriends: updatedFriends };
    }),
}));

export default useSelectFriend;
