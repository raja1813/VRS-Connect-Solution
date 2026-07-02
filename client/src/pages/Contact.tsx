import { useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
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
      const res = await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            We'd love to hear about your business requirements.
            Our team is ready to provide the best outsourcing
            solutions for your company.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    VRS Connect Solution
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@vrsconnectsolution.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;