type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function ContactSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

      <input
        type="text"
        placeholder="🔍 Search by Name, Company, Email or Phone..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-600"
      />

    </div>
  );
}

export default ContactSearch;