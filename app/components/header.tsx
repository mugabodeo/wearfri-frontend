"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prevState) => !prevState);

  return !show ? (
    <nav className="flex items-center text-gray-50 bg-blue-800 p-2 sticky top-0">
      <Bars3Icon className="h-10 w-10 md:hidden mr-auto" onClick={handleShow} />
      <div className="hidden md:flex md:w-full">
        <div className="md:mr-auto">
          <Link href="/" className="md:text-2xl md:font-medium ">
            WEARFRI
          </Link>
        </div>
        <div className="md:flex md:px-20 md:gap-28 md:text-xl md:font-medium">
          <Link href="#howItWorksSection"> How it works </Link>
          <Link href="#contactUsSection"> Contact Us </Link>
          <Link href="#aboutUsSection"> About Us </Link>
        </div>
      </div>
      <div className="md:ml-auto">
        <form action="">
          <button className="border rounded-xl py-1 px-5 hover:ring hover:ring-gray-50 hover:shadow-md hover:shadow-gray-50 md:py-2 md:px-7 font-medium">
            Login
          </button>
        </form>
      </div>
    </nav>
  ) : (
    <nav className="fixed top-0 left-0 h-screen w-full bg-blue-800 text-gray-50 p-4 flex flex-col gap-10 md:hidden z-50">
      <XMarkIcon className="h-10 w-10 ml-auto" onClick={() => setShow(false)} />
      <div className="flex flex-col gap-5 items-center font-medium">
        <Link href="#howItWorksSection" onClick={handleShow}>
          How it works
        </Link>
        <Link href="#contactUsSection" onClick={handleShow}>
          Contact Us
        </Link>
        <Link href="#aboutUsSection" onClick={handleShow}>
          About Us
        </Link>
        <div className="md:ml-auto">
          <form action="">
            <button
              className="border rounded-xl py-2 px-8 hover:ring hover:ring-gray-50 hover:shadow-md hover:shadow-gray-50 md:py-2 md:px-7 font-medium"
              onClick={handleShow}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
