import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";
import logo from "../../logo.png";
import parterlogo from "../../adrianaa_logo_blue.png";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { trackEvent } from "../lib/analytics";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const itServices = [
    { name: "IT Consulting & Strategy", path: "/services/it-consulting" },
    { name: "Custom Software Development", path: "/services/CSD" },
    { name: "Cloud Services & Migration", path: "/services/cloud" },
    { name: "Cyber Security", path: "/services/cyber-security" },
    { name: "DevOps & Automation", path: "/services/devops" },
  ];

  const mspServices = [
    { name: "Managed IT Services", path: "/services/manage-it" },
    { name: "24/7 Remote Monitoring (RMM)", path: "/services/rmm" },
    { name: "Server & Network Management", path: "/services/server-network" },
    { name: "Endpoint / Device Management", path: "/services/endpoint-management" },
    { name: "IT Helpdesk Support", path: "/services/help-desk" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#B4FF39]/20 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-4 flex items-center justify-between">

        {/*  BRANDING  */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl  border border-white/10">

          {/* INAVSYS – INTERNAL */}
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              trackEvent({
                category: "Navbar",
                action: "Click Logo",
                label: "Inavsys IT Consultants",
              });
            }}
            className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-pointer"
          >
            <img src={logo} alt="Inavsys" className="w-12 h-12 md:w-12 md:h-12 object-contain" />
            <div className="leading-tight">
              <div className="text-white text-sm md:text-lg font-['Orbitron'] font-bold">
                INAVSYS IT <span className="text-[#B4FF39]">CONSULTANTS</span>
              </div>
              <div className="hidden md:block text-sm text-white">
                ( A UNIT OF NAVSANT GROUP )
              </div>
            </div>
          </Link>

          {/* DESKTOP ONLY PARTNER */}
          <div className="hidden md:flex items-center gap-4">
            <div className="h-10 w-px bg-white/90" />

            <a
              href="https://adrianaa.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Adrianaa HR Group"
              onClick={() =>
                trackEvent({
                  category: "Navbar",
                  action: "Click Partner Logo",
                  label: "Adriana HR Group",
                })
              }
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-pointer"
            >
              <div className="p-2 rounded-lg flex-shrink-0">
                <img
                  src={parterlogo}
                  alt="Adrianaa HR Group"
                  className="w-20 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-gray-200 whitespace-nowrap">
                Adrianaa HR Group
              </span>
            </a>
          </div>
        </div>

        {/*  DESKTOP MENU  */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="nav-link">About</Link>

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
                  className="absolute top-10 left-0 w-[420px] bg-[#0a0a0a] border border-[#B4FF39]/20 rounded-xl p-6 grid grid-cols-2 gap-6"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#B4FF39] mb-3">IT Services</p>
                    {itServices.map(s => (
                      <Link key={s.path} to={s.path} className="block text-sm text-gray-300 hover:text-[#B4FF39]">
                        {s.name}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#B4FF39] mb-3">MSP Services</p>
                    {mspServices.map(s => (
                      <Link key={s.path} to={s.path} className="block text-sm text-gray-300 hover:text-[#B4FF39]">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Button size="sm">Get Started</Button>
        </div>

        {/*  MOBILE BUTTON  */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/*  MOBILE DRAWER  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden"
          >
            <div className="h-20 px-6 flex items-center justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="px-6 pt-6 pb-32 space-y-8 overflow-y-auto">

              {/* MOBILE BRAND CARD */}
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <Link
                  to="/"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                    trackEvent({
                      category: "Mobile Drawer",
                      action: "Click Logo",
                      label: "Inavsys IT Consultants",
                    });
                  }}
                  className="flex items-center gap-3"
                >
                  <img src={logo} className="w-9 h-9 object-contain" />
                  <div>
                    <div className="text-white font-bold text-sm">
                      INAVSYS IT <span className="text-[#B4FF39]">CONSULTANTS</span>
                    </div>
                    <div className="text-xs text-gray-400">A Unit of Navsant Group</div>
                  </div>
                </Link>

                <a
                  href="https://adrianaa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      category: "Mobile Drawer",
                      action: "Click Partner",
                      label: "Adriana HR Group",
                    })
                  }
                  className="mt-4 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/90">
                    <img
                      src={parterlogo}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-semibold">
                    Adriana HR Group
                  </span>
                </a>
              </div>

              <Link to="/about" className="block text-2xl font-semibold text-white">About</Link>
              {/* SERVICES */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-semibold text-white"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'w-6 h-6 transition-transform',
                      servicesOpen && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 space-y-6 overflow-hidden pl-2"
                    >
                      {/* IT SERVICES */}
                      <div>
                        <p className="text-[#B4FF39] font-semibold mb-2 text-sm">
                          IT Services
                        </p>
                        {itServices.map(service => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block text-gray-400 hover:text-[#B4FF39]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>

                      {/* MSP SERVICES */}
                      <div>
                        <p className="text-[#B4FF39] font-semibold mb-2 text-sm">
                          MSP Services
                        </p>
                        {mspServices.map(service => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block text-gray-400 hover:text-[#B4FF39]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/blogs" className="block text-2xl font-semibold text-white">Blogs</Link>
              <Link to="/contact" className="block text-2xl font-semibold text-white">Contact</Link>
            </div>

            <div className="fixed bottom-0 inset-x-0 p-6 border-t border-[#B4FF39]/20 bg-[#0a0a0a]">
              <Button className="w-full h-12 text-base">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}