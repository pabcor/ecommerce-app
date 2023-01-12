export type ProductDiscountProps = {
  discount: number;
};

export default function ProductDiscount({ discount }: ProductDiscountProps) {
  return (
    <div className="flex items-center rounded-sm px-2 bg-gray-200 text-sm uppercase">
      {discount}% off
    </div>
  );
}
