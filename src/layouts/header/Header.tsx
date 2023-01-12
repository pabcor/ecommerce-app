import Actions from "./actions/Actions";
import HeaderBrand from "./HeaderBrand";
import HeaderPrimaryNav from "./HeaderPrimaryNav";
import HeaderSearch from "./HeaderSearch";
import HeaderSecondaryNav from "./HeaderSecondaryNav";
import HeaderToggle from "./HeaderToggle";
import HeaderTopBar from "./HeaderTopBar";

export default function Header() {
  return (
    <div className="border-b lg:border-none">
      <HeaderTopBar />
      <div className="container sm:max-w-full md:max-w-full lg:max-w-[1024px] xl:max-w-[1280px] px-2.5">
        <div className="flex gap-x-2.5 items-center pt-6 pb-3">
          <HeaderBrand />
          <HeaderToggle />
          <HeaderSearch />
          <Actions />
        </div>
      </div>

      <HeaderPrimaryNav />
      <HeaderSecondaryNav />
    </div>
  );
}
