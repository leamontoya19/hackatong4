import React from 'react';
import logo from '../../assets/logoES.png';
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";


function Footer() {
  return (
    <div className='min-w-full'>
      <footer className="bg-[#0B67BE] text-white w-full">
        <div className="mx-auto p-4 py-6 lg:py-8">
          <div className="md:flex flex-wrap justify-between">
            <div className="mb-6 md:mb-0 w-full md:w-1/4">
            <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto" />

            </div>
            <div className="w-full md:w-2/5 mt-4">
            <p className="text-md">&copy; Copyright 2024 | All Rights Reserved | Easy Spain</p>
            </div>
            <div className="w-full md:w-1/4 flex mt-8">
            <FaFacebook size={20} className="mr-4" />
            <FaInstagram size={20} className="mr-4" />
            <FaWhatsapp size={20} className="mr-4" />
            <FaFacebookMessenger size={20} className="mr-4" />
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
