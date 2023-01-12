import { HeartIcon } from "@heroicons/react/24/outline";

export default function WishlistAction() {
  return (
    <div>
      <div className="flex cursor-pointer">
        <HeartIcon className="w-6 h-6" />
        <span>0</span>
      </div>

      <div className="hidden">
        <b>¿Algo te llamó la atención?</b>

        <p>
          <a href="#">Iniciá sesión</a>
          para guardar tus artículos más deseados o ver los artículos que
          agregaste usando otra computadora o dispositivo.
        </p>

        <a href="#">Iniciar sesión</a>
      </div>
    </div>
  );
}
