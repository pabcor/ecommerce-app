import { createContext, PropsWithChildren, useState } from "react";
import Swiper from "swiper";

export type SwiperContextType = {
  swiper: Swiper | null;
  saveSwiper: (swiper: Swiper) => void;
};

export const SwiperContext = createContext<SwiperContextType | null>(null);

export default function SwiperProvider({ children }: PropsWithChildren) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const saveSwiper = (swiper: Swiper) => setSwiper(swiper);

  return (
    <SwiperContext.Provider value={{ swiper, saveSwiper }}>
      {children}
    </SwiperContext.Provider>
  );
}
