import Head from "next/head";
import Nav from "../src/Components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="relative overflow-hidden h-screen text-white flex">
        <Nav />

        <img src="/bean2.jpg" class="absolute h-full w-full object-cover" />
        <div class="inset-0 bg-black opacity-75 absolute"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center ">
          <div class="lg:w-3/5 xl:w-7/12 flex flex-col items-start relative z-10 space-y-6">
            <h1 class="font-heading font-semibold text-6xl sm:text-7xl text-white leading-tight ">
              Coffee done right, <br /> for everyone
            </h1>
            <p>
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
    </>
  );
}
