import React from "react";
import Image from "next/image";
import { brandLogos } from "../utils/index";

const LogoSlider = () => {
  const renderSliderContent = () => (
    <>
      {brandLogos.map((logo) => (
        <li
          key={logo.id}
          className="mx-16 space-x-3 w-32"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={128} // Nastavte reálnou šířku obrázku
            height={32}
            className="w-32"
          />
        </li>
      ))}
    </>
  );

  return (
    <div className="w-full overflow-hidden relative">
      <ul className="flex items-center justify-start animate-infinite-scroll">
        {renderSliderContent()}
        {renderSliderContent()}
        {renderSliderContent()} {/* Duplikace obsahu pro nekonečný efekt */}
      </ul>
    </div>
  );
};

export default LogoSlider;
