import { useEffect, useMemo, useState } from "react";
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
      await api.delete(`/admin/contacts/${contact.id}`);

      loadContacts();
    } catch (error) {
      console.log(error);
      alert("Delete failed.");
    }
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