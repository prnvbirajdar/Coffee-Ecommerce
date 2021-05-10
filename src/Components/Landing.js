import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
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
            artisan coffees from all over world delivered directly to your door,
            at your schedule.
          </p>

          <Link href="/shop">
            <a
              href="#"
              className="font-heading block bg-white hover:bg-gray-200 transition-colors py-3 px-5 rounded-lg text-lg text-gray-800 font-bold "
            >
              Shop Coffee
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
