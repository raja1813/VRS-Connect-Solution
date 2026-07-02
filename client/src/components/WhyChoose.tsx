function WhyChoose() {
  const features = [
    {
      title: "Experienced Team",
      description:
        "Our skilled professionals deliver high-quality BPO services with industry expertise.",
      icon: "👨‍💼",
    },
    {
      title: "24/7 Support",
      description:
        "We provide round-the-clock customer support to ensure uninterrupted service.",
      icon: "🕒",
    },
    {
      title: "Cost Effective",
      description:
        "Reduce operational costs while maintaining exceptional service quality.",
      icon: "💰",
    },
    {
      title: "Data Security",
      description:
        "Your business data is protected with secure and confidential processes.",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose VRS Connect Solution?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine technology, experienced professionals and customer-focused
            solutions to help your business grow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;