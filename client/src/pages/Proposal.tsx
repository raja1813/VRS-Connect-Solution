import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

import {
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
  IndianRupee,
  FileText,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";

function Proposal() {

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
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
        "/proposal",
        formData
      );

      toast.success(res.data.message);

      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        budget: "",
        message: "",
      });

    } catch (error) {

      toast.error("Something went wrong!");

      console.log(error);

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

            <ClipboardCheck size={18} />

            Business Proposal Request

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">

            Request Your

            <span className="text-blue-600">

              {" "}Custom Proposal

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Tell us about your business requirements and our experts
            will prepare a customized outsourcing proposal designed
            specifically for your organization.

          </p>

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Proposal Form */}

          <div className="rounded-[32px] border border-slate-200 bg-white shadow-xl p-10">

            <h2 className="text-3xl font-black text-slate-900">

              Proposal Information

            </h2>

            <p className="mt-3 text-slate-600">

              Complete the form below and we'll contact you with a
              customized proposal.

            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >

                          <div className="grid md:grid-cols-2 gap-5">

                {/* Company */}

                <div>

                  <label className="mb-2 block font-semibold text-slate-700">

                    Company Name

                  </label>

                  <div className="relative">

                    <Building2
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      required
                      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

                {/* Contact Person */}

                <div>

                  <label className="mb-2 block font-semibold text-slate-700">

                    Contact Person

                  </label>

                  <div className="relative">

                    <User
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Business Email

                </label>

                <div className="relative">

                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>

              {/* Phone */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Phone Number

                </label>

                <div className="relative">

                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>

              {/* Website */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Website

                </label>

                <div className="relative">

                  <Globe
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>

              {/* Service + Budget */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="mb-2 block font-semibold text-slate-700">

                    Required Service

                  </label>

                  <div className="relative">

                    <Briefcase
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >

                      <option value="">Select Service</option>

                      <option>Customer Support</option>
                      <option>Technical Support</option>
                      <option>Lead Generation</option>
                      <option>Telecalling</option>
                      <option>Email Support</option>
                      <option>Live Chat Support</option>
                      <option>Back Office Support</option>
                      <option>Data Entry</option>

                    </select>

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-700">

                    Estimated Budget

                  </label>

                  <div className="relative">

                    <IndianRupee
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >

                      <option value="">Select Budget</option>

                      <option>Less than ₹50,000</option>
                      <option>₹50,000 - ₹2,00,000</option>
                      <option>₹2,00,000 - ₹10,00,000</option>
                      <option>More than ₹10,00,000</option>

                    </select>

                  </div>

                </div>

              </div>

              {/* Project Description */}

              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Project Description

                </label>

                <div className="relative">

                  <FileText
                    size={20}
                    className="absolute left-4 top-5 text-slate-400"
                  />

                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements..."
                    required
                    className="w-full resize-none rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] disabled:opacity-60"
              >

                {loading ? "Submitting..." : "Submit Proposal"}

                {!loading && <ArrowRight size={20} />}

              </button>

            </form>

          </div>

          {/* Right Information Panel */}

          <div className="space-y-8">
                        {/* Proposal Benefits */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

              <h2 className="text-3xl font-black text-slate-900">

                Why Request a Proposal?

              </h2>

              <p className="mt-3 text-slate-600">

                Our experts prepare a customized outsourcing strategy
                tailored to your business requirements.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">

                    Free Initial Consultation

                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">

                    Customized Pricing & Solution

                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">

                    Dedicated Account Manager

                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">

                    Transparent Communication

                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">

                    Fast Response Within 24 Hours

                  </span>

                </div>

              </div>

            </div>

            {/* Proposal Process */}

            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

              <div className="rounded-[31px] bg-white p-10">

                <h3 className="text-2xl font-bold text-slate-900">

                  Proposal Process

                </h3>

                <div className="mt-8 space-y-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">

                      1

                    </div>

                    <div>

                      <h4 className="font-bold text-slate-900">

                        Submit Your Requirements

                      </h4>

                      <p className="mt-1 text-slate-600">

                        Complete the proposal request form.

                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-bold">

                      2

                    </div>

                    <div>

                      <h4 className="font-bold text-slate-900">

                        Requirement Analysis

                      </h4>

                      <p className="mt-1 text-slate-600">

                        Our experts evaluate your business needs.

                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">

                      3

                    </div>

                    <div>

                      <h4 className="font-bold text-slate-900">

                        Custom Proposal

                      </h4>

                      <p className="mt-1 text-slate-600">

                        We prepare pricing, timeline and service plan.

                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-bold">

                      4

                    </div>

                    <div>

                      <h4 className="font-bold text-slate-900">

                        Project Kickoff

                      </h4>

                      <p className="mt-1 text-slate-600">

                        After approval, our team begins execution.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Final CTA */}
                <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-[1px] shadow-2xl">

          <div className="rounded-[31px] bg-white px-8 py-12 lg:px-12">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">

                  Ready to Build a Long-Term Partnership?

                </h3>

                <p className="mt-4 max-w-2xl text-slate-600 leading-7">

                  Every business is different. Our experts will prepare a
                  customized outsourcing proposal that matches your goals,
                  budget and operational requirements with complete
                  transparency.

                </p>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:scale-105"
              >

                Contact Our Team

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Proposal;