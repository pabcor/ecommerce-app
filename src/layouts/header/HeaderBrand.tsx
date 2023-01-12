import Image from "next/image";
import Link from "next/link";

export default function HeaderBrand() {
  return (
    <div className="hidden lg:flex flex-1">
      <Link href="/">
        <Image alt="Aliquam" src="/logo.png" width={250} height={40} />
      </Link>
    </div>
  );
}
