import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, FileText, LogOut, ArrowLeft } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          VRS Admin
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Control Panel
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-6 space-y-3">

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/admin/contacts"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <Users size={20} />
          Contacts
        </Link>

        <Link
          to="/admin/proposals"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
        >
          <FileText size={20} />
          Proposals
        </Link>

      </nav>

      {/* Bottom Buttons */}
      <div className="p-6 border-t border-slate-700 space-y-3">

        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          <ArrowLeft size={18} />
          Back to Website
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;