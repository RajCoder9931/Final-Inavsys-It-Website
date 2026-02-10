import React from 'react';
import { PricingCard } from '../components/PricingCard';
import { AnimatedSection } from '../components/AnimatedSection';
export function PricingPage() {
  const tiers = [
  {
    tier: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses getting started.',
    features: [
    'Basic Website / App',
    '3 Revisions',
    '2 Weeks Delivery',
    'Email Support',
    'Basic SEO Setup',
    'Mobile Responsive']

  },
  {
    tier: 'Business',
    price: '$2,499',
    description: 'Best for growing companies needing more power.',
    isPopular: true,
    features: [
    'Advanced Features',
    '5 Revisions',
    '1 Week Delivery',
    'Priority Support',
    'Free Maintenance (1 Month)',
    'Advanced SEO & Analytics',
    'Admin Dashboard']

  },
  {
    tier: 'Expert',
    price: '$4,999',
    description: 'Full-scale enterprise solution for large needs.',
    features: [
    'Enterprise Solution',
    'Unlimited Revisions',
    '3 Days Delivery',
    '24/7 Dedicated Support',
    'Free Maintenance (3 Months)',
    'Custom Integrations',
    'Cloud Infrastructure Setup']

  }];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-6">
              Transparent <span className="text-[#B4FF39]">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your project. No hidden fees.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, index) =>
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="h-full">

                <PricingCard {...tier} />
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>);

}