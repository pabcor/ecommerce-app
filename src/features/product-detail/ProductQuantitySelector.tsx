import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function QuantitySelector() {
  const [count, setCount] = useState(1);

  const increaseCount = () =>
    setCount((count) => (count < 99 ? count + 1 : 99));

  const decreaseCount = () => setCount((count) => (count > 1 ? count - 1 : 1));

  return (
    <div className="flex items-center gap-2">
      <MinusIcon
        className="flex justify-center items-center cursor-pointer rounded-sm w-6 h-6 bg-gray-200"
        onClick={decreaseCount}
      />
      <div className="relative border rounded-sm w-16 h-full text-2xl">
        <input
          className="bg-white w-full h-full text-center"
          type="number"
          value={count}
          min="1"
          max="99"
          disabled
        />
      </div>
      <PlusIcon
        className="flex justify-center items-center cursor-pointer rounded-sm w-6 h-6 bg-gray-200"
        onClick={increaseCount}
      />
    </div>
  );
}
