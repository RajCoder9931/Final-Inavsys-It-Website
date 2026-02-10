import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';
interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  description: string;
}
export function PricingCard({
  tier,
  price,
  features,
  isPopular,
  description
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative flex flex-col h-full',
        isPopular ?
        'border-[#B4FF39] shadow-[0_0_30px_rgba(180,255,57,0.15)]' :
        ''
      )}>

      {isPopular &&
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B4FF39] text-black px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(180,255,57,0.4)]">
          MOST POPULAR
        </div>
      }

      <div className="mb-8">
        <h3 className="text-xl font-bold font-['Orbitron'] text-white mb-2">
          {tier}
        </h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-500 ml-2">/project</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) =>
        <li key={index} className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-[#B4FF39]/20 flex items-center justify-center mr-3 mt-0.5 shrink-0">
              <Check className="w-3 h-3 text-[#B4FF39]" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        )}
      </ul>

      <Button variant={isPopular ? 'primary' : 'outline'} className="w-full">
        Get Started
      </Button>
    </Card>);

}