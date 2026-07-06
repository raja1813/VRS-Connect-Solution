import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await api.post(
        "/contact",
        formData
      );

      toast.success(res.data.message);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {

      toast.error("Something went wrong!");
      console.error(err);

    }

    setLoading(false);

  };

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

            <Building2 size={18} />

            Contact VRS Connect Solution

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">

            Let's Start a

            <span className="text-blue-600">

              {" "}Conversation

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Whether you need customer support, technical support,
            lead generation or complete outsourcing solutions,
            our team is ready to help your business grow.

          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Form */}

          <div className="rounded-[32px] border border-slate-200 bg-white shadow-xl p-10">

            <h2 className="text-3xl font-black text-slate-900">

              Send Us a Message

            </h2>

            <p className="mt-3 text-slate-600">

              Fill out the form below and our team will contact you shortly.

            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >

                          <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                required
              />

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business requirements..."
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] disabled:opacity-60"
              >

                {loading ? "Sending..." : "Send Message"}

                {!loading && <ArrowRight size={20} />}

              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

              <h2 className="text-3xl font-black text-slate-900">

                Contact Information

              </h2>

              <p className="mt-3 text-slate-600">

                Reach out to us through any of the following channels.

              </p>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">

                    <MapPin
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">

                      Office Address

                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">

                      VRS Connect Solution
                      <br />
                      India

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">

                    <Mail
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">

                      Email Address

                    </h3>

                    <p className="mt-2 text-slate-600 break-all">

                      info@vrsconnectsolution.com

                    </p>

                  </div>

                </div>
                                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">

                    <Phone
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">

                      Phone Number

                    </h3>

                    <p className="mt-2 text-slate-600">

                      +91 XXXXX XXXXX

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 shadow-lg">

                    <Clock
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">

                      Business Hours

                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">

                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Why Contact Us */}

            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

              <div className="rounded-[31px] bg-white p-8">

                <h3 className="text-2xl font-bold text-slate-900">

                  Why Contact VRS Connect?

                </h3>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">

                      Free Business Consultation

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">

                      Customized Outsourcing Solutions

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">

                      Experienced Support Professionals

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">

                      Fast Response Time

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">

                      Secure & Confidential Process

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Ready to Grow Your Business?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Connect with our team today and discover how our
                  professional BPO solutions can improve customer
                  satisfaction, reduce operational costs and help your
                  business scale faster.

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

export default Contact;