import {
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

function TopBar() {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-11 flex items-center justify-between">

          {/* Left */}

          <div className="flex items-center gap-8 text-sm">

            <a
              href="tel:+919557220763"
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <Phone size={15} />
              +91 95572 20763
            </a>

            <a
              href="mailto:info@vrsconnectsolution.com"
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <Mail size={15} />
              info@vrsconnectsolution.com
            </a>

            <div className="flex items-center gap-2">

              <Clock3 size={15} />

              Mon - Sat : 9:00 AM - 7:00 PM

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <span className="text-cyan-300 font-medium">

              500+ Happy Clients

            </span>

           

          </div>

        </div>

      </div>

    </div>
  );
}

export default TopBar;