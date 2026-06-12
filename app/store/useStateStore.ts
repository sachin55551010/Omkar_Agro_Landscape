import { create } from "zustand";

interface StateStore {
  isMenuOpen: boolean;

  closeMenu: () => void;
  openMenu: () => void;
}
export const useStateStore = create<StateStore>((set) => ({
  isMenuOpen: false,

  closeMenu() {
    set({ isMenuOpen: false });
  },
  openMenu() {
    set({ isMenuOpen: true });
  },
}));
