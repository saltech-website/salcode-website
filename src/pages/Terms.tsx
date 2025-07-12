import React from 'react';
import { motion } from 'framer-motion';
import FloatingBubbles from '../components/FloatingBubbles';

const Terms: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="min-h-[40vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <FloatingBubbles />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Uslovi korišćenja
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Poslednja izmena: {new Date().toLocaleDateString('sr-RS')}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Opšti uslovi</h2>
              <p>Korišćenjem sajta SALCode prihvatate ove uslove korišćenja. Ako se ne slažete s uslovima, molimo vas da ne koristite našu stranicu.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sadržaj sajta</h2>
              <p>Sadržaj sajta služi isključivo u informativne svrhe. SALCode zadržava pravo izmene bilo kog dela sadržaja bez prethodne najave.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intelektualna svojina</h2>
              <p>Svi tekstovi, grafike, logotipi i drugi elementi sajta su u vlasništvu SALCode i ne smeju se koristiti bez dozvole.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Odricanje od odgovornosti</h2>
              <p>Ne garantujemo tačnost, potpunost ili ažurnost informacija na sajtu. Korišćenje informacija sa sajta je na sopstveni rizik korisnika.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Izmene uslova</h2>
              <p>SALCode zadržava pravo da u bilo kom trenutku izmeni ove uslove. Preporučujemo redovno proveravanje stranice.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
