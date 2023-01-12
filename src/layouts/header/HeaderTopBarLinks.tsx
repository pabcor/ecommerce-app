import Link from "next/link";

export default function HeaderTopBarLinks() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">Acerca de nosotros</Link>
      </li>

      <li>
        <Link href="/">Nuestras sucursales</Link>
      </li>

      <li>
        <Link href="/">Atención al cliente</Link>
      </li>

      <li>
        <Link href="/">Nuestros servicios</Link>
      </li>

      <li>
        <Link href="/">Rastréa tu orden</Link>
      </li>
    </ul>
  );
}
