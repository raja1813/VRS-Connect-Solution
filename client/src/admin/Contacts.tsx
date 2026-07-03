import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

import api from "../api/api";

import type { Contact } from "./types";

import ContactSearch from "./ContactSearch";
import ContactTable from "./ContactTable";
import ContactModal from "./ContactModal";

function Contacts() {

  const [contacts, setContacts] = useState<Contact[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedContact, setSelectedContact] =
    useState<Contact | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {

    try {

      const res = await api.get("/admin/contacts");

      setContacts(res.data);

    } catch (error) {

      console.log(error);

      toast.error("Unable to load contacts.");

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

  const handleView = (
    contact: Contact
  ) => {

    setSelectedContact(contact);

  };
    const handleDelete = async (
    contact: Contact
  ) => {

    const ok = window.confirm(
      `Delete ${contact.name}?`
    );

    if (!ok) return;

    try {

      await api.delete(
        `/admin/contacts/${contact.id}`
      );

      toast.success(
        "Contact deleted successfully."
      );

      loadContacts();

    } catch (error) {

      console.log(error);

      toast.error("Delete failed.");

    }

  };

  const exportCSV = () => {

    if (filteredContacts.length === 0) {

      toast.error(
        "No contacts available."
      );

      return;

    }

    const headers = [
      "Name",
      "Company",
      "Email",
      "Phone",
      "Date",
    ];

    const rows = filteredContacts.map(
      (item) => [

        item.name,

        item.company || "",

        item.email,

        item.phone,

        new Date(
          item.createdAt
        ).toLocaleDateString(),

      ]
    );

    const csv = [

      headers,

      ...rows,

    ]
      .map((row) => row.join(","))

      .join("\n");

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "contacts.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    toast.success(
      "Contacts exported successfully."
    );

  };

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

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >

          <Download size={18} />

          Export CSV

        </button>

      </div>

      <ContactSearch
        search={search}
        setSearch={setSearch}
      />
            <ContactTable
        contacts={filteredContacts}
        onView={handleView}
        onDelete={handleDelete}
      />

      <ContactModal
        contact={selectedContact}
        onClose={() =>
          setSelectedContact(null)
        }
      />

    </div>
  );
  }

export default Contacts;