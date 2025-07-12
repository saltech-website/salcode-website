import React, { useEffect, useState } from 'react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'true' : 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-4 py-4 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          Ova web stranica koristi kolačiće za unapređenje korisničkog iskustva. Više pročitajte u <a href="/cookies" className="underline text-orange-400 hover:text-orange-500">Politici kolačića</a>.
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Prihvatam
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition"
          >
            Odbijam
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
