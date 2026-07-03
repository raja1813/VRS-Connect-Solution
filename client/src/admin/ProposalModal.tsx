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

type Props = {
  proposal: Proposal | null;
  onClose: () => void;
};

function ProposalModal({
  proposal,
  onClose,
}: Props) {

  if (!proposal) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Proposal Details
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
              Company
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.company}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Contact Person
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.email}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Phone
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.phone}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Website
            </p>

            <h3 className="font-semibold text-lg break-all">
              {proposal.website || "-"}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Service
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.service}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Budget
            </p>

            <h3 className="font-semibold text-lg">
              {proposal.budget}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Date
            </p>

            <h3 className="font-semibold text-lg">
              {new Date(
                proposal.createdAt
              ).toLocaleString()}
            </h3>
          </div>

        </div>

        <div className="mt-8">

          <p className="text-gray-500 mb-2">
            Project Description
          </p>

          <div className="bg-slate-100 rounded-xl p-5 whitespace-pre-wrap">

            {proposal.message}

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

export default ProposalModal;