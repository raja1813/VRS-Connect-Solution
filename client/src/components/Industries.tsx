import {
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
  Laptop2,
  Briefcase,
} from "lucide-react";

function Industries() {

  const industries = [

    {
      icon: HeartPulse,
      title: "Healthcare",
      description:
        "Reliable customer support, appointment management and healthcare back-office solutions.",
    },

    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Order processing, customer care, returns management and live chat support.",
    },

    {
      icon: Landmark,
      title: "Finance",
      description:
        "Secure customer support, documentation and financial process outsourcing.",
    },

    {
      icon: Building2,
      title: "Real Estate",
      description:
        "Lead generation, appointment scheduling and customer engagement services.",
    },

    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Admission support, student helpdesk and education process outsourcing.",
    },

    {
      icon: Laptop2,
      title: "IT & Software",
      description:
        "Technical support, helpdesk operations and customer success management.",
    },

  ];

  return (

    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-6">

            <Briefcase size={18} />

            Industries We Empower

          </div>

          <h2 className="text-5xl font-extrabold text-slate-900">

            Industries We Serve

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            Our outsourcing solutions are designed to help businesses
            across multiple industries improve efficiency, reduce costs
            and deliver exceptional customer experiences.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <div
                key={index}
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Gradient */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  {/* Icon */}

                  <div className="w-16 h-16 rounded-2xl bg-blue-100 group-hover:bg-white flex items-center justify-center transition duration-500">

                    <Icon
                      size={30}
                      className="text-blue-600"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-2xl font-bold text-slate-900 group-hover:text-white transition duration-500">

                    {industry.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-blue-100 transition duration-500">

                    {industry.description}

                  </p>
                                    {/* Learn More */}

                  <button
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:text-white transition duration-500"
                  >

                    Learn More

                    <Briefcase
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />

                  </button>

                </div>

                {/* Decorative Circle */}

                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-blue-100 opacity-20 group-hover:bg-white group-hover:opacity-10 transition duration-500"></div>

              </div>

            );

          })}

        </div>

      </div>
          </section>

  );
}

export default Industries;