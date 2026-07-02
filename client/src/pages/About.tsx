function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        About VRS Connect Solution
      </h1>

      <p className="text-lg text-gray-600 leading-8">
        VRS Connect Solution is a professional Business Process Outsourcing
        (BPO) company providing Customer Support, Lead Generation,
        Telecalling, Technical Support, Email Support and Back Office
        Services to businesses across multiple industries.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-3">
            Our Mission
          </h2>

          <p>
            Deliver reliable, affordable and high-quality outsourcing
            services that help businesses grow.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-3">
            Our Vision
          </h2>

          <p>
            Become one of India's most trusted outsourcing companies.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-3">
            Why Choose Us
          </h2>

          <p>
            Experienced team, fast response, secure process and 24×7 support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;