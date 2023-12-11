import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface HeroProps {
  backgroundImage: string;
  logo: string;
  ctaText: string;
  ctaOnClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  logo,
  ctaText,
  ctaOnClick,
}) => {
  return (
    <div className=" flex justify-center items-center w-screen top-0 left-0 ">
      <div
        style={{
          backgroundImage: "url(/hero.jpg)",
          // opacity: 0.5,

          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="bg-black/80 flex justify-center flex-col items-center w-screen h-screen   pt-12 space-y-20 xl:pt-32 lg:space-y-6">
          <Image
            src={"/logo.svg"}
            height={33}
            width={650}
            alt="Logo"
            style={{ maxWidth: "50%", marginBottom: "2rem" }}
          />
          {/* //TODO: configurate button to open calendar with order
          
          //TODO: button center with icons 
          //FIXME: button color

           */}
          <Button
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            style={{
              backgroundColor: "#FFC107",
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="flex justify-center items-center"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
