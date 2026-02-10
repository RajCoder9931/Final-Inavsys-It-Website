import { motion } from 'framer-motion';
import {
  HeartHandshake,
  ShieldCheck , Wallet, MessageSquareText, Clock, Settings } from 'lucide-react';

const items = [
  {
    title: 'Clients Love Us',
    desc:
      'Customer support is our top priority. We do what we say while maintaining fair, transparent pricing.',
    icon: HeartHandshake
  },
  {
    title: 'The IT Risk Assessment',
    desc:
      'A constantly evolving checklist to ensure client systems are as stable and consistent as possible.',
    icon: ShieldCheck
  },
  {
    title: 'Predictable Fees',
    desc:
      'Everything is detailed clearly so you always know what you are paying for.',
    icon: Wallet
  },
  {
    title: 'Communication',
    desc:
      'Quarterly reviews and regular meetings ensure expectations are always met.',
    icon: MessageSquareText
  },
  {
    title: 'Availability',
    desc:
      'Remote and on-site support options ensure your environment stays operational.',
    icon: Clock
  },
  {
    title: 'We Do It All',
    desc:
      'Deployments, upgrades, maintenance, and critical installs — all included.',
    icon: Settings
  }
];

export function WhyDifferent() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f8fc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2a3b] mb-3">
            What Makes Us Different?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We Take a Personal Approach to IT Support
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg border border-[#ff4d4f] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#ff4d4f]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-[#1e2a3b] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
