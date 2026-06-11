import { create } from "zustand";

interface StateStore {
  isMenuOpen: boolean;
  isPorductModalOpen: boolean;
  openProductModal: () => void;
  closeProductModal: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}
export const useStateStore = create<StateStore>((set) => ({
  isMenuOpen: false,
  isPorductModalOpen: false,
  closeMenu() {
    set({ isMenuOpen: false });
  },
  openMenu() {
    set({ isMenuOpen: true });
  },
  openProductModal() {
    set({ isPorductModalOpen: true });
  },
  closeProductModal() {
    set({ isPorductModalOpen: false });
  },
}));
