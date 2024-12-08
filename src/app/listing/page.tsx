import Link from "next/link";
import Footer from "../components/footer";
import Header from "@/app/components/header";
export default function List() {
  return (
    <div>
      <Header />

      <div className="bg-gray-50 min-h-screen flex justify-center items-center">
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
          <div className="p-8">
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
            <h2 className="text-lg font-semibold text-gray-800  mb-2">
              Dimensions:
            </h2>
            <div className="grid grid-cols-3 text-center mb-6 gap-x-0 ">
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
            <div className="flex items-center space-x-4">
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

            <button className="mt-0 w-[143px] ml-96 bg-indigo-950 text-white py-3 rounded-lg shadow hover:bg-purple-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-28 ml-11 text-xl">You might also like</h3>
        <div className="flex gap-x-5 ml-10 mt-5">
          <img className="h-[462px] w-[305px]" src="card1.png" alt="" />
          <img className="h-[462px] w-[305px]" src="card2.png" alt="" />
          <img className="h-[462px] w-[305px]" src="card3.png" alt="" />
          <img className="h-[462px] w-[305px]" src="card4.png" alt="" />
        </div>
      </div>
      <div className="ml-[600px]">
        <div className="bg-slate-400 bg-opacity-20 mt-10 ml-[40px] w-[170px] h-[56px] "></div>
        <p className="ml-[65px] -mt-10 text-black">View collection</p>
      </div>
      <div>
        <h2 className="text-lg text-center mt-20">
          What makes our brand different
        </h2>
        <div className="flex">
          <div>
            <img
              className="ml-16 mt-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdFJREFUSEvdlb+L02AYx7/P2+LgrIcOh0iT9pIWb3KTQ3FQL0EHdVE3Qe6mE/oPFHdFHPwLjjuQ4iBJi+DgDY4u3iUhfYuKi2jHGwSvySPhmpK2KbFew4GZwvt+n+fz/MjzhJDzQzn7x38EqCrmHSZ+AkD7m7Ix8N6T9pUs7bBEumo4APQsg+S9K+3MEicBPIvzSJs7IA6IgF8gbDmdi4+ARpgM9EgZjGdMRHWnYz2bGyAukV42r4L5HYB9LvYrnvf2eyK7w1ddNY7UA101mwDfZmDbk/a9uQM07dpZ6he7AE6SCC85fvtDBJlrD+KoGfzJk63l3ADJTziXDI4JUDa+gnFuULfnBQ6fBiTqDDyeNuEETNM5rrRrIz2ollavs6B2dPibw4Vut91TlBunT5D4OQ2QqmPsCkJjT9qvRwCDWegBOAXwWiCKWyIIHhDhJYAfrrTPxCBdNXYArIzrCOQ70lpKneTosKoaFgNGSsRNV9p3hwDFvA/izUkdb7iy9WIqoFa5eYHD8BWDK4lJ/MIBXXY/W9+ShppirBPhIYCo1h4Im27HjvbQyEZI3ee10q3FQBycL7AQBwXx0fff7M+6yidWxb86yLLL/CNlOci6/wORzb0ZGeIxcwAAAABJRU5ErkJggg=="
            />
            <p className="text-base ml-16 mt-4 ">Next day as standard</p>
            <p className="text-sm ml-16 mt-2">
              Order before 3pm and get your order
              <br />
              the next day as standard
            </p>
          </div>
          <div>
            <img
              className="ml-16 mt-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA6RJREFUSEvFlV+IG1UUxr9zk/2Tbg0oiNQG3baTrMkssRTWJ7fNk5qdRFGJFWkFQVTUUh+kDyq6oj6JCLUK2gf/gtQHqbuZWSoIq20VxKC2m5t0ZrYbtNIqCJbV2Dazc2Rmk5JkM+v6UDxvM/fM9zv3m3PPJVzhoCusj1UBipIdGCC6FyTucNm9mUDDABhAjYEfQDSz7qqzn5ZKpUZQoYGAVCKbBYu3AHiiq4UNosekWfyiV1JPQCqRmwTzC80PfiLQoSUmfdAJ/ei9c8LOVhduHkT3AYj5eYSnpam/1g1ZAWgTXyTGrrKtTzdt6VHgpEgmvisI5ncZiAC8V1rG/vbEDoCq5PJMPEXA38xiTNrT5bU0gZrI3cLMxwEIEO2QZvFY67vLgFSqsB6NuglgAxi7pa1/tBbxVk5S0Z4iwusAqpHouXTrx18GJBXtcSK8CUBKSx8NtmVZcnTTnddxyHmgbBueKFKpQj8a9ZpXIJO4u2JOH17+Nc1IKTkDxFkifrJsGh4oMBKJ3MYw85cAtgB4VFr6Oz5E0V4B4RlmHKzY+iMdADWunWFgY4iw5aSpnw5S98XBx8G4EYCNBo/LmnHOByRyt4L5KEDfS6u4rRtQ9zqh3vgrUqvNXvAWk/HcvpAj3p9bmPrVe25W/hWAzZ44h53tlcqRs61iVPX2a/hS+HcAf0hLv7rTori2CGD9kghFT52aWlQTE08w0wECFhpE44PuEjlCHPMq996F2N1+wp45075TRclG+0mcB7AoLT3atYNclcEjbojT1apxMq1kYw4Jz+fNniADfc1DdTrM7o5ucX/HSn4bkVtqNorabdHHDNzP4H0Vy3jVW2xCjraNi1qY3fFe4suWTjxHoJeI6MOyWXywA5BUJnYT0QcALGmN3QRMum2Qb/wJsYp4JpMJ//bL0DyAG8C8U9rGJx2AWKwQiUbqVT8B/JC0jPda/o6M5Df1OcKZm//s56DuSsW1PQD2g2Fegpu27ZmLHQD/8Cj521xyj/z3UZEfY3a/Xh4VyEhT92z1Y8WwS8a1Zwl4GcB5Ad41ZxnF4CM3KdT4tzsZdBDAEBHtKZvFA+35Pce1qmjPM+HFZgULTHQIYOOCc/GEEH39AyxGIfguBhUAXN8cK3ulpb/RXUzghZOMa5oA3vZOd/AO/BXbZfFw1Z72WnpFrHplDg9nBof61t3DoAkw0iB/PHhX5jwzSgL0+bWxPw/Pzs46QUX8v5f+v1izpuV/AAKUgCgqHuZCAAAAAElFTkSuQmCC"
            />
            <p className="text-base ml-16 mt-4 ">Made by true artisans</p>
            <p className="text-sm ml-16 mt-2">
              Handmade crafted goods made with <br />
              real passion and craftmanship
            </p>
          </div>
          <div>
            {" "}
            <img
              className="ml-16 mt-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALpJREFUSEtjZKAxYKSx+QzDyAItFS9/BkbGDgYGBg0Kg+36f0bGkuu3tmwDmQMPIm1V7yf/GRikKTQcpv3etdtblVEs0FL1/g8SuHZ7K0Xxgm4O3DC6WUClIIKHBIYPRi2AhQAssdA/kumWTGHJFj3SCTmA6HxAcwvITa5E+4AWFjxkYGCQI9dgNH0Prt3eqoha2Kl4+TMyMnX+Z/ivTokl/xn+X2JgZKrEKK4pMRSfXoqKZmIcNfQtAAAL8nQZbOOarQAAAABJRU5ErkJggg"
            />
            <p className="text-base ml-16 mt-4 ">Unbeatable prices</p>
            <p className="text-sm ml-16 mt-2">
              For our materials and quality you <br /> won’t find better prices
              anywhere
            </p>
          </div>
          <div>
            {" "}
            <img
              className="ml-16 mt-10"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA0RJREFUSEu1lVtoHGUUx3/n293EbGgFQetlwUpndpPZ6otEvCBI0WKctW2UQK0PBftQfChSRfripbYKfVCwPumDWEHBmnpNZhUvFaHoi30p3dlkpzH1QimlgooJYpLv2NkmunHW2UDb7234/uf8z/9/zvlGuMRHLnF+LhrB6tV3XZbv6h1Q1VsF6QujYFtcfCqB5w136ezMPUYYUuVmkGtBLwd+Ak6BKphu0OuBq1vyzYVRkEsl8Bx/GGE/cM0ybZwGpgT6FTJhlM/CyHxCgeMMdufEvCaw9Xxi/RqRUVSPZO3c1LHJz87ctGb9VVa6vOatkelZmGo0Rs/G32XXn1HoDqMg01aB5/qvAtuBaVUeq58IXl+mAgqF4Z6VPTMzwO9hFMRWLu1BqXRvKWMz483KLDfWJ4Pj/ybfbfqco3dmxG5SuB0oCKyqRUF2EVNes8FRMx8JMlGLxvoSBOVi5XFVfQnhq7ARrPsnsFi5RVXfBOKgv4A3ROULnbNHwpPV04u4ta7/gIX3gI/DKNiYIPBc/11gWIWH6o3gnQVPnz43KnvOg3X/fKZ77/j4B7+0s81z/BcRnkDYEzaCZ5MERf9DlI3G6MDxiep3nuM/ghD3YBbl4fBEMJLWD8/1Y0vLiq6vR9XPkxa5/vsKQ7H/IjaHmG/jwsXYwdrEJ4fTkvc5lduM6DfAWXL568JwJLZyaZM9t3II9EFBtyjsBBlA5LmwMba70yR5TuVLRNcJvFCLgqcW8Uv2wHP9HcArwM/xlAC/kcsXwnDkjzSCctHfqsoB4E9m9YbWxi8hWJjjH4ArF+S9XIuCnWnJ+4v3bzJqD8XbK/BMLQr2tuITm1x2/F0q7GvuQkuz/ktSKm1YkbH2edBYtSB8FDaCoWZYy0kSuPdtUeTtBcyvwEFUDxvMGUVXWtGSiNyBcjfQ28QJb5HNb1tsbCpBf9HfJ8qu5jTAFYBJsehHFXm03hir/h8mocBzKlVEB8+9RU/OiTmQQzer2rJiCoJd0SxYOW2NOSjZnqBd1akKPNevx0+CWB2sTVY/7TSene6TClw/fltW6bwU69+PRZ0SdLpvR2BjF3qmTe/RU6Px03tB56L9k5fd5Asqt03w3xwpNygdWHtrAAAAAElFTkSuQmCC"
            />
            <p className="text-base ml-16 mt-4 ">Recycled packaging</p>
            <p className="text-sm ml-16 mt-2">
              We use 100% recycled packaging to <br /> ensure our footprint is
              manageable
            </p>
          </div>
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
      </div>
      <Footer />
    </div>
   
  );
}
