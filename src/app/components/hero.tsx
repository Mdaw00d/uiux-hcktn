import Link from "next/link";

export default function Hero() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 p-4">
        <div className="h-[584px] w-full md:w-[720px] md:ml-14 bg-blue-950 mt-10 md:mt-20 p-4 md:p-0">
          <p className="ml-2 md:ml-10 text-white font-light text-lg md:text-2xl mt-6 md:mt-12">
            The furniture brand for the <br />
            future, with timeless designs
          </p>
          <div className="ml-10 sm:justify-start ">
        <button className="bg-slate-400 bg-opacity-20 w-[170px] text-black h-[56px] mt-10">
          View collection
        </button>
        </div>
          <p className="mt-16 md:mt-72 text-white font-light ml-2 md:ml-10 text-sm md:text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand <br /> with nice fonts, tasteful colors and a beautiful
            way to display things digitally <br /> using modern web
            technologies.
          </p>
        </div>
        <img
          className="w-full md:w-[520px] h-[584px] hidden lg:block mt-10 md:mt-20 md:ml-24"
          src="right.png"
          alt=""
        />
      </div>

      <div className="px-4 ">
        <h2 className="text-lg text-center mt-10 md:mt-20">
          What makes our brand different
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-0">
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="delivery.png"
              alt=""
            />
            <p className="text-base ml-0 md:ml-16 mt-4">Next day as standard</p>
            <p className="text-sm ml-0 md:ml-16 mt-2">
              Order before 3pm and get <br /> your order the next day as <br />{" "}
              standard
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="check.png"
              alt=""
            />
            <p className="text-base ml-0 md:ml-16 mt-4">
              Made by true artisans
            </p>
            <p className="text-sm ml-0 md:ml-16 mt-2">
              Handmade crafted goods <br /> made with real passion and <br />{" "}
              craftmanship
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="purchase.png"
              alt=""
            />
            <p className="text-base ml-0 md:ml-16 mt-4">Unbeatable prices</p>
            <p className="text-sm ml-0 md:ml-16 mt-2">
              For our materials and quality <br /> you won’t find better prices{" "}
              <br /> anywhere
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="sprout.png"
              alt=""
            />
            <p className="text-base ml-0 md:ml-16 mt-4">Recycled packaging</p>
            <p className="text-sm ml-0 md:ml-16 mt-2">
              We use 100% recycled packaging to <br /> ensure our footprint is
              more <br /> manageable
            </p>
          </div>
        </div>
        <div>
          <h3 className="mt-28 ml-4 md:ml-11 text-xl">New ceramics</h3>
          <div className="grid grid-cols-2 lg:flex gap-5 ml-4 md:ml-10 mt-5 justify-center">
            <img className="h-[462px] w-[305px]" src="card1.png" alt="Card 1" />
            <img className="h-[462px] w-[305px]" src="card2.png" alt="Card 2" />
            <img className="h-[462px] w-[305px]" src="card3.png" alt="Card 3" />
            <img className="h-[462px] w-[305px]" src="card4.png" alt="Card 4" />
          </div>
        </div>
        <div className="flex justify-center">
        <button className="bg-slate-400 bg-opacity-20 w-[170px] text-black h-[56px] mt-10">
          View collection
        </button>
        </div>

        <h3 className="mt-28 ml-4 md:ml-11 text-xl hidden lg:block">Our popular products</h3>
        <div className="flex flex-wrap gap-x-5 lg:flex ml-4 md:ml-9 mt-5 justify-center sm:hidden ">
          <img className="w-[630px] h-[462px]" src="card01.png" alt="" />
          <img className="w-[305px] h-[462px]" src="card02.png" alt="" />
          <img className="w-[305px] h-[462px]" src="card03.png" alt="" />
        </div>
        <div className="lg:flex justify-center hidden ">
        <button className="bg-slate-400 bg-opacity-20 w-[170px] text-black h-[56px] mt-10">
          View collection
        </button>
        </div>
        <div className="bg-gray-100 py-16 px-4 mt-20">
          <div className="bg-white max-w-7xl h-auto mx-auto py-16 px-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Join the club and get the benefits
            </h2>
            <p className="text-gray-600 mb-8">
              Sign up for our newsletter and receive exclusive offers on new{" "}
              <br /> ranges, sales, pop-up stores, and more.
            </p>
            <div className="flex w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="button"
                className="px-6 py-3 bg-purple-950 text-white font-semibold rounded-r-md hover:bg-purple-900 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col">
          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-16 lg:p-24">
            {/* Left Content */}
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-light text-gray-800 mb-4">
                From a studio in London to a global brand with over 400 outlets
              </h1>
              <p className="text-gray-600 mb-6">
                When we started Avion, the idea was simple. Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p className="text-gray-600 mb-8">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique became the
                hotbed for the London interior design community.
              </p>
              <button className="mt-10 lg:mt-40 px-6 py-3 bg-gray-300 text-black text-sm font-base rounded hover:bg-gray-700">
                Get in touch
              </button>
            </div>

            {/* Right Content (empty space for the image) */}
            <div className="w-full lg:w-[660px] h-[603px] mt-10 lg:mt-0 mx-auto">
              <img src="image.png" alt="" />
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
    </main>
  );
}
