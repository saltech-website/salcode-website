import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'Duvanska Industrija Coka doo',
      logo: '/partners/partner1.png',
      link: 'http://www.dic-coka.co.rs/'
    },
    {
      name: 'Kripton doo',
      logo: '/partners/partner4.png',
      link: 'https://www.kripton.rs'
    },
    {
      name: 'BUS Computers doo',
      logo: '/partners/partner3.png',
      link: 'https://bus.co.rs/'
    },
    {
      name: 'Actuel',
      logo: '/partners/partner2.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Naši partneri</h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">Sarađujemo sa vodećim kompanijama u industriji</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;