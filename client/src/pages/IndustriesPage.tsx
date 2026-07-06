import { Link } from "react-router-dom";

import {
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
  Laptop2,
  Plane,
  Smartphone,
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

function IndustriesPage() {

  const industries = [

    {
      number: "01",
      icon: HeartPulse,
      title: "Healthcare",
      description:
        "Professional customer support, appointment scheduling and healthcare back-office solutions.",
      features: [
        "Patient Support",
        "Appointment Management",
        "Medical Helpdesk",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },

    {
      number: "02",
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Customer service, order processing, returns management and live chat support for online businesses.",
      features: [
        "Order Support",
        "Returns",
        "Live Chat",
      ],
      gradient: "from-cyan-500 to-sky-500",
    },

    {
      number: "03",
      icon: Building2,
      title: "Real Estate",
      description:
        "Lead generation, customer engagement and appointment scheduling for real estate companies.",
      features: [
        "Lead Generation",
        "Sales Support",
        "Customer Care",
      ],
      gradient: "from-indigo-600 to-blue-600",
    },

    {
      number: "04",
      icon: GraduationCap,
      title: "Education",
      description:
        "Student support, admission assistance and educational helpdesk outsourcing services.",
      features: [
        "Student Helpdesk",
        "Admissions",
        "Email Support",
      ],
      gradient: "from-sky-500 to-cyan-500",
    },

    {
      number: "05",
      icon: Landmark,
      title: "Finance",
      description:
        "Secure outsourcing solutions for banking, finance and insurance organizations.",
      features: [
        "Secure Process",
        "Documentation",
        "Customer Support",
      ],
      gradient: "from-blue-700 to-indigo-600",
    },

    {
      number: "06",
      icon: Plane,
      title: "Travel & Hospitality",
      description:
        "Booking assistance, reservation support and customer care for travel companies.",
      features: [
        "Reservations",
        "Travel Support",
        "Customer Service",
      ],
      gradient: "from-cyan-600 to-blue-500",
    },

    {
      number: "07",
      icon: Smartphone,
      title: "Telecommunications",
      description:
        "Customer support, complaint resolution and technical assistance for telecom providers.",
      features: [
        "Complaint Handling",
        "24×7 Support",
        "Technical Help",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },

    {
      number: "08",
      icon: Laptop2,
      title: "IT & Software",
      description:
        "Technical helpdesk, software support and customer success services for technology businesses.",
      features: [
        "Helpdesk",
        "Remote Support",
        "Issue Resolution",
      ],
      gradient: "from-cyan-500 to-indigo-600",
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

        {/* Hero */}

        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

            <Briefcase size={18} />

            Industries We Empower

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">

            Industries

            <span className="text-blue-600">

              {" "}We Serve

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            We provide industry-specific BPO solutions designed to
            improve customer experience, increase efficiency and
            support long-term business growth.

          </p>

        </div>

        {/* Industry Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

                {industries.map((industry) => {

          const Icon = industry.icon;

          return (

            <div
              key={industry.number}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Top Gradient */}

              <div
                className={`h-2 bg-gradient-to-r ${industry.gradient}`}
              ></div>

              <div className="p-8">

                {/* Icon + Number */}

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${industry.gradient} shadow-xl transition duration-500 group-hover:scale-110`}
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition">

                    {industry.number}

                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {industry.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-7 text-slate-600">

                  {industry.description}

                </p>

                {/* Features */}

                <div className="mt-8 space-y-3">

                  {industry.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-green-600"
                      />

                      <span className="text-slate-700">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                {/* Bottom */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="font-semibold text-blue-600">

                    Industry Expertise

                  </span>

                  <ArrowRight
                    size={20}
                    className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </div>

              {/* Decorative Blur */}

              <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-blue-100 opacity-30 blur-2xl transition duration-500 group-hover:scale-125"></div>

            </div>

          );

        })}

        </div>

        {/* Why Industries Choose VRS */}
                <div className="mt-28">

          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 text-cyan-700 px-5 py-2 font-semibold">

              <Briefcase size={18} />

              Why Industries Choose VRS

            </div>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Trusted Across

              <span className="text-blue-600">

                {" "}Multiple Industries

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Every industry has unique challenges. Our customized BPO
              solutions are designed to improve efficiency, reduce costs
              and deliver exceptional customer experiences regardless of
              your business domain.

            </p>

          </div>

          {/* Statistics */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-5xl font-black text-blue-600">

                10+

              </h3>

              <p className="mt-3 font-medium text-slate-600">

                Industries Served

              </p>

            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-5xl font-black text-cyan-600">

                500+

              </h3>

              <p className="mt-3 font-medium text-slate-600">

                Business Clients

              </p>

            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-5xl font-black text-indigo-600">

                24×7

              </h3>

              <p className="mt-3 font-medium text-slate-600">

                Customer Support

              </p>

            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="text-5xl font-black text-sky-600">

                99%

              </h3>

              <p className="mt-3 font-medium text-slate-600">

                Client Satisfaction

              </p>

            </div>

          </div>

        </div>

        {/* Final CTA */}
                <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Looking for Industry-Specific BPO Solutions?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Every business has unique requirements. Our experienced
                  outsourcing professionals deliver customized BPO
                  solutions that improve customer experience, reduce
                  operational costs and support long-term business growth.

                </p>

              </div>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:scale-105"
              >

                Request Proposal

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default IndustriesPage;