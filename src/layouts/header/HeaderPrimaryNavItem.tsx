export default function HeaderPrimaryNavItem() {
  return (
    <li className="relative px-5 py-2.5 group cursor-pointer">
      <div className="relative after:block after:invisible after:absolute after:-bottom-2.5 after:border-black after:border-b after:w-full group-hover:after:visible">
        <span>Sed vestibulum</span>
      </div>
    </li>
  );
}
