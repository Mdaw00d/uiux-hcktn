import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <h1 className="text-3xl ml-10 md:ml-40 mt-14 text-center md:text-left">
        A brand built on the love of craftmanship,
        <br />
        quality and outstanding customer service
      </h1>
      <div className="flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="bg-slate-300 bg-opacity-20 w-40 h-14 flex items-center justify-center">
          <p className="text-black">View collection</p>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-3">
          {/* Left Side (Content Placeholder) */}
          <div className="lg:w-1/2 bg-indigo-950 w-full h-[478px] text-white p-8">
            <h2 className="text-3xl font-bold mb-4">
              It started with a small idea
            </h2>
            <p className="text-base mb-6">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <button className="bg-gray-100 bg-opacity-15 text-white px-6 py-2 rounded hover:bg-gray-200 mt-10 lg:mt-56">
              View collection
            </button>
          </div>

          {/* Right Side (Image Placeholder) */}
          <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
            <img className="w-full h-[478px]" src="sofa.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
          <img className="w-full h-[603px]" src="image0.png" alt="" />
          <div className="flex items-center justify-center bg-gray-100 h-full">
            <div className="container p-10">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Our service is not just personal, it is actually hyper personally exquisite
              </h1>
              <p className="text-base text-gray-600 mb-6">
                When we started Avion, the idea was simple: Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p className="text-base text-gray-600 mb-6">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe, and design so our Chelsea boutique becomes the
                hotbed for the London interior design community.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 font-bold text-white bg-gray-800 rounded-md hover:bg-gray-900"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-lg text-center mt-10 md:mt-20">
          What makes our brand different
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center md:text-left">
            <img className="mx-auto mt-10 w-6 h-6" src="delivery.png" alt="" />
            <p className="text-base mt-4">Next day as standard</p>
            <p className="text-sm mt-2">
              Order before 3pm and get
              <br />
              your order the next day as standard
            </p>
          </div>
          <div className="text-center md:text-left">
            <img className="mx-auto mt-10 w-6 h-6" src="check.png" alt="" />
            <p className="text-base mt-4">Made by true artisans</p>
            <p className="text-sm mt-2">
              Handmade crafted goods made with real
              <br />
              passion and craftmanship
            </p>
          </div>
          <div className="text-center md:text-left">
            <img className="mx-auto mt-10 w-6 h-6" src="purchase.png" alt="" />
            <p className="text-base mt-4">Unbeatable prices</p>
            <p className="text-sm mt-2">
              For our materials and quality, you won’t
              <br />
              find better prices anywhere
            </p>
          </div>
          <div className="text-center md:text-left">
            <img className="mx-auto mt-10 w-6 h-6" src="sprout.png" alt="" />
            <p className="text-base mt-4">Recycled packaging</p>
            <p className="text-sm mt-2">
              We use 100% recycled packaging to
              <br />
              ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end mt-10 md:mt-20">
        <div className="bg-slate-400 bg-opacity-20 w-40 h-14 flex items-center justify-center">
          <p className="text-black">View collection</p>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 mt-20">
        <div className="bg-white max-w-7xl h-auto mx-auto py-16 px-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join the club and get the benefits
          </h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and receive exclusive offers on new
            <br />
            ranges, sales, pop-up stores, and more.
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
      <Footer />
    </main>
  );
}
