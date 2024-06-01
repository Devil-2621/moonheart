import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import { galleryCarousel } from "@/app/constants/constants";
import Image from "next/image";

type carouselProps = {
  index: string;
  img: string;
  alt: string;
};

const GalleryCarousel = () => {
  return (
    <Carousel
      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1800,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        }),
      ]}
    >
      <CarouselContent>
        {galleryCarousel.map((props: carouselProps) => (
          <CarouselItem key={props.index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4 rounded-sm">
                  <Image
                    src={props.img}
                    alt={props.alt}
                    width={500}
                    height={500}
                    className="rounded-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GalleryCarousel;
