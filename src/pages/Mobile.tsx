import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, DevicePhoneMobileIcon, GlobeAltIcon, ShieldCheckIcon, RocketLaunchIcon, UserGroupIcon, ChartBarIcon, BoltIcon, CameraIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const Mobile: React.FC = () => {
  const features = [
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Native performanse',
      description: 'Aplikacije optimizovane za iOS i Android sa pristupom svim funkcijama uređaja'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: 'Cross-platform razvoj',
      description: 'Jedna aplikacija za sve platforme - iOS, Android i web sa deljenim kodom'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Sigurnost i privatnost',
      description: 'Implementiramo najbolje sigurnosne prakse i poštujemo privacy standarde'
    }
  ];

  const benefits = [
    'Native iOS & Android aplikacije',
    'Cross-platform rešenja',
    'Push notifikacije',
    'Offline funkcionalnost',
    'Biometrijska autentifikacija',
    'In-app kupovine',
    'Geolokacija i mape',
    'Kamera i media funkcije'
  ];

  const mobileTypes = [
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Business aplikacije',
      description: 'Aplikacije za upravljanje biznisom, prodaju, CRM i komunikaciju sa timom',
      examples: ['Sales tracking apps', 'Team communication', 'Inventory management', 'Field service apps']
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Consumer aplikacije',
      description: 'Aplikacije za krajnje korisnike - lifestyle, entertainment, utility',
      examples: ['Social networking', 'E-commerce apps', 'Fitness tracking', 'Food delivery']
    },
    {
      icon: <BoltIcon className="h-8 w-8" />,
      title: 'IoT i Smart aplikacije',
      description: 'Aplikacije za kontrolu pametnih uređaja i IoT sistema',
      examples: ['Smart home control', 'Wearable apps', 'Industrial IoT', 'Health monitoring']
    }
  ];

  const technologies = [
    {
      name: 'React Native',
      description: 'Cross-platform development sa native performansama',
      icon: '⚛️',
      category: 'Cross-platform'
    },
    {
      name: 'Flutter',
      description: 'Google-ov framework za brze i lepe aplikacije',
      icon: '🎯',
      category: 'Cross-platform'
    },
    {
      name: 'Swift & Kotlin',
      description: 'Native development za iOS i Android platforme',
      icon: '📱',
      category: 'Native'
    },
    {
      name: 'Firebase',
      description: 'Backend-as-a-Service za brži development',
      icon: '🔥',
      category: 'Backend'
    },
    {
      name: 'Push Notifications',
      description: 'Real-time komunikacija sa korisnicima',
      icon: '🔔',
      category: 'Service'
    },
    {
      name: 'App Store Optimization',
      description: 'Optimizacija za bolje rangiranje u store-ovima',
      icon: '📈',
      category: 'Marketing'
    }
  ];

  const processSteps = [
    { 
      step: 1, 
      title: 'Istraživanje i strategija', 
      description: 'Analiziramo target grupu, konkurenciju i definišemo app strategiju. Kreiramo user personas i user journey mape.',
      duration: '1-2 nedelje'
    },
    { 
      step: 2, 
      title: 'UX/UI dizajn', 
      description: 'Kreiramo wireframes, prototypes i finalni UI dizajn prilagođen mobile platformama i guidelines.',
      duration: '2-3 nedelje'
    },
    { 
      step: 3, 
      title: 'Tehnička arhitektura', 
      description: 'Planiramo app arhitekturu, API strukture, baze podataka i integracije sa third-party servisima.',
      duration: '1 nedelja'
    },
    { 
      step: 4, 
      title: 'Development', 
      description: 'Razvijamo aplikaciju koristeći najbolje prakse za izabranu platformu (native ili cross-platform).',
      duration: '6-12 nedelja'
    },
    { 
      step: 5, 
      title: 'Testiranje', 
      description: 'Temeljno testiramo na različitim uređajima, OS verzijama i mrežnim uslovima.',
      duration: '2-3 nedelje'
    },
    { 
      step: 6, 
      title: 'Lansiranje i podrška', 
      description: 'Objavljujemo u App Store i Google Play, pratimo performanse i pružamo kontinuiranu podršku.',
      duration: '1-2 nedelje'
    }
  ];

  const comparisons = [
    {
      feature: 'Performanse',
      native: 'Maksimalne performanse',
      crossplatform: 'Odlične performanse'
    },
    {
      feature: 'Development vreme',
      native: 'Duže (2 aplikacije)',
      crossplatform: 'Kraće (1 aplikacija)'
    },
    {
      feature: 'Cena development-a',
      native: 'Skuplje',
      crossplatform: 'Ekonomičnije'
    },
    {
      feature: 'Pristup device funkcijama',
      native: 'Potpun pristup',
      crossplatform: 'Većina funkcija'
    },
    {
      feature: 'Održavanje',
      native: '2 code base-a',
      crossplatform: '1 code base'
    },
    {
      feature: 'UI/UX',
      native: 'Platform-specific',
      crossplatform: 'Konzistentan'
    }
  ];

  const packages = [
    {
      name: 'MVP',
      price: 'Od 4.000€',
      description: 'Za startove i testiranje ideje',
      features: [
        'Osnovna funkcionalnost',
        'Jednostavan UI dizajn',
        'Cross-platform (React Native/Flutter)',
        'Osnovna backend integracija',
        'Push notifikacije',
        'App store submission',
        '3 meseca podrške',
        'Osnovna analitika'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 'Od 8.000€',
      description: 'Najpopularniji izbor za biznise',
      features: [
        'Napredne funkcionalnosti',
        'Custom UI/UX dizajn',
        'Native ili cross-platform',
        'Kompleksna backend integracija',
        'User authentication',
        'In-app purchases',
        'Offline funkcionalnost',
        '6 meseci podrške',
        'Advanced analytics',
        'Admin panel'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Od 15.000€',
      description: 'Za velike organizacije',
      features: [
        'Kompleksne enterprise funkcionalnosti',
        'Native development (iOS + Android)',
        'Custom backend arhitektura',
        'Enterprise security',
        'API integracije',
        'Multi-tenant arhitektura',
        'Advanced reporting',
        '12 meseci podrške',
        'Dedicated support tim',
        'White-label opcije'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Mobile App',
      description: 'Mobilna prodavnica sa naprednim funkcionalnostima',
      industry: 'Retail',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order tracking']
    },
    {
      title: 'Fitness Tracking App',
      description: 'Aplikacija za praćenje treninga i zdravlja',
      industry: 'Health & Fitness',
      features: ['Workout tracking', 'Health metrics', 'Social features', 'Wearable sync']
    },
    {
      title: 'Food Delivery App',
      description: 'Platforma za naručivanje i dostavu hrane',
      industry: 'Food & Beverage',
      features: ['Restaurant listings', 'Real-time tracking', 'Payment processing', 'Rating system']
    },
    {
      title: 'Field Service App',
      description: 'Aplikacija za terenski rad i upravljanje zadacima',
      industry: 'Field Service',
      features: ['Job scheduling', 'GPS tracking', 'Photo documentation', 'Offline sync']
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
              <span className="text-orange-500">Mobilne</span> aplikacije
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kreiramo inovativne mobilne aplikacije za iOS i Android koje povezuju vaš biznis 
              sa korisnicima bilo gde i bilo kada
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">iOS & Android</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Cross-platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Native performanse</span>
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
                Mobilni portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What are Mobile Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Zašto mobilne aplikacije?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Mobilne aplikacije su postale neizostavan deo modernog biznisa. Sa preko 6.8 milijardi 
              smartphone korisnika širom sveta, mobilne aplikacije omogućavaju direktnu komunikaciju 
              sa vašim klijentima, povećavaju engagement i otvaraju nove mogućnosti za rast biznisa.
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

      {/* Types of Mobile Apps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tipovi mobilnih aplikacija koje razvijamo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Od business aplikacija do consumer rešenja - pokrivamo sve kategorije mobilnih aplikacija
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mobileTypes.map((type, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Primeri naših mobilnih aplikacija</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte kako mobilne aplikacije rešavaju stvarne poslovne izazove u različitim industrijama
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

      {/* Native vs Cross-platform Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Native vs Cross-platform development
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Koji pristup je pravi za vaš projekat?
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
              <div className="font-semibold text-center text-orange-400">Native development</div>
              <div className="font-semibold text-center">Cross-platform</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center text-green-600 font-semibold">{comparison.native}</div>
                <div className="text-center text-blue-600 font-semibold">{comparison.crossplatform}</div>
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
              <h3 className="text-lg font-bold text-orange-800 mb-2">Naša preporuka</h3>
              <p className="text-orange-700">
                Za većinu projekata preporučujemo cross-platform pristup (React Native ili Flutter) 
                jer omogućava brži development, niže troškove i lakše održavanje. Native development 
                biramo kada su potrebne specifične performanse ili platform-specific funkcionalnosti.
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
              Koristimo najnovije tehnologije za kreiranje brzih, sigurnih i skalabilnih mobilnih aplikacija
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naš mobile development proces</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Od ideje do App Store-a - strukturiran proces u 6 faza
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
                    {step.step === 2 && '🎨'}
                    {step.step === 3 && '🏗️'}
                    {step.step === 4 && '💻'}
                    {step.step === 5 && '🧪'}
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
                Prednosti mobilnih aplikacija
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Mobilne aplikacije omogućavaju direktnu komunikaciju sa korisnicima, povećavaju 
                engagement i otvaraju nove kanale za rast biznisa. Sa push notifikacijama, 
                offline funkcionalnostima i pristupom device funkcijama, aplikacije pružaju 
                iskustvo koje web sajtovi ne mogu da pruže.
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
                src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mobile application development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">6.8B</div>
                <div className="text-sm">Korisnika</div>
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
              Spremni za vašu mobilnu aplikaciju?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako mobilna aplikacija 
              može povezati vaš biznis sa korisnicima na potpuno novi način
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
                Razgovarajmo o aplikaciji
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;