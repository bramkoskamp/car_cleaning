import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewFormButton } from "./ReviewFormButton";

const reviews = [
  {
    name: "Sarah Janssen",
    rating: 5,
    text: "Absoluut geweldige service! Mijn auto ziet er gloednieuw uit. De aandacht voor detail was ongelooflijk, en het team was professioneel en vriendelijk. Sterk aanbevolen!",
    date: "2 weken geleden"
  },
  {
    name: "Michael de Vries",
    rating: 5,
    text: "Ik heb verschillende autoreiniging diensten geprobeerd, maar Auto Reiniging Pro is verreweg de beste. Ze hebben vlekken uit mijn stoelen gehaald waarvan ik dacht dat ze permanent waren. Elke euro waard!",
    date: "1 maand geleden"
  },
  {
    name: "Emma van Dijk",
    rating: 5,
    text: "Het volledige detail pakket heeft mijn 5 jaar oude auto getransformeerd. Het ziet er beter uit dan toen ik hem voor het eerst kocht! Het team was punctueel en de resultaten spreken voor zich.",
    date: "3 weken geleden"
  },
  {
    name: "David Bakker",
    rating: 5,
    text: "Geweldige ervaring van begin tot eind. Eenvoudig boekingsproces, eerlijke prijzen en uitstekende resultaten. Mijn auto heeft er nog nooit zo goed uitgezien!",
    date: "1 week geleden"
  },
  {
    name: "Jessica Visser",
    rating: 5,
    text: "Ik ben erg kieskeurig over mijn auto, en deze jongens hebben al mijn verwachtingen overtroffen. Het interieur ruikt fris en de buitenkant is vlekkeloos. Kom zeker terug!",
    date: "2 maanden geleden"
  },
  {
    name: "Robert Peters",
    rating: 5,
    text: "Professioneel, efficiënt en de kwaliteit is eersteklas. Ze hebben mijn vrachtwagen binnen en buiten in een mum van tijd gereinigd. Klantenservice was ook uitstekend!",
    date: "3 weken geleden"
  }
];

export function Reviews() {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsButtonVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="reviews" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 tracking-wider uppercase">Testimonials</span>
          <h2 className="mt-2 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">"{review.text}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="text-gray-900">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-gray-900" style={{ fontSize: "3rem" }}>5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600">Gebaseerd op 500+ klantbeoordelingen</p>
        </div>

        {/* Floating Star Button */}
        <ReviewFormButton
          onClick={() => setIsReviewFormOpen(true)}
          isVisible={isButtonVisible}
        />

        {/* Only render form when open */}
        {isReviewFormOpen && (
          <ReviewForm 
            isOpen={isReviewFormOpen} 
            onClose={() => setIsReviewFormOpen(false)}
          />
        )}
      </div>
    </section>
  );
}
