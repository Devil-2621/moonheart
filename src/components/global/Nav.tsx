'use client'

import Link from "next/link";
import { navLinks } from "@/app/constants/constants";
import { AnimatedHamburgerMenu } from "./AnimatedHamburgerMenu";

interface navlinks {
  index: string;
  label: string;
  href: string;
}


const Nav: React.FC = () => {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-between items-center px-4 max-md:hidden">
        {navLinks.map((links: navlinks) => (
          <li key={links.index} className="px-6 max-lg:px-3">
            <Link
              href={links.href}
              className="hover:text-emerald-500 hover:underline underline-offset-4"
            >
              {links.label}
            </Link>
          </li>
        ))}
      </ul>
      <AnimatedHamburgerMenu />
    </nav>
  );
};

export default Nav;
