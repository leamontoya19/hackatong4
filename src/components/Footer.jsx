import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import  logoBlue from '../assets/icons/logo-blue.png'


function Footer() {
  return (
    <div className=''>
      <footer className="bg-[#0B67BE] text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex flex-wrap justify-between">
            <div className="mb-2 md:mb-0  md:w-1/4">
                <img src={logoBlue} alt="" srcset="" />
            </div>
            <div className="w-full md:w-1/4">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">HORARIOS</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <p className="flex"><FaCalendarAlt className="mr-2 mt-1" />De Miércoles a Sábado <br/> 12:30 - 17:00 y 20:00 - 23:30</p>
                </li>
                <li className="mb-4">
                  <p className="flex"><FaCalendarAlt className="mr-2 mt-1" />Domingo <br/> 12:30 - 17:00</p>
                </li>
                <li className="mb-4">
                  <p className="flex"><FaCalendarAlt className="mr-2 mt-1" />Lunes y Martes<br/>Cerrado</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h2 className="mb-6 text-sm font-semibold text-white">CONTACTA CON NOSOTROS</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Teléfono: 652196890-636965465</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/legal-warning">Aviso Legal</Link>
                </li>
                <li className="mb-4">
                  <Link to="/privacy-policy">Política de privacidad</Link>
                </li>
                <li className="mb-4">
                  <Link to="/cookies-policy">Política de cookies</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:text-center mt-4">
  <div className="flex flex-col">
    <span className=' mr-4'>Design by Sala 3 Web 2024</span>
    <span> &copy; La alegría de vivir 99º</span>
  </div>
</div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;