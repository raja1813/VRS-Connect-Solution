import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            VRS Connect Solution
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            We provide reliable BPO, customer support, lead generation,
            telecalling and back-office outsourcing solutions for businesses
            across India.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Customer Support</li>
            <li>Lead Generation</li>
            <li>Telecalling</li>
            <li>Email Support</li>
            <li>Technical Support</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <span>info@vrsconnectsolution.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-green-400" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-red-400" />
              <span>India</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-yellow-400" />
              <span>Mon - Sat (9 AM - 6 PM)</span>
            </div>

          </div>

          <div className="flex gap-4 mt-6 text-2xl">
            <Globe className="cursor-pointer hover:text-blue-400" />
            
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-14 py-6 text-center text-gray-400">
        © 2026 VRS Connect Solution. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;