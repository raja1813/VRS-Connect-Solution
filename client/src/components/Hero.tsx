import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Business with{" "}
              <span className="text-blue-600">
                Reliable BPO Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Professional Customer Support, Lead Generation,
              Telecalling, Email Support and Back Office
              Services to help your business grow faster.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Request Proposal
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Our Services
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;