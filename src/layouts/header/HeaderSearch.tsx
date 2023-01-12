import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HeaderSearch() {
  return (
    <div className="hidden md:flex flex-1">
      <div className="relative w-full rounded-sm border-b">
        <input
          className="p-2 bg-gray-50 w-full"
          type="text"
          placeholder="¿Qué estás buscando?"
        />

        <MagnifyingGlassIcon className="absolute top-2 right-2.5 cursor-pointer w-6 h-6" />
      </div>
    </div>
  );
}
