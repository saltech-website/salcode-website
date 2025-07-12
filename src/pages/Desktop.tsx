import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ComputerDesktopIcon, CogIcon, ShieldCheckIcon, RocketLaunchIcon, CommandLineIcon, ServerIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const Desktop: React.FC = () => {
  const features = [
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Native performanse',
      description: 'Desktop aplikacije pružaju maksimalne performanse koristeći punu snagu vašeg računara'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Offline funkcionalnost',
      description: 'Radite bez internet konekcije sa potpunom funkcionalnosti i lokalnim čuvanjem podataka'
    },
    {
      icon: <CogIcon className="h-8 w-8" />,
      title: 'Sistem integracija',
      description: 'Duboka integracija sa operativnim sistemom, fajl sistemom i drugim aplikacijama'
    }
  ];

  const benefits = [
    'Maksimalne performanse',
    'Offline rad bez interneta',
    'Pristup lokalnim resursima',
    'Sistem integracije',
    'Napredna sigurnost',
    'Custom UI/UX',
    'Multi-platform podrška',
    'Automatski update sistem'
  ];

  const desktopTypes = [
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Business aplikacije',
      description: 'Aplikacije za upravljanje biznisom, inventarom, finansijama i projektima',
      examples: ['ERP sistemi', 'Inventory management', 'Accounting software', 'Project management']
    },
    {
      icon: <ServerIcon className="h-8 w-8" />,
      title: 'Industrijski softver',
      description: 'Specijalizovane aplikacije za specifične industrije i procese',
      examples: ['Manufacturing control', 'Medical software', 'Engineering tools', 'Scientific applications']
    },
    {
      icon: <CommandLineIcon className="h-8 w-8" />,
      title: 'Utility aplikacije',
      description: 'Pomoćne aplikacije za automatizaciju zadataka i povećanje produktivnosti',
      examples: ['File managers', 'System monitors', 'Backup tools', 'Development utilities']
    }
  ];

  const technologies = [
    {
      name: 'Electron',
      description: 'Cross-platform desktop aplikacije koristeći web tehnologije',
      icon: '⚡',
      category: 'Framework'
    },
    {
      name: 'C# & .NET',
      description: 'Native Windows aplikacije sa punim pristupom sistem API-jima',
      icon: '🔷',
      category: 'Native'
    },
    {
      name: 'Python & PyQt',
      description: 'Cross-platform aplikacije sa bogatim GUI komponentama',
      icon: '🐍',
      category: 'Cross-platform'
    },
    {
      name: 'Java & JavaFX',
      description: 'Platform nezavisne aplikacije sa modernim korisničkim interfejsom',
      icon: '☕',
      category: 'Cross-platform'
    },
    {
      name: 'SQLite & PostgreSQL',
      description: 'Lokalne i mrežne baze podataka za čuvanje informacija',
      icon: '🗄️',
      category: 'Database'
    },
    {
      name: 'Auto-updater',
      description: 'Automatski sistem za ažuriranje aplikacija bez korisničke intervencije',
      icon: '🔄',
      category: 'Utility'
    }
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Analiza zahteva', 
      description: 'Detaljno analiziramo vaše poslovne procese, korisničke potrebe i tehničke specifikacije za desktop aplikaciju.',
      duration: '1-2 nedelje'
    },
    { 
      step: 2, 
      title: 'Arhitektura & planiranje', 
      description: 'Dizajniramo arhitekturu aplikacije, biramo tehnologije i planiramo development faze.',
      duration: '3-5 dana'
    },
    { 
      step: 3, 
      title: 'UI/UX dizajn', 
      description: 'Kreiramo korisnički interfejs prilagođen desktop okruženju sa fokusom na produktivnost.',
      duration: '1-2 nedelje'
    },
    { 
      step: 4, 
      title: 'Core development', 
      description: 'Razvijamo glavnu logiku aplikacije, bazu podataka i sistem za upravljanje podacima.',
      duration: '4-8 nedelja'
    },
    { 
      step: 5, 
      title: 'UI implementacija', 
      description: 'Implementiramo korisnički interfejs i povezujemo ga sa backend logikom.',
      duration: '2-4 nedelje'
    },
    { 
      step: 6, 
      title: 'Testiranje & deployment', 
      description: 'Temeljno testiramo aplikaciju, kreiramo installer i postavljamo update sistem.',
      duration: '1-2 nedelje'
    }
  ];

  const comparisons = [
    {
      feature: 'Performanse',
      desktop: 'Maksimalne - native kod',
      web: 'Ograničene browser-om'
    },
    {
      feature: 'Offline rad',
      desktop: 'Potpuna funkcionalnost',
      web: 'Ograničena funkcionalnost'
    },
    {
      feature: 'Sistem pristup',
      desktop: 'Pun pristup OS-u',
      web: 'Ograničen pristup'
    },
    {
      feature: 'Instalacija',
      desktop: 'Potrebna instalacija',
      web: 'Bez instalacije'
    },
    {
      feature: 'Ažuriranje',
      desktop: 'Kontrolisano ažuriranje',
      web: 'Automatsko ažuriranje'
    },
    {
      feature: 'Sigurnost podataka',
      desktop: 'Lokalna kontrola',
      web: 'Cloud zavisnost'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: 'Od 2.500€',
      description: 'Za jednostavne desktop aplikacije',
      features: [
        'Osnovna funkcionalnost',
        'Jednostavan UI',
        'Lokalna baza podataka',
        'Windows podrška',
        'Osnovni installer',
        'Email podrška',
        '3 meseca podrške',
        'Osnovna dokumentacija'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'Od 5.000€',
      description: 'Najpopularniji izbor za business aplikacije',
      features: [
        'Napredne funkcionalnosti',
        'Custom UI/UX dizajn',
        'Multi-platform (Win/Mac/Linux)',
        'Mrežna baza podataka',
        'Auto-update sistem',
        'User management',
        'Reporting funkcionalnosti',
        '6 meseci podrške',
        'Obuka korisnika'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Od 10.000€',
      description: 'Za kompleksne enterprise aplikacije',
      features: [
        'Kompleksna arhitektura',
        'Mikroservisi integracija',
        'Advanced security',
        'Multi-tenant podrška',
        'API integracije',
        'Custom plugin sistem',
        'Advanced analytics',
        '12 meseci podrške',
        'Dedicated support',
        'On-site obuka'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Inventory Management',
      description: 'Aplikacija za upravljanje inventarom sa bar-code skeniranjem',
      industry: 'Retail & Warehouse',
      features: ['Real-time tracking', 'Barcode scanning', 'Reporting', 'Multi-location']
    },
    {
      title: 'Medical Practice Software',
      description: 'Kompletan sistem za upravljanje medicinskom praksom',
      industry: 'Healthcare',
      features: ['Patient records', 'Appointment scheduling', 'Billing', 'HIPAA compliance']
    },
    {
      title: 'Manufacturing Control',
      description: 'Sistem za kontrolu proizvodnih procesa i kvaliteta',
      industry: 'Manufacturing',
      features: ['Process monitoring', 'Quality control', 'Production planning', 'Equipment tracking']
    },
    {
      title: 'Financial Management',
      description: 'Aplikacija za računovodstvo i finansijsko upravljanje',
      industry: 'Finance',
      features: ['Accounting', 'Invoicing', 'Tax reporting', 'Financial analytics']
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
              <span className="text-orange-500">Desktop</span> aplikacije
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kreiramo snažne desktop aplikacije koje maksimalno koriste resurse vašeg računara 
              i pružaju neprevazišene performanse za vaše poslovne potrebe
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Native performanse</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Offline funkcionalnost</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Sistem integracija</span>
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

      {/* What are Desktop Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Šta su desktop aplikacije?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Desktop aplikacije su softverska rešenja koja se instaliraju direktno na vaš računar i 
              koriste punu snagu vašeg sistema. Za razliku od web aplikacija, desktop aplikacije 
              pružaju maksimalne performanse, offline funkcionalnost i duboku integraciju sa 
              operativnim sistemom, što ih čini idealnim za zahtevne poslovne procese.
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

      {/* Types of Desktop Apps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tipovi desktop aplikacija koje razvijamo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specijalizovani smo za različite tipove desktop aplikacija prilagođene specifičnim industrijama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {desktopTypes.map((type, index) => (
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Primeri naših desktop aplikacija</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte kako desktop aplikacije rešavaju stvarne poslovne izazove u različitim industrijama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, fIndex) => (
                    <span 
                      key={fIndex}
                      className="text-xs bg-white text-gray-700 px-2 py-1 rounded border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop vs Web Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Desktop vs Web aplikacije
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Kada su desktop aplikacije bolji izbor od web rešenja?
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
              <div className="font-semibold text-center text-orange-400">Desktop aplikacije</div>
              <div className="font-semibold text-center">Web aplikacije</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center text-green-600 font-semibold">{comparison.desktop}</div>
                <div className="text-center text-gray-500">{comparison.web}</div>
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
                Desktop aplikacije su idealne kada vam je potrebna maksimalna performansa, offline rad, 
                pristup lokalnim resursima ili duboka integracija sa operativnim sistemom. 
                Web aplikacije su bolje za jednostavniju kolaboraciju i pristup sa različitih uređaja.
              </p>
            </div>
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
              Koristimo najnovije tehnologije za kreiranje brzih, sigurnih i pouzdanih desktop aplikacija
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
              Strukturiran pristup razvoju desktop aplikacija u 6 faza
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
                Prednosti desktop aplikacija
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Desktop aplikacije pružaju neprevazišene performanse i kontrolu nad vašim poslovnim procesima. 
                Idealne su za zahtevne aplikacije koje zahtevaju maksimalnu brzinu, sigurnost i funkcionalnost.
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
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Desktop application development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Native</div>
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
              Spremni za vašu desktop aplikaciju?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako desktop aplikacija 
              može povećati produktivnost i efikasnost vašeg tima
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

export default Desktop;