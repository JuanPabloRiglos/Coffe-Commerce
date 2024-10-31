"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu-list";
import { ItemsMenuMobile } from "./items-menu-mobile";
import { ToggleTheme } from "./toggle-theme";
//store
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
export function Navbar() {
  const router = useRouter();
  const cart = useCart();
  const {lovedItems} = useLovedProducts()
  return (
    <header className=" w-full flex justify-between items-center gap-4  p-2 px-6 text-slate-900  dark:text-slate-200">
      <h1
        onClick={() => router.push("/")}
        className="text-xl font-normal sm:font-medium hover:cursor-pointer hover:scale-90 hover:text-amber-700 transition-all duration-150 w-4/12 h-fit"
      >
        Coffe-<span className="font-medium sm:font-semibold">Commerce</span>
      </h1>

      <div className="items-center justify-between hidden sm:flex w-6/12">
        <MenuList />
      </div>

      <section className=" w-6/12 md:2/12 flex items-center justify-start gap-4 sm:gap-7 sm:justify-center">
        {cart.items.length == 0 ? (
          <ShoppingCart
            strokeWidth="1"
            onClick={() => router.push("/cart")}
            className="hover:text-green-500 hover:scale-110 hover:cursor-pointer hover:font-bold"
          />
        ) : (
          <div
            className="flex gap-1 hover:text-green-500 hover:scale-110 hover:cursor-pointer hover:font-bold"
            onClick={() => router.push("/cart")}
          >
            <BaggageClaim strokeWidth="1" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={` hover:scale-110 hover:cursor-pointer hover:font-bold ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
          onClick={() => router.push("/loved-products")}
        />

        <User
          strokeWidth="1"
          className="hover:text-blue-500 hover:scale-110 hover:cursor-pointer hover:font-bold"
          onClick={() => router.push("/cart")}
        />
      </section>

      <div className=" flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <ToggleTheme />
    </header>
  );
}
