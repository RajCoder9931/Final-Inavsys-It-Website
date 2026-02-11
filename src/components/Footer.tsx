import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin
} from
  'lucide-react';
import logo from "../../logo.png";
export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              {/* Logo */}
              <div className="w-19 h-19 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Inavsys Consultancy Logo"
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Text Section */}
              <span className="text-2xl font-bold font-['Orbitron'] text-white">
                Inavsys <span className="text-[#B4FF39]">Consultancy</span>
                <span className="block text-sm font-normal text-white mt-1">(A NAVSANT GROUP COMPANY)</span>
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
                Plot 7, Vikas nagar, Heritage floors Jalpura, Greater Noida,
                Noida extension Sector-1, Uttar pradesh - 201306
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">+91 809-115-9057</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">
                  info@navsantgroupofindustries.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Inavsys It Consultancy. All rights
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