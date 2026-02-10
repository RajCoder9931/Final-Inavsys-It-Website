import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded bg-[#B4FF39] flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold font-['Orbitron'] text-white">
                IR<span className="text-[#B4FF39]">TECH</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Late but Best — We Deliver Quality That Lasts. Transforming
              businesses with futuristic digital solutions.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#B4FF39] hover:text-black transition-all duration-300">

                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
              'Home',
              'About Us',
              'Services',
              'Portfolio',
              'Pricing',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-[#B4FF39] transition-colors">

                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
              'Web Development',
              'App Development',
              'UI/UX Design',
              'Digital Marketing',
              'AI Solutions'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#B4FF39] transition-colors">

                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">
                  Silicon Valley, CA, United States
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">
                  contact@irtechinnovation.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IR Tech Innovation. All rights
            reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-[#B4FF39] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#B4FF39] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}