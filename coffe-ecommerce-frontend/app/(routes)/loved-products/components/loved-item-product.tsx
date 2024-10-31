"use client"
import { useRouter } from "next/navigation"
//store-hooks
import { useLovedProducts } from "@/hooks/use-loved-products"
import { useCart } from "@/hooks/use-cart"
//types
import { Productype } from "@/types/product"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LovedItemProductProps{
    product: Productype
}

export function LoveItem(props : LovedItemProductProps){
    const {product} = props
    const router = useRouter()
    const { removeLovedItem} = useLovedProducts()
    const {addItem}= useCart()

    const addToCheckout =()=>{
        removeLovedItem(product.id)
        addItem(product)
    }

    return(
        <li className="flex py-6 border-b">
            <figure onClick={()=> router.push(`/product/${product.slug}`)}>
            <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt="imagen del producto"
          className="w-24 h-24 object-center overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
        </figure>
         <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.ProductName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <p className="mt-5">{product.description}</p>
        </div>
      </div>
      <Button className="mt-24 rounded-full" onClick={addToCheckout}>Agregar al Carrito</Button>
      <div>
        <button
          className={cn(
            "rounded-full flex items-center justify-center bg-white border shadow-sm p-1 hover:scale-110 transition"
          )}
          onClick={() => removeLovedItem(product.id)}
        >
          <X size={10} />
        </button>
      </div>
            
        </li>
    )
}