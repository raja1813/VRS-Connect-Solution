import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Headphones,
  Users,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute -bottom-52 -right-40 w-[500px] h-[500px] bg-cyan-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div data-aos="fade-right">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">

              <ShieldCheck size={18} />

              Trusted BPO Partner Across India

            </div>

            {/* Heading */}

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">

              Empower Your Business

              <br />

              With

              <span className="text-blue-600">
                {" "}
                Smart BPO Solutions
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl">

              VRS Connect Solution helps businesses reduce operational
              costs through professional Customer Support,
              Technical Support, Lead Generation, Back Office,
              Live Chat and Data Processing Services.

            </p>
                        {/* CTA Buttons */}

            {/* CTA Buttons */}

<div
  className="mt-10 flex flex-wrap gap-5"
  data-aos="zoom-in"
  data-aos-delay="200"
>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
              >
                Request Proposal

                <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                <PhoneCall size={20} />

                Contact Us
              </Link>

            </div>

            {/* Statistics */}

           {/* Statistics */}

<div
  className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
  data-aos="fade-up"
  data-aos-delay="300"
>

              <div className="bg-white rounded-2xl shadow-md p-5">

                <h2 className="text-3xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Clients
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-5">

                <h2 className="text-3xl font-bold text-blue-600">
                  24×7
                </h2>

                <p className="text-gray-500 mt-2">
                  Customer Support
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-5">

                <h2 className="text-3xl font-bold text-blue-600">
                  99%
                </h2>

                <p className="text-gray-500 mt-2">
                  Satisfaction
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-5">

                <h2 className="text-3xl font-bold text-blue-600">
                  10+
                </h2>

                <p className="text-gray-500 mt-2">
                  Industries
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          {/* Right Side */}

<div
  className="relative flex justify-center"
  data-aos="fade-left"
>

                      {/* Main Hero Image */}

            <img
              src={hero}
              alt="VRS Connect Solution"
              className="relative z-10 w-full max-w-xl drop-shadow-2xl"
            />

            {/* Floating Card - Experience */}

            <div className="absolute top-8 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-3 rounded-xl">

                  <Users
                    size={28}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    500+
                  </h3>

                  <p className="text-sm text-gray-500">
                    Businesses Served
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card - Support */}

            <div className="absolute bottom-10 -right-5 bg-white rounded-2xl shadow-xl p-5 hidden lg:block">

              <div className="flex items-center gap-3">

                <div className="bg-green-100 p-3 rounded-xl">

                  <Headphones
                    size={28}
                    className="text-green-600"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    24×7
                  </h3>

                  <p className="text-sm text-gray-500">
                    Support Team
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card - Trust */}

            <div className="absolute bottom-44 left-2 bg-white rounded-2xl shadow-xl p-5 hidden xl:block">

              <div className="flex items-center gap-3">

                <div className="bg-cyan-100 p-3 rounded-xl">

                  <ShieldCheck
                    size={28}
                    className="text-cyan-600"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Trusted
                  </h3>

                  <p className="text-sm text-gray-500">
                    Secure Operations
                  </p>

                </div>

              </div>

            </div>

          </div>
                  </div>

      </div>

    </section>
  );
}

export default Hero;