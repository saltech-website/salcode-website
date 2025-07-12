import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, HeartIcon, LightBulbIcon, ShieldCheckIcon, RocketLaunchIcon, UserGroupIcon, MapPinIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const About: React.FC = () => {
  const values = [
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Strast prema kvalitetu',
      description: 'Perfekcionisti smo po prirodi. Svaki detalj mora biti savršen pre nego što projekt napusti naše ruke.'
    },
    {
      icon: <LightBulbIcon className="h-8 w-8" />,
      title: 'Inovacija i kreativnost',
      description: 'Mladi i ambiciozni tim koji uvek traži nova rešenja i prati najnovije tehnološke trendove.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Posvećenost klijentima',
      description: 'Radimo dok klijent nije potpuno zadovoljan. Vaš uspeh je naš uspeh i to je naš glavni motiv.'
    }
  ];

  const teamQualities = [
    'Mladi i energični tim',
    'Perfekcionisti do detalja',
    'Ambiciozni i motivisani',
    'Fokusirani na kvalitet',
    'Dostupni 24/7',
    'Transparentna komunikacija',
    'Brza implementacija',
    'Kontinuirana podrška'
  ];

  const stats = [
    { number: '50+', label: 'Završenih projekata', description: 'Uspešno realizovanih digitalnih rešenja' },
    { number: '20+', label: 'Zadovoljnih klijenata', description: 'Koji nam veruju svoje digitalne potrebe' },
    { number: '5+', label: 'Godina iskustva', description: 'U razvoju web i mobilnih aplikacija' },
    { number: '100%', label: 'Zadovoljstvo klijenata', description: 'Radimo dok ne budete potpuno zadovoljni' }
  ];

  const services = [
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: 'Web Development',
      items: ['Sajtovi po meri', 'WordPress sajtovi', 'Web aplikacije', 'E-commerce platforme']
    },
    {
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      title: 'App Development', 
      items: ['Mobilne aplikacije', 'Desktop aplikacije', 'Cross-platform rešenja', 'API integracije']
    }
  ];

  const workingPrinciples = [
    {
      step: 1,
      title: 'Slušamo vaše potrebe',
      description: 'Detaljno analiziramo vaše zahteve i ciljeve kako bismo razumeli šta tačno želite da postignete.'
    },
    {
      step: 2,
      title: 'Kreiramo strategiju',
      description: 'Razvijamo personalizovanu strategiju i plan implementacije prilagođen vašem biznisu.'
    },
    {
      step: 3,
      title: 'Implementiramo rešenje',
      description: 'Koristimo najnovije tehnologije i najbolje prakse za kreiranje vašeg digitalnog rešenja.'
    },
    {
      step: 4,
      title: 'Testiramo do savršenstva',
      description: 'Temeljno testiramo svaki detalj dok ne budemo sigurni da je sve besprekorno.'
    },
    {
      step: 5,
      title: 'Pružamo kontinuiranu podršku',
      description: 'Naša saradnja ne završava lansiranjem - tu smo za sve buduće potrebe i poboljšanja.'
    }
  ];

  const testimonials = [
    {
      text: "SALCode tim je pokazao izuzetnu posvećenost našem projektu. Radili su dok svaki detalj nije bio savršen.",
      author: "Marko Petrović",
      company: "TechStart d.o.o.",
      rating: 5
    },
    {
      text: "Mladi, energični tim koji razume moderne potrebe biznisa. Preporučujem svima!",
      author: "Ana Jovanović", 
      company: "Digital Solutions",
      rating: 5
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
              O <span className="text-orange-500">SALCode</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mladi, ambiciozni tim perfekcionista iz Beograda koji kreira digitalna rešenja 
              koja menjaju način kako biznisi funkcionišu
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Beograd, Srbija</span>
              </div>
              <div className="flex items-center space-x-3">
                <UserGroupIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Mladi tim</span>
              </div>
              <div className="flex items-center space-x-3">
                <HeartIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">Perfekcionisti</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Upoznajte nas
              </Link>
              <Link 
                to="/portfolio"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Pogledajte naš rad
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naša priča</h2>
              <p className="text-lg text-gray-600 mb-6">
                SALCode je privatna firma osnovana sa vizijom da pruži vrhunska digitalna rešenja 
                koristeći najnovije tehnologije i inovativne pristupe. Naš tim čine mladi, 
                ambiciozni stručnjaci koji dele strast prema tehnologiji i savršenstvu.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Iako nemamo fizičko sedište, naša snaga leži u fleksibilnosti i mogućnosti da 
                radimo sa klijentima širom Srbije i regiona. Baziramo se u Beogradu, ali naš 
                doseg je globalan zahvaljujući digitalnom načinu rada.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ono što nas izdvaja je naša posvećenost kvalitetu - perfekcionisti smo po prirodi 
                i radimo dok klijent nije potpuno zadovoljan rezultatom. Svaki projekat tretiramo 
                kao priliku da pokažemo našu ekspertizu i kreativnost.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-orange-800 mb-2">Naša misija</h3>
                <p className="text-orange-700">
                  Transformišemo ideje u digitalna rešenja koja ne samo da funkcionišu besprekorno, 
                  već i nadmašuju očekivanja naših klijenata kroz inovaciju, kvalitet i posvećenost.
                </p>
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
                alt="SALCode tim"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Godina</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naše vrednosti</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Vrednosti koje nas vode u svakom projektu i svakoj interakciji sa klijentima
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-orange-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Naši rezultati</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Brojevi koji govore o našoj posvećenosti i kvalitetu rada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-lg sm:text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Čime se bavimo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specijalizovani smo za kreiranje digitalnih rešenja koja transformišu biznise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-orange-500 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Kako radimo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Naš pristup radu zasnovan je na transparentnosti, komunikaciji i posvećenosti kvalitetu
            </p>
          </motion.div>

          <div className="space-y-8">
            {workingPrinciples.map((principle, index) => (
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
                      {principle.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
                
                <div className="w-48 lg:w-56 h-32 lg:h-36 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                  <div className="text-6xl text-orange-500/50">
                    {principle.step === 1 && '👂'}
                    {principle.step === 2 && '📋'}
                    {principle.step === 3 && '⚙️'}
                    {principle.step === 4 && '🔍'}
                    {principle.step === 5 && '🤝'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Qualities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Zašto izabrati SALCode?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Naš tim mladih stručnjaka donosi svežinu, energiju i najnovije znanje u svet 
                web developmenta. Kombinujemo tehničku ekspertizu sa kreativnim pristupom 
                i nepokolebljivom posvećenošću kvalitetu.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamQualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{quality}</span>
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mladi tim developera"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Posvećenost</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Šta kažu naši klijenti</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Reči naših zadovoljnih klijenata govore više od bilo čega
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-orange-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
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
              Spremni za saradnju?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas i saznajte kako možemo transformisati vaše digitalne ideje 
              u stvarnost. Radimo dok ne budete potpuno zadovoljni!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Kontaktirajte nas
              </Link>
              <Link 
                to="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-orange-500"
              >
                Zatražite ponudu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;