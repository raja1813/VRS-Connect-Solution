import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-700 hover:text-blue-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            V
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              VRS Connect
            </h2>

            <p className="text-xs text-gray-500">
              Business Process Outsourcing
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={navLinkClass}
          >
            Services
          </NavLink>

          <NavLink
            to="/industries"
            className={navLinkClass}
          >
            Industries
          </NavLink>

          <NavLink
            to="/faq"
            className={navLinkClass}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact
          </NavLink>

        </nav>

        {/* Right Side Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600"
          >
            <Phone size={18} />
            +91 XXXXX XXXXX
          </a>

          <Link
            to="/proposal"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Request Proposal
          </Link>

          <Link
            to="/admin/login"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-xl transition"
          >
            Admin
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>
              {/* Mobile Menu */}

        {menuOpen && (
          <div className="lg:hidden border-t bg-white shadow-lg">

            <div className="flex flex-col px-6 py-6 gap-5">

              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/industries"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Industries
              </NavLink>

              <NavLink
                to="/faq"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>

              <Link
                to="/proposal"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
              >
                Request Proposal
              </Link>

              <Link
                to="/admin/login"
                onClick={() => setMenuOpen(false)}
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center py-3 rounded-xl transition"
              >
                Admin Login
              </Link>

            </div>

          </div>
        )}

    </header>
  );
}

export default Navbar;