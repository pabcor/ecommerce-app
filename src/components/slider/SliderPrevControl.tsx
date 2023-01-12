import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useSwiper } from "swiper/react";

export default function SliderPrevControl() {
  const swiper = useSwiper();

  return (
    <ChevronLeftIcon
      className="absolute z-10 top-1/2 left-0 cursor-pointer -mt-[18px] w-6 h-6 text-gray-700"
      onClick={() => swiper.slidePrev()}
    />
  );
}
