import { useEffect, useState } from "react";

export default function SenseiBurrito() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ease-in-out ${
            scrolled ? "bg-black py-2" : "bg-white shadow py-4"
          }`}
        >
          <div className="flex items-center relative w-32 h-12">
            <img
              src="/logo-blanc.png"
              alt="Sensei Burrito Logo Blanc"
              className={`absolute inset-0 h-12 w-auto transition-opacity duration-500 ease-in-out ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="/logo-noir.png"
              alt="Sensei Burrito Logo Noir"
              className={`absolute inset-0 h-12 w-auto transition-opacity duration-500 ease-in-out ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <div className="flex space-x-3">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-300">
              Click & Collect
            </button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300">
              Livraison
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative h-screen flex items-center justify-center text-center text-white"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/enso_rotation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 transition-all duration-500">
            Sensei Burrito – Au cœur du ventre de Paris
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl transition-all duration-500">
            Chaque burrito est unique, artisanal, façonné avec respect et équilibre.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 transition-colors duration-300">
              Click & Collect
            </button>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors duration-300">
              Livraison
            </button>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">
                Discipline culinaire
              </h3>
              <p>Le code moral des arts martiaux appliqué à la cuisine.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Fraîcheur</h3>
              <p>Produits frais et préparation maison.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Élégance</h3>
              <p>Un take-away chic, raffiné et convivial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-12">Notre Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white shadow rounded overflow-hidden"
              >
                <img
                  src="/burrito.jpg"
                  alt="Burrito"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">
                    Burrito {item}
                  </h3>
                  <p>Ingrédients frais, équilibrés et savoureux.</p>
                  <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-300">
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/paris.jpg"
            alt="Paris"
            className="w-full h-80 object-cover rounded"
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Notre Histoire</h2>
            <p className="mb-4">
              Niché dans la rue Tiquetonne, entre Les Halles et Montorgueuil, Sensei Burrito perpétue une tradition familiale depuis plus de 40 ans.
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors duration-300">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <img
              src="/logo-blanc.png"
              alt="Sensei Burrito Logo Blanc"
              className="h-8"
            />
          </div>
          <p className="text-sm">© 2025 Sensei Burrito. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
