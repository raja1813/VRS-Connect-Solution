import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import {
  Headphones,
  PhoneCall,
  Mail,
  Database,
  Briefcase,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function Services() {
  const [content, setContent] = useState({

  servicesBadge:
    "Professional BPO Services",

  servicesTitle:
    "Our Services",

  servicesDescription:
    "We help businesses reduce operational costs, improve customer satisfaction and scale faster with reliable outsourcing solutions delivered by experienced professionals.",

  service1Title:
    "Customer Support",

  service1Description:
    "Deliver exceptional customer experiences through phone, email and live chat with professionally trained support executives.",

  service1Feature1:
    "24×7 Support",

  service1Feature2:
    "Live Chat",

  service1Feature3:
    "Voice Process",

  service2Title:
    "Lead Generation",

  service2Description:
    "Generate qualified business leads using outbound campaigns, appointment setting and customer engagement.",

  service2Feature1:
    "Cold Calling",

  service2Feature2:
    "Qualified Leads",

  service2Feature3:
    "CRM Ready",

  service3Title:
    "Telecalling",

  service3Description:
    "Professional inbound and outbound telecalling services that improve customer relationships and sales performance.",

  service3Feature1:
    "Inbound",

  service3Feature2:
    "Outbound",

  service3Feature3:
    "Sales Calls",

  service4Title:
    "Email Support",

  service4Description:
    "Fast and professional email handling with SLA-based response times and high customer satisfaction.",

  service4Feature1:
    "Inbox Management",

  service4Feature2:
    "Ticket Support",

  service4Feature3:
    "Quick Response",

  service5Title:
    "Technical Support",

  service5Description:
    "Dedicated technical support teams providing troubleshooting, software assistance and remote helpdesk services.",

  service5Feature1:
    "Helpdesk",

  service5Feature2:
    "Remote Support",

  service5Feature3:
    "Issue Resolution",

  service6Title:
    "Back Office Support",

  service6Description:
    "Reliable data processing, documentation and administrative support to improve operational efficiency.",

  service6Feature1:
    "Data Entry",

  service6Feature2:
    "Documentation",

  service6Feature3:
    "Process Management",

servicesCtaTitle:
"Ready to Transform Your Business?",

servicesCtaDescription:
"Partner with VRS Connect Solution for reliable BPO services that help your business grow faster.",

servicesCtaButton:
"Request Proposal",

});

const loadContent = async () => {

  try {

    const res = await api.get("/website-content");

    setContent((prev) => ({

      ...prev,

      ...res.data,

    }));

  } catch (error) {

    console.error(error);

    toast.error("Unable to load services.");

  }

};

useEffect(() => {

  loadContent();

}, []);

  const services = [
    {
  number: "01",
  icon: Headphones,

  title: content.service1Title,

  description: content.service1Description,

  features: [

content.service1Feature1,

content.service1Feature2,

content.service1Feature3,

],

  gradient: "from-blue-600 to-cyan-500",
},

    {
      number: "02",
      icon: PhoneCall,
      title: content.service2Title,
     description: content.service2Description,
     features: [

content.service2Feature1,

content.service2Feature2,

content.service2Feature3,

],
      gradient: "from-cyan-500 to-sky-500",
    },

    {
      number: "03",
      icon: PhoneCall,
      title: content.service3Title,
     description: content.service3Description,
      features: [
        
content.service3Feature1,
        
content.service3Feature2,
        
content.service3Feature3,
        
],
      gradient: "from-indigo-600 to-blue-600",
    },

    {
      number: "04",
      icon: Mail,
      title: content.service4Title,
     description: content.service4Description,
      features: [

content.service4Feature1,

content.service4Feature2,

content.service4Feature3,

],
      gradient: "from-sky-500 to-cyan-500",
    },

    {
      number: "05",
      icon: Laptop,
      title: content.service5Title,
      description: content.service5Description,
      features: [
        
content.service5Feature1,
        
content.service5Feature2,
        
content.service5Feature3,
        
],
      gradient: "from-blue-700 to-indigo-600",
    },

    {
      number: "06",
      icon: Database,
      title: content.service6Title,
      description: content.service6Description,
      features: [
        
content.service6Feature1,
        
content.service6Feature2,
        
content.service6Feature3,
        
],
      gradient: "from-cyan-600 to-blue-500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-cyan-200/30 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

           <Briefcase size={18} />

{content.servicesBadge}

          </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">

  {content.servicesTitle}

</h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

  {content.servicesDescription}

</p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

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
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-xl transition duration-500 group-hover:scale-110`}
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

                {/* Bottom */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="font-semibold text-blue-600">

                    Explore Service

                  </span>

                  <ArrowRight
                    size={20}
                    className="text-blue-600 transition-transform group-hover:translate-x-2"
                  />

                </div>

              </div>

              {/* Decorative Blur */}

              <div className="absolute -right-16 -bottom-16 w-44 h-44 rounded-full bg-blue-100 opacity-30 blur-2xl transition duration-500 group-hover:scale-125"></div>

            </div>

          );
        })}
                </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

               <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

  {content.servicesCtaTitle}

</h3>

               <p className="mt-4 max-w-2xl text-slate-600 leading-7">

  {content.servicesCtaDescription}

</p>

              </div>

              <Link
                to="/proposal"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:scale-105"
              >

                {content.servicesCtaButton}

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;