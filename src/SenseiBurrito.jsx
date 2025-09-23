import { useEffect, useState } from "react";
import { Sword, Leaf, Crown } from "lucide-react";

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
          <div className="flex items-center relative" style={{ height: scrolled ? '60px' : '80px' }}> {/* Logo agrandi et centré */}
            <img
              src="/logo-blanc.png"
              alt="Sensei Burrito Logo Blanc"
              className={`mx-auto transition-all duration-500 ease-in-out ${
                scrolled ? "h-12 opacity-0" : "h-16 opacity-100"
              }`}
            />
            <img
              src="/logo-noir.png"
              alt="Sensei Burrito Logo Noir"
              className={`mx-auto absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
                scrolled ? "h-12 opacity-100" : "h-16 opacity-0"
              }`}
            />
          </div>
          <div className="flex items-center space-x-3"> {/* Boutons centrés verticalement */}
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
        className="relative h-screen flex flex-col items-center justify-center text-center text-white"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/enso_rotation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Sensei Burrito
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-500">
            Au cœur du ventre de Paris
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Chaque burrito est unique, artisanal, façonné avec respect et équilibre.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">Nos Valeurs</h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600">
            L'esprit Sensei Burrito repose sur des principes fondamentaux qui guident chacune de nos actions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Discipline */}
            <div className="group p-6 rounded-lg bg-white transition-transform transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="flex justify-center">
                <div className="bg-yellow-500 p-6 rounded-full shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                  <Sword className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-extrabold group-hover:text-yellow-600 transition-colors">
                Code Moral des Arts Martiaux
              </h3>
              <p className="mt-2 text-gray-600">
                La discipline et le respect appliqués à chaque geste culinaire, dans la tradition du bushido.
              </p>
            </div>

            {/* Fraîcheur */}
            <div className="group p-6 rounded-lg bg-white transition-transform transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="flex justify-center">
                <div className="bg-yellow-500 p-6 rounded-full shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                  <Leaf className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-extrabold group-hover:text-yellow-600 transition-colors">
                Fraîcheur & Fait Maison
              </h3>
              <p className="mt-2 text-gray-600">
                Des ingrédients sélectionnés avec soin, préparés quotidiennement selon nos recettes artisanales.
              </p>
            </div>

            {/* Élégance */}
            <div className="group p-6 rounded-lg bg-white transition-transform transform hover:-translate-y-3 hover:shadow-2xl">
              <div className="flex justify-center">
                <div className="bg-yellow-500 p-6 rounded-full shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                  <Crown className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-extrabold group-hover:text-yellow-600 transition-colors">
                Take-away Chic & Raffiné
              </h3>
              <p className="mt-2 text-gray-600">
                L'élégance à emporter, alliant praticité moderne et esthétique premium.
              </p>
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
