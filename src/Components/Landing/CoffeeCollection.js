import React from "react";
import Link from "next/link";

export default function CoffeeCollection() {
  return (
    <section className=" body-font ">
      <div className="container px-5 py-24 mx-auto space-y-10">
        <div className="flex flex-col text-center w-full mb-20  ">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold title-font mb-4 ">
            {/* <img
              src="/coffee-mark.png"
              alt=""
              className="h-24 w-24 inline-block "
            />{" "} */}
            <span > Coffee Collection </span>
          </h2>
          <p className="lg:w-7/12 text-gray-600 mx-auto leading-relaxed text-base xl:text-lg ">
            A collection of some of our best-selling specialty coffees
          </p>
        </div>

        <div className=" flex flex-col md:flex-row space-y-5 md:space-x-3 lg:space-x-0 md:space-y-0 justify-evenly align-center">
          <div className="space-y-4  ">
            <img
              alt="gallery"
              className="transform transition hover:scale-[1.02] cursor-pointer mx-auto rounded-lg w-auto h-96 object-cover object-center"
              src="/parasol-coffee-bags-1.jpg"
            />
            <p className="text-center font-semibold text-lg lg:text-xl 2xl:text-2xl font-heading">
              ETHIOPIA
            </p>
            <p className="text-gray-600 uppercase  text-sm mx-auto text-center 2xl:text-base">
              Fruity • Bright
            </p>
            <div>
              <p className="uppercase text-sm mx-auto text-center 2xl:text-base">
                $ 12.99
              </p>
            </div>
          </div>
          <div className="space-y-4 ">
            <img
              alt="gallery"
              className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
              src="/parasol-coffee-bags-2.jpg"
            />
            <p className="text-center font-semibold text-lg lg:text-xl 2xl:text-2xl font-heading">
              COLOMBIA
            </p>
            <p className="uppercase  text-sm mx-auto text-center">
              Nutty • Smooth
            </p>
            <div>
              <p className="uppercase text-sm mx-auto text-center">$ 12.99</p>
            </div>
          </div>
          <div className="space-y-4 ">
            <img
              alt="gallery"
              className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
              src="/parasol-coffee-bags-3.jpg"
            />
            <p className="text-center font-semibold text-lg lg:text-xl 2xl:text-2xl font-heading">
              GUATEMALA
            </p>
            <p className="uppercase  text-sm mx-auto text-center">
              Chocolatey • Rich
            </p>
            <div>
              <p className="uppercase text-sm mx-auto text-center">$ 12.99</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/shop">
            <a
              href="#"
              className="font-heading bg-white hover:bg-gray-100 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold  "
            >
              Shop All Coffee
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
