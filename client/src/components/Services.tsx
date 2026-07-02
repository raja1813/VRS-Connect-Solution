function Services() {
  const services = [
    {
      title: "Customer Support",
      description:
        "24/7 customer support through phone, email and live chat.",
    },
    {
      title: "Lead Generation",
      description:
        "Generate high-quality business leads to increase your sales.",
    },
    {
      title: "Telecalling",
      description:
        "Professional inbound and outbound calling services.",
    },
    {
      title: "Email Support",
      description:
        "Fast and professional email handling for your customers.",
    },
    {
      title: "Technical Support",
      description:
        "Dedicated IT helpdesk and technical support solutions.",
    },
    {
      title: "Back Office",
      description:
        "Efficient data processing and administrative support.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide complete BPO outsourcing solutions that help
            businesses reduce costs, improve customer satisfaction and
            accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                💼
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;