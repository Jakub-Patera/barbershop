import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navigationLinks } from "../utils";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Navigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderDropdownMenu = () => {
    return (
      <DropdownMenu
        aria-label="Navigation Links"
        variant="light"
        color="primary"
        className="pr-8 rounder-md "
      >
        {navigationLinks.map((link) => (
          <DropdownItem
            key={link.label}
            className=" py-3 px-6 bg-black/80 hover:bg-black/90 first:rounded-t-xl last:rounded-b-xl "
          >
            <Link
              href={link.href}
              className=""
            >
              <p className="text-2xl text-right leading-loose uppercase text-white ">
                {link.label}
              </p>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    );
  };

  return (
    <nav className="container play-font flex justify-end pr-12 ">
      <div className="navigation relative md:flex  ">
        {isSmallScreen ? (
          <Dropdown>
            <DropdownTrigger
              as={Button}
              variant="bordered"
            >
              <Image
                src="/menu-burger.svg"
                alt="menu"
                width={32}
                height={32}
                className=" h-16 w-16    "
              />
            </DropdownTrigger>
            {renderDropdownMenu()}
          </Dropdown>
        ) : (
          <ul className="space-x-6 lg:space-x-12 flex ">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <p className="block md:inline">{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
