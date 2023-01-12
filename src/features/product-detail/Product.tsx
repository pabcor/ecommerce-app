import { SlideProps } from "@/components/slider/Slider";
import SwiperProvider from "@/contexts/SwiperContext";
import ProductAddToCart from "./ProductAddToCart";
import ProductAttribute, { ProductAttributeProps } from "./ProductAttribute";
import ProductDescription from "./ProductDescription";
import ProductReturnsPolicy from "./ProductReturnsPolicy";
import ProductSlider from "./ProductSlider";
import ProductTitle from "./ProductTitle";

export type ProductProps = {
  title: string;
  price: number;
  discount: number;
  images: SlideProps[];
  attributeValues: ProductAttributeProps[];
  description: string;
  returnsPolicy: string;
};

export default function Product({
  title,
  price,
  discount,
  images,
  attributeValues,
  description,
  returnsPolicy,
}: ProductProps) {
  return (
    <SwiperProvider>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr] mt-8 mb-4 container">
        <ProductSlider images={images} />

        <div>
          <ProductTitle title={title} price={price} discount={discount} />
          <ProductDescription description={description} />

          {attributeValues.map((val, index) => {
            return (
              <ProductAttribute
                name={val.name}
                value={val.value}
                selectable={val.selectable}
                chart={val.chart}
                key={index}
              />
            );
          })}

          <ProductReturnsPolicy returnsPolicy={returnsPolicy} />
          <ProductAddToCart />
        </div>
      </div>
    </SwiperProvider>
  );
}
