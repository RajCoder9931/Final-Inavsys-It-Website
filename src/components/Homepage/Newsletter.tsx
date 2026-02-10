import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LogIn } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2a3b] mb-4">
              Sign Up for Our Free Email Newsletter &amp; Join Our Community
            </h2>

            <p className="text-gray-700 font-medium mb-6">
              Learn How a Carefully Developed IT Strategy Can Help Your
              Organization Operate More Efficiently
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Keeping your IT ahead of the curve is a full-time job (and then
              some). That’s why we make it a point to educate our clients on the
              principles of IT before they make a big decision.
            </p>

            <p className="text-gray-700 text-sm font-semibold mb-4">
              Our email newsletter covers a range of key topics at the
              intersection of IT strategy and business management, explaining:
            </p>

            <ul className="space-y-3 text-gray-600 text-sm mb-8">
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#ff4d4f]" />
                The many overlooked ways that properly managed IT can contribute
                to business growth and development.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#ff4d4f]" />
                What a contemporary approach to cybersecurity should address.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#ff4d4f]" />
                How IT can increase productivity, help automate tasks, and
                reduce overall overhead.
              </li>
            </ul>

            <Button className="bg-[#ff4d4f] hover:bg-[#e64547]">
              Sign Up    <LogIn className="ml-2"  />
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Newsletter Signup"
              className="rounded-xl w-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
