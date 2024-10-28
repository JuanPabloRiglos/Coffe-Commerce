import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { Productype } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: Productype;
}

export function CartItem(props: CartItemProps) {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border-b">
      <article
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer hover:opacity-90"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt="imagen del producto"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </article>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.ProductName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
        </div>
      </div>

      <div>
        <button
          className={cn(
            "rounded-full flex items-center justify-center bg-white border shadow-sm p-1 hover:scale-110 transition"
          )}
          onClick={() => removeItem(product.id)}
        >
          <X size={10} />
        </button>
      </div>
    </li>
  );
}
