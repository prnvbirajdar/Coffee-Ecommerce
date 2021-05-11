import React from "react";

export default function buycoffee() {
  return (
    <>
      <section className="space-y-8 py-32 flex flex-col md:flex-row justify-center items-center min-h-screen w-10/12 max-w-md mx-auto ">
        <div className="block md:hidden w-full space-y-2 ">
          <h1 className="font-heading text-3xl title-font font-medium uppercase">
            Ethiopia
          </h1>
          <p className="text-end uppercase text-sm 2xl:text-base">
            Fruity • Bright
          </p>
          <p>$ 12.99</p>
        </div>

        <div>
          <img
            alt="gallery"
            className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
            src="/parasol-coffee-bags-1.jpg"
          />
        </div>

        <div className=" mx-auto space-y-3">
          <div className="hidden md:block">
            <h1 className="text-3xl title-font font-medium mb-1">ETHIOPIA </h1>

            <p className="text-end uppercase text-sm 2xl:text-base">
              Fruity • Bright
            </p>

            <p className="">$ 12.99</p>
          </div>
          <div className="space-y-3">
            <label className="pr-1">Quantity </label>{" "}
            <input
              type="number"
              className="rounded-lg w-16 p-3"
              defaultValue="1"
            />
            <a
              href="#"
              className="text-center shadow-lg md:text-left font-heading block bg-white hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold "
            >
              Add To Cart
            </a>
            <a
              href="#"
              className="text-center shadow-lg md:text-left font-heading block bg-white hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold "
            >
              Buy Now
            </a>{" "}
          </div>
          <div>
            <hr className="my-6 border-1 border-gray-200 " />
          </div>
          <p className="leading-relaxed">
            Well-balanced and accessible, this single-origin coffee from
            Ethiopia has a full-body with nutty tones and flavors ranging from
            sweet to spicy. The combination of acidity with its deep penetrating
            taste and floral notes provide a complex aroma, which covers the
            full palette. It has every aroma that you would expect from a good
            coffee, from sour to bitter in perfect balance.
          </p>
        </div>
      </section>

      <div className="text-black px-5">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300  hidden sm:block md:hidden">
          Sm
        </p>
        <p className="px-5 rounded py-1 bg-green-300 hidden  sm:hidden md:block  lg:hidden">
          Md
        </p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">
          Lg
        </p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
          xl
        </p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
          2xl
        </p>
      </div>
    </>
  );
}
