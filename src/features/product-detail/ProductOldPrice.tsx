export type ProductOldPriceProps = {
  price: number;
};

export default function ProductOldPrice({ price }: ProductOldPriceProps) {
  return <div className="text-xl line-through">${price}</div>;
}
