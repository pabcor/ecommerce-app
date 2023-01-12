import Image from "next/image";

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ResponsiveImageProps = {
  desktop: ImageProps;
  mobile: ImageProps;
};

export default function ResponsiveImage({
  desktop,
  mobile,
}: ResponsiveImageProps) {
  return (
    <>
      <Image
        className="lg:hidden block"
        src={mobile.src}
        alt={mobile.alt}
        width={mobile.width}
        height={mobile.height}
        priority
      />

      <Image
        className="hidden lg:block"
        src={desktop.src}
        alt={desktop.alt}
        width={desktop.width}
        height={desktop.height}
        priority
      />
    </>
  );
}
