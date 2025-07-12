import React from 'react';
import { Link } from 'react-router-dom';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CodeBracketIcon className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">SALCode</span>
            </div>
            <p className="text-gray-400 mb-4">
              Izrada web sajtova i aplikacija po meri.<br />
              Fokusirani na moderna, responzivna i funkcionalna digitalna rešenja.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kompanija</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Usluge</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Izrada web sajtova:</h4>
                <ul className="space-y-1 ml-4">
                  <li>
                    <Link to="/custom" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Sajtovi po meri
                    </Link>
                  </li>
                  <li>
                    <Link to="/wordpress" className="text-gray-400 hover:text-orange-500 transition-colors">
                      WordPress sajtovi
                    </Link>
                  </li>
                  <li>
                    <Link to="/webapp" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Izrada web aplikacija
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Razvoj aplikacija:</h4>
                <ul className="space-y-1 ml-4">
                  <li>
                    <Link to="/desktop" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Desktop aplikacije
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Mobilne aplikacije
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SALCode. Sva prava zadržana.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">
              Politika privatnosti
            </Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">
              Uslovi korišćenja
            </Link>
            <Link to="/cookies" className="hover:text-orange-500 transition-colors">
              Politika kolačića
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;