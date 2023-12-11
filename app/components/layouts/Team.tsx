import React from "react";
import UncleBarberTitle from "../ui/UncleBarberTitle";
import WoodenFrame from "../ui/WoodenFrame";

const Team = () => {
  return (
    <>
      <div className="my-16 space-y-8">
        <UncleBarberTitle h1Text="OUR TEAM" />
        <div className=" flex justify-start items-center flex-col md:flex-row md:space-y-0 space-y-8 lg:space-x-0">
          <WoodenFrame backgroundImage="/Barber_1.png" />
          <WoodenFrame backgroundImage="/Barber_2.png" />
          <WoodenFrame backgroundImage="/Barber_3.png" />
        </div>
      </div>
    </>
  );
};

export default Team;
