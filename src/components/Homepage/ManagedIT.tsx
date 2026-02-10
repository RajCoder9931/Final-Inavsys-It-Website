import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export function ManagedIT() {
  return (
    <section className="py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 text-white">
            Stop Struggling To Manage Your Own{' '}
            <span className="text-[#B4FF39]">IT</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#B4FF39] mb-4">
              Managed IT
            </h3>

            <p className="text-gray-300 font-medium mb-4 leading-relaxed">
              With our managed IT services offering, we plug our complete IT
              department program into your business to take IT completely off
              of your plate.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We’ve designed our managed services to give your business the
              benefits of an in-house IT department — without the overhead.
              From onboarding and help desk support to backups, vendor
              management, and disaster recovery, everything is handled under a
              fixed and predictable monthly cost.
            </p>

            <Button className="flex items-center text-lg px-4 py-2">
  Learn More <ArrowUpRight className="ml-2" />
</Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/70 z-10 rounded-2xl" />
            <img
              src="https://media.istockphoto.com/id/1408255024/photo/developers-discussing-programming-code.jpg?s=612x612&w=0&k=20&c=W8HQvPEwDMzk5Vw9bA0EoJIhG-ETDiW0wed4GB8lReA="
              alt="Managed IT Services"
              className="rounded-2xl w-full object-cover opacity-80"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
