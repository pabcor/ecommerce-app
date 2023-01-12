export type SelectorItemProps = {
  id: number;
  label: string;
  value: string;
  index: number;
  activeIndex: number;
  onClick: (id: number, index: number) => void;
};

const activeClass = "outline outline-offset-2 outline-2 outline-indigo-500";
const defaultClass =
  "flex justify-center items-center cursor-pointer p-2 h-8 bg-gray-200 rounded-sm";

export default function SelectorItem({
  id,
  label,
  value,
  index,
  activeIndex,
  onClick,
}: SelectorItemProps) {
  const setActiveIndex = () => {
    onClick(id, index);
  };

  return (
    <div
      id={label}
      data-index={index}
      data-id={id}
      className={`${defaultClass} ${index === activeIndex ? activeClass : ""}`}
      onClick={setActiveIndex}
    >
      {value}
    </div>
  );
}
