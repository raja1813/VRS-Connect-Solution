import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { useEffect, useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Users,
  Headphones,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

function Hero() {

const [content, setContent] = useState({

  heroTitle:
    "Transform Your Business With Smart BPO Solutions",

  heroSubtitle:
    "Reliable • Professional • Scalable",

  heroDescription:
    "VRS Connect Solution provides customer support, technical support, telecalling, back office and business process outsourcing services across India.",

  heroButton:
    "Get Free Proposal",

  heroButtonLink:
    "/proposal",

heroBadge:
  "Trusted Global BPO Partner",

heroRating:
  "Trusted by 500+ Businesses",

heroHighlight1:
  "ISO Standard Process",

heroHighlight2:
  "Secure Operations",

heroHighlight3:
  "Dedicated Support",

  clients:
    "500+",

  projects:
    "1200+",

  support:
    "24×7",

  experience:
    "10+",

});

const loadContent = async () => {

  try {

    const res = await api.get(
      "/website-content"
    );

    setContent((prev) => ({

      ...prev,

      ...res.data,

    }));

  } catch (error) {

    console.error(error);

    toast.error(
      "Unable to load homepage content."
    );

  }

};

useEffect(() => {

  loadContent();

}, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-60 -left-52 w-[650px] h-[650px] rounded-full bg-blue-400/15 blur-[140px]" />

        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-start min-h-[760px] pt-8">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-lg border border-blue-100 px-5 py-3">

              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

             <span className="font-semibold text-slate-700">

  {content.heroBadge}

</span>

            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-[1.02] text-slate-900 whitespace-pre-line">

  {content.heroTitle}

</h1>

<p className="mt-4 text-xl font-semibold text-cyan-600">

  {content.heroSubtitle}

</p>

           <p className="mt-8 text-lg leading-9 text-slate-600 max-w-xl">

  {content.heroDescription}

</p>

                        {/* CTA Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to={content.heroButtonLink}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >

                {content.heroButton}

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
              >

                <Phone size={20} />

                Contact Us

              </Link>

            </div>

            {/* Trust */}

            <div className="mt-8 flex items-center gap-4">

              <div className="flex -space-x-3">

                <div className="w-11 h-11 rounded-full bg-blue-600 border-4 border-white"></div>

                <div className="w-11 h-11 rounded-full bg-cyan-500 border-4 border-white"></div>

                <div className="w-11 h-11 rounded-full bg-sky-400 border-4 border-white"></div>

              </div>

              <div>

                <div className="text-yellow-400 text-lg">

                  ★★★★★

                </div>

                <p className="text-sm text-slate-600">

                  {content.heroRating}

                </p>

              </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

              <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-5">

                <Users
                  className="text-blue-600 mb-3"
                  size={24}
                />

                <h3 className="text-3xl font-black">

                  {content.clients}

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                  Happy Clients

                </p>

              </div>

              <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-5">

                <Headphones
                  className="text-green-600 mb-3"
                  size={24}
                />

                <h3 className="text-3xl font-black">

                  {content.support}

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                  Customer Support

                </p>

              </div>

              <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-5">

                <TrendingUp
                  className="text-emerald-600 mb-3"
                  size={24}
                />

                <h3 className="text-3xl font-black">

                  {content.projects}

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                  Projects Completed

                </p>

              </div>

              <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-5">

                <ShieldCheck
                  className="text-cyan-600 mb-3"
                  size={24}
                />

                <h3 className="text-3xl font-black">

                  {content.experience}

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                  Industries Served

                </p>

              </div>

            </div>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-6">

              <div className="flex items-center gap-2 text-slate-700">

                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />

                {content.heroHighlight1}

              </div>

              <div className="flex items-center gap-2 text-slate-700">

                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />

                {content.heroHighlight2}

              </div>

              <div className="flex items-center gap-2 text-slate-700">

                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />

                {content.heroHighlight3}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:-mt-4">

                      {/* Background Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[520px] h-[520px] rounded-full bg-blue-400/15 blur-[120px]" />

            </div>

            {/* Main Image */}

            <div className="relative z-20 w-full flex justify-center">

              <div className="relative rounded-[32px] bg-white p-5 shadow-[0_30px_70px_rgba(37,99,235,0.18)] border border-slate-200">

                <img
                  src={hero}
                  alt="VRS Connect Solution"
                  className="w-full max-w-[640px] rounded-3xl object-cover"
                />

              </div>

            </div>

            {/* Floating Card - Top Left */}

            <div className="hidden xl:flex absolute -left-0 top-88 bg-white rounded-2xl shadow-xl border border-slate-200 px-5 py-4 items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                <Users
                  size={24}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h4 className="font-bold text-lg">

                  {content.clients}

                </h4>

                <p className="text-sm text-slate-500">

                  Businesses Served

                </p>

              </div>

            </div>

            {/* Floating Card - Bottom Right */}

            <div className="hidden xl:flex absolute -right-0 top-88 z-20 bg-white rounded-2xl shadow-xl border border-slate-200 px-5 py-4 items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                <Headphones
                  size={24}
                  className="text-green-600"
                />

              </div>

              <div>

                <h4 className="font-bold text-lg">

                  {content.support}

                </h4>

                <p className="text-sm text-slate-500">

                  Live Support

                </p>

              </div>

            </div>

          </div>

        </div>
                {/* Bottom Scroll Indicator */}

        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center">

          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-3">

            Scroll

          </span>

          <div className="w-7 h-12 rounded-full border-2 border-blue-300 flex justify-center p-1">

            <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce mt-1"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;