import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const DigitalSuccessSection: React.FC = () => {
  const benefits = [
    'Desktop aplikacije',
    'iOS & Android apps',
    'Cross-platform rešenja',
    'Native performanse',
    'Intuitivni UI/UX',
    'Offline funkcionalnost'
  ];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Title - First on mobile, above phone on desktop */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:hidden text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              APP DEVELOPMENT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
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
              Kreiramo <span className="text-orange-400 font-semibold">desktop i mobilne aplikacije</span> koje 
              rešavaju stvarne probleme i poboljšavaju poslovne procese.
            </p>

            <p className="text-base sm:text-lg text-purple-100 mb-4">
              Od <span className="text-orange-400 font-semibold">desktop softvera</span> za upravljanje biznisom 
              do <span className="text-orange-400 font-semibold">mobilnih aplikacija</span> za iOS i Android.
            </p>

            <p className="text-base sm:text-lg text-purple-100 mb-6">
              Kombinujemo ekspertizu u <span className="text-orange-400 font-semibold">desktop</span> i 
              <span className="text-orange-400 font-semibold"> mobile developmentu</span> za kreiranje 
              aplikacija koje donose rezultate.
            </p>

            <div className="mb-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3">
                Naše app development usluge:
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
              Bilo da vam je potrebna desktop aplikacija za upravljanje inventarom ili mobilna aplikacija 
              za vaše klijente - kreiramo rešenja koja se savršeno uklapaju u vaš workflow.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 w-full sm:w-auto"
            >
              Istražite naše aplikacije
            </motion.button>
          </motion.div>

          {/* Left side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-3 lg:order-2"
          >
            {/* Title above phone */}
            <div className="text-center mb-6 lg:mb-8 hidden lg:block">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                DESKTOP & MOBILNE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  APLIKACIJE
                </span>
              </h2>
            </div>
            
            <div className="relative mx-auto w-40 sm:w-48 lg:w-64 h-[300px] sm:h-[360px] lg:h-[480px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-100 h-6 sm:h-8 flex items-center justify-between px-4 sm:px-6 text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-2 sm:p-3 lg:p-4 space-y-2 sm:space-y-3 lg:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm lg:text-base">SC</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">SALCode App</div>
                        <div className="text-xs text-gray-500">Desktop & Mobile Solutions</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 sm:p-3 lg:p-4 rounded-lg text-white">
                        <div className="font-semibold text-xs sm:text-sm lg:text-base">Desktop App</div>
                        <div className="text-xs opacity-90">Inventory Management</div>
                      </div>
                      
                      <div className="bg-gray-100 p-2 sm:p-3 lg:p-4 rounded-lg">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">Mobile App</div>
                        <div className="text-xs text-gray-600">iOS & Android</div>
                      </div>
                      
                      <div className="bg-gray-100 p-2 sm:p-3 lg:p-4 rounded-lg">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">Cross-Platform</div>
                        <div className="text-xs text-gray-600">React Native & Electron</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-100 p-2 sm:p-3 rounded-lg text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">15+</div>
                        <div className="text-xs text-blue-600">Desktop Apps</div>
                      </div>
                      <div className="bg-green-100 p-2 sm:p-3 rounded-lg text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">25+</div>
                        <div className="text-xs text-green-600">Mobile Apps</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSuccessSection;