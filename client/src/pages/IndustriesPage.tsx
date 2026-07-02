function IndustriesPage() {
  const industries = [
    "Healthcare",
    "E-commerce",
    "Real Estate",
    "Education",
    "Finance",
    "Travel & Hospitality",
    "Telecommunications",
    "IT & Software",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-4">
        Industries We Serve
      </h1>

      <p className="text-center text-gray-600 mb-12">
        We provide customized BPO solutions for multiple industries.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-8 text-center shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustriesPage;