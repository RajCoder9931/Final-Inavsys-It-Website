import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../../logo.png";
import parterlogo from "../../adrianaa_logo_blue.png";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/*  BRAND COLUMN  */}
          <div>

            {/* ADRIANA – TOP BRAND */}
            <a
              href="https://adrianaa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/90">
                <img
                  src={parterlogo}
                  alt="Adriana HR Group"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <div className="leading-tight">
                <div className="text-white text-lg font-bold">
                  Adriana HR Group
                </div>
                <div className="text-sm text-gray-400">
                  Talent • HR • Workforce Solutions
                </div>
              </div>
            </a>

            {/* DIVIDER */}
            <div className="h-px w-full bg-white/10 my-6" />

            {/* INAVSYS – BELOW */}
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={logo}
                  alt="INAVSYS IT CONSULTANTS Logo"
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="leading-tight">
                <div className="text-xl font-bold font-['Orbitron'] text-white">
                  INAVSYS IT{" "}
                  <span className="text-[#B4FF39]">CONSULTANTS</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  ( A UNIT OF NAVSANT GROUP )
                </div>
              </div>
            </Link>

            {/* TAGLINE */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Late but Best — We Deliver Quality That Lasts. Transforming
              businesses with futuristic digital solutions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/inavsys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
               text-gray-400 hover:bg-[#1DA1F2] hover:text-black
               transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/inavsys-it-consultants-0449393aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
               text-gray-400 hover:bg-[#0A66C2] hover:text-black
               transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/inavsys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
               text-gray-400 hover:bg-[#F56040] hover:text-black
               transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/inavsys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
               text-gray-400 hover:bg-[#1877F2] hover:text-black
               transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/*  QUICK LINKS  */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-[#B4FF39] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*  SERVICES  */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "AI Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#B4FF39] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*  CONTACT INFO  */}
          <div>
            <h3 className="text-white font-['Orbitron'] font-bold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#B4FF39] shrink-0" />
                <span className="text-gray-400">
                  Plot 7, Vikas Nagar, Heritage Floors Jalpura,
                  Greater Noida, Sector-1, Uttar Pradesh – 201306
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#B4FF39]" />
                <span className="text-gray-400">+91 809-115-9057</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#B4FF39]" />
                <span className="text-gray-400">
                  info@navsantgroupofindustries.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/*  BOTTOM BAR  */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} INAVSYS IT CONSULTANTS. All rights reserved.
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
    </footer>
  );
}