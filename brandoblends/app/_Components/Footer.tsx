import Link from "next/link";
import React from "react";
import { FaInstagram, } from "react-icons/fa";
import { FaTiktok, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black w-full flex md:flex-row flex-col justify-around items-start p-6">
        <div className="p-4">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">
              Brando<span className="text-blue-500">Blends</span>
            </p>
            <div className="flex gap-4 pb-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/brandoblends/"
                className="text-xl cursor-pointer text-gray-400 hover:text-red-500"
              >
                <FaInstagram />
              </Link>
              <Link
                target="_blank"
                href="https://www.tiktok.com/@brandoblends"
                className="text-xl cursor-pointer text-gray-400 hover:text-blue-500"
              >
                <FaTiktok />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/brandol.difo"
                className="text-xl cursor-pointer text-gray-400 hover:text-blue-500"
              >
                <FaFacebook />
              </Link>
            </div>
            {/* Location and Phone */}
            <div className="text-gray-400 text-sm mt-2">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <a
                  target="_blank"
                  href="https://www.google.com/maps?daddr=28.34641615547212,-81.6660523337053&amp;ll"
                  className="text-gray-300 text-bold hover:underline transition duration-300 ease-in-out"
                >
                  160 Kersey St, Davenport, 33897
                </a>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.25c0-.967.784-1.75 1.75-1.75h14.5c.967 0 1.75.783 1.75 1.75v9.5c0 .967-.783 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-9.5ZM3 7V5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75V7M7.5 10h9"
                  />
                </svg>
                <Link href="/" className="text-gray-300">
                  (631) 290-8994
                </Link>
              </p>
            </div>
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <p className="text-white font-bold text-lg pb-3">Quick Links</p>
            <li className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              <Link href="#about" scroll={true}>
                About
              </Link>
            </li>
            <li className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Services
            </li>
            <li  className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              <Link href="/gallery" scroll={true}>
                Gallery
              </Link>
            </li>
            <li className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Booking
            </li>
          </ul>
        </div>
        <div className="p-4">
          <ul>
            <p className="text-white font-bold text-lg pb-3">Company</p>
            <li className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-400 text-sm pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Barber Certification
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4 bg-black">
        <h1 className="text-gray-400 text-sm font-semibold">
          © 2022-2024 All rights reserved | Built By The SA Foundation
        </h1>
      </div>
    </>
  );
};

export default Footer;
