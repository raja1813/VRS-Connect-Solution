import type { Contact } from "./types";

type Props = {
  contact: Contact | null;
  onClose: () => void;
};

function ContactModal({
  contact,
  onClose,
}: Props) {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Contact Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-red-600"
          >
            ×
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <p className="text-gray-500">
              Name
            </p>

            <h3 className="font-semibold text-lg">
              {contact.name}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Company
            </p>

            <h3 className="font-semibold text-lg">
              {contact.company}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Email
            </p>

            <h3 className="font-semibold text-lg">
              {contact.email}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Phone
            </p>

            <h3 className="font-semibold text-lg">
              {contact.phone}
            </h3>

          </div>

        </div>

        <div className="mt-8">

          <p className="text-gray-500 mb-2">
            Message
          </p>

          <div className="bg-slate-100 rounded-xl p-5 whitespace-pre-wrap">
            {contact.message}
          </div>

        </div>

        <div className="mt-8 text-right">

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default ContactModal;