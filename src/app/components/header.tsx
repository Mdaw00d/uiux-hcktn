"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Promotional Banner */}
      <div className="bg-gray-800 text-white text-sm text-center py-2">
        <span>
          Free delivery on all orders over £50 with code: easter checkout
        </span>
        <button className="ml-4 text-gray-300 hover:text-white">✖</button>
      </div>

      {/* Header Section */}
      <header className="px-8 lg:px-24 py-4">
        {/* Top Row: Logo and Right Links */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold text-gray-800">Avion</div>
          </Link>
          {/* Right-Side Links */}
          <div className="hidden lg:flex items-center gap-x-6 text-gray-600">
            <Link href="/aboutus">
              <div className="hover:text-gray-800">About us</div>
            </Link>
            <a className="hover:text-gray-800">Contact</a>
            <a className="hover:text-gray-800">Blog</a>
            <div className="ml-6 flex gap-4">
              <div className="hover:text-gray-800">
                <img className="w-4 h-4" src="search.png" alt="Search" />
              </div>
              <Link href="/cart">
                <div>
                  <img className="w-4 h-4" src="cart.png" alt="Cart" />
                </div>
              </Link>
              <div>
                <img className="w-4 h-4" src="user.png" alt="User" />
              </div>
            </div>
          </div>
          {/* Search Icon and Hamburger Icon */}
          <div className="lg:hidden flex items-center gap-x-4">
            <div className="hover:text-gray-800">
              <img className="w-4 h-4" src="search.png" alt="Search" />
            </div>
            <button onClick={toggleSidebar}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 w-[250px] h-full bg-gray-800 text-white p-4 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <button
            className="text-xl text-white mb-4"
            onClick={toggleSidebar}
          >✖</button>
          <nav className="flex flex-col space-y-4">
            <Link href="/aboutus">
              <div className="hover:text-gray-300">About us</div>
            </Link>
            <a className="hover:text-gray-300">Contact</a>
            <a className="hover:text-gray-300">Blog</a>
            <Link href="/cart">
              <div className="hover:text-gray-300">Cart</div>
            </Link>
            <Link href="/listing">
              <div className="hover:text-gray-300">All products</div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Categories Section */}
      <div className="bg-gray-100 py-4 mt-4 lg:block hidden ">
        <nav className="flex justify-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/listing">
            <div className="hover:text-gray-800">All products</div>
          </Link>
          
          <a className="hover:text-gray-800">Plant pots</a>
          <a className="hover:text-gray-800">Ceramics</a>
          <a className="hover:text-gray-800">Tables</a>
          <a className="hover:text-gray-800">Chairs</a>
          <a className="hover:text-gray-800">Crockery</a>
          <a className="hover:text-gray-800">Tableware</a>
          <a className="hover:text-gray-800">Cutlery</a>
        </nav>
      </div>
    </div>
  );
}
