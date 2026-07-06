import { Link } from "react-router-dom";

import {
  Building2,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function About() {
  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-[520px] h-[520px] rounded-full bg-cyan-200/30 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

            <Building2 size={18} />

            About VRS Connect Solution

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900 leading-tight">

            Building Reliable

            <span className="text-blue-600">

              {" "}Business Partnerships

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            VRS Connect Solution is a professional Business Process
            Outsourcing (BPO) company committed to helping businesses
            improve customer experience, reduce operational costs and
            achieve sustainable growth through high-quality outsourcing
            solutions.

          </p>

        </div>

        {/* About Company */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black text-slate-900">

              Who We Are

            </h2>

            <p className="mt-6 text-slate-600 leading-8">

              We specialize in Customer Support, Technical Support,
              Lead Generation, Telecalling, Email Support and
              Back Office Operations for businesses across multiple
              industries.

            </p>

            <p className="mt-6 text-slate-600 leading-8">

              Our mission is to become a trusted outsourcing partner
              by delivering reliable, scalable and customer-focused
              services that help organizations increase efficiency
              while maintaining the highest quality standards.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">

                  Professional BPO Solutions

                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">

                  Experienced Support Team

                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">

                  Customer First Approach

                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

            <div className="grid gap-8">

                          {/* Mission */}

              <div className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:border-blue-300 hover:shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">

                    <Target
                      size={28}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">

                    Our Mission

                  </h3>

                </div>

                <p className="mt-5 leading-8 text-slate-600">

                  To provide reliable, affordable and high-quality
                  outsourcing services that help businesses improve
                  operational efficiency, increase customer satisfaction
                  and achieve long-term growth.

                </p>

              </div>

              {/* Vision */}

              <div className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:border-cyan-300 hover:shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 shadow-lg">

                    <Eye
                      size={28}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">

                    Our Vision

                  </h3>

                </div>

                <p className="mt-5 leading-8 text-slate-600">

                  To become one of India's most trusted Business Process
                  Outsourcing companies by delivering innovative,
                  customer-centric and scalable business solutions.

                </p>

              </div>

              {/* Company Values */}

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">

                <h3 className="text-2xl font-bold">

                  Our Core Values

                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">

                    <h4 className="font-semibold">

                      Integrity

                    </h4>

                    <p className="mt-2 text-sm text-blue-100">

                      Honest and transparent business practices.

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">

                    <h4 className="font-semibold">

                      Excellence

                    </h4>

                    <p className="mt-2 text-sm text-blue-100">

                      Consistently delivering quality services.

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">

                    <h4 className="font-semibold">

                      Innovation

                    </h4>

                    <p className="mt-2 text-sm text-blue-100">

                      Continuously improving our processes.

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">

                    <h4 className="font-semibold">

                      Customer First

                    </h4>

                    <p className="mt-2 text-sm text-blue-100">

                      Building long-term client relationships.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Company Statistics */}

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center">

          <h3 className="text-5xl font-black text-blue-600">

            500+

          </h3>

          <p className="mt-3 text-slate-600 font-medium">

            Happy Clients

          </p>

        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center">

          <h3 className="text-5xl font-black text-cyan-600">

            24×7

          </h3>

          <p className="mt-3 text-slate-600 font-medium">

            Customer Support

          </p>

        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center">

          <h3 className="text-5xl font-black text-indigo-600">

            99%

          </h3>

          <p className="mt-3 text-slate-600 font-medium">

            Client Satisfaction

          </p>

        </div>

        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-8 text-center">

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

                Let's Build Something Great Together

              </h3>

              <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                Whether you are a startup, growing business or enterprise,
                VRS Connect Solution is ready to help you improve customer
                experience, reduce operational costs and scale your
                business through professional BPO services.

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

export default About;