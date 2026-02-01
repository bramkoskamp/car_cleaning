import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { insertContactMessage } from "../utils/db";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const service = String(formData.get('service') || '');
    const message = String(formData.get('message') || '');
    try {
      await insertContactMessage({ name, email, service, message });
      setSuccess('Bedankt! We nemen spoedig contact met u op.');
      form.reset();
    } catch (err: any) {
      setError(err?.message || 'Er is iets misgegaan. Probeer later opnieuw.');
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-tertiary tracking-wider uppercase">Neem Contact Op</span>
            <h2 className="mt-2 mb-6">
              Klaar om Uw Auto te Transformeren?
            </h2>
            <p className="text-gray-600 mb-8">
              Boek vandaag nog uw afspraak en ervaar het verschil dat professionele autoreiniging maakt. Wij zijn er om al uw vragen te beantwoorden.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="mb-1">Telefoon</h4>
                  <p className="text-gray-600">06 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-gray-600">info@autoreinigingpro.nl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="mb-1">Locatie</h4>
                  <p className="text-gray-600">Schone Straat 123, 1012 AB Amsterdam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="mb-1">Openingstijden</h4>
                  <p className="text-gray-600">Ma - Za: 08:00 - 18:00</p>
                  <p className="text-gray-600">Zondag: 09:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="mb-6">Stuur Ons een Bericht</h3>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                  placeholder="Uw naam"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                  placeholder="uw@email.nl"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Geïnteresseerd in Dienst
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                >
                  <option>Buitenreiniging</option>
                  <option>Interieur Reiniging</option>
                  <option>Volledig Detail</option>
                  <option>Beschermingsdiensten</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                  placeholder="Vertel ons over uw voertuig en eventuele specifieke wensen..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Versturen...' : 'Verstuur Bericht'}
              </button>

              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}