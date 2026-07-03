import { useState } from "react";
import axios from "axios";
import {
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  Briefcase,
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
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
      const res = await axios.post(
        "http://localhost:5000/proposal",
        formData
      );

      alert(res.data.message);

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
  alert("Something went wrong!");
  console.log(error);
}

    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-slate-900">
            Request a Proposal
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and our experts will prepare
            a customized proposal for your business.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-2 gap-6"
          >

            <div>

              <label className="font-semibold mb-2 block">
                Company Name
              </label>

              <div className="relative">

                <Building2
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Contact Person
              </label>

              <div className="relative">

                <User
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Business Email
              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Phone Number
              </label>

              <div className="relative">

                <Phone
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                />

              </div>

            </div>
                        <div>

              <label className="font-semibold mb-2 block">
                Website
              </label>

              <div className="relative">

                <Globe
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Required Service
              </label>

              <div className="relative">

                <Briefcase
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>
                    Customer Support
                  </option>

                  <option>
                    Technical Support
                  </option>

                  <option>
                    IT Help Desk
                  </option>

                  <option>
                    Data Entry
                  </option>

                  <option>
                    Back Office
                  </option>

                  <option>
                    BPO Services
                  </option>

                </select>

              </div>

            </div>

            <div>

              <label className="font-semibold mb-2 block">
                Estimated Budget
              </label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full border rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="">
                  Select Budget
                </option>

                <option>
                  Less than ₹50,000
                </option>

                <option>
                  ₹50,000 - ₹2,00,000
                </option>

                <option>
                  ₹2,00,000 - ₹10,00,000
                </option>

                <option>
                  More than ₹10,00,000
                </option>

              </select>

            </div>

            <div className="lg:col-span-2">

              <label className="font-semibold mb-2 block">
                Project Description
              </label>

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project..."
                required
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>

            </div>

            <div className="lg:col-span-2">

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Proposal"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Proposal;