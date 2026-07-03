import {
  Headphones,
  PhoneCall,
  Mail,
  Database,
  Briefcase,
  Laptop,
  ArrowRight,
} from "lucide-react";

function Services() {

  const services = [

    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Deliver exceptional customer experiences with professional phone, email and live chat support available 24×7.",
    },

    {
      icon: PhoneCall,
      title: "Lead Generation",
      description:
        "Generate qualified business leads through strategic outbound calling and customer engagement.",
    },

    {
      icon: PhoneCall,
      title: "Telecalling",
      description:
        "Professional inbound and outbound telecalling services to improve sales and customer relationships.",
    },

    {
      icon: Mail,
      title: "Email Support",
      description:
        "Fast, accurate and professional email support that increases customer satisfaction.",
    },

    {
      icon: Laptop,
      title: "Technical Support",
      description:
        "Dedicated IT helpdesk, troubleshooting and technical assistance for businesses worldwide.",
    },

    {
      icon: Database,
      title: "Back Office Support",
      description:
        "Reliable data processing, documentation and administrative support for smooth business operations.",
    },

  ];

  return (

    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-6">

            <Briefcase size={18} />

            Professional BPO Services

          </div>

          <h2 className="text-5xl font-extrabold text-slate-900">

            Our Services

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            We help businesses reduce operational costs, improve
            customer satisfaction and scale faster with reliable
            outsourcing solutions delivered by experienced professionals.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Background */}

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

                    {service.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-blue-100 transition duration-500">

                    {service.description}

                  </p>
                                    {/* Learn More */}

                  <button
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:text-white transition duration-500"
                  >

                    Learn More

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform duration-300"
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

export default Services;