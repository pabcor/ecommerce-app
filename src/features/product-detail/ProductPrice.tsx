import ProductDiscount from "./ProductDiscount";
import ProductOldPrice from "./ProductOldPrice";
import ProductSalePrice from "./ProductSalePrice";

export type ProductPriceProps = {
  price: number;
  discount: number;
};

export default function ProductPrice({ price, discount }: ProductPriceProps) {
  return (
    <div className="flex gap-4">
      <ProductOldPrice price={price} />
      <ProductDiscount discount={discount} />
      <ProductSalePrice price={price} discount={discount} />
    </div>
  );
}
