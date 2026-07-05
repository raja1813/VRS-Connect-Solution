import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-4 group"
    >
      <img
        src={logo}
        alt="VRS Connect Solution"
        className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
      />

      <div>

        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">

          VRS Connect

        </h1>

        <p className="text-xs tracking-[0.25em] uppercase text-slate-500">

          Business Process Outsourcing

        </p>

      </div>

    </Link>
  );
}

export default Logo;