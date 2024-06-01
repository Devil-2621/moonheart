import Nav from "./Nav";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-white/80 flex justify-between max-md:justify-between items-center sticky top-0 z-50 backdrop-filter backdrop-blur-sm">
      <Link href="/">
        <div className=" flex justify-center items-center p-4 mx-10 relative lg:text-lg max-lg:mx-4 cursor-pointer">
          <Image
            src="/moonheart-logo.png"
            alt="logo"
            width={32}
            height={24}
          />
          <span className="font-normal px-2 text-xl">
          Moonheart
          </span>
        </div>
      </Link>
      <Nav />
      <Button
        label="Let's Talk"
        className="bg-emerald-500 hover:bg-emerald-600 transition hover:scale-105 duration-300 ease-in-out text-white font-light h-16 px-8 max-md:hidden rounded-sm" icon={(<ArrowRightIcon className="ml-2 h-5 w-5 transition-all ease-in-out duration-300 group-hover:transform group-hover:-rotate-45" />)}>
        </Button>
    </header>
  );
};

export default Header;
