import Head from "next/head";
import Nav from "../src/Components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="relative overflow-hidden h-screen text-gray-50 flex">
        <Nav />

        <img src="/bean2.jpg" class="absolute h-full w-full object-cover" />
        <div class="inset-0 bg-black opacity-75 absolute"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center ">
          <div class="border sm:w-10/12 lg:w-3/5 xl:w-7/12 flex flex-col items-start relative z-10 space-y-6">
            <h1 class="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl leading-tight ">
              Coffee done right, <br className="hidden sm:block" /> for everyone
            </h1>
            <p className="2xl:text-lg text-gray-300">
              Enjoy our expertly curated smooth, delicious, and subtly sweet
              artisan coffees from all over world delivered directly to your
              door, at your schedule.
            </p>

            <a
              href="#"
              class="font-heading block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold "
            >
              Shop Coffee
            </a>
          </div>
        </div>
      </main>
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
