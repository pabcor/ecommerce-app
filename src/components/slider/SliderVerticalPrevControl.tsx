import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSwiper } from "swiper/react";

export default function SliderVerticalPrevControl() {
  const swiper = useSwiper();

  return (
    <ChevronDownIcon
      className="absolute z-10 left-1/2 bottom-0 cursor-pointer -ml-3 w-6 h-6 text-gray-700"
      onClick={() => swiper.slidePrev()}
    />
  );
}
