import {
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
  Users,
  CheckCircle2,
} from "lucide-react";

function WhyChoose() {

  const features = [

    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our trained professionals deliver reliable outsourcing solutions with years of industry experience.",
    },

    {
      icon: Headphones,
      title: "24×7 Customer Support",
      description:
        "Round-the-clock customer support to ensure uninterrupted communication and business continuity.",
    },

    {
      icon: BadgeDollarSign,
      title: "Cost Effective",
      description:
        "Reduce operational costs while improving productivity and customer satisfaction.",
    },

    {
      icon: ShieldCheck,
      title: "Secure Operations",
      description:
        "Your business information remains protected through secure and confidential workflows.",
    },

  ];

  return (

    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-6">

            <CheckCircle2 size={18} />

            Why Businesses Trust Us

          </div>

          <h2 className="text-5xl font-extrabold text-slate-900">

            Why Choose
            {" "}
            <span className="text-blue-600">
              VRS Connect Solution?
            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            We combine experienced professionals, modern technology
            and customer-first strategies to help businesses deliver
            better support while reducing operational costs.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                  {features.map((feature, index) => {

            const Icon = feature.icon;

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

                    {feature.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-blue-100 transition duration-500">

                    {feature.description}

                  </p>
                                    {/* Learn More */}

                  <button
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:text-white transition duration-500"
                  >

                    Learn More

                    <CheckCircle2
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />

                  </button>

                </div>

                {/* Decorative Background */}

                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-blue-100 opacity-20 group-hover:bg-white group-hover:opacity-10 transition duration-500"></div>

              </div>

            );

          })}

        </div>

      </div>
          </section>

  );
}

export default WhyChoose;