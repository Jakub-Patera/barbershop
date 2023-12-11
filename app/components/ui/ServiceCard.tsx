import React from "react";
import Image from "next/image";
import CurlSVG from "/public/curl.svg";
import { services } from "../../data/index";
import UncleBarberTitle from "./UncleBarberTitle";

const ServiceCard: React.FC = () => {
  return (
    <div className="flex justify-center flex-col py-32   w-screen px-48 bg-[#7D887A] text-white">
      <div className=" flex flex-row justify-center items-center space-x-10 mb-16">
        <UncleBarberTitle h1Text="OUR PREMIUM SERVICES" />
      </div>
      <div className="flex justify-center items-center flex-col space-y-8 lg:flex-row lg:justify-evenly lg:items-stretch lg:space-y-0 lg:space-x-16  ">
        <div className="w-1/2 flex justify-center flex-col items-center">
          <h4 className="text-[32px] uppercase play-font font-light mb-4 whitespace-nowrap">
            HairCut
          </h4>
          <div className="">
            {services
              .filter((service) => service.kind === "Shawecut")
              .map((service) => (
                <div
                  key={service.name}
                  className="flex justify-between my-4 border-b pb-2 space-x-44 whitespace-nowrap"
                >
                  <span className="play-font text-sm pr-20 w-full ">
                    {service.name}
                  </span>
                  <span className="play-font font-base text-sm">
                    <span className=" text-base">$</span>
                    {service.price}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="w-1/2 flex justify-center flex-col items-center">
          <h4 className="text-[32px] uppercase play-font font-light mb-4 whitespace-nowrap">
            Shawecut
          </h4>
          <div className="">
            {services
              .filter((service) => service.kind === "Shawecut")
              .map((service) => (
                <div
                  key={service.name}
                  className="flex justify-between my-4 border-b pb-2 space-x-44 whitespace-nowrap"
                >
                  <span className="play-font text-sm pr-20 w-full ">
                    {service.name}
                  </span>
                  <span className="play-font font-base text-sm">
                    <span className=" text-base">$</span>
                    {service.price}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
