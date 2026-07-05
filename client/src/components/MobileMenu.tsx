import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  X,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({
  open,
  onClose,
}: Props) {

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-700";

  return (

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{ opacity: 0, y: -30 }}

          animate={{ opacity: 1, y: 0 }}

          exit={{ opacity: 0, y: -30 }}

          transition={{ duration: .25 }}

          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t z-50"

        >

          <div className="px-6 py-6">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-xl font-bold">

                Menu

              </h2>

              <button
                onClick={onClose}
              >

                <X size={26} />

              </button>

            </div>

            <div className="flex flex-col gap-6">

              <NavLink
                to="/"
                className={navClass}
                onClick={onClose}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navClass}
                onClick={onClose}
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                className={navClass}
                onClick={onClose}
              >
                Services
              </NavLink>

              <NavLink
                to="/industries"
                className={navClass}
                onClick={onClose}
              >
                Industries
              </NavLink>

              <NavLink
                to="/faq"
                className={navClass}
                onClick={onClose}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/contact"
                className={navClass}
                onClick={onClose}
              >
                Contact
              </NavLink>

            </div>

            <div className="border-t mt-8 pt-8 space-y-4">

              <a

                href="tel:+919557220763"

                className="flex items-center gap-3"

              >

                <Phone
                  size={18}
                  className="text-blue-600"
                />

                +91 95572 20763

              </a>

              <Link

                to="/proposal"

                onClick={onClose}

                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl py-3 font-semibold shadow-lg"

              >

                Request Proposal

                <ArrowRight size={18} />

              </Link>

              <Link

                to="/admin/login"

                onClick={onClose}

                className="flex items-center justify-center gap-2 border border-blue-600 rounded-xl py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"

              >

                <ShieldCheck size={18} />

                Admin Login

              </Link>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default MobileMenu;