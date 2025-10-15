
import React, { useState } from 'react';
import { NAV_LINKS, USER_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter">
            {USER_INFO.name}
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
          <a href={USER_INFO.upworkUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-sky-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-sky-600 transition-all duration-300">
            Hire Me on Upwork
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href={USER_INFO.upworkUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white text-center font-semibold px-4 py-2 rounded-md hover:bg-sky-600 transition-all duration-300">
                Hire Me on Upwork
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
