import type { Contact } from "./types";

type Props = {
  contacts: Contact[];
  onView: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
};

function ContactTable({
  contacts,
  onView,
  onDelete,
}: Props) {
  return (
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

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {contacts.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="text-center py-10"
              >
                No Contacts Found
              </td>

            </tr>

          ) : (

            contacts.map((item) => (

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

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        onView(item)
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() =>
                        onDelete(item)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ContactTable;