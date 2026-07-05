import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const companies = [
  "Customer Support",
  "Technical Support",
  "Lead Generation",
  "Back Office",
  "Telecalling",
  "Live Chat",
];

function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">

      <Container>

        <SectionTitle
          badge="Our Expertise"
          title="Trusted Business Process Services"
          subtitle="We help startups, SMEs and growing businesses streamline their customer operations with reliable outsourcing solutions."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {companies.map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-slate-200 bg-white shadow-lg px-5 py-8 text-center hover:border-blue-500 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-5 flex items-center justify-center text-white font-bold text-xl">

                {item.charAt(0)}

              </div>

              <h3 className="font-semibold text-slate-800 text-sm leading-6">

                {item}

              </h3>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default TrustedCompanies;