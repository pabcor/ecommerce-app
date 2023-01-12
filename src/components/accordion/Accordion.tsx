import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { ReactNode, useState } from "react";
import Heading from "../heading/Heading";

export type AccordionProps = {
  title: string;
  children?: ReactNode;
  isOpened: boolean;
};

export default function Accordion({
  title,
  children,
  isOpened = false,
}: AccordionProps) {
  const [isActive, setActive] = useState(isOpened);
  let content;
  let icon;

  const onClick = () => {
    setActive(!isActive);
  };

  if (isActive) {
    content = (
      <div className="overflow-y-auto mt-2 max-h-[400px] text-justify">
        {children}
      </div>
    );
    icon = <ChevronUpIcon className="w-4 h-4" />;
  } else {
    icon = <ChevronDownIcon className="w-4 h-4" />;
  }

  return (
    <div className="mb-4">
      <Heading as="h1" size="lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={onClick}
        >
          {title}
          {icon}
        </div>
      </Heading>
      <div className="text-gray-700">{content}</div>
    </div>
  );
}
