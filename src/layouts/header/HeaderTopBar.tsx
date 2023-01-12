import HeaderTopBarLinks from "./HeaderTopBarLinks";
import HeaderTopBarSwitch from "./HeaderTopBarSwitch";

export default function HeaderTopBar() {
  return (
    <div className="hidden lg:block bg-gray-200/30">
      <div className="container px-2.5">
        <div className="flex justify-between items-center min-h-[2rem] text-sm">
          <HeaderTopBarSwitch />
          <HeaderTopBarLinks />
        </div>
      </div>
    </div>
  );
}
