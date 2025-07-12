import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const AboutSection: React.FC = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Kreiramo moderne, responzivne web sajtove i aplikacije koristeći najnovije tehnologije.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobilne aplikacije',
      description: 'Razvijamo native i cross-platform mobilne aplikacije za iOS i Android platforme.'
    },
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Desktop aplikacije',
      description: 'Kreiramo snažne desktop aplikacije za Windows, macOS i Linux operativne sisteme.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">O nama</h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
              SALCode je vodeća kompanija za razvoj digitalnih rešenja, specijalizovana za kreiranje 
              modernih web aplikacija, mobilnih aplikacija i desktop softvera.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Sa preko 5 godina iskustva u industriji, naš tim stručnjaka posvećen je pružanju 
              inovativnih rešenja koja pomažu našim klijentima da ostvare svoje poslovne ciljeve. 
              Kombinujemo kreativnost sa tehničkom ekspertizom kako bismo kreirali proizvode koji 
              ne samo da funkcionišu besprekorno, već i pružaju izuzetno korisničko iskustvo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">50+</div>
                <div className="text-base sm:text-lg text-gray-600">Uspešnih projekata</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">20+</div>
                <div className="text-base sm:text-lg text-gray-600">Zadovoljnih klijenata</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">5+</div>
                <div className="text-base sm:text-lg text-gray-600">Godina iskustva</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start space-x-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-orange-500 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;