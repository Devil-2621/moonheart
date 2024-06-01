import { ArrowUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleToTop}
      className={`fixed bottom-10 right-10 w-10 h-10 rounded-full bg-emerald-300 hover:bg-emerald-500 text-gra-600 p-2 border-2 border-gray-600 animate-bounce focus:outline-none ${
        !isVisible ? "hidden" : ""
      }`}
    >
      <ArrowUpIcon className="w-100 h-100"/>
    </button>
  );
};

export default BackToTopButton;
