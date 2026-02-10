import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';
interface CountingNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}
export function CountingNumber({
  value,
  suffix = '',
  duration = 2000,
  className
}: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const spring = useSpring(0, {
    duration: duration,
    bounce: 0
  });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);
  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>);

}