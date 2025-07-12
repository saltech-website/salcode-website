import React from 'react';
import { motion } from 'framer-motion';
import FloatingBubbles from '../components/FloatingBubbles';

const Cookies: React.FC = () => {
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
              Politika kolačića
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
            className="prose prose-lg max-w-none text-gray-700"
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Šta su kolačići?</h2>
              <p>Kolačići su male tekstualne datoteke koje se čuvaju u vašem pretraživaču kada posetite našu web stranicu.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kako koristimo kolačiće</h2>
              <p>Koristimo kolačiće radi unapređenja korisničkog iskustva, analize saobraćaja i personalizacije sadržaja.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Vrste kolačića koje koristimo</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Neophodni kolačići</li>
                <li>Analitički kolačići</li>
                <li>Funkcionalni kolačići</li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Upravljanje kolačićima</h2>
              <p>Možete kontrolisati i/ili obrisati kolačiće kroz podešavanja svog pretraživača. Onemogućavanje kolačića može uticati na funkcionisanje sajta.</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Izmene politike kolačića</h2>
              <p>S vremena na vreme možemo ažurirati ovu politiku. Preporučujemo da povremeno proverite ovu stranicu.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
