"use client"

import { useLovedProducts } from "@/hooks/use-loved-products"
import { LoveItem } from "./components/loved-item-product"

export default function Page(){
const {lovedItems}= useLovedProducts()
    return(
        <div className="max-w-4xl py-4 mx-auto sm:py-32 smLpx-24">
            <h1 className="sm:text-2xl"> Productos que te gustan</h1>
            <section>
                <div>
                    { lovedItems.length === 0 && (
                        <p> No hay productos marcados como favoritos</p>
                    )}
                    <ul>
                        {lovedItems.map((item)=>(
                            <LoveItem key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}