import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, CodeBracketIcon, PaintBrushIcon, RocketLaunchIcon, CogIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const Custom: React.FC = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: 'Prilagođeno kodiranje',
      description: 'Svaki sajt je kodiran od nule prema vašim specifičnim potrebama i zahtevima'
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8" />,
      title: 'Jedinstveni dizajn',
      description: 'Kreiramo originalan dizajn koji savršeno odražava vaš brend i poslovnu viziju'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: 'Optimizovane performanse',
      description: 'Brzina učitavanja, SEO optimizacija i najbolje performanse su naš prioritet'
    }
  ];

  const benefits = [
    'Potpuno prilagođen vašim potrebama',
    'Vlasništvo kompletnog koda',
    'Najbolje performanse i brzina',
    'Neograničena skalabilnost',
    'Jedinstveni dizajn i funkcionalnosti',
    'Napredna SEO optimizacija',
    'Mobilna responsivnost',
    'Kontinuirana podrška i održavanje'
  ];

  const technologies = [
    {
      name: 'React & Next.js',
      description: 'Moderne JavaScript biblioteke za brze i interaktivne korisničke interfejse',
      icon: '⚛️'
    },
    {
      name: 'Node.js & Express',
      description: 'Snažan backend development za kompleksne funkcionalnosti',
      icon: '🟢'
    },
    {
      name: 'TypeScript',
      description: 'Tipizovani JavaScript za sigurniji i pouzdaniji kod',
      icon: '📘'
    },
    {
      name: 'PostgreSQL & MongoDB',
      description: 'Napredne baze podataka za efikasno čuvanje informacija',
      icon: '🗄️'
    }
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Analiza i planiranje', 
      description: 'Detaljno analiziramo vaše potrebe, ciljeve i target grupu. Kreiramo wireframes i tehničku specifikaciju.',
      duration: '1-2 nedelje'
    },
    { 
      step: 2, 
      title: 'UI/UX dizajn', 
      description: 'Dizajniramo prilagođen korisnički interfejs koji je i funkcionalan i vizuelno privlačan.',
      duration: '2-3 nedelje'
    },
    { 
      step: 3, 
      title: 'Frontend development', 
      description: 'Kodiramo responzivni frontend koristeći najnovije tehnologije i najbolje prakse.',
      duration: '3-4 nedelje'
    },
    { 
      step: 4, 
      title: 'Backend development', 
      description: 'Razvijamo snažan backend sa bazom podataka, API-jima i sigurnosnim sistemima.',
      duration: '3-4 nedelje'
    },
    { 
      step: 5, 
      title: 'Testiranje i lansiranje', 
      description: 'Temeljno testiramo funkcionalnosti, optimizujemo performanse i lansiramo sajt.',
      duration: 'do 1 nedelje'
    }
  ];

  const comparisons = [
    {
      feature: 'Dizajn',
      custom: 'Potpuno prilagođen',
      template: 'Ograničen na template'
    },
    {
      feature: 'Funkcionalnosti',
      custom: 'Neograničene mogućnosti',
      template: 'Ograničene opcije'
    },
    {
      feature: 'Performanse',
      custom: 'Optimizovane za brzinu',
      template: 'Često sporije'
    },
    {
      feature: 'SEO',
      custom: 'Napredna optimizacija',
      template: 'Osnovna optimizacija'
    },
    {
      feature: 'Skalabilnost',
      custom: 'Neograničena',
      template: 'Ograničena'
    },
    {
      feature: 'Vlasništvo koda',
      custom: 'Potpuno vaše',
      template: 'Ograničeno'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <FloatingBubbles />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500">Sajtovi</span> po meri
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kreiramo jedinstvene web sajtove koji savršeno odgovaraju vašim potrebama, 
              ciljevima i viziji vašeg brenda
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">100% prilagođeno</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Moderne tehnologije</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Optimizovane performanse</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Zatražite ponudu
              </Link>
              <Link 
                to="/portfolio"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Pogledajte portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Custom Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Šta su sajtovi po meri?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Sajtovi po meri su web rešenja koja se kreiraju potpuno od nule, prilagođena specifičnim 
              potrebama vašeg biznisa. Za razliku od template rešenja, svaki element je dizajniran i 
              kodiran posebno za vas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-orange-500 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits vs Templates Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sajtovi po meri vs Template rešenja
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte zašto su sajtovi po meri bolji izbor za ozbiljan biznis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-gray-900 text-white p-4">
              <div className="font-semibold">Karakteristika</div>
              <div className="font-semibold text-center text-orange-400">Sajtovi po meri</div>
              <div className="font-semibold text-center">Template rešenja</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center text-green-600 font-semibold">{comparison.custom}</div>
                <div className="text-center text-gray-500">{comparison.template}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Tehnologije koje koristimo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Koristimo najnovije i najpouzdanije tehnologije za kreiranje brzih, sigurnih i skalabilnih sajtova
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tech.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naš proces rada</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Od ideje do realizacije - transparentan proces u 5 koraka
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="text-orange-400 text-sm">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="w-48 lg:w-56 h-32 lg:h-36 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Zašto izabrati sajtove po meri?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sajtovi po meri pružaju neograničene mogućnosti prilagođavanja i garantuju da će vaš 
                sajt biti jedinstven, brz i potpuno prilagođen vašim poslovnim potrebama.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom website development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Prilagođeno</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Spremni za vaš jedinstveni sajt?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako možemo kreirati 
              savršen sajt za vaš biznis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quote"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Zatražite besplatnu ponudu
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-500"
              >
                Razgovarajmo o projektu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Custom;