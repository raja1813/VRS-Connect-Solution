import { Link } from "react-router-dom";

import {
  Star,
  Quote,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

function Testimonials() {

  const testimonials = [

    {
      name: "Rahul Sharma",
      position: "CEO",
      company: "ABC Technologies",
      review:
        "VRS Connect Solution transformed our customer support operations. Their dedicated team improved our response time and customer satisfaction beyond expectations.",
    },

    {
      name: "Priya Verma",
      position: "Operations Manager",
      company: "NextGen Solutions",
      review:
        "Professional communication, transparent reporting and reliable outsourcing services helped us focus on growing our business faster.",
    },

    {
      name: "Amit Patel",
      position: "Business Director",
      company: "Bright Vision Pvt. Ltd.",
      review:
        "Their lead generation and customer support team consistently delivered outstanding results with exceptional professionalism.",
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

          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-700 px-5 py-2 font-semibold">

            <BadgeCheck size={18} />

            Client Testimonials

          </div>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            What Our

            <span className="text-blue-600">

              {" "}Clients Say

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Trusted by businesses across multiple industries,
            we deliver reliable outsourcing services with
            measurable results and long-term partnerships.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

                {testimonials.map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >

            {/* Top Gradient */}

            <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500"></div>

            <div className="p-8">

              {/* Quote + Number */}

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl">

                  <Quote
                    size={30}
                    className="text-white"
                  />

                </div>

                <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition">

                  0{index + 1}

                </span>

              </div>

              {/* Rating */}

              <div className="mt-7 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-slate-600 italic">

                "{item.review}"

              </p>

              {/* Client */}

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-lg">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">

                    {item.name}

                  </h3>

                  <p className="text-slate-500">

                    {item.position}

                  </p>

                  <p className="font-semibold text-blue-600">

                    {item.company}

                  </p>

                </div>

              </div>

              {/* Verified Badge */}

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                <BadgeCheck size={16} />

                Verified Client

              </div>

            </div>

            {/* Decorative Blur */}

            <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-blue-100 opacity-30 blur-2xl transition duration-500 group-hover:scale-125"></div>

          </div>

        ))}

        </div>

        {/* Bottom CTA */}
                <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Ready to Become Our Next Success Story?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Businesses across multiple industries trust
                  VRS Connect Solution for reliable customer support,
                  technical support, lead generation and back-office
                  outsourcing services. Let's build something great together.

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

export default Testimonials;