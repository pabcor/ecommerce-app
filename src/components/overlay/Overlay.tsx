import { OverlayContext, OverlayContextType } from "@/contexts/OverlayContext";
import { useContext } from "react";

export default function Overlay() {
  const { isActive } = useContext(OverlayContext) as OverlayContextType;

  return (
    <div
      className={`overlay absolute z-20 top-0 bottom-0 left-0 right-0 transition-opacity duration-500 bg-black/30 ${
        isActive ? "opacity-100 block" : "opacity-0 hidden"
      }`}
    ></div>
  );
}
