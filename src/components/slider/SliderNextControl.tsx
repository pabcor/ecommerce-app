import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSwiper } from "swiper/react";

export default function SliderNextControl() {
  const swiper = useSwiper();

  return (
    <ChevronRightIcon
      className="absolute z-10 top-1/2 right-0 cursor-pointer -mt-[18px] w-6 h-6 text-gray-700"
      onClick={() => swiper.slideNext()}
    />
  );
}
