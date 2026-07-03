import {
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";

function Testimonials() {

  const testimonials = [

    {
      name: "Rahul Sharma",
      position: "CEO",
      company: "ABC Technologies",
      review:
        "VRS Connect Solution transformed our customer support operations. Their professional team helped us improve response time and customer satisfaction significantly.",
    },

    {
      name: "Priya Verma",
      position: "Operations Manager",
      company: "NextGen Solutions",
      review:
        "Professional communication, reliable service and excellent support. Their outsourcing solutions allowed us to focus on growing our business.",
    },

    {
      name: "Amit Patel",
      position: "Business Director",
      company: "Bright Vision Pvt. Ltd.",
      review:
        "Their lead generation and customer support services exceeded our expectations. Highly recommended for businesses looking to scale efficiently.",
    },

  ];

  return (

    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold mb-6">

            <BadgeCheck size={18} />

            Client Testimonials

          </div>

          <h2 className="text-5xl font-extrabold text-slate-900">

            What Our Clients Say

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            We build long-term partnerships by delivering reliable,
            secure and high-quality outsourcing solutions that help
            businesses grow with confidence.

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

                  {testimonials.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                {/* Quote */}

                <div className="w-16 h-16 rounded-2xl bg-blue-100 group-hover:bg-white flex items-center justify-center transition duration-500">

                  <Quote
                    size={30}
                    className="text-blue-600"
                  />

                </div>

                {/* Rating */}

                <div className="flex gap-1 mt-6">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                {/* Review */}

                <p className="mt-6 leading-8 text-slate-600 italic group-hover:text-blue-100 transition duration-500">

                  "{item.review}"

                </p>
                                {/* Client Info */}

                <div className="flex items-center gap-4 mt-8">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition duration-500">

                    {item.name.charAt(0)}

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition duration-500">

                      {item.name}

                    </h3>

                    <p className="text-slate-500 group-hover:text-blue-100 transition duration-500">

                      {item.position}

                    </p>

                    <p className="text-sm text-blue-600 font-semibold group-hover:text-white transition duration-500">

                      {item.company}

                    </p>

                  </div>

                </div>

                {/* Verified Badge */}

                <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-green-600 transition duration-500">

                  <BadgeCheck size={16} />

                  Verified Client

                </div>

              </div>

              {/* Decorative Circle */}

              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-blue-100 opacity-20 group-hover:bg-white group-hover:opacity-10 transition duration-500"></div>

            </div>

          ))}

        </div>

      </div>
              {/* Trust Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 text-center">

            <h3 className="text-4xl font-extrabold text-blue-600">
              500+
            </h3>

            <p className="mt-3 text-slate-600">
              Happy Clients
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 text-center">

            <h3 className="text-4xl font-extrabold text-blue-600">
              98%
            </h3>

            <p className="mt-3 text-slate-600">
              Client Satisfaction
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 text-center">

            <h3 className="text-4xl font-extrabold text-blue-600">
              24×7
            </h3>

            <p className="mt-3 text-slate-600">
              Support Availability
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 text-center">

            <h3 className="text-4xl font-extrabold text-blue-600">
              10+
            </h3>

            <p className="mt-3 text-slate-600">
              Industries Served
            </p>

          </div>

        </div>
            </section>

  );
}

export default Testimonials;