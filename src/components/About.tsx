import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Tevreden Klanten"
  },
  {
    icon: Award,
    number: "10+",
    label: "Jaar Ervaring"
  },
  {
    icon: Clock,
    number: "Zelfde Dag",
    label: "Service Beschikbaar"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Tevredenheidsgarantie"
  }
];

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605437211365-7257403ea287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0ODY2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional car detailing"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-tertiary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-tertiary tracking-wider uppercase">Over Ons</span>
            <h2 className="mt-2 mb-6">
              Uw Vertrouwde Autoverzorging Experts
            </h2>
            <p className="text-gray-600 mb-6">
              Welkom bij Auto Reiniging Pro, waar wij al meer dan tien jaar uitzonderlijke autoreiniging diensten bieden. Wij zijn gepassioneerd om uw voertuig er op zijn allermooist uit te laten zien, zowel van binnen als van buiten.
            </p>
            <p className="text-gray-600 mb-8">
              Ons team van ervaren professionals gebruikt premium producten en bewezen technieken om resultaten te leveren die de verwachtingen overtreffen. Of het nu een snelle buitenreiniging is of een uitgebreide detailing, wij behandelen elk voertuig met dezelfde zorg en aandacht die we aan onze eigen auto's zouden geven.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <div className="text-gray-900">{stat.number}</div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}