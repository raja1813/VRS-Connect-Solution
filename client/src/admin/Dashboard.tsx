import { useEffect, useState } from "react";
import axios from "axios";

type DashboardData = {
  totalContacts: number;
  totalProposals: number;
};

function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    totalContacts: 0,
    totalProposals: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/admin/dashboard"
      );

      setData({
        totalContacts: res.data.totalContacts,
        totalProposals: res.data.totalProposals,
      });
    } catch (err) {
      console.error(err);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h2 className="text-2xl font-bold">
        Loading Dashboard...
      </h2>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-bold text-slate-900">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to VRS Connect Solution Admin Panel
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500">
            Total Contacts
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-3">
            {data.totalContacts}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500">
            Total Proposals
          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-3">
            {data.totalProposals}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <p className="text-gray-500">
            Server Status
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-3">
            Online
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;