import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
  return (
    <button
      className="
      flex justify-center items-center gap-2
      ease-in-out transition duration-150
      shadow-sm rounded-sm py-2 px-3
      bg-indigo-600 cursor-pointer
      text-lg font-semibold whitespace-nowrap text-white
      hover:bg-indigo-700"
    >
      {children}
    </button>
  );
}
