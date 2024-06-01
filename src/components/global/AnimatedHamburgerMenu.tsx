import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { navLinks } from "../../app/constants/constants";
import Link from "next/link";

interface navlinks {
  index: string;
  label: string;
  href: string;
}

export const AnimatedHamburgerMenu = () => {
  return (
    <div className="md:hidden grid place-content-center mx-8 w-6 h-6">
      <AnimatedHamburgerButton />
      
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-10 w-6 rounded-full transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-5 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-5 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-2 bg-black"
          style={{
            x: "-120%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
      <motion.div className={`md:hidden absolute -z-50 top-12 left-0 bg-white/95 backdrop-blur-sm h-fit list-none w-full ${ !active ? '-translate-y-72 transition-transform duration-300' : 'transition-transform duration-300' }`}>
      <ul className='flex flex-col justify-center items-center space-y-4 m-4'>
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
      </motion.div>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "73.4%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
