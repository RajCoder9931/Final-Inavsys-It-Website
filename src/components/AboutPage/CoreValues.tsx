import { Card } from '../ui/Card';
import { AnimatedSection } from '../AnimatedSection';
import { Clock, Zap, Shield } from 'lucide-react';

const coreValues = [
  {
    icon: Clock,
    title: 'Reliability',
    desc: 'We deliver on our promises, every single time. Consistency and trust are at the core of everything we do.'
  },
  {
    icon: Zap,
    title: 'Creativity',
    desc: 'We craft unique, forward-thinking solutions tailored to solve real-world business challenges.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Transparent processes, honest communication, and ethical practices guide every decision we make.'
  }
];

export function CoreValues() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] text-white">
            Our <span className="text-[#B4FF39]">Core Values</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The principles that guide our work, shape our culture, and define
            how we deliver value to our clients.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coreValues.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="p-10 text-center h-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#B4FF39]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-['Orbitron'] mb-4 text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
