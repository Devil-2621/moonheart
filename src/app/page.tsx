"use client";

import Header from "@/components/global/Header";
import Button from "@/components/global/Button";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import GalleryCarousel from "@/components/global/GalleryCarousel";
import Footer from "@/components/global/Footer";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import BackToTopButton from "@/components/global/BackToTopButton";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  } else {
    console.warn(`Element with ID "${sectionId}" not found.`);
  }
};

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Header />
      <section className="w-full bg-stone-50" id="home">
        <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-8 py-12 md:flex-row md:py-24">
          <div className="flex flex-col items-start max-md:items-center max-md:text-center max-md:text-wrap gap-6 md:max-w-md">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Elevate Your Bathroom with Moonheart Saniware
            </h1>
            <p className="text-gray-500 md:text-xl">
              Discover our premium collection of washbasins, saniware, and
              ceramic products that redefine luxury and functionality.
            </p>
            <Button
              label="Explore Now"
              className="mt-4 bg-emerald-500 text-white font-light hover:bg-emerald-600 hover:scale-110 transition duration-300 ease-in-out rounded-sm"
              icon={
                <ArrowLongRightIcon className="ml-2 h-6 w-6 transition-all ease-in-out duration-300 group-hover:transform group-hover:translate-x-2" />
              }
              onClick={() => scrollToSection("products")}
            />
          </div>
          <Image
            alt="Hero Image"
            className="aspect-square max-md:aspect-auto w-full max-w-md rounded-lg object-cover md:max-w-none"
            height={600}
            src="/hero-1.png"
            width={600}
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Product Lines
            </h2>
            <p className="max-w-md text-gray-500 md:text-xl">
              Explore our diverse range of washbasins, saniware, and ceramic
              products that cater to every style and preference.
            </p>
          </div>
          <Carousel
            className="mt-8 w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2800,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 px-8">
                  <Image
                    alt="Product 1"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    height={300}
                    src="/hero-1.png"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-xl font-bold">Washbasins</h3>
                    <p className="text-gray-500">
                      Elegant and durable washbasins for a modern bathroom.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 px-4">
                  <Image
                    alt="Product 2"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    height={300}
                    src="/hero-1.png"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-xl font-bold">Saniware</h3>
                    <p className="text-gray-500">
                      High-quality saniware for a seamless bathroom experience.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center gap-4 px-4">
                  <Image
                    alt="Product 3"
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    height={300}
                    src="/hero-1.png"
                    width={400}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-xl font-bold">Ceramic Products</h3>
                    <p className="text-gray-500">
                      Exquisite ceramic products for a touch of elegance.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="w-full bg-stone-50 py-12 md:py-24">
        <div className="container mx-auto px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              alt="About Us"
              className="aspect-square max-md:aspect-video lg:mt-4 w-full rounded-lg object-cover"
              height={200}
              src="/hero-1.png"
              width={400}
            />
            <div className="flex flex-col items-start justify-center max-md:items-center md:text-wrap gap-8 md:ml-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Moonheart Saniware
              </h2>
              <p className="text-gray-500 md:text-lg text-left">
                Moonheart Saniware is a leading manufacturer of premium
                washbasins, saniware, and ceramic products. Founded in 1985, we
                have a rich heritage of craftsmanship and innovation, delivering
                exceptional quality and design to our customers.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our commitment to sustainability and environmental
                responsibility is at the core of our business. We use
                eco-friendly materials and production processes to minimize our
                carbon footprint and contribute to a greener future.
              </p>
              <Button
                label="Know More"
                className="px-6 py-2 font-light text-black rounded-sm border-2 border-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white w-fit transition-all shadow-[-3px_3px_3px_black] hover:shadow-none hover:-translate-x-[3px] hover:translate-y-[3px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-emerald-50" id="products">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Product Categories
            </h2>
            <p className="max-w-md text-gray-500  md:text-xl">
              Explore our diverse range of products that cater to every style
              and preference.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm ">
              <Image
                alt="Washbasins"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                height={200}
                src="/hero-1.png"
                width={300}
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-bold">Washbasins</h3>
                <p className="text-gray-500 ">
                  Elegant and durable washbasins for a modern bathroom.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-primary hover:underline group"
                  href="#"
                  prefetch={false}
                >
                  Explore Washbasins
                  <ArrowLongRightIcon className="ml-2 h-5 w-5 transition-all ease-in-out duration-300 group-hover:transform group-hover:-rotate-45" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm ">
              <Image
                alt="Saniware"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                height={200}
                src="/hero-1.png"
                width={300}
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-bold">Saniware</h3>
                <p className="text-gray-500 ">
                  High-quality saniware for a seamless bathroom experience.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-primary hover:underline group"
                  href="#"
                  prefetch={false}
                >
                  Explore Saniware
                  <ArrowLongRightIcon className="ml-2 h-5 w-5 transition-all ease-in-out duration-300 group-hover:transform group-hover:-rotate-45" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm ">
              <Image
                alt="Ceramic Products"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                height={200}
                src="/hero-1.png"
                width={300}
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-bold">Ceramic Products</h3>
                <p className="text-gray-500 ">
                  Exquisite ceramic products for a touch of elegance.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-primary hover:underline group"
                  href="#"
                  prefetch={false}
                >
                  Explore Ceramics
                  <ArrowLongRightIcon className="ml-2 h-5 w-5 transition-all ease-in-out duration-300 group-hover:transform group-hover:-rotate-45" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <Button
              label="Explore All Products"
              className="mt-4 bg-emerald-500 text-white font-light hover:bg-emerald-600 hover:scale-105 transition duration-300 ease-in-out rounded-sm"
              icon={
                <ArrowLongRightIcon className="ml-2 h-6 w-6 transition-all ease-in-out duration-300 group-hover:transform group-hover:translate-x-2" />
              }
              // onClick={() => scrollToSection("products")}
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-stone-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gallery
            </h2>
            <p className="max-w-md text-gray-500  md:text-xl">
              Explore our stunning product gallery and get inspired for your
              next bathroom renovation.
            </p>
          </div>
          <div className="relative mt-8 flex justify-center items-center">
            <GalleryCarousel />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-md text-gray-500  md:text-xl">
              Have a question or want to learn more about our products? Fill out
              the form below and our team will get back to you.
            </p>
          </div>
          <form className="mt-8 max-w-md mx-auto space-y-4">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Message" rows={5} />
            <Button className="w-full" label="Submit" />
          </form>
        </div>
      </section>
      <BackToTopButton />
      <Footer />
    </main>
  );
}
