import React from 'react';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Card } from './ui/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  link?: string;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  link = '/services'
}: ServiceCardProps) {
  return (
    <Card
      hoverEffect
      className="group flex flex-col h-full relative overflow-hidden hover:-translate-y-2 transition-all duration-300">

      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#B4FF39]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-0 right-0 w-32 h-32 bg-[#B4FF39]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[#B4FF39]/15 group-hover:scale-150" />

      <motion.div
        className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#B4FF39]/50 group-hover:shadow-[0_0_20px_rgba(180,255,57,0.3)] transition-all duration-300 relative z-10"
        whileHover={{
          y: -5
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 10
        }}>

        <Icon className="w-7 h-7 text-[#B4FF39]" />
      </motion.div>

      <h3 className="text-xl font-bold font-['Orbitron'] text-white mb-3 group-hover:text-[#B4FF39] transition-colors relative z-10">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 flex-grow leading-relaxed relative z-10">
        {description}
      </p>

      <Link
        to={link}
        className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#B4FF39] transition-colors mt-auto relative z-10">

        Explore More{' '}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>);

}