import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { useSettings } from "../context/SettingsContext";

function Logo() {

  const { settings } = useSettings();

  return (

    <Link
      to="/"
      className="group flex items-center gap-4"
    >

      <img
        src={settings.logo || logo}
        alt={settings.companyName}
        className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
      />

      <div>

        <h1 className="text-1xl font-extrabold tracking-tight text-slate-900 transition group-hover:text-blue-600">

          {settings.companyName}

        </h1>

        <p className="text-xs uppercase tracking-[0.25em] text-slate-600">

          Business Process Outsourcing

        </p>

      </div>

    </Link>

  );

}

export default Logo;