import { AnimatedSection } from '../AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

const stepsLeft = [
  {
    number: '01',
    title: 'Contact The Caregiver',
    desc: 'to set your IT strategy up for sustainable success.'
  },
  {
    number: '02',
    title: 'Learn',
    desc: 'about our proven Security-First IT approach.'
  }
];

const stepsRight = [
  {
    number: '03',
    title: 'Get a roadmap',
    desc: 'Get an IT roadmap designed specifically for you.'
  },
  {
    number: '04',
    title: 'Grow',
    desc: 'Fearlessly grow your business.'
  }
];

export function PeopleFirst() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading + CTA */}
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-24">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] text-white leading-tight">
              Let’s Start Putting Your <br />
              <span className="text-[#B4FF39]">People First</span>
            </h2>

            <Button
              size="lg"
              className="rounded-full px-8 py-6 w-fit"
            >
              Get Started Today
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Left Steps */}
          <div className="space-y-16">
            {stepsLeft.map((step, i) => (
              <AnimatedSection key={i} direction="up">
                <div className="flex gap-6 items-start">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-xl bg-[#B4FF39]/10 border border-[#B4FF39]/30 flex items-center justify-center font-bold text-lg text-[#B4FF39] shrink-0">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Steps */}
          <div className="space-y-16">
            {stepsRight.map((step, i) => (
              <AnimatedSection key={i} direction="up" delay={0.1}>
                <div className="flex gap-6 items-start">

                  {/* Number */}
                  <div className="w-14 h-14 rounded-xl bg-[#B4FF39]/10 border border-[#B4FF39]/30 flex items-center justify-center font-bold text-lg text-[#B4FF39] shrink-0">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
