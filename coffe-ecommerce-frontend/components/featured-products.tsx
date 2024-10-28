"use client";

import { useRouter } from "next/navigation";
//types
import { ResponseType } from "../types/responses";
import { Productype } from "@/types/product";
//iconos
import { ExpandIcon, ShoppingCart } from "lucide-react";
//funciones
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
//componentes propios y shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { SkeletonSchema } from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { IconButton } from "./icon-button";
import { useCart } from "@/hooks/use-cart";

export function FeaturedProducts() {
  const router = useRouter();
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  //store
  const { addItem, items } = useCart();

  return (
    <div className="max-w-6xl mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: Productype) => {
              const { id, slug, images, ProductName, taste, origin } = product;
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border bg-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${images[0].url}`}
                          alt="Image Featured"
                          className="rounded-md"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<ExpandIcon size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 pt-2 items-center px-4">
                        <h3 className="truncate text-black font-bold">
                          {ProductName}
                        </h3>
                        <div className="flex items-center justify-between gap-3 w-fit">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit p-1">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full  w-fit p-1">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
