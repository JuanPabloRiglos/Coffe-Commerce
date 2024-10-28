import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

export function ItemsMenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu
          strokeWidth="1"
          className="hover:scale-110 hover:cursor-pointer size-8 hover:font-bold hover:text-amber-600 transition-all duration-150"
        />
      </PopoverTrigger>
      <PopoverContent>
        <Link
          href="/categories/cafe-molido"
          className="block pl-2 my-1 hover:text-amber-700 hover:font-semibold"
        >
          Cafe Molido
        </Link>
        <Link
          href="/categories/cafe-grano"
          className="block pl-2 my-1 hover:text-amber-700 hover:font-semibold"
        >
          Cafe en Granos
        </Link>
        <Link
          href="/categories/cafe-capsula"
          className="block pl-2 my-1 hover:text-amber-700 hover:font-semibold"
        >
          Cafe en Capsulas
        </Link>
      </PopoverContent>
    </Popover>
  );
}
