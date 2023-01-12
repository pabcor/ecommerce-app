import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useSwiper } from "swiper/react";

export default function SliderVerticalNextControl() {
  const swiper = useSwiper();

  return (
    <ChevronUpIcon
      className="absolute z-10 right-1/2 top-0 cursor-pointer -mr-3 w-6 h-6 text-gray-700"
      onClick={() => swiper.slideNext()}
    />
  );
}
