import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Industrijska prodavnica - Kripton doo',
      description: 'Sajt za prodaju lagera i industrijskih delova sa sistemom slanja upita',
      image: '/projects/kripton-preview.png',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'PHPMailer'],
      images: [
        '/projects/kripton-1.png',
        '/projects/kripton-2.png',
        '/projects/kripton-3.png'
      ],
    },
    {
      id: 2,
      title: 'BUS Computers – IT Rešenja i Oprema',
      description: 'Sajt firme koja se bavi razvojem softvera, fiskalizacijom, prodajom računara i servisima. Prikazuje usluge, projekte i omogućava korisnicima lak kontakt i pregled ponude.',
      image: '/projects/bus-preview.png',
      technologies: [
        'HTML', 
        'CSS', 
        'JavaScript', 
        'PHP', 
        'Bootstrap', 
        'MySQL', 
        'AJAX', 
        'Font Awesome'
      ],
      images: [
        '/projects/bus-1.png',
        '/projects/bus-2.png',
        '/projects/bus-3.png'
      ],
    },
    {
      id: 3,
      title: 'Duvanska industrija Čoka',
      description: 'Sajt srpske firme sa višedecenijskom tradicijom u proizvodnji duvana, uz detaljne informacije o proizvodima i kontakt sekciju.',
      image: '/projects/coka-preview.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'jQuery'],
      images: [
        '/projects/coka-1.png',
        '/projects/coka-2.png',
        '/projects/coka-3.png'
      ]
    },
    {
      id: 4,
      title: 'ERP dodatak – Izveštavanje i AI asistent',
      description: 'Desktop aplikacija za izveštavanje iz Firebird baze uz AI pomoć',
      image: '/projects/erp-preview.png',
      technologies: ['Python', 'Firebird', '.NET MAUI', 'OpenAI'],
      images: [
        '/projects/erp-1.png',
        '/projects/erp-2.png',
        '/projects/erp-3.png'
      ]
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Naši Projekti</h2>
          <p className="text-xl text-gray-600">Pogledajte neke od naših najnovijih radova</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-contain bg-white p-2"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/portfolio"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Pogledaj sve projekte
          </Link>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProjectData.title}</h3>
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
              
              <p className="text-gray-600 mb-4">{selectedProjectData.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProjectData.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;