import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import {
  Code,
  Smartphone,
  Palette,
  PenTool,
  Video,
  FileText,
  Share2 } from
'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
export function ServicesPage() {
  const services = [
  {
    title: 'Web Development',
    description:
    'Custom websites built with modern frameworks like React, Next.js, and Node.js. We create fast, responsive, and SEO-friendly web solutions.',
    icon: Code
  },
  {
    title: 'App Development',
    description:
    'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter. Seamless performance and native feel.',
    icon: Smartphone
  },
  {
    title: 'UI & UX Design',
    description:
    'User-centered design that converts. We create intuitive interfaces and engaging user experiences that delight your customers.',
    icon: Palette
  },
  {
    title: 'Logo Designing',
    description:
    'Memorable brand identities that stand out. Our creative team crafts logos that perfectly represent your brand values.',
    icon: PenTool
  },
  {
    title: 'Video Editing',
    description:
    'Professional video production and editing services. From corporate videos to social media reels, we make your content shine.',
    icon: Video
  },
  {
    title: 'Content Writing',
    description:
    'SEO-optimized content that engages and converts. Blogs, copy, technical writing, and more tailored to your audience.',
    icon: FileText
  },
  {
    title: 'Social Media Marketing',
    description:
    'Data-driven social strategies to grow your brand. We handle content creation, scheduling, and community management.',
    icon: Share2
  }];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-6">
              Our <span className="text-[#B4FF39]">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business in the
              modern age.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <AnimatedSection key={index} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>);

}