import { SwiperContext, SwiperContextType } from "@/contexts/SwiperContext";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { PhotoSwipeOptions } from "photoswipe";
//@ts-ignore
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import {
  cloneElement,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import Swiper, { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  Swiper as SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "swiper/react";
import { SwiperModule } from "swiper/types";
import FallbackImage from "../images/FallbackImage";
import ResponsiveImage, {
  ResponsiveImageProps,
} from "../images/ResponsiveImage";
import SliderNextControl from "./SliderNextControl";
import SliderPrevControl from "./SliderPrevControl";
import SliderVerticalNextControl from "./SliderVerticalNextControl";
import SliderVerticalPrevControl from "./SliderVerticalPrevControl";
import { renderToString } from "react-dom/server";

export type SliderProps = {
  images: SlideProps[];
  fallbackImage: ResponsiveImageProps;
  thumbs: boolean;
};

export type SlideProps = {
  id: number;
} & ResponsiveImageProps;

export default function Slider({ images, fallbackImage, thumbs }: SliderProps) {
  const { saveSwiper, swiper } = useContext(SwiperContext) as SwiperContextType;
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  let thumbsSlider;

  let props: SwiperProps = {
    className: "w-full",
    allowTouchMove: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1,
    modules: [Navigation],
    onSwiper: saveSwiper,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  };

  if (thumbs) {
    props = {
      ...props,
      modules: [...(props.modules as SwiperModule[]), Thumbs],
      thumbs: {
        // fix TypeError: can't convert undefined to object
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
      },
    };

    const onThumbClick = (index: number) => (event: MouseEvent) => {
      if (swiper) {
        swiper.slideTo(index);
      }
    };

    thumbsSlider = (
      <SwiperComponent
        className="w-full hidden md:block"
        slidesPerView={4}
        spaceBetween={8}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        breakpoints={{
          1024: {
            direction: "vertical",
            height: 620,
          },
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              data-id={image.id}
              className="flex justify-center cursor-pointer"
              onClick={onThumbClick(index)}
              key={index}
            >
              <ResponsiveImage desktop={image.desktop} mobile={image.mobile} />
            </SwiperSlide>
          );
        })}

        <div className="lg:hidden">
          <SliderNextControl />
          <SliderPrevControl />
        </div>

        <div className="hidden lg:block">
          <SliderVerticalNextControl />
          <SliderVerticalPrevControl />
        </div>
      </SwiperComponent>
    );
  }

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      initialZoomLevel: "fit",
      maxZoomLevel: 1,
      secondaryZoomLevel: 1.5,
      showHideAnimationType: "none",
      zoomAnimationDuration: false,
      arrowPrevSVG: renderToString(
        <ChevronLeftIcon className="absolute top-1/2 left-5 -mt-4 w-8 h-8 text-white" />
      ),
      arrowNextSVG: renderToString(
        <ChevronRightIcon className="absolute top-1/2 left-5 -mt-4 w-8 h-8 text-white" />
      ),
      closeSVG: renderToString(
        <XMarkIcon className="absolute top-1/2 left-2 -mt-4 w-8 h-8 text-white" />
      ),
      zoomSVG: renderToString(
        <MagnifyingGlassPlusIcon className="absolute top-1/2 left-2 -mt-4 w-8 h-8 text-white" />
      ),
      counter: false,
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.5,
    } as PhotoSwipeOptions);
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, []);

  let mainSlider = cloneElement(
    <SwiperComponent className="pswp-gallery" id="gallery">
      {images.map((image, index) => {
        return (
          <SwiperSlide
            data-id={image.id}
            className="flex justify-center"
            key={index}
          >
            <a
              className="cursor-zoom-in w-full h-full"
              href={image.desktop.src}
              data-pswp-width={image.desktop.width}
              data-pswp-height={image.desktop.height}
              key={`#gallery-${index}`}
              target="_blank"
              rel="noreferrer"
            >
              <ResponsiveImage desktop={image.desktop} mobile={image.mobile} />
            </a>
          </SwiperSlide>
        );
      })}

      <SliderNextControl />
      <SliderPrevControl />
    </SwiperComponent>,
    props
  );

  if (images.length === 0) {
    return (
      <FallbackImage
        desktop={fallbackImage.desktop}
        mobile={fallbackImage.mobile}
      />
    );
  }

  return thumbs ? (
    <div className="grid lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr] gap-4">
      {mainSlider}
      {thumbsSlider}
    </div>
  ) : (
    mainSlider
  );
}
