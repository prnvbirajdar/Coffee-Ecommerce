import React from "react";

export default function buycoffee() {
  return (
    <>
      <section className=" md:max-w-2xl lg:max-w-full 2xl:max-w-7xl space-y-8 py-32 flex flex-col md:flex-row justify-center items-center min-h-screen w-10/12 max-w-md mx-auto ">
        <div className="block md:hidden w-full space-y-2 ">
          <h1 className="font-heading text-3xl title-font font-medium uppercase">
            Ethiopia
          </h1>
          <p className="text-gray-600 text-end uppercase text-sm 2xl:text-base">
            Fruity • Bright
          </p>
          <p className="text-gray-600">$ 12.99</p>
        </div>

        <div className="md:w-1/2  lg:w-1/3  ">
          <img
            alt="gallery"
            className="mx-auto md:mx-0 lg:mx-auto rounded-lg w-auto h-96 lg:h-[450px] object-cover object-center"
            src="/parasol-coffee-bags-1.jpg"
          />
        </div>

        <div className="mx-auto space-y-3 md:w-1/2 ">
          <div className="hidden md:block md:space-y-2">
            <h1 className="font-heading text-3xl title-font font-medium mb-1">
              ETHIOPIA{" "}
            </h1>

            <p className=" text-gray-600 text-end uppercase text-sm 2xl:text-base">
              Fruity • Bright
            </p>

            <p className="text-gray-600">$ 12.99</p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <label className="text-gray-600 pr-1">Quantity </label>{" "}
            <input
              type="number"
              className="rounded-lg w-16 p-3"
              defaultValue="1"
            />
            <div className="flex-col flex space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="text-center shadow-lg md:text-left font-heading block bg-white hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold "
              >
                Add To Cart
              </a>
              <a
                href="#"
                className="text-center shadow-lg md:text-left font-heading block bg-gray-800 hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-100 font-bold "
              >
                Buy Now
              </a>
            </div>
          </div>
          <div>
            <hr className="my-6 border-1 border-gray-200 " />
          </div>
          <p className="text-gray-600 leading-relaxed">
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
