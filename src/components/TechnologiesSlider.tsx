import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TechnologiesSlider: React.FC = () => {
  const technologies = [
    {
      name: 'React',
      description: 'Moderna JavaScript biblioteka za kreiranje korisničkih interfejsa',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime za server-side development',
      icon: '🟢',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'TypeScript',
      description: 'Tipizovani JavaScript za sigurniji kod',
      icon: '📘',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Python',
      description: 'Moćan programski jezik za backend i AI aplikacije',
      icon: '🐍',
      color: 'from-yellow-500 to-green-500'
    },
    {
      name: 'Flutter',
      description: 'Cross-platform framework za mobilne aplikacije',
      icon: '📱',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'PostgreSQL',
      description: 'Napredna relaciona baza podataka',
      icon: '🐘',
      color: 'from-blue-700 to-indigo-700'
    },
    {
      name: 'Docker',
      description: 'Kontejnerizacija aplikacija za lakše deployment',
      icon: '🐳',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'AWS',
      description: 'Cloud computing platforma za skalabilne aplikacije',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Vue.js',
      description: 'Progresivni JavaScript framework za web aplikacije',
      icon: '💚',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Laravel',
      description: 'Elegantan PHP framework za web artisane',
      icon: '🔴',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL baza podataka za moderne aplikacije',
      icon: '🍃',
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'Firebase',
      description: 'Google platforma za mobilne i web aplikacije',
      icon: '🔥',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens
      if (window.innerWidth >= 768) return 3;  // md screens
      return 2; // sm screens
    }
    return 4;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Reset to first page if current page is out of bounds
      const maxPages = Math.ceil(technologies.length / newItemsPerPage);
      if (currentPage >= maxPages) {
        setCurrentPage(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, technologies.length]);

  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleTechnologies = technologies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12 sm:py-20 bg-gray-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Tehnologije koje koristimo</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">Radimo sa najnovijim i najpouzdanijim tehnologijama</p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 shadow-lg"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 shadow-lg"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Technologies Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mx-12 sm:mx-16"
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {visibleTechnologies.map((tech, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                  <div className="text-center min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
                    <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{tech.icon}</div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{tech.name}</h3>
                    <p className="text-white/80 text-xs sm:text-sm hidden sm:block">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentPage ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              Stranica {currentPage + 1} od {totalPages} • Ukupno {technologies.length} tehnologija
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSlider;