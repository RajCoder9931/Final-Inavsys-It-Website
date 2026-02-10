import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const links = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  // {
  //   name: 'Portfolio',
  //   path: '/portfolio'
  // } 
  ,{
    name: 'Blogs',
    path: '/pricing'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ?
        'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#B4FF39]/20 py-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]' :
        'bg-transparent py-6'
      )}>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-[#B4FF39] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(180,255,57,0.5)] transition-all duration-300">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-bold font-['Orbitron'] tracking-wider text-white group-hover:text-white transition-colors">
            Inavsys It
            <span className="text-[#B4FF39] group-hover:text-white transition-colors">
            Consultancy
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'text-sm font-medium transition-all hover:text-[#B4FF39] relative group',
              location.pathname === link.path ?
              'text-[#B4FF39]' :
              'text-gray-300'
            )}>

              {link.name}
              {location.pathname === link.path &&
            <motion.span
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#B4FF39]" />

            }
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#B4FF39] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          )}
          <Button variant="primary" size="sm" className="ml-4">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#B4FF39] transition-colors"
          onClick={() => setIsOpen(!isOpen)}>

          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            x: '100%'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: '100%'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
          className="fixed inset-0 bg-[#0a0a0a] z-40 md:hidden pt-24 px-6">

            <div className="flex flex-col space-y-6">
              {links.map((link, index) =>
            <motion.div
              key={link.path}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: index * 0.1
              }}>

                  <Link
                to={link.path}
                className={cn(
                  'text-2xl font-bold font-["Orbitron"] block',
                  location.pathname === link.path ?
                  'text-[#B4FF39]' :
                  'text-white'
                )}
                onClick={() => setIsOpen(false)}>

                    {link.name}
                  </Link>
                </motion.div>
            )}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.6
              }}>

                <Button variant="primary" className="w-full mt-8">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}