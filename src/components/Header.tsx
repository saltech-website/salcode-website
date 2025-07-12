import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isWebDropdownOpen, setIsWebDropdownOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Timeout refs for delayed closing
  const webDropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const appDropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const companyDropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleWebDropdownEnter = () => {
    if (webDropdownTimeoutRef.current) {
      clearTimeout(webDropdownTimeoutRef.current);
    }
    setIsWebDropdownOpen(true);
  };

  const handleWebDropdownLeave = () => {
    webDropdownTimeoutRef.current = setTimeout(() => {
      setIsWebDropdownOpen(false);
    }, 300); // 300ms delay
  };

  const handleAppDropdownEnter = () => {
    if (appDropdownTimeoutRef.current) {
      clearTimeout(appDropdownTimeoutRef.current);
    }
    setIsAppDropdownOpen(true);
  };

  const handleAppDropdownLeave = () => {
    appDropdownTimeoutRef.current = setTimeout(() => {
      setIsAppDropdownOpen(false);
    }, 300); // 300ms delay
  };

  const handleCompanyDropdownEnter = () => {
    if (companyDropdownTimeoutRef.current) {
      clearTimeout(companyDropdownTimeoutRef.current);
    }
    setIsCompanyDropdownOpen(true);
  };

  const handleCompanyDropdownLeave = () => {
    companyDropdownTimeoutRef.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 300); // 300ms delay
  };

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (webDropdownTimeoutRef.current) clearTimeout(webDropdownTimeoutRef.current);
      if (appDropdownTimeoutRef.current) clearTimeout(appDropdownTimeoutRef.current);
      if (companyDropdownTimeoutRef.current) clearTimeout(companyDropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <CodeBracketIcon className="h-8 w-8 text-orange-500" />
            <span className="text-lg sm:text-xl font-bold text-white">SALCode</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Početna
            </Link>

            {/* Web Development Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleWebDropdownEnter}
              onMouseLeave={handleWebDropdownLeave}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Web Development</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {isWebDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700"
                  onMouseEnter={handleWebDropdownEnter}
                  onMouseLeave={handleWebDropdownLeave}
                >
                  <Link to="/custom" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Sajtovi po meri
                  </Link>
                  <Link to="/wordpress" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    WordPress sajtovi
                  </Link>
                  <Link to="/webapp" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Izrada web aplikacija
                  </Link>
                </div>
              )}
            </div>

            {/* App Development Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleAppDropdownEnter}
              onMouseLeave={handleAppDropdownLeave}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>App Development</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {isAppDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700"
                  onMouseEnter={handleAppDropdownEnter}
                  onMouseLeave={handleAppDropdownLeave}
                >
                  <Link to="/desktop" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Desktop aplikacije
                  </Link>
                  <Link to="/mobile" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Mobilne aplikacije
                  </Link>
                </div>
              )}
            </div>

            {/* Kompanija Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCompanyDropdownEnter}
              onMouseLeave={handleCompanyDropdownLeave}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Kompanija</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              {isCompanyDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700"
                  onMouseEnter={handleCompanyDropdownEnter}
                  onMouseLeave={handleCompanyDropdownLeave}
                >
                  <Link to="/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    O nama
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Kontakt
                  </Link>
                  <Link to="/portfolio" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                    Portfolio
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/quote" 
              className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base"
            >
              Pošalji upit
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Početna
            </Link>
            
            {/* Web Development */}
            <div className="px-4 py-2">
              <div className="text-gray-200 font-semibold mb-3 text-base">Web Development</div>
              <div className="ml-4 space-y-1">
                <Link 
                  to="/custom" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sajtovi po meri
                </Link>
                <Link 
                  to="/wordpress" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WordPress sajtovi
                </Link>
                <Link 
                  to="/webapp" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Izrada web aplikacija
                </Link>
              </div>
            </div>

            {/* App Development */}
            <div className="px-4 py-2">
              <div className="text-gray-200 font-semibold mb-3 text-base">App Development</div>
              <div className="ml-4 space-y-1">
                <Link 
                  to="/desktop" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Desktop aplikacije
                </Link>
                <Link 
                  to="/mobile" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mobilne aplikacije
                </Link>
              </div>
            </div>

            {/* Kompanija */}
            <div className="px-4 py-2">
              <div className="text-gray-200 font-semibold mb-3 text-base">Kompanija</div>
              <div className="ml-4 space-y-1">
                <Link 
                  to="/about" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  O nama
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
                <Link 
                  to="/portfolio" 
                  className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <Link 
                to="/quote" 
                className="block mx-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pošalji upit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;