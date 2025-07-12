import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, PlayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from './FloatingBubbles';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    'Prilagođen razvoj',
    'Moderne tehnologije',
    '24/7 podrška'
  ];

  const stats = [
    { number: '50+', label: 'Završenih projekata' },
    { number: '20+', label: 'Zadovoljnih klijenata' },
    { number: '5+', label: 'Godina iskustva' },
    { number: '24/7', label: 'Podrška' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden w-full">
      <FloatingBubbles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="text-center py-20">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500">SAL</span>
            <span className="text-white">Code</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Razvoj modernih web aplikacija i sajtova
          </motion.p>

          {/* Benefits List */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-12 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-base sm:text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Kontaktirajte nas
            </Link>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center space-x-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <PlayIcon className="h-5 w-5" />
              <span>Pogledaj demo</span>
            </button>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Down Arrow */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDownIcon className="h-8 w-8 text-orange-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-4">Video prezentacija</h3>
              <p className="text-gray-600 mb-6">
                Video prezentacija još nije dostupna. Biće uskoro dodata.
              </p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;