import {
  ClipboardCheck,
  FileText,
  Rocket,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

function Process() {

  const steps = [

    {
      icon: ClipboardCheck,
      number: "01",
      title: "Requirement Analysis",
      description:
        "We understand your business objectives, customer expectations and outsourcing requirements.",
    },

    {
      icon: FileText,
      number: "02",
      title: "Strategic Planning",
      description:
        "Our experts prepare a customized outsourcing strategy tailored to your business.",
    },

    {
      icon: Rocket,
      number: "03",
      title: "Execution",
      description:
        "Our experienced team starts delivering high-quality BPO services with complete transparency.",
    },

    {
      icon: BarChart3,
      number: "04",
      title: "Performance Monitoring",
      description:
        "Continuous reporting, quality monitoring and process improvements ensure long-term success.",
    },

  ];

  return (

    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold mb-6">

            <CheckCircle2 size={18} />

            Our Proven Process

          </div>

          <h2 className="text-5xl font-extrabold text-slate-900">

            How We Work

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            Our transparent and structured workflow ensures every client
            receives reliable, scalable and high-quality outsourcing services.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                  {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Background */}

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  {/* Step Number */}

                  <div className="flex items-center justify-between">

                    <div className="w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-white flex items-center justify-center transition duration-500">

                      <Icon
                        size={30}
                        className="text-purple-600"
                      />

                    </div>

                    <span className="text-5xl font-extrabold text-slate-200 group-hover:text-white/20 transition duration-500">

                      {step.number}

                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-white transition duration-500">

                    {step.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-purple-100 transition duration-500">

                    {step.description}

                  </p>
                                    {/* Learn More */}

                  <button
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-600 group-hover:text-white transition duration-500"
                  >

                    Next Step

                    <CheckCircle2
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />

                  </button>

                </div>

                {/* Decorative Circle */}

                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-purple-100 opacity-20 group-hover:bg-white group-hover:opacity-10 transition duration-500"></div>

                {/* Connector Line (Desktop Only) */}

                {index < steps.length - 1 && (

                  <div className="hidden lg:block absolute top-20 -right-10 w-20 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"></div>

                )}

              </div>

            );

          })}

        </div>

      </div>
          </section>

  );
}

export default Process;