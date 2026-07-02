import { useEffect, useMemo, useState } from "react";
import axios from "axios";

type Contact = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/admin/contacts"
      );

      setContacts(res.data);
    } catch (err) {
      console.error(err);
      alert("Unable to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const filteredContacts = useMemo(() => {
    const keyword = search.toLowerCase();

    return contacts.filter((item) => {
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.company.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.phone.toLowerCase().includes(keyword)
      );
    });
  }, [contacts, search]);

  if (loading) {
    return (
      <h2 className="text-2xl font-bold">
        Loading Contacts...
      </h2>
    );
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Contacts
          </h1>

          <p className="text-gray-500 mt-2">
            Total Contacts : {filteredContacts.length}
          </p>

        </div>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search by Name, Company, Email or Phone..."
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

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredContacts.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="text-center py-10"
                >
                  No Contacts Found
                </td>

              </tr>

            ) : (

              filteredContacts.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.company}
                  </td>

                  <td className="p-4">
                    {item.email}
                  </td>

                  <td className="p-4">
                    {item.phone}
                  </td>

                  <td className="p-4">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
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

export default Contacts;