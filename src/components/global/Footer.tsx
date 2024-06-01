import { navLinks, socialLinks } from "@/app/constants/constants";
import { InboxStackIcon } from "@heroicons/react/24/solid";
import { Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

type footerProps = {
  index: string;
  label: string;
  href: string;
  icon?: string;
  link?: string;
  alt?: string;
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center max-md:my-4 mt-8">
        <Image
          className="h-60 w-auto"
          src="/moonheart-logo.png" // Replace with your logo path
          alt="Company Logo"
          width={400}
          height={400}
        />
        <h1 className="text-2xl text-wrap">Moonheart Saniware</h1>
      </div>
      <nav className="w-full md:w-1/4 lg:w-1/3 flex flex-col items-start justify-center md:text-center max-md:items-center max-md:justify-center max-sm:hidden">
        <h2 className="text-lg pl-2 md:pl-7 m-2">
        Quick Links
        </h2>
      <ul className="flex flex-col max-md:flex-row max-md:items-center max-md:justify-center justify-between items-start px-4">
        {navLinks.map((links: footerProps) => (
            <li key={links.index} className="px-6 max-lg:px-3">
          <Link
            href={links.href}
            className="text-lg text-gray-400 hover:text-emerald-500 mb-2"
          >
            {links.label}
          </Link>
          </li>
        ))}
        </ul>
      </nav>
      <div className="w-full md:w-1/4 lg:w-1/3 flex flex-col items-start justify-center md:text-center max-md:items-center max-md:justify-center max-md:my-2 max-sm:hidden">
        <div className="flex flex-col items-center mb-2 max-md:justify-center">
        <h2 className="text-lg pl-2 md:pl-8 mt-4">
        Social Links
        </h2>
        <ul className="flex flex-col max-md:items-center max-md:justify-center justify-between items-start px-4">
          <SocialLinks/>
        </ul>
        </div>
      </div>
        <address className="w-full flex justify-center items-center text-wrap max-[390px]:hidden mt-4">
          123 Main Street, Anytown, CA 12345 395006
        </address>
      <div className="w-full text-center mt-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Moonheart Saniware. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
