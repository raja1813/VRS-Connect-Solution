import { Link } from "react-router-dom";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

function CTA() {

  return (

    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full font-semibold mb-8">

            <BadgeCheck size={18} />

            Trusted Outsourcing Partner

          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">

            Ready To Scale
            <br />

            Your Business?

          </h2>

          <p className="mt-8 text-blue-100 text-lg max-w-3xl mx-auto leading-8">

            Let VRS Connect Solution handle your customer support,
            technical support, lead generation and back-office
            operations while you focus on growing your business.

          </p>
                    {/* CTA Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold shadow-xl transition-all duration-300"
            >
              Get Free Consultation

              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <PhoneCall size={20} />

              Contact Us
            </Link>

          </div>

          {/* Trust Highlights */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">

              <ShieldCheck
                size={36}
                className="mx-auto text-cyan-300"
              />

              <h3 className="mt-4 text-xl font-bold text-white">

                Secure & Reliable

              </h3>

              <p className="mt-2 text-blue-100">

                Secure processes designed to protect your business
                information and customer data.

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">

              <Clock3
                size={36}
                className="mx-auto text-cyan-300"
              />

              <h3 className="mt-4 text-xl font-bold text-white">

                24×7 Availability

              </h3>

              <p className="mt-2 text-blue-100">

                Our dedicated support team is available around the
                clock whenever you need assistance.

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">

              <BadgeCheck
                size={36}
                className="mx-auto text-cyan-300"
              />

              <h3 className="mt-4 text-xl font-bold text-white">

                Trusted Partner

              </h3>

              <p className="mt-2 text-blue-100">

                Businesses trust us for reliable outsourcing solutions
                that improve efficiency and customer satisfaction.

              </p>

            </div>

          </div>
                  </div>

      </div>

    </section>

  );
}

export default CTA;