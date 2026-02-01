import { Car } from "lucide-react";
import { useState } from "react";
import { smoothScrollToId, smoothScrollToTop } from "../utils/smoothScroll";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    smoothScrollToId(sectionId, 0);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => smoothScrollToTop()}>
            <div className="w-10 h-10 bg-tertiary rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">Van Aken car detailling</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-tertiary transition-colors"
            >
              Diensten
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-tertiary transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-tertiary transition-colors"
            >
              Reviews
            </button>
            <a
              href="tel:0612345678"
              className="px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors"
            >
              Bel Nu
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-tertiary transition-colors text-left"
              >
                Diensten
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-tertiary transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-700 hover:text-tertiary transition-colors text-left"
              >
                Reviews
              </button>
              <a
                href="tel:0612345678"
                className="px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors text-center"
              >
                Bel Nu
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}