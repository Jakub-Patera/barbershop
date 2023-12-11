import React from "react";
import Image from "next/image";
import CurlSVG from "/public/curl.svg";

// Definice rozhraní pro props
interface UncleBarberTitleProps {
  h1Text: string;
}

const UncleBarberTitle: React.FC<UncleBarberTitleProps> = ({ h1Text }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="curly-font whitespace-nowrap">Uncle Barber</h3>
      <h1 className="uppercase play-font tracking-wide text-md leading-9 md:text-left text-center whitespace-nowrap">
        {h1Text}
      </h1>
      <Image
        src={CurlSVG}
        alt="curl"
        width={250}
        height={120}
        className="pt-4"
      />
    </div>
  );
};

export default UncleBarberTitle;
