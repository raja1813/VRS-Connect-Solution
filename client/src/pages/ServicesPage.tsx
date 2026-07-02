function ServicesPage() {
  const services = [
    {
      title: "Customer Support",
      description:
        "24/7 customer support through phone, email and live chat."
    },
    {
      title: "Lead Generation",
      description:
        "Generate high-quality leads to help your business grow faster."
    },
    {
      title: "Telecalling",
      description:
        "Professional outbound and inbound calling services."
    },
    {
      title: "Email Support",
      description:
        "Fast and professional email handling for your customers."
    },
    {
      title: "Back Office Support",
      description:
        "Data processing, documentation and administrative support."
    },
    {
      title: "Technical Support",
      description:
        "IT helpdesk and technical assistance for your clients."
    },
    {
      title: "Live Chat Support",
      description:
        "Real-time website chat support to improve customer experience."
    },
    {
      title: "Data Entry",
      description:
        "Accurate and secure data entry and database management."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-4">
        Our Services
      </h1>

      <p className="text-center text-gray-600 mb-12">
        We provide reliable BPO and business support services for companies of all sizes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {service.title}
            </h2>

            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;