"use client";
import React from "react";
import { Metadata } from "next";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import "./globals.css";
import { Anton, Barlow } from "next/font/google";
// export const metadata: Metadata = {
//   title: "Uncle BarberShop ",
//   description: "Best London Barbershop from 2012",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen flex justify-center flex-col items-center scrollbar-hide ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
