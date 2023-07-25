import { create } from "zustand";

interface CarouselStore {
  isSwiping: boolean;
  setIsSwiping: (bool: boolean) => void;
}

const useCarousel = create<CarouselStore>((set) => ({
  isSwiping: false,
  setIsSwiping: (bool) => set({ isSwiping: bool }),
}));

export default useCarousel;