import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Brando<span className="text-blue-500">Blends</span>
            </p>
            <div className="flex gap-6 pb-5">
              <div className="text-2xl cursor-pointer text-gray-400 hover:text-yellow-500">
                <FaInstagram />
              </div>
              <div className="text-2xl cursor-pointer text-gray-400 hover:text-blue-500">
                <FaTwitter />
              </div>
              <div className="text-2xl cursor-pointer text-gray-400 hover:text-blue-500">
                <FaLinkedin />
              </div>
              <div className="text-2xl cursor-pointer text-gray-400 hover:text-red-500">
                <FaYoutube />
              </div>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Quick Links</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              About
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Services
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Gallery
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Booking
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Barber Certification
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Address:
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Phone:
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
              Email:
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-900">
        <h1 className="text-gray-400 font-semibold">
          © 2022-2024 All rights reserved | Built By The SA Foundation
        </h1>
      </div>
    </>
  );
};

export default Footer;
