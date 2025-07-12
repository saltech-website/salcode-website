import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, XMarkIcon, CheckIcon, StarIcon, CodeBracketIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, GlobeAltIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FloatingBubbles from '../components/FloatingBubbles';

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Moderna e-commerce platforma sa potpunom funkcionalnosti za online prodaju',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'TechStore d.o.o.',
      duration: '3 meseca',
      year: '2024'
    },
    {
      id: 2,
      title: 'Korporativni Web Sajt',
      description: 'Responsivni korporativni sajt sa CMS sistemom i admin panelom',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      technologies: ['WordPress', 'PHP', 'MySQL', 'jQuery'],
      images: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'Business Solutions',
      duration: '6 nedelja',
      year: '2024'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Sigurna mobilna aplikacija za bankarstvo sa biometrijskim pristupom',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux', 'Biometric Auth'],
      images: [
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'FinTech Startup',
      duration: '4 meseca',
      year: '2023'
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Kompletan sistem za upravljanje projektima i zadacima u realnom vremenu',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web App',
      technologies: ['Vue.js', 'Laravel', 'WebSocket', 'Redis'],
      images: [
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'Project Management Co.',
      duration: '5 meseci',
      year: '2023'
    },
    {
      id: 5,
      title: 'Restaurant Management System',
      description: 'Desktop aplikacija za upravljanje restoranom sa POS sistemom',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Desktop App',
      technologies: ['Electron', 'React', 'SQLite', 'Thermal Printer'],
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'Restaurant Chain',
      duration: '3 meseca',
      year: '2024'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobilna aplikacija za praćenje treninga i zdravstvenih podataka',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Health Kit'],
      images: [
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      client: 'Health & Fitness Startup',
      duration: '4 meseca',
      year: '2023'
    }
  ];

  const categories = ['Sve', 'Web Development', 'Mobile Development', 'Web App', 'Desktop App'];
  const [selectedCategory, setSelectedCategory] = useState('Sve');

  const filteredProjects = selectedCategory === 'Sve' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  // Portfolio Statistics
  const stats = [
    { number: '50+', label: 'Završenih projekata', description: 'Uspešno realizovanih digitalnih rešenja' },
    { number: '20+', label: 'Zadovoljnih klijenata', description: 'Koji nam veruju svoje digitalne potrebe' },
    { number: '5+', label: 'Godina iskustva', description: 'U razvoju web i mobilnih aplikacija' },
    { number: '100%', label: 'Zadovoljstvo klijenata', description: 'Radimo dok ne budete potpuno zadovoljni' }
  ];

  // Technologies we use
  const technologies = [
    { name: 'React & Next.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js & Express', icon: '🟢', category: 'Backend' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Flutter', icon: '🎯', category: 'Mobile' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' }
  ];

  // Services overview
  const services = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Custom sajtovi, WordPress, web aplikacije',
      count: '30+'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobile Apps',
      description: 'iOS, Android, cross-platform aplikacije',
      count: '15+'
    },
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Desktop Apps',
      description: 'Windows, macOS, Linux aplikacije',
      count: '10+'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: 'E-commerce',
      description: 'Online prodavnice i payment sistemi',
      count: '8+'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      text: "SALCode je kreirao izuzetnu web aplikaciju za naš startup. Njihova ekspertiza u React-u i Node.js-u je neverovatna.",
      author: "Marko Petrović",
      company: "TechStart d.o.o.",
      rating: 5,
      project: "Web aplikacija za upravljanje projektima"
    },
    {
      text: "Naš e-commerce sajt je transformisan zahvaljujući SALCode timu. Prodaja se povećala za 300% u prva tri meseca.",
      author: "Ana Jovanović",
      company: "Fashion Boutique",
      rating: 5,
      project: "E-commerce platforma"
    },
    {
      text: "Mobilna aplikacija koju je SALCode razvio za našu kliniku je revolucionisala način kako komuniciramo sa pacijentima.",
      author: "Stefan Nikolić",
      company: "MedCare Clinic",
      rating: 5,
      project: "Mobilna aplikacija za zdravstvo"
    }
  ];

  // Development process
  const processSteps = [
    {
      step: 1,
      title: 'Analiza i planiranje',
      description: 'Detaljno analiziramo vaše potrebe i kreiramo strategiju implementacije.'
    },
    {
      step: 2,
      title: 'Dizajn i prototip',
      description: 'Kreiramo wireframes i vizuelni dizajn koji odražava vaš brend.'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Kodiramo rešenje koristeći najbolje prakse i najnovije tehnologije.'
    },
    {
      step: 4,
      title: 'Testiranje i lansiranje',
      description: 'Temeljno testiramo i lansiramo vaš projekat sa kontinuiranom podrškom.'
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
              Naš <span className="text-orange-500">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Istražite naše najnovije projekte i rešenja koja smo kreirali za naše klijente. 
              Svaki projekat je priča o inovaciji, kvalitetu i posvećenosti.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">50+ projekata</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">20+ klijenata</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-300 text-lg">100% zadovoljstvo</span>
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
                Razgovarajmo o projektu
              </Link>
              <Link 
                to="/quote"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Zatražite ponudu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naši rezultati u brojkama</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Brojevi koji govore o našoj posvećenosti kvalitetu i zadovoljstvu klijenata
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naše usluge</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Specijalizovani smo za različite tipove digitalnih rešenja
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-orange-500 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-orange-500">{service.count}</div>
                <div className="text-gray-500 text-sm">projekata</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Izdvojeni projekti</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte neke od naših najnovijih i najuspešnijih projekata
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(project.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <EyeIcon className="h-5 w-5" />
                      <span>Pogledaj</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Klijent: {project.client}</div>
                    <div className="text-sm text-gray-500">Trajanje: {project.duration}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Radimo sa najnovijim i najpouzdanijim tehnologijama u industriji
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{tech.name}</h3>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naš proces rada</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Strukturiran pristup koji garantuje uspeh svakog projekta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Reči zadovoljnih klijenata govore više od bilo čega
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="mb-3">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-orange-500">{testimonial.company}</div>
                </div>
                <div className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full inline-block">
                  {testimonial.project}
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
              Spremni za vaš sledeći projekat?
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Kontaktirajte nas danas i saznajte kako možemo transformisati vaše digitalne ideje 
              u stvarnost. Vaš uspeh je naš uspeh!
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

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{selectedProjectData.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                      {selectedProjectData.category}
                    </span>
                    <span className="text-gray-500">{selectedProjectData.year}</span>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {selectedProjectData.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${selectedProjectData.title} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">O projektu</h4>
                  <p className="text-gray-600 mb-4">{selectedProjectData.description}</p>
                  
                  <div className="space-y-2">
                    <div><span className="font-medium">Klijent:</span> {selectedProjectData.client}</div>
                    <div><span className="font-medium">Trajanje:</span> {selectedProjectData.duration}</div>
                    <div><span className="font-medium">Godina:</span> {selectedProjectData.year}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tehnologije</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;