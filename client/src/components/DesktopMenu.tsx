import { NavLink, Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

function DesktopMenu() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <div className="hidden lg:flex items-center gap-10">

      {/* Navigation */}

      <nav className="flex items-center gap-8">

        <NavLink to="/" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              Home

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

        <NavLink to="/about" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              About

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

        <NavLink to="/services" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              Services

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

        <NavLink to="/industries" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              Industries

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

        <NavLink to="/faq" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              FAQ

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

        <NavLink to="/contact" className={navClass}>
          {({ isActive }) => (
            <div className="relative">

              Contact

              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-blue-600"></span>
              )}

            </div>
          )}
        </NavLink>

      </nav>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        <a
          href="tel:+919557220763"
          className="flex items-center gap-2 rounded-full bg-slate-100 hover:bg-blue-50 px-4 py-3 transition"
        >
          <Phone
            size={18}
            className="text-blue-600"
          />

          <span className="font-medium text-slate-700">

            +91 95572 20763

          </span>

        </a>

        <Link
          to="/proposal"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition duration-300 shadow-lg text-white px-6 py-3 font-semibold"
        >

          Request Proposal

          <ArrowRight size={18} />

        </Link>

        <Link
          to="/admin/login"
          className="flex items-center gap-2 rounded-xl border border-blue-600 hover:bg-blue-600 hover:text-white transition px-5 py-3 font-semibold text-blue-600"
        >

          <ShieldCheck size={18} />

          Admin

        </Link>

      </div>

    </div>
  );
}

export default DesktopMenu;