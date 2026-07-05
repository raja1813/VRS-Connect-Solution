import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  FileText,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      icon: ClipboardCheck,
      description:
        "We understand your business goals, customer expectations and project requirements before starting any campaign.",
      features: [
        "Business Consultation",
        "Requirement Gathering",
        "Project Planning",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },

    {
      number: "02",
      title: "Strategic Planning",
      icon: FileText,
      description:
        "Our specialists prepare a customized outsourcing strategy, allocate resources and define KPIs.",
      features: [
        "Resource Allocation",
        "Workflow Design",
        "KPI Definition",
      ],
      gradient: "from-cyan-500 to-sky-500",
    },

    {
      number: "03",
      title: "Execution",
      icon: Rocket,
      description:
        "Our experienced team starts delivering high-quality BPO services with complete transparency.",
      features: [
        "Dedicated Team",
        "Quality Delivery",
        "Real-time Support",
      ],
      gradient: "from-indigo-600 to-blue-600",
    },

    {
      number: "04",
      title: "Monitoring & Optimization",
      icon: BarChart3,
      description:
        "Continuous monitoring, reporting and process improvements ensure long-term business success.",
      features: [
        "Performance Reports",
        "Quality Assurance",
        "Continuous Improvement",
      ],
      gradient: "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-cyan-200/30 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

            <CheckCircle2 size={18} />

            Our Proven Workflow

          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Our Working

            <span className="text-blue-600">

              {" "}Process

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Every client project follows a proven workflow designed
            to deliver quality, transparency and measurable business
            growth.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Timeline Line */}

          <div className="hidden lg:block absolute left-20 right-20 top-14 h-1 rounded-full bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200"></div>

          <div className="grid lg:grid-cols-4 gap-10">

                    {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative group"
              >

                {/* Timeline Dot */}

                <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-4 border-blue-500 items-center justify-center shadow-xl">

                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>

                </div>

                {/* Card */}

                <div className="mt-10 rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">

                  {/* Gradient Bar */}

                  <div
                    className={`h-2 bg-gradient-to-r ${step.gradient}`}
                  ></div>

                  <div className="p-8">

                    {/* Icon + Number */}

                    <div className="flex items-center justify-between">

                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}
                      >

                        <Icon
                          size={30}
                          className="text-white"
                        />

                      </div>

                      <span className="text-5xl font-black text-slate-100">

                        {step.number}

                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-7 text-2xl font-bold text-slate-900">

                      {step.title}

                    </h3>

                    {/* Description */}

                    <p className="mt-4 leading-7 text-slate-600">

                      {step.description}

                    </p>

                    {/* Features */}

                    <div className="mt-8 space-y-3">

                      {step.features.map((feature) => (

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

                        Step {step.number}

                      </span>

                      <ArrowRight
                        size={20}
                        className="text-blue-600 transition-transform group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </div>

                {/* Connector */}

                {index < steps.length - 1 && (

                  <div className="hidden lg:flex absolute top-1/2 -right-5 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg items-center justify-center">

                    <ArrowRight
                      size={18}
                      className="text-blue-600"
                    />

                  </div>

                )}

              </div>

            );
          })}
                  </div>

             </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Ready to Scale Your Business?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Let our experienced BPO professionals help you reduce
                  operational costs, improve customer satisfaction and
                  accelerate business growth with reliable outsourcing
                  solutions.

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

export default Process;