import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CartAction() {
  return (
    <Link className="flex cursor-pointer" href="checkout">
      <ShoppingCartIcon className="w-6 h-6" />
      <span>0</span>
    </Link>
  );
}
