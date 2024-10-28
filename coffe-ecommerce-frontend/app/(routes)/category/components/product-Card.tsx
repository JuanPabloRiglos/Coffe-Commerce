//components
import { IconButton } from "@/components/icon-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
//types
import { Productype } from "@/types/product";
//hook
import Link from "next/link";
import { useRouter } from "next/navigation";
//utils
import { formatPrice } from "@/lib/formatPrice";
//Icon
import { Expand, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Productype;
};

export function ProductCard(props: ProductCardProps) {
  const { product } = props;
  const router = useRouter();

  return (
    <Link
      href={`/product/${product.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      <div className="absolute flex items-center justify-between  gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.taste}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
          {product.origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="W-full max-w-sm"
      >
        <CarouselContent>
          {product.images.map((img) => (
            <CarouselItem key={img.id} className="group">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                alt="image product"
                className="rounded-xl"
              />
              <div
                className="absolute w-full px-6 transition duration-200
               opacity-0 group-hover:opacity-100 bottom-5 "
              >
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() => router.push(`product/${product.slug}`)}
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => console.log("product")}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-xl text-start pl-1">
        Producto : {product.ProductName}
      </p>
      <p className="font-semibold pl-2">{formatPrice(product.price)}</p>
    </Link>
  );
}
