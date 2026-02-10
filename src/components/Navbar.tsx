import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  /* ================= SERVICES DATA ================= */

  const itServices = [
    { name: 'IT Consulting & Strategy', path: '/services/it-consulting' },
    { name: 'Custom Software Development', path: '/services/CSD' },
    { name: 'Cloud Services & Migration', path: '/services/cloud' },
    { name: 'Cyber Security', path: '/services/cyber-security' },
    { name: 'DevOps & Automation', path: '/services/devops' },
  ];

  const mspServices = [
    { name: 'Managed IT Services', path: '/services/manage-it' },
    { name: '24/7 Remote Monitoring (RMM)', path: '/services/rmm' },
    { name: 'Server & Network Management', path: '/services/server-network' },
    { name: 'Endpoint / Device Management', path: '/services/endpoint-management' },
    { name: 'IT Helpdesk Support', path: '/services/help-desk' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#B4FF39]/20 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-[#B4FF39] flex items-center justify-center">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-bold font-['Orbitron'] text-white">
            Inavsys <span className="text-[#B4FF39]">Consultancy</span>
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="nav-link">About</Link>

          {/* ================= SERVICES DROPDOWN ================= */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 nav-link">
              Services <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 w-[420px] bg-[#0a0a0a] border border-[#B4FF39]/20 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6"
                >
                  {/* ===== IT SERVICES ===== */}
                  <div>
                    <p className="text-sm font-semibold text-[#B4FF39] mb-3">
                      IT Services
                    </p>
                    <div className="space-y-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block text-sm text-gray-300 hover:text-[#B4FF39]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ===== MSP SERVICES ===== */}
                  <div>
                    <p className="text-sm font-semibold text-[#B4FF39] mb-3">
                      MSP Services
                    </p>
                    <div className="space-y-2">
                      {mspServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block text-sm text-gray-300 hover:text-[#B4FF39]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          <Button size="sm">Get Started</Button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-0 bg-[#0a0a0a] pt-24 px-6 md:hidden z-40"
          >
            <div className="space-y-6">
              <Link to="/about" className="mobile-link">About</Link>

              {/* ===== MOBILE SERVICES ===== */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-bold text-white"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'w-6 h-6 transition-transform',
                      servicesOpen && 'rotate-180'
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="mt-6 space-y-6 pl-2">

                    {/* IT SERVICES */}
                    <div>
                      <p className="text-[#B4FF39] font-semibold mb-3">
                        IT Services
                      </p>
                      <div className="space-y-2">
                        {itServices.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block text-gray-400 hover:text-[#B4FF39]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* MSP SERVICES */}
                    <div>
                      <p className="text-[#B4FF39] font-semibold mb-3">
                        MSP Services
                      </p>
                      <div className="space-y-2">
                        {mspServices.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block text-gray-400 hover:text-[#B4FF39]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>

              <Link to="/blogs" className="mobile-link">Blogs</Link>
              <Link to="/contact" className="mobile-link">Contact</Link>

              <Button className="w-full mt-8">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
