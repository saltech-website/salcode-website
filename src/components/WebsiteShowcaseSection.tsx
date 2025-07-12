import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const WebsiteShowcaseSection: React.FC = () => {
  const benefits = [
    'Sajtovi po meri',
    'WordPress development',
    'Web aplikacije',
    'Responzivni dizajn',
    'SEO optimizacija',
    'Moderna tehnologija'
  ];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Title - First on mobile, above laptop on desktop */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center order-1 lg:hidden text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              WEB DEVELOPMENT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                USLUGE
              </span>
            </h2>
          </motion.div>

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white order-2 lg:order-1"
          >
            <p className="text-sm sm:text-base lg:text-lg text-purple-100 mb-4">
              Pružamo kompletne <span className="text-orange-400 font-semibold">web development usluge</span> - 
              od custom sajtova do složenih web aplikacija.
            </p>

            <p className="text-base sm:text-lg text-purple-100 mb-4">
              Specijalizovani smo za <span className="text-orange-400 font-semibold">custom development</span>, 
              <span className="text-orange-400 font-semibold"> WordPress</span> i 
              <span className="text-orange-400 font-semibold"> web aplikacije</span>.
            </p>

            <p className="text-base sm:text-lg text-purple-100 mb-6">
              Bez obzira da li vam je potreban jednostavan WordPress sajt ili kompleksna web aplikacija, 
              imamo ekspertizu da realizujemo vaš projekat na najvišem nivou.
            </p>

            <div className="mb-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3">
                Naše web development usluge:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-purple-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-purple-100 mb-6">
              Od jednostavnih prezentacionih sajtova do naprednih e-commerce platformi i SaaS aplikacija - 
              kreiramo digitalna rešenja koja donose rezultate i rastu sa vašim biznisom.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 w-full sm:w-auto"
            >
              Istražite naše web usluge
            </motion.button>
          </motion.div>

          {/* Left side - Desktop/Laptop mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-3 lg:order-2"
          >
            {/* Title above laptop */}
            <div className="text-center mb-6 lg:mb-8 hidden lg:block">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                WEB DEVELOPMENT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                  USLUGE
                </span>
              </h2>
            </div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Laptop Frame */}
              <div className="bg-gray-800 rounded-t-2xl p-3 lg:p-4 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                  {/* Browser Header */}
                  <div className="bg-gray-100 h-8 lg:h-10 flex items-center px-4 space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-sm h-5 lg:h-6 flex items-center px-2">
                      <span className="text-xs lg:text-sm text-gray-500">www.salcode.rs</span>
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="p-3 lg:p-4 space-y-3 lg:space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs lg:text-sm">SC</span>
                        </div>
                        <span className="font-bold text-gray-900 text-sm lg:text-base">SALCode</span>
                      </div>
                      <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs lg:text-sm">Kontakt</div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 lg:p-5 rounded-lg text-white text-center">
                      <div className="font-bold text-sm lg:text-base mb-1">Web Development Usluge</div>
                      <div className="text-xs lg:text-sm opacity-90">Custom • WordPress • Web Apps</div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-3 gap-2 lg:gap-3">
                      <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm text-center">
                        <div className="text-lg lg:text-xl">⚙️</div>
                        <div className="text-xs lg:text-sm font-semibold text-gray-700">Custom</div>
                      </div>
                      <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm text-center">
                        <div className="text-lg lg:text-xl">📝</div>
                        <div className="text-xs lg:text-sm font-semibold text-gray-700">WordPress</div>
                      </div>
                      <div className="bg-white p-2 lg:p-3 rounded-lg shadow-sm text-center">
                        <div className="text-lg lg:text-xl">🚀</div>
                        <div className="text-xs lg:text-sm font-semibold text-gray-700">Web Apps</div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      <div className="bg-blue-100 p-2 lg:p-3 rounded-lg text-center">
                        <div className="text-lg lg:text-xl font-bold text-blue-600">30+</div>
                        <div className="text-xs lg:text-sm text-blue-600">Custom Sites</div>
                      </div>
                      <div className="bg-green-100 p-2 lg:p-3 rounded-lg text-center">
                        <div className="text-lg lg:text-xl font-bold text-green-600">20+</div>
                        <div className="text-xs lg:text-sm text-green-600">Web Apps</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="bg-gray-700 h-4 lg:h-5 rounded-b-2xl relative">
                <div className="absolute inset-x-0 top-1 h-2 lg:h-3 bg-gray-600 rounded-b-xl mx-8 lg:mx-12"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcaseSection;