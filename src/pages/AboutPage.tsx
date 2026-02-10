import { Card } from '../components/ui/Card';
import { Target, Lightbulb, Clock, Shield, Zap } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MissionVisionBlock } from '../components/AboutPage/MissionVisionBlock';
import { CaregiverWay } from '../components/AboutPage/CaregiverWay';
import { CoreValues } from '../components/AboutPage/CoreValues';
import { PeopleFirst } from '../components/AboutPage/PeopleFirst';
export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-8">
              About <span className="text-[#B4FF39]">IR Tech</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a team of innovators, creators, and problem solvers
              dedicated to pushing the boundaries of what's possible in the
              digital realm.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}


      <MissionVisionBlock
        title="Mission"
        highlightColor="#B4FF39"
        icon="mission"
        image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg"
        content={{
          primary:
            'Our mission is to deliver innovative, scalable, and secure technology solutions that drive real, measurable business outcomes.',
          secondary:
            'By combining strategic thinking with cutting-edge engineering, we help businesses simplify complexity, adapt faster, and grow confidently in a digital-first world.'
        }}
      />
      <MissionVisionBlock
        title="Vision"
        highlightColor="#3B82F6"
        icon="vision"
        reverse
        image="https://media.istockphoto.com/id/2190572397/photo/modern-collaborative-office-space-with-diverse-professionals-working-in-a-co-working.jpg?s=612x612&w=0&k=20&c=4f-l9COQYl2784Hy7S1ExSwOhmmFvQqaajvFWzvt9uM="
        content={{
          primary:
            'Our vision is to become a globally trusted technology partner, known for innovation, reliability, and forward-thinking solutions.',
          secondary:
            'We envision a future where technology empowers people and organizations to make smarter decisions, strengthen security, and achieve sustainable growth.'
        }}
      />


      {/* Slogan */}
      <section className="py-20 bg-[#B4FF39]/5 border-y border-[#B4FF39]/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] leading-tight">
              "Late but Best — <br />
              <span className="text-[#B4FF39]">
                Because Quality Takes Time.
              </span>
              "
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Grid */}
    
 <CoreValues/>
      <CaregiverWay/>

      <PeopleFirst/>

      


    </div>);

}