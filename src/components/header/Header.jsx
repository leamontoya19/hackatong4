import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import logo from '../../assets/logoES.png';  

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-[#0b67be] text-white p-4 w-full h-auto xl:h-[10vh] fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
        </div>

        <nav className="flex items-center justify-evenly w-full h-auto xl:h-[10vh]">
          <ul className="flex space-x-6 font-inter">
            <li><Link to="/aboutus" className="hover:text-[#f05a40] hover:underline text-white p-3">Sobre Nosotros</Link></li>
            <li><Link to="/foundraising" className="hover:text-[#f05a40] hover:underline text-white p-3">Cómo ayudar</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-[#f05a40] text-white p-3">Contacto</Link></li>
          </ul>
          <Link to="/donate" className="bg-[#f3f1ef] text-[#0b67be] py-2 px-2 rounded-lg hover:bg-gray-200 transition duration-300 ml-4">
            Donar
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
