import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface LikedStore {
  items: Product[];
  toggleItem: (data: Product) => void;
}

const useLikedStore = create(
  persist<LikedStore>(
    (set, get) => ({
      items: [],
      toggleItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item._id === data._id);
        if (existingItem) {
          const fillteredItems = currentItems.filter(
            (item) => item._id !== data._id
          );
          set({ items: fillteredItems });
          toast.success("Item removed from preffered list.");
        } else {
          set({ items: [...currentItems, data] });
          toast.success("Item added to preffered list.");
        }
      },
    }),
    {
      name: "liked-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLikedStore;
