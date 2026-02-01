import { smoothScrollToId } from "../utils/smoothScroll";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605437211365-7257403ea287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0ODY2MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-8 h-8 text-tertiary" />
          <span className="text-tertiary tracking-wider uppercase">Premium Autoverzorging</span>
        </div>
        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          Professionele Auto Reiniging Van Binnen en Buiten
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          Transformeer uw voertuig met onze expertdiensten voor binnen- en buitenreiniging. Wij brengen die showroom glans terug met nauwgezette aandacht voor detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0612345678"
            className="px-8 py-3 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors text-center"
          >
            Bel Nu
          </a>
          <button
            onClick={() => smoothScrollToId('services')}
            className="px-8 py-3 bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            Bekijk Diensten
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}