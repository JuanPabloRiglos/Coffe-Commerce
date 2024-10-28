import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
//component
import { toast } from "@/components/ui/use-toast";

//tipado
import { Productype } from "@/types/product";

interface CartStorage {
  items: Productype[];
  addItem: (data: Productype) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

//funcion store carrito
export const useCart = create(
  persist<CartStorage>(
    (set, get) => ({
      items: [],
      addItem: (data: Productype) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        // si ya existe en el carrito
        if (existingItem) {
          return toast({
            title: "El producto ya existe en el carrito.",
            variant: "destructive",
          });
        }
        //si no existe, camino feliz
        set({
          items: [...get().items, data],
        });
        toast({
          title: "Producto agregado al carrito 🛍️",
        });
      },

      //fn remove
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({
          title: "Producto removido del Carrito 🗑️",
        });
      },
      //fn remove all
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
