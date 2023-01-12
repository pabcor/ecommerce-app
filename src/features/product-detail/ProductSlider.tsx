import { ResponsiveImageProps } from "@/components/images/ResponsiveImage";
import Slider, { SlideProps } from "@/components/slider/Slider";

export type ProductSliderProps = {
  images: SlideProps[];
};

const fallbackImage: ResponsiveImageProps = {
  desktop: {
    src: "/product-400x600.png",
    alt: "No hay fotos disponibles",
    width: 400,
    height: 600,
  },
  mobile: {
    src: "/product-300x400.png",
    alt: "No hay fotos disponibles",
    width: 300,
    height: 400,
  },
};

export default function ProductSlider({ images }: ProductSliderProps) {
  return (
    <div className="lg:sticky lg:top-4 lg:z-10 lg:h-fit lg:max-h-slider flex justify-center">
      <Slider images={images} fallbackImage={fallbackImage} thumbs={true} />
    </div>
  );
}
