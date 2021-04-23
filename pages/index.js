import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Coffee Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class=" bg-white relative overflow-hidden h-screen">
        {/* <header class="h-24 sm:h-32 flex items-center z-30 w-full">
          <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 font-black text-3xl">
              Watch.ME
            </div>
            <div class="flex items-center">
              <nav class="font-sen text-gray-800 uppercase text-lg lg:flex items-center hidden">
                <a href="#" class="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Watch
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Product
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Contact
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Carrer
                </a>
              </nav>
              <button class="lg:hidden flex flex-col ml-4">
                <span class="w-6 h-1 bg-gray-800  mb-1"></span>
                <span class="w-6 h-1 bg-gray-800  mb-1"></span>
                <span class="w-6 h-1 bg-gray-800  mb-1"></span>
              </button>
            </div>
          </div>
        </header> */}
        <div class="bg-white flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-gray-800  mb-12"></span>
              <h1 class=" uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                Be on
                <span class="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p class="text-sm sm:text-base text-gray-700">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div class="flex mt-8">
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                {/* <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a> */}
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="/images/object/10.png"
                class="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
