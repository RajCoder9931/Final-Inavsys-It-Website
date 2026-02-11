import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Palette, Zap, Users, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ServiceCard } from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { CountingNumber } from '../components/CountingNumber';
import { WhyDifferent } from '../components/Homepage/whyDifferennt';
import { ManagedIT } from '../components/Homepage/ManagedIT';
import { ITProjects } from '../components/Homepage/ItProject';
import { Newsletter } from '../components/Homepage/Newsletter';
export function HomePage() {
  const stats = [
  {
    label: 'Projects Completed',
    value: 150,
    suffix: '+'
  },
  {
    label: 'Active Clients',
    value: 50,
    suffix: '+'
  },
  {
    label: 'Satisfaction Score',
    value: 98,
    suffix: '%'
  }];

  const services = [
  {
    title: 'Web Development',
    description:
    'Custom high-performance websites built with modern frameworks like React and Next.js.',
    icon: Code
  },
  {
    title: 'App Development',
    description:
    'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone
  },
  {
    title: 'UI/UX Design',
    description:
    'User-centered design that converts visitors into loyal customers.',
    icon: Palette
  }];

  return (
    <div className="min-h-screen">
      <br /><br />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#B4FF39] rounded-full blur-[90px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[90px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B4FF39] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Future of Digital Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] leading-tight mb-6">
              Master Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4FF39] to-[#9EFF00]">
                Innovation
              </span>{' '}
              <br />
              With Inavsys It Consultancy
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              We provide cutting-edge tech services with precision and
              expertise. Transform your digital presence with solutions built to
              last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started{' '}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Team
              </Button>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 overflow-hidden">

                    <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Client"
                    className="w-full h-full object-cover" />

                  </div>
                )}
              </div>
              <div>
                <p className="text-white font-bold">500+ Happy Clients</p>
                <div className="flex text-[#B4FF39]">★★★★★</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative hidden lg:block">

            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Abstract 3D Elements Representation */}
              <div className="absolute w-64 h-64 bg-gradient-to-br from-[#B4FF39] to-transparent opacity-20 rounded-full blur-3xl animate-pulse" />
              <Card className="absolute top-10 right-10 w-48 p-4 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B4FF39]/20 flex items-center justify-center">
                    <Code className="text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Code Quality</p>
                    <p className="text-white font-bold">100% Clean</p>
                  </div>
                </div>
              </Card>
              <Card className="absolute bottom-20 left-0 w-56 p-4 animate-bounce duration-[4000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Users className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Active Users</p>
                    <p className="text-white font-bold">24k+ Growing</p>
                  </div>
                </div>
              </Card>
              <div className="w-[400px] h-[500px] glass-card rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 z-10" />
                <img
                  src="https://thepatternscompany.com/img/webdevelopppp.jpg"
                  alt="Futuristic Tech"
                  className="w-full h-full object-cover opacity-60" />

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-[#B4FF39] font-mono text-sm mb-2">
                    SYSTEM STATUS
                  </p>
                  <h3 className="text-3xl font-['Orbitron'] font-bold text-white">
                    ONLINE
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) =>
            <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center py-10 hover:border-[#B4FF39]/30 transition-colors">
                  <h3 className="text-5xl font-bold font-['Orbitron'] text-[#B4FF39] mb-2">
                    <CountingNumber value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </Card>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-8">
              Why Choose <br />
              <span className="text-[#B4FF39]">Inavsys It Consultancy?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We don't just build software; we engineer digital experiences that
              drive growth. Our commitment to quality and innovation sets us
              apart.
            </p>

            <div className="space-y-6">
              {[
              {
                title: 'Lightning-fast Delivery',
                desc: 'We respect your time with optimized workflows.'
              },
              {
                title: 'Premium Quality',
                desc: 'Zero compromise on code quality and performance.'
              },
              {
                title: 'Expert Team',
                desc: 'Led by industry veterans with proven track records.'
              },
              {
                title: '24/7 Support',
                desc: 'Always here when you need us, day or night.'
              }].
              map((item, i) =>
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                direction="up"
                viewportAmount={0.5}>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#B4FF39]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B4FF39] to-blue-500 blur-[100px] opacity-20" />
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <Card className="p-8 flex flex-col items-center text-center h-64 justify-center translate-y-12 hover:scale-105 transition-transform duration-300">
                <Zap className="w-12 h-12 text-[#B4FF39] mb-4" />
                <h3 className="text-xl font-bold text-white">Speed</h3>
              </Card>
              <Card className="p-8 flex flex-col items-center text-center h-64 justify-center hover:scale-105 transition-transform duration-300">
                <Award className="w-12 h-12 text-[#B4FF39] mb-4" />
                <h3 className="text-xl font-bold text-white">Quality</h3>
              </Card>
              <Card className="p-8 flex flex-col items-center text-center h-64 justify-center translate-y-12 hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-[#B4FF39] mb-4" />
                <h3 className="text-xl font-bold text-white">Team</h3>
              </Card>
              <Card className="p-8 flex flex-col items-center text-center h-64 justify-center hover:scale-105 transition-transform duration-300">
                <Code className="w-12 h-12 text-[#B4FF39] mb-4" />
                <h3 className="text-xl font-bold text-white">Tech</h3>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

<WhyDifferent/>

 {/* Services Preview */}
 <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6">
              Our Core <span className="text-[#B4FF39]">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver comprehensive digital solutions tailored to your
              business needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <AnimatedSection key={index} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            )}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
     
<ITProjects/>

<ManagedIT/>


<Newsletter/>

    </div>);

}