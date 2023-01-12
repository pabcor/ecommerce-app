import ResponsiveImage, { ResponsiveImageProps } from "./ResponsiveImage";

export default function fallbackImage({
  desktop,
  mobile,
}: ResponsiveImageProps) {
  return (
    <div className="relative">
      <ResponsiveImage desktop={desktop} mobile={mobile} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl whitespace-nowrap">
        No hay fotos disponibles
      </div>
    </div>
  );
}
