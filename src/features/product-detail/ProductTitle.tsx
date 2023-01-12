import Heading from "@/components/heading/Heading";
import ProductPrice from "./ProductPrice";

export type ProductTitleProps = {
  title: string;
  price: number;
  discount: number;
};

export default function ProductTitle({
  title,
  price,
  discount,
}: ProductTitleProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <Heading as="h1" size="3xl">
        <b className="font-bold">{title}</b>
      </Heading>
      <ProductPrice price={price} discount={discount} />
    </div>
  );
}
