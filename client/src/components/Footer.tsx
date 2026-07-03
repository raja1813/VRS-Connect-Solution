import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute -top-40 left-0 w-96 h-96 bg-blue-700/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-2xl font-bold shadow-lg">

                V

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  VRS Connect

                </h2>

                <p className="text-slate-400 text-sm">

                  Business Process Outsourcing

                </p>

              </div>

            </div>

            <p className="leading-8 text-slate-400">

              We help businesses reduce operational costs,
              improve customer satisfaction and scale faster
              through reliable outsourcing solutions.

            </p>

            <div className="flex items-center gap-2 mt-6 text-green-400">

              <ShieldCheck size={18} />

              <span className="text-sm">

                Trusted BPO Partner Across India

              </span>

            </div>
                        {/* Social Icons */}

            <div className="flex gap-4 mt-8">

             
            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>
                    {/* Our Services */}

          <div>

            <h3 className="text-xl font-bold mb-7">

              Our Services

            </h3>

            <ul className="space-y-4">

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Customer Support
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Technical Support
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Lead Generation
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Telecalling Services
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Email Support
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Live Chat Support
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Back Office Support
              </li>

              <li className="text-slate-400 hover:text-white transition cursor-pointer">
                Data Processing
              </li>

            </ul>

          </div>
                    {/* Contact Information */}

          <div>

            <h3 className="text-xl font-bold mb-7">

              Contact Us

            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">

                  <MapPin
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Office

                  </h4>

                  <p className="text-slate-400 leading-7">

                    VRS Connect Solution
                    <br />
                    India

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">

                  <Mail
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Email

                  </h4>

                  <p className="text-slate-400 break-all">

                    info@vrsconnectsolution.com

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">

                  <Phone
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Phone

                  </h4>

                  <p className="text-slate-400">

                    +91 XXXXX XXXXX

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Bottom Footer */}

        <div className="border-t border-slate-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-slate-400 text-center md:text-left">

              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                VRS Connect Solution
              </span>
              . All Rights Reserved.

            </p>

            <div className="flex items-center gap-6">

              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-400 hover:text-white transition"
              >
                Terms & Conditions
              </Link>

              <button
                onClick={scrollTop}
                className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center shadow-lg"
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