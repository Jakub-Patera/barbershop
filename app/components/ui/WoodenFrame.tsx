import React from "react";
import Image from "next/image";

interface WoodenFrameProps {
  backgroundImage: string;
}

const WoodenFrame: React.FC<WoodenFrameProps> = ({ backgroundImage }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 h-96 overflow-hidden ">
        <Image
          src={"/wooden_frame.png"}
          layout="fill"
          objectFit="contain"
          alt="wooden frame"
          className="absolute z-20 overflow-hidden "
        />
        <Image
          src={backgroundImage}
          alt="Oříznutý obrázek"
          layout="fill"
          objectFit="contain" // Tato vlastnost zajišťuje, že obrázek bude pokrývat celý prostor a ořízne se, pokud je to nutné
          className="absolute z-10 "
        />
      </div>
    </div>
  );
};

export default WoodenFrame;
