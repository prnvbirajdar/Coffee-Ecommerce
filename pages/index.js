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
      <CoffeeCollection />
      <main className="relative overflow-hidden h-screen text-gray-50 flex">
        <img src="/bean2.jpg" className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-75 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center ">
          <div className="sm:w-10/12 lg:w-3/5 xl:w-6/12 flex flex-col items-start relative z-10 space-y-6">
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-tight ">
              Coffee done right, <br className="hidden sm:block" /> for everyone
            </h1>
            <p className="2xl:text-lg text-gray-300">
              Enjoy our expertly curated smooth, delicious, and subtly sweet
              artisan coffees from all over world delivered directly to your
              door, at your schedule.
            </p>

            <Link href="/shop">
              <a
                href="#"
                className="font-heading block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold "
              >
                Shop Coffee
              </a>
            </Link>
          </div>
        </div>
      </main>{" "}
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

          <div className="border grid grid-cols-3 ">
            <div>
              <img
                alt="gallery"
                className=" w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-1.jpg"
              />
            </div>
            <div>
              <img
                alt="gallery"
                className=" w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-2.jpg"
              />
            </div>
            <div>
              <img
                alt="gallery"
                className=" w-auto h-96 object-cover object-center"
                src="/parasol-coffee-bags-3.jpg"
              />
            </div>
          </div>
          {/* <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/parasol-coffee-bags-1.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
           
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
