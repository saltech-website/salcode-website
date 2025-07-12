import React from 'react';
import { motion } from 'framer-motion';
import FloatingBubbles from '../components/FloatingBubbles';

const Privacy: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
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
              Politika privatnosti
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

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Uvod</h2>
                <p className="text-gray-700 leading-relaxed">
                  SALCode ("mi", "naš", "nas") poštuje vašu privatnost i posvećen je zaštiti vaših ličnih podataka. 
                  Ova politika privatnosti objašnjava kako prikupljamo, koristimo i čuvamo vaše informacije kada 
                  koristite našu web stranicu i usluge.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Podaci koje prikupljamo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Možemo prikupljati sledeće vrste informacija:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ime i prezime</li>
                  <li>Email adresa</li>
                  <li>Broj telefona</li>
                  <li>Naziv kompanije</li>
                  <li>Poruke koje nam šaljete preko kontakt forme</li>
                  <li>Tehničke informacije (IP adresa, tip browsera, operativni sistem)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Kako koristimo vaše podatke</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vaše podatke koristimo za:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Odgovaranje na vaše upite i zahteve</li>
                  <li>Pružanje naših usluga</li>
                  <li>Slanje poslovnih komunikacija</li>
                  <li>Poboljšanje našeg web sajta i usluga</li>
                  <li>Ispunjavanje pravnih obaveza</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Deljenje podataka</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne prodajemo, ne izdajemo niti ne delimo vaše lične podatke sa trećim stranama, osim:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                  <li>Kada je to potrebno za pružanje usluga</li>
                  <li>Kada je to zahtevano zakonom</li>
                  <li>Uz vaš izričit pristanak</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kolačići (Cookies)</h2>
                <p className="text-gray-700 leading-relaxed">
                  Koristimo kolačiće za poboljšanje funkcionalnosti našeg web sajta i analiziranje saobraćaja. 
                  Možete kontrolisati kolačiće kroz postavke vašeg browsera.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sigurnost podataka</h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementiramo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka 
                  od neovlašćenog pristupa, korišćenja ili otkrivanja.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vaša prava</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Imate pravo da:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Zatražite pristup svojim podacima</li>
                  <li>Zatražite ispravku netačnih podataka</li>
                  <li>Zatražite brisanje podataka</li>
                  <li>Povučete pristanak</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kontakt</h2>
                <p className="text-gray-700 leading-relaxed">
                  Za pitanja u vezi sa ovom politikom privatnosti, kontaktirajte nas:
                </p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition"
                  >
                    Kontaktirajte nas
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;