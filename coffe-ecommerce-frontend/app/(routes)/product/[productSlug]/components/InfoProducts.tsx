import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Productype } from "@/types/product";
import { Heart } from "lucide-react";
//storage
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

export type InfoProductProps = {
  product: Productype;
};

export function InfoProduct(props: InfoProductProps) {
  const { product } = props;
  //funcion del storage
  const { addItem } = useCart();
  const {addLoveItem}= useLovedProducts();
  return (
    <article className="px-6 ">
      <div className=" justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.ProductName}</h1>
        <div
          className="flex items-center justify-center gap-3
      "
        >
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit ">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-5">
        <Button onClick={() => addItem(product)}>Comprar</Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white"
          onClick={() => addLoveItem(product)}
        />
      </div>
    </article>
  );
}
