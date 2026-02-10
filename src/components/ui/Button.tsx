import React, { useState, useRef, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    onClick,
    ...props
  },
  ref) =>
  {
    const [ripples, setRipples] = useState<
      {
        x: number;
        y: number;
        id: number;
      }[]>(
      []);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const variants = {
      primary:
      'bg-[#B4FF39] text-black hover:bg-[#9EFF00] hover:shadow-[0_0_25px_rgba(180,255,57,0.5)] border-transparent',
      secondary:
      'bg-white/10 text-white hover:bg-white/20 border-transparent backdrop-blur-sm',
      outline:
      'bg-transparent border border-[#B4FF39] text-[#B4FF39] hover:bg-[#B4FF39]/10 hover:shadow-[0_0_15px_rgba(180,255,57,0.2)]',
      ghost:
      'bg-transparent text-gray-400 hover:text-[#B4FF39] hover:bg-white/5 border-transparent'
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [
        ...prev,
        {
          x,
          y,
          id
        }]
        );
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);
      }
      if (onClick) onClick(e);
    };
    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);else
          if (ref) ref.current = node;
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        className={cn(
          'relative overflow-hidden inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        onClick={handleClick}
        {...props}>

        {ripples.map((ripple) =>
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px'
          }} />

        )}
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span className="relative z-10 flex items-center">{children}</span>
      </motion.button>);

  }
);
Button.displayName = 'Button';