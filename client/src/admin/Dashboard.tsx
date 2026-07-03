import { useEffect, useState } from "react";
import {
  Users,
  FileText,
  Server,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import api from "../api/api";

type Contact = {
  id: number;
  name: string;
  company: string;
  email: string;
};

type Proposal = {
  id: number;
  company: string;
  name: string;
  service: string;
};

type DashboardData = {
  totalContacts: number;
  totalProposals: number;
  latestContacts: Contact[];
  latestProposals: Proposal[];
};

function Dashboard() {

  const [data, setData] =
    useState<DashboardData>({
      totalContacts: 0,
      totalProposals: 0,
      latestContacts: [],
      latestProposals: [],
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const res =
        await api.get("/admin/dashboard");

      setData(res.data);

    } catch (error) {

      console.error(error);

      alert(
        "Unable to connect to server."
      );

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="flex items-center justify-center h-[70vh]">

        <h2 className="text-3xl font-bold text-blue-600">

          Loading Dashboard...

        </h2>

      </div>

    );

  }

  return (

    <div
      className="space-y-10"
      data-aos="fade-up"
    >

      <div>

        <h1 className="text-4xl font-bold text-slate-900">

          Dashboard

        </h1>

        <p className="text-slate-500 mt-2">

          Welcome back to
          {" "}
          <span className="font-semibold">
            VRS Connect Solution
          </span>

        </p>

      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

              {/* Total Contacts */}

        <div
          className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition duration-300 border border-blue-100"
          data-aos="zoom-in"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-500 font-medium">
                Total Contacts
              </p>

              <h2 className="text-5xl font-bold text-blue-600 mt-4">
                {data.totalContacts}
              </h2>

              <div className="flex items-center gap-2 mt-5 text-green-600">

                <ArrowUpRight size={18} />

                <span className="font-medium">
                  Active Leads
                </span>

              </div>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center">

              <Users
                size={42}
                className="text-blue-600"
              />

            </div>

          </div>

        </div>

        {/* Total Proposals */}

        <div
          className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition duration-300 border border-green-100"
          data-aos="zoom-in"
          data-aos-delay="100"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-500 font-medium">
                Total Proposals
              </p>

              <h2 className="text-5xl font-bold text-green-600 mt-4">
                {data.totalProposals}
              </h2>

              <div className="flex items-center gap-2 mt-5 text-green-600">

                <ArrowUpRight size={18} />

                <span className="font-medium">
                  Business Opportunities
                </span>

              </div>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center">

              <FileText
                size={42}
                className="text-green-600"
              />

            </div>

          </div>

        </div>
                {/* Server Status */}

        <div
          className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition duration-300 border border-emerald-100"
          data-aos="zoom-in"
          data-aos-delay="200"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-500 font-medium">
                Server Status
              </p>

              <h2 className="text-4xl font-bold text-emerald-600 mt-4">
                Online
              </h2>

              <div className="flex items-center gap-2 mt-5">

                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>

                <span className="text-emerald-600 font-medium">
                  Running Smoothly
                </span>

              </div>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center">

              <Server
                size={42}
                className="text-emerald-600"
              />

            </div>

          </div>

        </div>

        {/* Website Activity */}

        <div
          className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition duration-300 border border-orange-100"
          data-aos="zoom-in"
          data-aos-delay="300"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-500 font-medium">
                Website Activity
              </p>

              <h2 className="text-4xl font-bold text-orange-500 mt-4">
                Active
              </h2>

              <div className="flex items-center gap-2 mt-5">

                <Activity
                  size={18}
                  className="text-orange-500"
                />

                <span className="text-orange-500 font-medium">
                  Receiving Requests
                </span>

              </div>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-orange-100 flex items-center justify-center">

              <Activity
                size={42}
                className="text-orange-500"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity Section */}

      <div className="grid lg:grid-cols-2 gap-8">

              {/* Recent Contacts */}

        <div
          className="bg-white rounded-3xl shadow-lg p-8"
          data-aos="fade-right"
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Contacts
            </h2>

            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
              {data.latestContacts.length}
            </span>

          </div>

          {data.latestContacts.length === 0 ? (

            <div className="text-center py-10 text-slate-500">

              No contacts available.

            </div>

          ) : (

            <div className="space-y-4">

              {data.latestContacts.map((contact) => (

                <div
                  key={contact.id}
                  className="border rounded-2xl p-4 hover:bg-slate-50 transition"
                >

                  <h3 className="font-bold text-lg text-slate-900">
                    {contact.name}
                  </h3>

                  <p className="text-slate-500">
                    {contact.company || "No Company"}
                  </p>

                  <p className="text-blue-600 text-sm mt-1">
                    {contact.email}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Recent Proposals */}

        <div
          className="bg-white rounded-3xl shadow-lg p-8"
          data-aos="fade-left"
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Proposals
            </h2>

            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
              {data.latestProposals.length}
            </span>

          </div>

          {data.latestProposals.length === 0 ? (

            <div className="text-center py-10 text-slate-500">

              No proposals available.

            </div>

          ) : (

            <div className="space-y-4">

              {data.latestProposals.map((proposal) => (

                <div
                  key={proposal.id}
                  className="border rounded-2xl p-4 hover:bg-slate-50 transition"
                >

                  <h3 className="font-bold text-lg text-slate-900">
                    {proposal.company}
                  </h3>

                  <p className="text-slate-500">
                    {proposal.name}
                  </p>

                  <p className="text-green-600 text-sm mt-1">
                    {proposal.service}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
            {/* Quick Actions & System Info */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Quick Actions */}

        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl"
          data-aos="fade-up"
        >

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button
              className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-5 text-left"
            >
              <Users size={34} />

              <h3 className="mt-4 text-lg font-semibold">
                Contacts
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                View all customer enquiries
              </p>

            </button>

            <button
              className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-5 text-left"
            >
              <FileText size={34} />

              <h3 className="mt-4 text-lg font-semibold">
                Proposals
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                Manage proposal requests
              </p>

            </button>

          </div>

        </div>

        {/* System Information */}

        <div
          className="bg-white rounded-3xl shadow-xl p-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            System Information
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Website
              </span>

              <span className="font-semibold text-green-600">
                Running
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Backend
              </span>

              <span className="font-semibold text-green-600">
                Online
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Storage
              </span>

              <span className="font-semibold text-blue-600">
                JSON Database
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Admin Version
              </span>

              <span className="font-semibold">
                v1.0
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Last Updated
              </span>

              <span className="font-semibold">
                {new Date().toLocaleDateString()}
              </span>

            </div>

          </div>

        </div>

      </div>
          </div>

  );

}

export default Dashboard;