import HeaderSecondaryNavItem from "./HeaderSecondaryNavItem";

export default function HeaderSecondaryNav() {
  const runCallback = (cb: any) => {
    return cb();
  };

  return (
    <nav className="hidden lg:block relative bg-white border-y">
      <div className="container">
        <ul className="flex justify-center whitespace-nowrap">
          {runCallback(() => {
            const row = [];

            for (let i = 0; i < 9; i++) {
              row.push(<HeaderSecondaryNavItem key={i} />);
            }

            return row;
          })}
        </ul>
      </div>
    </nav>
  );
}
