import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        VRS Admin
      </h1>

      <nav className="space-y-4">

        <Link
          to="/admin/dashboard"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/contacts"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Contacts
        </Link>

        <Link
          to="/admin/proposals"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          Proposals
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;