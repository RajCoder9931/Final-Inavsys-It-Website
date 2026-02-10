import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  viewportAmount?: number;
}
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  viewportAmount = 0.2
}: AnimatedSectionProps) {
  const directions = {
    up: {
      y: 30,
      x: 0
    },
    down: {
      y: -30,
      x: 0
    },
    left: {
      x: 30,
      y: 0
    },
    right: {
      x: -30,
      y: 0
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: 0.98
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: viewportAmount
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // Cubic bezier for smooth feel
      }}
      className={cn(className)}>

      {children}
    </motion.div>);

}