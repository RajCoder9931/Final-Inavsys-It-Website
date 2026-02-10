import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass-card rounded-2xl p-6 transition-all duration-300',
          hoverEffect &&
          'hover:border-[#B4FF39]/50 hover:shadow-[0_0_30px_rgba(180,255,57,0.1)] hover:-translate-y-1',
          className
        )}
        {...props}>

        {children}
      </div>);

  }
);
Card.displayName = 'Card';