import HeaderPrimaryNavItem from "./HeaderPrimaryNavItem";

export default function HeaderPrimaryNav() {
  const runCallback = (cb: any) => {
    return cb();
  };

  return (
    <nav className="hidden lg:block mb-3 bg-white">
      <div className="container px-2.5">
        <ul className="flex justify-center whitespace-nowrap">
          {runCallback(() => {
            const row = [];

            for (let i = 0; i < 6; i++) {
              row.push(<HeaderPrimaryNavItem key={i} />);
            }

            return row;
          })}
        </ul>
      </div>
    </nav>
  );
}
