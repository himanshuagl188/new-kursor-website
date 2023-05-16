"use client";
import Link from "next/link";
import logo from "../image/logo.svg";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Logo */}
            <Link class="navbar-brand" href="index.html">
              <Image src={logo} alt="logo img" />
            </Link>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="px-8 py-4 text-sm font-semibold text-white bg-pink-500 rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="py-2 px-4 text-sm text-bold text-white rounded-md"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
