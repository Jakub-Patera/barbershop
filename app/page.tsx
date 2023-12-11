"use client";
import Image from "next/image";
import LogoSlider from "./components/LogoSlider";
import Navigation from "./components/Navigation";
import { TeamMember } from "./data";
import { useEffect, useState } from "react";
import { getTeamMembers } from "./api/team-members";
import TeamMemberCard from "./components/ui/TeamMemberCard";
import Hero from "./components/ui/Hero";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AboutBoard from "./components/ui/AboutBoard";
import ServiceCard from "./components/ui/ServiceCard";
import GalleryCuts from "./components/ui/GalleryCuts";
import Team from "./components/layouts/Team";
export default function Home() {
  return (
    <>
      <div className=" bg-[#e9e9d2] overflow-hidden">
        <div className="text-4xl flex justify-center items-center w-screen flex-col">
          {/* Hero section */}

          <div className=" flex flex-col justify-center">
            <Hero
              backgroundImage="/hero.jpg"
              logo="/logo.svg"
              ctaText="Book Now"
              ctaOnClick={() => {
                // Your click handler logic here
              }}
            />
          </div>
          <div className=" flex justify-center pt-16 min-h-64 overflow-hidden relative ">
            {/* Logos of brans  */}
            <LogoSlider />
          </div>
          <AboutBoard />
          <ServiceCard />
          <GalleryCuts />
          <Team />
        </div>
      </div>
    </>
  );
}
