import { create } from "zustand";

interface BikeStoreState {
  selectedBrand: string | null;
  searchName: string;
  setSelectedBrand: (brand: string | null) => void;
  setSearchName: (name: string) => void;
}

export const useBikeStore = create<BikeStoreState>((set) => ({
  selectedBrand: null,
  searchName: "",
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  setSearchName: (name) => set({ searchName: name }),
}));
