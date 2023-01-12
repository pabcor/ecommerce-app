import { OverlayContext, OverlayContextType } from "@/contexts/OverlayContext";
import { useContext } from "react";
import HeaderSecondaryNavChildItem from "./HeaderSecondaryNavChildItem";

export default function HeaderSecondaryNavItem() {
  const { setActive } = useContext(OverlayContext) as OverlayContextType;

  const runCallback = (cb: any) => {
    return cb();
  };

  return (
    <li
      className="px-5 py-2.5 group"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="relative after:block after:invisible after:absolute after:z-30 after:-bottom-[11px] after:border-b after:border-white after:w-full group-hover:after:visible cursor-pointer">
        <span>Morbi vitae</span>
      </div>

      <div className="invisible group-hover:visible absolute z-40 top-full left-0 right-0 overflow-y-hidden text-base text-black font-medium">
        <div className="container overflow-x-auto bg-white border">
          <div className="flex columns-5">
            {runCallback(() => {
              const row = [];

              for (let i = 0; i < 5; i++) {
                row.push(<HeaderSecondaryNavChildItem key={i} />);
              }

              return row;
            })}
          </div>
        </div>
      </div>
    </li>
  );
}
