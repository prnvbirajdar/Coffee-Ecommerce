import Head from "next/head";

export default function Home() {
  return (
    <div
    // className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Coffee Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="">
        {/*  <nav class="bg-gray-400 shadow dark:bg-gray-800">
          <div class="container px-6 py-3 mx-auto ">
            <div class="md:flex md:items-center md:justify-between">
              <div class="flex items-center justify-between">
                <div class="text-xl font-semibold text-gray-700">
                  <a
                    class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Brand
                  </a>
                </div>

                <!-- Mobile menu button -->  
                <div class="flex md:hidden">
                  <button
                    type="button"
                    class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                      <path
                        fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

               <!-- Mobile Menu open: "block", Menu closed: "hidden" -->  
              <div class="hidden -mx-4 md:flex md:items-center">
                <a
                  href="#"
                  class="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Web developers
                </a>
                <a
                  href="#"
                  class="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Web Designers
                </a>
                <a
                  href="#"
                  class="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  UI/UX Designers
                </a>
                <a
                  href="#"
                  class="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>*/}

{/* linear-gradient(rgba(24, 28, 31, 0.7),rgba(24, 28, 31, 0.7 )) */}
        <div
          className=" w-11/12 rounded-lg mx-auto min-h-screen bg-bottom bg-cover h-128 "
          style={{
            backgroundImage:
              "url(/beans.jpg)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full  bg-opacity-50">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white uppercase md:text-3xl">
                Build Your new{" "}
                <span className="text-blue-400 underline">Saas</span>
              </h1>
              <button className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start project
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*  <main className=" bg-white relative overflow-hidden h-screen">
       <header class="h-24 sm:h-32 flex items-center z-30 w-full">
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
        </header> 
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
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a> 
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
      </main>*/}
    </div>
  );
}
