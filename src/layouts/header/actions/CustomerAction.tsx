import { UserIcon } from "@heroicons/react/24/outline";

export default function CustomerAction() {
  return (
    <div>
      <div className="flex cursor-pointer whitespace-nowrap">
        <UserIcon className="w-6 h-6" />
      </div>

      <div className="hidden">
        <ul>
          <li>
            <span>Crear cuenta</span>
          </li>

          <li>
            <span>Iniciar sesión</span>
          </li>

          <li>
            <span>Rastreá mi orden</span>
          </li>

          <li>
            <span>Agendá mi envío</span>
          </li>

          <li>
            <span>Encontrar la tienda más cercana</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
