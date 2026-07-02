function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Customer support and back-office services for hospitals, clinics and healthcare providers.",
    },
    {
      title: "E-Commerce",
      description:
        "Order management, customer care and live chat support for online businesses.",
    },
    {
      title: "Finance",
      description:
        "Secure customer service, document processing and financial support solutions.",
    },
    {
      title: "Real Estate",
      description:
        "Lead generation, appointment scheduling and client support for real estate firms.",
    },
    {
      title: "Education",
      description:
        "Admission support, student helpdesk and administrative outsourcing services.",
    },
    {
      title: "IT & Software",
      description:
        "Technical support, helpdesk and customer success solutions for IT companies.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver reliable BPO and outsourcing solutions across
            multiple industries with experienced professionals and
            customer-focused support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="text-5xl mb-5">🏢</div>

              <h3 className="text-2xl font-bold mb-3">
                {industry.title}
              </h3>

              <p className="text-gray-600 hover:text-white">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;