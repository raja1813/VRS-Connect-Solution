import { useEffect, useMemo, useState } from "react";
import axios from "axios";

type Proposal = {
  id: number;
  company: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
};

function Proposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProposals();
  }, []);

  const loadProposals = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/admin/proposals"
      );

      setProposals(res.data);
    } catch (err) {
      console.error(err);
      alert("Unable to load proposals.");
    } finally {
      setLoading(false);
    }
  };

  const filteredProposals = useMemo(() => {
    const keyword = search.toLowerCase();

    return proposals.filter((item) => {
      return (
        item.company.toLowerCase().includes(keyword) ||
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.service.toLowerCase().includes(keyword)
      );
    });
  }, [proposals, search]);

  if (loading) {
    return (
      <h2 className="text-2xl font-bold">
        Loading Proposals...
      </h2>
    );
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Proposals
          </h1>

          <p className="text-gray-500 mt-2">
            Total Proposals : {filteredProposals.length}
          </p>

        </div>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search by Company, Name, Email or Service..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Budget</th>
              <th className="p-4 text-left">Date</th>

            </tr>

          </thead>

          <tbody>

            {filteredProposals.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="text-center py-10"
                >
                  No Proposals Found
                </td>

              </tr>

            ) : (

              filteredProposals.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4">{item.company}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.service}</td>
                  <td className="p-4">{item.budget}</td>
                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>
          </div>
  );
}

export default Proposals;