import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

const AboutBoard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mx-32 mt-32 ">
      {/* text section on left  */}
      <div className=" flex justify-center items-center  flex-col text-center ">
        <div className=" flex flex-row justify-center items-center space-x-10">
          <div className="flex justify-center items-center md:justify-start md:items-start flex-col">
            <h3 className=" curly-font text-black/60">Uncle Barber</h3>
            <h1 className="uppercase play-font tracking-wide text-md leading-9 md:text-left ">
              Perfect Gentleman BarberShop
            </h1>
            <Image
              src={"/curl.svg"}
              alt="curl"
              width={250}
              height={120}
              className=" "
            />
            <p className="play-font text-base pt-10 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, doloremque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, doloremque. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum, doloremque.
            </p>
          </div>

          <Image
            src={"/opening_frame.svg"}
            alt="hero"
            width={6642}
            height={7163}
            className=" h-full w-full hidden lg:flex justify-center items-center"
          />
        </div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#7D887A",
            color: "white",
            fontSize: "1rem",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex justify-center items-center my-24 uppercase play-font"
        >
          Booking
        </Button>
      </div>
      {/* Image on the rigth */}
    </div>
  );
};

export default AboutBoard;
