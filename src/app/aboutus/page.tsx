import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "../components/footer";
export default function AboutUs() {
  return (
    <main>
      <Header />
      <h1 className="text-3xl ml-40 mt-14">
        A brand built on the love of craftmanship, <br />
        quality and outstanding customer service
      </h1>
      <div className="ml-[950px] -mt-28">
        <div className="bg-slate-300 bg-opacity-20 mt-10 ml-[40px] w-[170px] h-[56px] "></div>
        <p className="ml-[65px] -mt-10 text-black">View collection</p>
      </div>
      <div className=" py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center ml-20 mt-28 gap-x-3">
          {/* Left Side (Content Placeholder) */}
          <div className="lg:w-1/2 bg-indigo-950 w-[634px] h-[478px] text-white p-8">
            <h2 className="text-3xl font-bold mb-4">
              It started with a small idea
            </h2>
            <p className="text-base mb-6">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <button className="bg-gray-100 bg-opacity-15 text-white px-6 py-2 rounded hover:bg-gray-200 mt-56">
              View collection
            </button>
          </div>

          {/* Right Side (Image Placeholder) */}
          <div className="lg:w-1/2flex items-center justify-center">
            <img className="w-[630px] h-[478px] " src="sofa.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <img className="w-[720px] h-[603px] ml-16" src="image0.png" alt="" />
          <div
            style={{
              display: "",
              justifyContent: "",
              alignItems: "",
              height: "95vh",
              backgroundColor: "#f8f8f8",
            }}
          >
            <div
              className="container"
              style={{
                width: "720px",
                height: "603px",
                padding: "40px",
                boxSizing: "border-box",
              }}
            >
              <h1
                className="title"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333333",
                  marginBottom: "20px",
                }}
              >
                Our service isn't just personal, it's actually hyper personally
                exquisite
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "#555555",
                  marginBottom: "20px",
                }}
              >
                When we started Avion, the idea was simple: Make high-quality
                furniture affordable and available for the mass market.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "#555555",
                  marginBottom: "20px",
                }}
              >
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe, and design so our Chelsea boutique becomes the
                hotbed for the London interior design community.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ffffff",
                  backgroundColor: "#333333",
                  border: "none",
                  borderRadius: "4px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
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
              For our materials and quality you <br /> woul not find better prices
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

        <div className="ml-[600px]">
          <div className="bg-slate-400 bg-opacity-20 mt-10 ml-[40px] w-[170px] h-[56px] "></div>
          <p className="ml-[65px] -mt-10 text-black">View collection</p>
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
    </main>
  );
}
