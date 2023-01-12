import { SwiperContext, SwiperContextType } from "@/contexts/SwiperContext";
import { useContext, useState } from "react";
import SelectorItem from "./SelectorItem";

export type SelectorProps = {
  label: string;
  required?: boolean;
  items: SelectorItemProps[];
};

export type SelectorItemProps = {
  id: number;
  value: string;
};

export default function Selector({
  label,
  required = false,
  items,
}: SelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { swiper } = useContext(SwiperContext) as SwiperContextType;

  const onClick = (id: number, index: number) => {
    setActiveIndex(index);

    if (swiper && required) {
      const item = document.querySelector(`#${label}[data-id="${id}"]`);
      if (!item) {
        return;
      }

      const dataIndex = item.getAttribute("data-index");
      if (!dataIndex) {
        return;
      }

      swiper.slideTo(+dataIndex);
    }
  };

  return (
    <div className="flex items-center gap-3 ml-1">
      {items.map((item, index) => {
        return (
          <SelectorItem
            id={item.id}
            label={label}
            value={item.value}
            index={index}
            activeIndex={activeIndex}
            onClick={onClick}
            key={index}
          />
        );
      })}
    </div>
  );
}
