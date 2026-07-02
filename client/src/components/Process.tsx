function Process() {
  const steps = [
    {
      number: "01",
      title: "Discuss Requirements",
      desc: "Understand your business goals and outsourcing needs.",
    },
    {
      number: "02",
      title: "Create Custom Plan",
      desc: "Prepare a tailored BPO strategy for your business.",
    },
    {
      number: "03",
      title: "Launch Operations",
      desc: "Our team starts handling your business processes efficiently.",
    },
    {
      number: "04",
      title: "Monitor & Improve",
      desc: "Continuous reporting, quality checks and performance improvements.",
    },
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Working Process
        </h2>

        <p className="text-center text-gray-600 mb-14">
          A simple and transparent process to help your business grow.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Process;