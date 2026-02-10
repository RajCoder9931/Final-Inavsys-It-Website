import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
export function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <AnimatedSection direction="left">
              <h1 className="text-5xl font-bold font-['Orbitron'] mb-6">
                Let's Build Something{' '}
                <span className="text-[#B4FF39]">Amazing</span> Together
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39] transition-colors">
                      contact@irtechinnovation.com
                    </p>
                  </div>
                </Card>
                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39] transition-colors">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </Card>
                <Card className="flex items-center p-6 hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#B4FF39]/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#B4FF39]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-xl font-bold text-white group-hover:text-[#B4FF39] transition-colors">
                      Silicon Valley, CA
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <Card className="p-8 md:p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors"
                        placeholder="John Doe" />

                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors"
                        placeholder="john@example.com" />

                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000" />

                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Project Type
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors appearance-none">
                        <option className="bg-[#0a0a0a]">
                          Web Development
                        </option>
                        <option className="bg-[#0a0a0a]">
                          App Development
                        </option>
                        <option className="bg-[#0a0a0a]">UI/UX Design</option>
                        <option className="bg-[#0a0a0a]">Marketing</option>
                        <option className="bg-[#0a0a0a]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Budget
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors appearance-none">
                      <option className="bg-[#0a0a0a]">Less than $1k</option>
                      <option className="bg-[#0a0a0a]">$1k - $5k</option>
                      <option className="bg-[#0a0a0a]">$5k - $10k</option>
                      <option className="bg-[#0a0a0a]">$10k+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#B4FF39] focus:outline-none transition-colors"
                      placeholder="Tell us about your project..." />

                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 rounded border-gray-600 text-[#B4FF39] focus:ring-[#B4FF39]" />

                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I agree to the{' '}
                      <a href="#" className="text-[#B4FF39] hover:underline">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>);

}