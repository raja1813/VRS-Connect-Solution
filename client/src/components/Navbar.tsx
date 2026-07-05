import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import TopBar from "./TopBar";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>

      <TopBar />

      <motion.header
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: .5,
        }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-xl border-b border-slate-200"
            : "bg-white"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            <Logo />

            <DesktopMenu />

            {/* Mobile Button */}

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="lg:hidden w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
            >

              {menuOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}

            </button>

          </div>

        </div>

        <MobileMenu
          open={menuOpen}
          onClose={() =>
            setMenuOpen(false)
          }
        />

      </motion.header>

    </>
  );
}

export default Navbar;