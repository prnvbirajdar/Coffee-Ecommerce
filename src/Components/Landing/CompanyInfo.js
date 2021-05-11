import React from "react";

const CompanyInfo = () => {
  return (
    <section className="space-y-5 min-h-screen w-full flex flex-col justify-center items-center">
      {/* <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" absolute inset-0">
          <div className="absolute inset-y-0 z-0 w-full h-full rounded-lg bg-gray-100 lg:w-3/4" />
        </div>
        <div className="relative">
          <div className="grid row-gap-8 lg:grid-cols-2">
            <div className="grid md:grid-cols-1 w-11/12 mx-auto space-y-5 lg:space-y-0">
               <div className="relative">
                 <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
                >
                  <defs>
                    <pattern
                      id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
                    width="52"
                    height="24"
                  />
                </svg> 
              </div> 
              <h2 className="font-heading text-center text-4xl sm:text-5xl md:text-5xl 2xl:text-7xl font-semibold title-font">
                Coffee Roasters{" "}
              </h2>
              <p>
                We are an independently owned and operated specialty coffee
                roasting company. We started in 2019 with the
                dedication to source only the highest quality coffee from farms
                around the world right back to our shop and into your hands.
                Freshly roasted with meticulous care at our Ottawa roastery,
                our approachable and accessible coffees bring crisp flavor and
                smiles with every sip.
              </p>
              <p>
                Our commitment to support farmers and develop our trade is at
                the centre of everything we do. We believe in and promote
                respect and excellence from crop to café to cup.
              </p>
            </div>
            <div>
              <img
                className="mt-8 lg:mt-0 object-cover w-full  h-56 rounded shadow-lg sm:h-96"
                src="/owners.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* NEW SECTION */}

      {/* <div className="max-w-[1000px]  mx-auto relative">
        <div className="bg-white h-96 flex flex-col justify-center items-center">
          <h2 className="font-heading text-center text-4xl sm:text-5xl md:text-5xl 2xl:text-7xl font-semibold title-font">
            Coffee Roasters{" "}
          </h2>
          <p>
            We are an independently owned and operated specialty coffee roasting
            company. We started in 2019 with the dedication to source only the
            highest quality coffee from farms around the world right back to our
            shop and into your hands. Freshly roasted with meticulous care at
            our Ottawa roastery, our approachable and accessible coffees bring
            crisp flavor and smiles with every sip.
          </p>
          <p>
            Our commitment to support farmers and develop our trade is at the
            centre of everything we do. We believe in and promote respect and
            excellence from crop to café to cup.
          </p>
        </div>
        <div className="w-5/12 absolute -top-0 right-5">
          <img
            className="mt-8 lg:mt-0 object-cover w-full rounded-lg"
            src="/owners.jpg"
            alt=""
          />
        </div>
      </div> */}

      <div className="max-w-[1000px] w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center 2xl:max-w-[1400px]">
        <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 bg-gray-50 px-6 pt-12 pb-16 md:py-20 lg:py-40 space-y-5 rounded-lg 2xl:py-64  2xl:text-lg">
          <div className="w-11/12 md:w-8/12 lg:w-4/6 mx-auto space-y-4 2xl:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-5xl 2xl:text-7xl font-semibold title-font">
              Coffee Roasters{" "}
            </h2>
            <p>
              Established in 2019 in downtown Ottawa, Coffee Roasters was
              created with the simple notion of sourcing only the highest
              quality coffee from farms around the world right back to our shop
              and into your hands.
            </p>
            <p>
              Freshly roasted with meticulous care, our approachable and
              accessible coffees bring crisp flavor and smiles with every sip.
            </p>
            <p>
              Our commitment to support farmers and develop our trade is at the
              centre of everything we do. We believe in and promote respect and
              excellence from crop to café to cup.
            </p>
          </div>
        </div>
        <div className="w-11/12 -mt-16 md:mt-0  md:w-6/12 md:-ml-12 lg:-ml-16">
          <img
            className="h-96 w-auto mx-auto  md:h-auto md:w-full  mt-8 lg:mt-0 object-cover  rounded-lg"
            src="/owners.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
