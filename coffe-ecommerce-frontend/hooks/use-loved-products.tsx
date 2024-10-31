import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
//component
import { toast } from "@/components/ui/use-toast";
//type
import { Productype } from "@/types/product";

interface UseLovedProductsTpe {
    lovedItems:Productype[],
    addLoveItem:(data:Productype)=> void,
    removeLovedItem:(id:number)=> void
}

export const useLovedProducts= create(persist<UseLovedProductsTpe>((set,get)=>({
lovedItems:[],
addLoveItem: (data: Productype)=> {
const currentLovedItems = get().lovedItems;
const existingItem = currentLovedItems.find((item)=> item.id == data.id)

if(existingItem){
    return toast({
        title:"El producto ya existe en la lista ❤️",
        variant:"destructive"
    })
}

set({
    lovedItems: [...get().lovedItems, data]
})
toast({
    title:"Producto Agregado a Favoritos ❤️"
})

},
removeLovedItem:(id:number)=>{
    set({ lovedItems: [...get().lovedItems.filter(item => item.id != id)]})
    toast({
        title:"Producto se ha eliminado de la lista 💔"
    })
}
}),
{
    name:"loved-products-storage", 
    storage:createJSONStorage(()=>localStorage)
}))