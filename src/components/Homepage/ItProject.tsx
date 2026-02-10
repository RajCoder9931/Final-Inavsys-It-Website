import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowUpRight } from "lucide-react";
export function ITProjects() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://img.freepik.com/free-photo/technician-using-pc-data-center-update-server-tech-configuring-equipment_482257-126304.jpg?t=st=1770705359~exp=1770708959~hmac=c0f447d9d7942c382a6d6a9fd82e85bb6f3be033a1d295752a57f516625c1d6f&w=1060"
              alt="IT Projects"
              className="rounded-xl w-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#1e2a3b] mb-4">
              IT Projects
            </h3>

            <p className="text-gray-800 font-medium mb-4">
              Need help with an upcoming project? Let’s work together to get it
              done on time and on budget.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We understand you need dependable support you can turn to — not
              someone who you have difficulty even getting on the phone.
              <br />
              <br />
              We offer a wide range of project and consulting services for you
              to choose from, whether you’re looking for a major infrastructure
              upgrade, strategic IT planning, or something smaller in scale.
              Whatever the project, we’ve got the experience and expertise to
              help.
            </p>

            <Button className="bg-[#ff4d4f] hover:bg-[#e64547]">
              Learn More <ArrowUpRight className="ml-2" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
