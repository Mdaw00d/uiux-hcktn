import Link from "next/link";
import Footer from "../components/footer";
import Header from "@/app/components/header";

export default function List() {
  return (
    <div>
      <Header />

      <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left: Image */}
          <div className="flex items-center justify-center bg-gray-200">
            <img
              src="left.png"
              alt="The Dandy Chair"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Details */}
          <div className="p-4 md:p-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              The Dandy Chair
            </h1>
            <p className="text-xl font-bold text-gray-700 mb-6">£250</p>

            {/* Description */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-600 mb-6">
              A timeless design, with premium materials featured as one of our
              most popular and iconic pieces. The Dandy Chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>

            {/* Features */}
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li>Premium materials</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            {/* Dimensions */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Dimensions:
            </h2>
            <div className="grid grid-cols-3 text-center mb-6 gap-x-0">
              <div>
                <p className="text-gray-600">Height</p>
                <p className="text-gray-800 font-bold">100cm</p>
              </div>
              <div>
                <p className="text-gray-600">Width</p>
                <p className="text-gray-800 font-bold">70cm</p>
              </div>
              <div>
                <p className="text-gray-600">Depth</p>
                <p className="text-gray-800 font-bold">60cm</p>
              </div>
            </div>

            {/* Amount & Add to Cart */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <label htmlFor="amount" className="text-gray-800 font-semibold">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                min="1"
                defaultValue="1"
                className="w-16 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button className="mt-4 md:mt-0 w-full md:w-auto bg-indigo-950 text-white py-3 px-6 rounded-lg shadow hover:bg-purple-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl text-center md:text-left ml-4 md:ml-11">
          You might also like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 ml-4 md:ml-10">
          <img
            className="h-auto md:h-[462px] w-full md:w-[305px]"
            src="card1.png"
            alt=""
          />
          <img
            className="h-auto md:h-[462px] w/full md:w/[305px]"
            src="card2.png"
            alt=""
          />
          <img
            className="h-auto md:h/[462px] w/full md:w/[305px]"
            src="card3.png"
            alt=""
          />
          <img
            className="h-auto md:h/[462px] w/full md:w/[305px]"
            src="card4.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="bg-slate-400 bg-opacity-20 w-[170px] h-[56px] flex items-center justify-center">
          <p className="text-black">View collection</p>
        </div>
      </div>

      <div className="px-4 mt-20">
        <h2 className="text-lg text-center">What makes our brand different</h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="delivery.png"
              alt=""
            />
            <p className="text-base mt-4 ml-0 md:ml-16">Next day as standard</p>
            <p className="text-sm mt-2 ml-0 md:ml-16">
              Order before 3pm and get your order
              <br />
              the next day as standard
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="check.png"
              alt=""
            />
            <p className="text-base mt-4 ml-0 md:ml-16">Made by true artisans</p>
            <p className="text-sm mt-2 ml-0 md:ml-16">
              Handmade crafted goods made with real
              <br />
              passion and craftsmanship
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="purchase.png"
              alt=""
            />
            <p className="text-base mt-4 ml-0 md:ml-16">Unbeatable prices</p>
            <p className="text-sm mt-2 ml-0 md:ml-16">
              For our materials and quality, you won’t
              <br />
              find better prices anywhere
            </p>
          </div>
          <div className="text-center md:text-left">
            <img
              className="ml-0 md:ml-16 mt-10 w-6 h-6 mx-auto"
              src="sprout.png"
              alt=""
            />
            <p className="text-base mt-4 ml-0 md:ml-16">Recycled packaging</p>
            <p className="text-sm mt-2 ml-0 md:ml-16">
              We use 100% recycled packaging to
              <br />
              ensure our footprint is manageable
            </p>
          </div>
        </div>

        <div className="bg-gray-100 py-16 px-4 mt-20">
          <div className="bg-white max-w-7xl h-auto mx-auto py-16 px-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Join the club and get the benefits
            </h2>
            <p className="text-gray-600 mb-8">
              Sign up for our newsletter and receive exclusive
              <br />
              offers on new ranges, sales, pop-up stores, and more.
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
      </div>

      <Footer />
    </div>
  );
}
