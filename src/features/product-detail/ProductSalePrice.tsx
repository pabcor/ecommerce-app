export type ProductSalePriceProps = {
  price: number;
  discount: number;
};

export default function ProductSalePrice({
  price,
  discount,
}: ProductSalePriceProps) {
  return <div className="text-xl">${price - price * (discount / 100)}</div>;
}
