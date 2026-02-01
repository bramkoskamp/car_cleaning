import { Check } from "lucide-react";

const packages = [
  {
    name: "Buitenreiniging",
    price: "45",
    description: "Perfect voor een snelle opfrissing",
    features: [
      "Handwas & drogen",
      "Velgen & banden reinigen",
      "Ramen reinigen",
      "Bandenglansmiddel",
      "Buiten afvegen"
    ],
    popular: false
  },
  {
    name: "Interieur Reiniging",
    price: "75",
    description: "Grondige reiniging voor uw cabine",
    features: [
      "Volledig stofzuigen",
      "Dashboard & console reinigen",
      "Deurpanelen reinigen",
      "Tapijt & bekleding shampoo",
      "Leer conditionering",
      "Luchtverfrisser"
    ],
    popular: false
  },
  {
    name: "Volledig Detail",
    price: "140",
    description: "Het complete pakket",
    features: [
      "Alles in Buitenreiniging",
      "Alles in Interieur Reiniging",
      "Motorruimte reiniging",
      "Koplamp restauratie",
      "Trim restauratie",
      "Clay bar behandeling",
      "Premium was applicatie"
    ],
    popular: true
  }
];

export function Services() {
  return (
    <section id='services' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tertiary tracking-wider uppercase">Diensten</span>
          <h2 className="mt-2 mb-4">
            Betaalbare Pakketten voor Elke Behoefte
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kies het perfecte pakket voor uw voertuig. Alle diensten bevatten onze tevredenheidsgarantie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? "ring-2 ring-tertiary scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-tertiary text-white px-4 py-1 text-sm">
                  Meest Populair
                </div>
              )}
              
              <div className="p-8">
                <h3 className="mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-gray-900" style={{ fontSize: "3rem" }}>€{pkg.price}</span>
                  <span className="text-gray-600">/service</span>
                </div>
                {/* Button removed per request: users don't order online */}
                <div className="mb-6" />

                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          * Prijzen kunnen variëren op basis van voertuiggrootte en conditie. Neem contact op voor een offerte op maat.
        </p>
      </div>
    </section>
  );
}