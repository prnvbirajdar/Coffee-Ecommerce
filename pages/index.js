import Head from "next/head";
import Landing from "../src/Components/Landing";
import CoffeeCollection from "../src/Components/CoffeeCollection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      {/*  <CoffeeCollection /> */}

      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold title-font mb-4 ">
              Coffee Collection{" "}
            </h2>
            <p className="lg:w-7/12 mx-auto leading-relaxed text-base xl:text-lg">
              A collection of some of our best-selling specialty coffees
            </p>
          </div>

          <div className=" flex flex-col md:flex-row space-y-5  md:space-x-3 lg:space-x-0 md:space-y-0 justify-evenly align-center">
            <div className="space-y-4 border">
              <img
                alt="gallery"
                className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-1.jpg"
              />
              <p className="text-center font-semibold text-lg lg:text-xl 2xl:text-2xl font-heading">
                ETHIOPIA
                {/* <span className="text-black text-base font-normal">(300 gms)</span> */}
              </p>
              <p className=" text-sm mx-auto text-center border">
                DARK CHOCOLATE • BROWN SUGAR
              </p>
            </div>
            <div className="space-y-4 border">
              <img
                alt="gallery"
                className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-2.jpg"
              />
              <p className="text-center font-semibold text-lg font-heading">
                ETHIOPIA
              </p>
              <p className="w-10/12 text-sm mx-auto text-center border">
                DARK CHOCOLATE • BROWN SUGAR
                {/* • POMEGRANATE AMBER ROAST */}
              </p>
            </div>
            <div className="space-y-4 border">
              <img
                alt="gallery"
                className="mx-auto rounded-lg w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-3.jpg"
              />
              <p className="text-center font-semibold text-lg font-heading">
                ETHIOPIA
              </p>
              <p className="w-10/12 text-sm mx-auto text-center border">
                DARK CHOCOLATE • BROWN SUGAR
                {/* • POMEGRANATE AMBER ROAST */}
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <Link href="/shop">
              <a
                href="#"
                className="font-heading bg-pink-400 hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold "
              >
                Shop Coffee
              </a>
            </Link>
          </div> */}
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
