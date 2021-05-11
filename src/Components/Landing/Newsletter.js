import React from "react";

export default function Newsletter() {
  return (
    <>
      <section>
        <div className="max-w-3xl px-6 py-16 mx-auto text-center space-y-5">
          <h1 className="uppercase font-heading text-3xl font-semibold text-gray-800 ">
            Stay in Touch
          </h1>
          <p className="max-w-md mx-auto text-gray-600 ">
            Join our mailing list for updates on new coffee releases and
            exclusive offeres!
          </p>

          <form className="flex items-center justify-center pb-6 md:pt-5">
            <div className="flex overflow-hidden border rounded-lg flex-col sm:flex-row">
              <input
                className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent focus:border-blue-500  focus:outline-none focus:ring"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
