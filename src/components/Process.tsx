import { Calendar, Car, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Bel om te Boeken",
    description: "Bel ons om een geschikt tijdstip te plannen voor uw autoreiniging service."
  },
  {
    icon: Car,
    number: "02",
    title: "Afleveren of Wij Komen bij U",
    description: "Breng uw auto naar ons toe of wij kunnen mobiele detailing op uw locatie bieden."
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Wij Werken Onze Magie",
    description: "Ons expertteam reinigt nauwgezet elke centimeter van uw voertuig van binnen en buiten."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Geniet van Uw Schone Auto",
    description: "Rijd weg in een voertuig dat er gloednieuw uitziet en aanvoelt."
  }
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-tertiary tracking-wider uppercase">Hoe Het Werkt</span>
          <h2 className="mt-2 mb-4">
            Eenvoudig & Handig Proces
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uw auto professioneel laten reinigen is nog nooit zo gemakkelijk geweest. Volg deze eenvoudige stappen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-tertiary" />
                </div>
                <span className="text-tertiary/30 absolute top-0 -z-10" style={{ fontSize: "4rem" }}>
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}