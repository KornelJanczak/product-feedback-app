import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSelect = create<{ open: boolean; onToggle: () => void }>((set) => ({
  open: false,
  onToggle: () => set((state) => ({ open: !state.open })),
}));

export default useSelect;
