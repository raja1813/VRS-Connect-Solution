import { Link } from "react-router-dom";

import {
  Headphones,
  PhoneCall,
  Mail,
  Database,
  Laptop,
  MessageCircle,
  FileText,
  Users,
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

function ServicesPage() {

  const services = [

    {
      number: "01",
      icon: Headphones,
      title: "Customer Support",
      description:
        "Professional phone, email and customer support services designed to improve customer satisfaction and strengthen brand loyalty.",
      features: [
        "24×7 Support",
        "Inbound Calls",
        "Customer Satisfaction",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },

    {
      number: "02",
      icon: Laptop,
      title: "Technical Support",
      description:
        "Dedicated IT helpdesk and technical assistance for software, hardware and online business operations.",
      features: [
        "Remote Helpdesk",
        "Issue Resolution",
        "Technical Experts",
      ],
      gradient: "from-cyan-500 to-sky-500",
    },

    {
      number: "03",
      icon: PhoneCall,
      title: "Lead Generation",
      description:
        "Generate qualified business leads through professional outbound campaigns and customer engagement.",
      features: [
        "Cold Calling",
        "Appointment Setting",
        "Qualified Leads",
      ],
      gradient: "from-indigo-600 to-blue-600",
    },

    {
      number: "04",
      icon: PhoneCall,
      title: "Telecalling",
      description:
        "Inbound and outbound telecalling services focused on customer engagement, sales and business growth.",
      features: [
        "Inbound",
        "Outbound",
        "Sales Calls",
      ],
      gradient: "from-sky-500 to-cyan-500",
    },

    {
      number: "05",
      icon: Mail,
      title: "Email Support",
      description:
        "Professional email management and customer ticket handling with fast response times.",
      features: [
        "Ticket Support",
        "Inbox Management",
        "Quick Response",
      ],
      gradient: "from-blue-700 to-indigo-600",
    },

    {
      number: "06",
      icon: MessageCircle,
      title: "Live Chat Support",
      description:
        "Real-time website chat support that improves customer experience and boosts conversion rates.",
      features: [
        "Live Assistance",
        "Instant Response",
        "Higher Conversion",
      ],
      gradient: "from-cyan-600 to-blue-500",
    },

    {
      number: "07",
      icon: Database,
      title: "Back Office Support",
      description:
        "Reliable administrative support including documentation, data processing and workflow management.",
      features: [
        "Documentation",
        "Administration",
        "Data Processing",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },

    {
      number: "08",
      icon: FileText,
      title: "Data Entry",
      description:
        "Accurate and secure data entry services with quality assurance for business operations.",
      features: [
        "High Accuracy",
        "Database Management",
        "Fast Delivery",
      ],
      gradient: "from-cyan-500 to-indigo-600",
    },

  ];

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24">

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

            Professional BPO Services

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">

            Our

            <span className="text-blue-600">

              {" "}Business Services

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            We provide reliable outsourcing solutions that help businesses
            improve customer experience, reduce operational costs and
            achieve sustainable growth with professional support teams.

          </p>

        </div>

        {/* Services */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

                {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.number}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Top Gradient */}

              <div
                className={`h-2 bg-gradient-to-r ${service.gradient}`}
              ></div>

              <div className="p-8">

                {/* Icon + Number */}

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient} shadow-xl transition duration-500 group-hover:scale-110`}
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition">

                    {service.number}

                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-7 text-slate-600">

                  {service.description}

                </p>

                {/* Features */}

                <div className="mt-8 space-y-3">

                  {service.features.map((feature) => (

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

                {/* Footer */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="font-semibold text-blue-600">

                    Professional Service

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

        {/* Why Choose Our Services */}
                <div className="mt-28">

          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 text-cyan-700 px-5 py-2 font-semibold">

              <Users size={18} />

              Why Choose Our Services

            </div>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Delivering Business

              <span className="text-blue-600">

                {" "}Excellence

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Our experienced professionals combine modern technology,
              customer-first strategies and proven workflows to deliver
              reliable outsourcing solutions for businesses worldwide.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

            <div className="rounded-[28px] bg-white border border-slate-200 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-5xl font-black text-blue-600">

                500+

              </h3>

              <p className="mt-3 text-slate-600 font-medium">

                Happy Clients

              </p>

            </div>

            <div className="rounded-[28px] bg-white border border-slate-200 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-5xl font-black text-cyan-600">

                24×7

              </h3>

              <p className="mt-3 text-slate-600 font-medium">

                Customer Support

              </p>

            </div>

            <div className="rounded-[28px] bg-white border border-slate-200 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-5xl font-black text-indigo-600">

                99%

              </h3>

              <p className="mt-3 text-slate-600 font-medium">

                Client Satisfaction

              </p>

            </div>

            <div className="rounded-[28px] bg-white border border-slate-200 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

              <h3 className="text-5xl font-black text-sky-600">

                10+

              </h3>

              <p className="mt-3 text-slate-600 font-medium">

                Industries Served

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

                  Ready to Transform Your Business?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Partner with VRS Connect Solution for reliable BPO
                  services that improve customer experience, reduce
                  operational costs and help your business grow faster
                  with dedicated professionals.

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

export default ServicesPage;