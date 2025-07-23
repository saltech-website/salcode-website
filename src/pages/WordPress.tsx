import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, CogIcon, PaintBrushIcon, ShieldCheckIcon, GlobeAltIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const WordPress: React.FC = () => {
  const features = [
    {
      icon: <PaintBrushIcon className="h-8 w-8" />,
      title: 'Prilagođen dizajn',
      description: 'Kreiramo jedinstvene WordPress teme koje savršeno odgovaraju vašem brendu i viziji'
    },
    {
      icon: <CogIcon className="h-8 w-8" />,
      title: 'Lako upravljanje',
      description: 'Intuitivni admin panel omogućava vam da jednostavno ažurirate sadržaj bez tehničkih znanja'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Sigurnost i backup',
      description: 'Implementiramo najbolje sigurnosne prakse, redovne backup-ove i zaštitu od malware-a'
    }
  ];

  const benefits = [
    'Jednostavno upravljanje sadržajem',
    'SEO optimizacija ugrađena',
    'Responzivni dizajn za sve uređaje',
    'Brza instalacija i setup',
    'Podrška za hiljade plugin-ova',
    'Redovni automatski backup-ovi',
    'Napredni sigurnosni sistemi',
    'Obuka za korišćenje CMS-a'
  ];

  const whyWordPress = [
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: '43% interneta',
      description: 'WordPress pokreće 43% svih sajtova na internetu - od blogova do velikih korporativnih sajtova'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Ogromna zajednica',
      description: 'Milioni developera i korisnika širom sveta kontinuirano doprinose razvoju platforme'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Skalabilnost',
      description: 'Od jednostavnog bloga do kompleksnog e-commerce sajta - WordPress raste sa vašim biznisom'
    }
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Konsultacija i planiranje', 
      description: 'Analiziramo vaše potrebe, ciljnu grupu i konkurenciju. Kreiramo sitemap i funkcionalnu specifikaciju.',
      duration: '3-5 dana'
    },
    { 
      step: 2, 
      title: 'Dizajn i wireframes', 
      description: 'Kreiramo wireframes i vizuelni dizajn koji odražava vaš brend i pruža odličo korisničko iskustvo.',
      duration: '1-2 nedelje'
    },
    { 
      step: 3, 
      title: 'WordPress development', 
      description: 'Razvijamo custom WordPress temu, implementiramo funkcionalnosti i optimizujemo performanse.',
      duration: '2-3 nedelje'
    },
    { 
      step: 4, 
      title: 'Sadržaj i testiranje', 
      description: 'Unosimo sadržaj, testiramo funkcionalnosti na različitim uređajima i optimizujemo za SEO.',
      duration: '3-5 dana'
    },
    { 
      step: 5, 
      title: 'Lansiranje i obuka', 
      description: 'Lansiramo sajt, pružamo obuku za korišćenje admin panela i postavljamo monitoring sisteme.',
      duration: '1-2 dana'
    }
  ];

  const comparisons = [
    {
      feature: 'Brzina implementacije',
      wordpress: 'Brža od custom rešenja',
      custom: 'Duži development proces'
    },
    {
      feature: 'Cena',
      wordpress: 'Ekonomičnija opcija',
      custom: 'Skuplja investicija'
    },
    {
      feature: 'Upravljanje sadržajem',
      wordpress: 'Intuitivni CMS',
      custom: 'Zahteva custom CMS'
    },
    {
      feature: 'Plugin ekosistem',
      wordpress: '60,000+ plugin-ova',
      custom: 'Custom funkcionalnosti'
    },
    {
      feature: 'Održavanje',
      wordpress: 'Redovni update-ovi',
      custom: 'Custom održavanje'
    },
    {
      feature: 'Skalabilnost',
      wordpress: 'Odlična za većinu potreba',
      custom: 'Neograničena'
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
              <span className="text-orange-500">WordPress</span> sajtovi
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Profesionalni WordPress sajtovi sa prilagođenim dizajnom, 
              naprednim funkcionalnostima i jednostavnim upravljanjem
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">43% interneta</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Lako upravljanje</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">SEO optimizovano</span>
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
                WordPress portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why WordPress Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Zašto WordPress?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              WordPress je najkorišćeniji CMS na svetu iz dobrih razloga. Evo zašto je pravi izbor za vaš sajt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyWordPress.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-orange-500 mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
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

      {/* WordPress vs Custom Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              WordPress vs Custom development
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kada je WordPress pravi izbor za vaš projekat?
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
              <div className="font-semibold text-center text-orange-400">WordPress</div>
              <div className="font-semibold text-center">Custom development</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center text-green-600 font-semibold">{comparison.wordpress}</div>
                <div className="text-center text-gray-500">{comparison.custom}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Preporuka</h3>
              <p className="text-orange-700">
                WordPress je idealan za 80% web projekata - od blogova i korporativnih sajtova do e-commerce platformi. 
                Custom development preporučujemo samo za specifične potrebe koje WordPress ne može da pokrije.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naš WordPress proces</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Od ideje do lansiranja - strukturiran proces u 5 koraka
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
                  <div className="text-6xl text-orange-500/50">
                    {step.step === 1 && '📋'}
                    {step.step === 2 && '🎨'}
                    {step.step === 3 && '⚙️'}
                    {step.step === 4 && '🧪'}
                    {step.step === 5 && '🚀'}
                  </div>
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
                Prednosti WordPress sajtova
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                WordPress kombinuje jednostavnost korišćenja sa moćnim funkcionalnostima, 
                omogućavajući vam da se fokusirate na vaš biznis umesto na tehničke detalje.
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
                src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="WordPress development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">43%</div>
                <div className="text-sm">Interneta</div>
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
              Spremni za vaš WordPress sajt?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako WordPress 
              može transformisati vaše online prisustvo
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

export default WordPress;