import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marko Petrović',
      company: 'TechStart d.o.o.',
      position: 'CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'SALCode je kreirao izuzetnu web aplikaciju za naš startup. Njihova ekspertiza u React-u i Node.js-u je neverovatna. Projekat je završen u roku i prevazišao je sva naša očekivanja.',
      rating: 5,
      project: 'Web aplikacija za upravljanje projektima'
    },
    {
      id: 2,
      name: 'Ana Jovanović',
      company: 'Fashion Boutique',
      position: 'Vlasnica',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Naš e-commerce sajt je transformisan zahvaljujući SALCode timu. Prodaja se povećala za 300% u prva tri meseca. Profesionalnost i podrška su na najvišem nivou.',
      rating: 5,
      project: 'E-commerce platforma'
    },
    {
      id: 3,
      name: 'Stefan Nikolić',
      company: 'MedCare Clinic',
      position: 'Direktor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Mobilna aplikacija koju je SALCode razvio za našu kliniku je revolucionisala način kako komuniciramo sa pacijentima. Intuitivna je i veoma funkcionalna.',
      rating: 5,
      project: 'Mobilna aplikacija za zdravstvo'
    },
    {
      id: 4,
      name: 'Milica Stojanović',
      company: 'EduTech Solutions',
      position: 'Osnivač',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Platforma za online učenje koju je SALCode kreirao je potpuno promenila naš pristup edukaciji. Studenti su oduševljeni funkcionalnostima i dizajnom.',
      rating: 5,
      project: 'Platforma za online učenje'
    },
    {
      id: 5,
      name: 'Nikola Milenković',
      company: 'RestaurantPro',
      position: 'Vlasnik',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Desktop aplikacija za upravljanje restoranom je značajno poboljšala našu efikasnost. SALCode je razumeo naše potrebe i isporučio savršeno rešenje.',
      rating: 5,
      project: 'Desktop aplikacija za restorane'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            Pročitajte iskustva naših zadovoljnih klijenata
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-600 hover:text-orange-500 p-2 sm:p-3 rounded-full transition-colors duration-300 shadow-lg border border-gray-200"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-600 hover:text-orange-500 p-2 sm:p-3 rounded-full transition-colors duration-300 shadow-lg border border-gray-200"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Testimonial Card */}
          <motion.div 
            className="mx-12 sm:mx-16"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                
                {/* Client Photo */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-orange-100"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  
                  {/* Stars Rating */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mb-4">
                    <div className="font-bold text-lg sm:text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm sm:text-base text-orange-500 font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">
              {currentIndex + 1} od {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;