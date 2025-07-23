import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, CloudIcon, DevicePhoneMobileIcon, RocketLaunchIcon, GlobeAltIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const WebApp: React.FC = () => {
  const features = [
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: 'Cloud-based rešenja',
      description: 'Aplikacije dostupne sa bilo kog uređaja kroz web browser, bez potrebe za instalacijom'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Cross-platform kompatibilnost',
      description: 'Jedna aplikacija radi na svim uređajima - desktop, tablet, mobilni telefon'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: 'Skalabilnost i performanse',
      description: 'Aplikacije koje rastu sa vašim biznisom i podnose veliki broj korisnika'
    }
  ];

  const benefits = [
    'Pristup sa bilo kog uređaja',
    'Automatski update-ovi',
    'Centralizovano upravljanje podacima',
    'Real-time kolaboracija',
    'Napredna sigurnost',
    'API integracije',
    'Offline funkcionalnost',
    'Skalabilna arhitektura'
  ];

  const webAppTypes = [
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Business aplikacije',
      description: 'CRM, ERP, projektni menadžment, HR sistemi i druge poslovne aplikacije',
      examples: ['CRM sistemi', 'Projektni menadžment', 'HR platforme', 'Finansijski sistemi']
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: 'E-commerce platforme',
      description: 'Napredne online prodavnice sa custom funkcionalnostima i integracijama',
      examples: ['Multi-vendor platforme', 'B2B portali', 'Subscription servisi', 'Marketplace-ovi']
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'SaaS aplikacije',
      description: 'Software-as-a-Service rešenja za različite industrije i potrebe',
      examples: ['Booking sistemi', 'Learning platforme', 'Analytics dashboards', 'Communication tools']
    }
  ];

  const technologies = [
    {
      name: 'React & Next.js',
      description: 'Moderne JavaScript biblioteke za interaktivne korisničke interfejse',
      icon: '⚛️',
      category: 'Frontend'
    },
    {
      name: 'Node.js & Express',
      description: 'Snažan backend development za API-je i server-side logiku',
      icon: '🟢',
      category: 'Backend'
    },
    {
      name: 'PostgreSQL & MongoDB',
      description: 'Relacione i NoSQL baze podataka za različite potrebe',
      icon: '🗄️',
      category: 'Database'
    },
    {
      name: 'AWS & Docker',
      description: 'Cloud hosting i kontejnerizacija za skalabilnost',
      icon: '☁️',
      category: 'DevOps'
    },
    {
      name: 'TypeScript',
      description: 'Tipizovani JavaScript za sigurniji i pouzdaniji kod',
      icon: '📘',
      category: 'Language'
    },
    {
      name: 'GraphQL & REST',
      description: 'Moderne API tehnologije za efikasnu komunikaciju',
      icon: '🔗',
      category: 'API'
    }
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Istraživanje & analiza', 
      description: 'Detaljno analiziramo vaše poslovne procese, korisničke potrebe i tehničke zahteve. Kreiramo user stories i tehničku specifikaciju.',
      duration: '1-2 nedelje'
    },
    { 
      step: 2, 
      title: 'Arhitektura & planiranje', 
      description: 'Dizajniramo sistem arhitekturu, bazu podataka i API strukture. Planiramo development faze i milestones.',
      duration: '1 nedelja'
    },
    { 
      step: 3, 
      title: 'UI/UX dizajn', 
      description: 'Kreiramo wireframes, prototypes i finalni dizajn fokusiran na korisničko iskustvo i funkcionalnost.',
      duration: '2-3 nedelje'
    },
    { 
      step: 4, 
      title: 'Backend development', 
      description: 'Razvijamo server-side logiku, API-je, bazu podataka i implementiramo sigurnosne mere.',
      duration: '4-6 nedelja'
    },
    { 
      step: 5, 
      title: 'Frontend development', 
      description: 'Kodiramo korisnički interfejs, implementiramo interakcije i povezujemo sa backend sistemom.',
      duration: '4-6 nedelja'
    },
    { 
      step: 6, 
      title: 'Testiranje & lansiranje', 
      description: 'Temeljno testiramo funkcionalnosti, performanse i sigurnost. Postavljamo production environment.',
      duration: '1-2 nedelje'
    }
  ];

  const comparisons = [
    {
      feature: 'Pristupačnost',
      webapp: 'Dostupno sa bilo kog uređaja',
      desktop: 'Samo na instaliranim uređajima'
    },
    {
      feature: 'Ažuriranje',
      webapp: 'Automatski update-ovi',
      desktop: 'Manuelno ažuriranje'
    },
    {
      feature: 'Kolaboracija',
      webapp: 'Real-time saradnja',
      desktop: 'Ograničena kolaboracija'
    },
    {
      feature: 'Održavanje',
      webapp: 'Centralizovano održavanje',
      desktop: 'Održavanje na svakom uređaju'
    },
    {
      feature: 'Skalabilnost',
      webapp: 'Lako skaliranje',
      desktop: 'Ograničena skalabilnost'
    },
    {
      feature: 'Backup & sigurnost',
      webapp: 'Centralizovani backup',
      desktop: 'Lokalni backup potreban'
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
              <span className="text-orange-500">Web</span> aplikacije
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kreiramo napredne web aplikacije koje transformišu vaše poslovne procese 
              i omogućavaju efikasniju saradnju i upravljanje
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Cloud-based</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Skalabilno</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Cross-platform</span>
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

      {/* What are Web Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Šta su web aplikacije?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Web aplikacije su softveri koji se pokreću u web browser-u, omogućavajući korisnicima 
              da pristupe naprednim funkcionalnostima sa bilo kog uređaja povezanog na internet. 
              Za razliku od običnih web sajtova, web aplikacije su interaktivne i omogućavaju 
              kompleksne operacije poput upravljanja podacima, automatizacije procesa i real-time saradnje.
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

      {/* Types of Web Apps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tipovi web aplikacija koje razvijamo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specijalizovani smo za različite tipove web aplikacija prilagođene specifičnim industrijama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webAppTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-orange-500 mb-6 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{type.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Primeri:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Apps vs Desktop Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Web aplikacije vs Desktop aplikacije
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Zašto su web aplikacije često bolji izbor za moderne biznise?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-gray-900 text-white p-4">
              <div className="font-semibold">Karakteristika</div>
              <div className="font-semibold text-center text-orange-400">Web aplikacije</div>
              <div className="font-semibold text-center">Desktop aplikacije</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center text-green-600 font-semibold">{comparison.webapp}</div>
                <div className="text-center text-gray-500">{comparison.desktop}</div>
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
                Web aplikacije su idealne za biznise koji žele fleksibilnost, lakše održavanje i mogućnost 
                pristupa sa različitih uređaja. Desktop aplikacije preporučujemo samo kada su potrebne 
                specifične funkcionalnosti koje web tehnologije ne mogu da podrže.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Tehnologije koje koristimo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Koristimo najnovije i najpouzdanije tehnologije za kreiranje brzih, sigurnih i skalabilnih web aplikacija
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naš development proces</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Strukturiran pristup razvoju web aplikacija u 6 faza
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
                    {step.step === 1 && '🔍'}
                    {step.step === 2 && '🏗️'}
                    {step.step === 3 && '🎨'}
                    {step.step === 4 && '⚙️'}
                    {step.step === 5 && '💻'}
                    {step.step === 6 && '🚀'}
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
                Prednosti web aplikacija
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Web aplikacije omogućavaju vašem timu da radi efikasnije, bez obzira na lokaciju ili uređaj. 
                Centralizovano upravljanje podacima i automatski update-ovi čine ih idealnim rešenjem za moderne biznise.
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
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web application development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Dostupnost</div>
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
              Spremni za vašu web aplikaciju?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako web aplikacija 
              može transformisati vaše poslovne procese i povećati efikasnost
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

export default WebApp;