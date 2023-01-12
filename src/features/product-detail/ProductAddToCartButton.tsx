import LargeButton from "@/components/button/LargeButton";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

export default function ProductAddToCartButton() {
  return (
    <LargeButton>
      <ShoppingCartIcon className="w-6 h-6" />
      <div className="xs:hidden">Agregar</div>
      <div className="hidden xs:block">Agregar al carrito</div>
    </LargeButton>
  );
}
