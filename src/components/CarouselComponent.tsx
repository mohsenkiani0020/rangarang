"use client";
import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testImage = [
  {
    id: 1,
    src: "/image/product/1/product1.jpg",
  },
  {
    id: 2,
    src: "/image/product/1/product2.jpg",
  },
  {
    id: 3,
    src: "/image/product/1/product1.jpg",
  },
];

function CarouselComponent() {
  return (
    <div className="px-16 w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
        dir="rtl"
      >
        <CarouselContent>
          {testImage.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-full">
              <div className="p-1">
                <Image
                  src={image.src}
                  alt={`product-${image.id}`}
                  width={500}
                  height={500}
                  className="object-contain rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
