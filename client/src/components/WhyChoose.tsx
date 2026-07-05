import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
  Award,
} from "lucide-react";

function WhyChoose() {
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Highly trained professionals delivering world-class outsourcing services with years of practical industry experience.",
      points: [
        "Certified Professionals",
        "Industry Expertise",
        "Dedicated Teams",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },

    {
      icon: Headphones,
      title: "24×7 Customer Support",
      description:
        "Round-the-clock customer support ensuring uninterrupted communication and quick issue resolution.",
      points: [
        "365 Days Support",
        "Fast Response",
        "Live Assistance",
      ],
      gradient: "from-cyan-500 to-sky-500",
    },

    {
      icon: BadgeDollarSign,
      title: "Cost Effective",
      description:
        "Reduce operational expenses while improving productivity through efficient outsourcing solutions.",
      points: [
        "Lower Costs",
        "Higher ROI",
        "Flexible Pricing",
      ],
      gradient: "from-indigo-600 to-blue-600",
    },

    {
      icon: ShieldCheck,
      title: "Secure Operations",
      description:
        "Enterprise-grade security practices protect your confidential business information and customer data.",
      points: [
        "Data Protection",
        "Confidential Workflow",
        "Secure Infrastructure",
      ],
      gradient: "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-[520px] h-[520px] rounded-full bg-cyan-200/30 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-5 py-2 font-semibold">

            <Award size={18} />

            Why Businesses Trust Us

          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Why Choose

            <span className="text-blue-600">

              {" "}VRS Connect?

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We combine experienced professionals, modern technology,
            secure operations and customer-first strategies to help
            businesses grow faster with confidence.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

                  {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Top Gradient */}

                <div
                  className={`h-2 bg-gradient-to-r ${feature.gradient}`}
                ></div>

                <div className="p-8">

                  {/* Icon + Number */}

                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
                    >

                      <Icon
                        size={30}
                        className="text-white"
                      />

                    </div>

                    <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition">

                      0{index + 1}

                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {feature.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-slate-600">

                    {feature.description}

                  </p>

                  {/* Feature Points */}

                  <div className="mt-8 space-y-3">

                    {feature.points.map((point) => (

                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className="text-green-600"
                        />

                        <span className="text-slate-700">

                          {point}

                        </span>

                      </div>

                    ))}

                  </div>

                  {/* Bottom */}

                  <div className="mt-10 flex items-center justify-between">

                    <span className="font-semibold text-blue-600">

                      Premium Service

                    </span>

                    <ArrowRight
                      size={20}
                      className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Statistics */}
                <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg text-center">

            <h3 className="text-5xl font-black text-blue-600">

              500+

            </h3>

            <p className="mt-3 text-slate-600 font-medium">

              Happy Clients

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg text-center">

            <h3 className="text-5xl font-black text-cyan-600">

              24×7

            </h3>

            <p className="mt-3 text-slate-600 font-medium">

              Customer Support

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg text-center">

            <h3 className="text-5xl font-black text-indigo-600">

              99%

            </h3>

            <p className="mt-3 text-slate-600 font-medium">

              Client Satisfaction

            </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg text-center">

            <h3 className="text-5xl font-black text-sky-600">

              10+

            </h3>

            <p className="mt-3 text-slate-600 font-medium">

              Industries Served

            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Ready to Partner With Us?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Join hundreds of businesses that trust VRS Connect Solution
                  for customer support, technical support, telecalling,
                  lead generation and back-office outsourcing services.

                </p>

              </div>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:scale-105"
              >

                Get Started

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default WhyChoose;