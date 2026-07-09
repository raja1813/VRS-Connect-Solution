import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  
} from "lucide-react";

import { useSettings } from "../context/SettingsContext";

function Footer() {

  const { settings } = useSettings();

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-black shadow-xl">

                V

              </div>

              <div>

                <h2 className="text-2xl font-black">

                  {settings.companyName}

                </h2>

                <p className="text-sm text-slate-400">

                  Business Process Outsourcing

                </p>

              </div>

            </div>

            <p className="leading-8 text-slate-400">

              We help businesses reduce operational costs,
              improve customer satisfaction and scale faster
              through reliable outsourcing solutions.

            </p>

            <div className="mt-6 flex items-center gap-2 text-green-400">

              <ShieldCheck size={18} />

              <span className="text-sm">

                Trusted BPO Partner Across India

              </span>

            </div>

            {/* Social Icons */}

            <div className="mt-8 flex flex-wrap gap-3">

              
              
                          </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-7 text-xl font-bold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              <li>

                <Link
                  to="/"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  Home

                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  About Us

                </Link>

              </li>

              <li>

                <Link
                  to="/services"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  Services

                </Link>

              </li>

              <li>

                <Link
                  to="/industries"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  Industries

                </Link>

              </li>

              <li>

                <Link
                  to="/proposal"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  Get Proposal

                </Link>

              </li>

              <li>

                <Link
                  to="/faq"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  FAQ

                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="text-slate-400 transition hover:text-blue-400"
                >

                  Contact

                </Link>

              </li>

            </ul>

          </div>

          {/* Our Services */}

          <div>

            <h3 className="mb-7 text-xl font-bold">

              Our Services

            </h3>

            <ul className="space-y-4">

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Customer Support

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Technical Support

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Inbound Call Center

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Outbound Call Center

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Live Chat Support

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Email Support

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Back Office Support

              </li>

              <li className="cursor-pointer text-slate-400 transition hover:text-white">

                Data Processing

              </li>

            </ul>

          </div>
                    {/* Contact Information */}

          <div>

            <h3 className="mb-7 text-xl font-bold">

              Contact Us

            </h3>

            <div className="space-y-6">

              {/* Address */}

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

                  <MapPin
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Office Address

                  </h4>

                  <p className="mt-1 whitespace-pre-line leading-7 text-slate-400">

                    {settings.companyName}
                    <br />
                    {settings.address}

                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

                  <Mail
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Email

                  </h4>

                  <a
                    href={`mailto:${settings.email}`}
                    className="mt-1 block break-all text-slate-400 transition hover:text-blue-400"
                  >

                    {settings.email}

                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

                  <Phone
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Phone

                  </h4>

                  <a
                    href={`tel:${settings.phone}`}
                    className="mt-1 block text-slate-400 transition hover:text-blue-400"
                  >

                    {settings.phone}

                  </a>

                </div>

              </div>

              {/* WhatsApp */}

              {settings.whatsapp && (

                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >

                  Chat on WhatsApp

                </a>

              )}

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="text-center text-slate-400 md:text-left">

              {settings.copyright}

            </p>
                        <div className="flex items-center gap-6">

              <Link
                to="/privacy-policy"
                className="text-slate-400 transition hover:text-white"
              >

                Privacy Policy

              </Link>

              <Link
                to="/terms"
                className="text-slate-400 transition hover:text-white"
              >

                Terms & Conditions

              </Link>

              <button
                onClick={scrollTop}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              >

                <ArrowUp size={22} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;