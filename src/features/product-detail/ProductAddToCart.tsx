import ProductAddToCartButton from "./ProductAddToCartButton";
import ProductQuantitySelector from "./ProductQuantitySelector";

export default function ProductAddToCart() {
  return (
    <div className="sticky z-10 bottom-0 flex justify-end gap-4 py-3 bg-white">
      <ProductQuantitySelector />
      <ProductAddToCartButton />
    </div>
  );
}
