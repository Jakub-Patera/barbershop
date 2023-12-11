import { galleryImages } from "@/app/utils";
import Image from "next/image";
import React from "react";
import UncleBarberTitle from "./UncleBarberTitle";

const GalleryCuts = () => {
  return (
    <>
      <div className="max-w-screen h-auto overflow-hidden space-y-8 mt-32">
        <UncleBarberTitle h1Text="OUT POPULAR STYLES" />
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2  grid-rows-2 gap-0 ">
          {galleryImages.map((shave) => (
            <div
              key={shave.id}
              className="relative h-96 w-96 overflow-hidden aspect-square"
            >
              {/* Obrázek */}
              <Image
                src={shave.src}
                alt={shave.alt}
                // height={500}
                // width={500}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 ease-in-out aspect-square h-96 w-96 "
              />
              {/* Text bude zobrazen při najetí myši na obrázek */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex justify-center items-center hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl">{shave.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryCuts;
