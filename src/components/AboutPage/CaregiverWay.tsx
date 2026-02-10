import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export function CaregiverWay() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image frame */}
            <div className="relative rounded-[48px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Caregiver IT Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Small heading */}
            <p className="text-[#6b2b46] font-semibold mb-4">
              The Caregiver Way:
            </p>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c34] leading-tight mb-6">
              Giving You the Peace of Mind <br className="hidden sm:block" />
              You Deserve
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              You know you’ve got an exceptional IT team when you realize you’re
              never stressed about technology. Since day one, The Caregiver has
              been motivated to see clients do what they do best without
              interruptions and technical difficulties.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
              We approach every IT plan like a complex puzzle. Step one is
              understanding the big picture — then creating a comprehensive,
              top-to-bottom roadmap to turn business technology into a powerful
              engine for better outcomes. Our mindset is simple: if we’re not
              helping our clients improve productivity and efficiency, we’re
              not doing our job.
            </p>

            {/* CTA */}
            <Button
              className="bg-[#ff5a5f] hover:bg-[#e14b50] rounded-full px-8 py-6 text-white font-semibold"
            >
              Get Started Today
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
