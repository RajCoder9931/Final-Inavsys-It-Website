import { ServiceCard } from '../components/ServiceCard';
import {
  Code,
  Cloud,
  Shield,
  Server,
  Database,
  Settings,
  GitBranch,
  Network,
  Briefcase,
  Monitor,
  Headphones,
  Lock,
  HardDrive,
  Layers,
  ClipboardCheck
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function ServicesPage() {
  /* ================= IT SERVICES ================= */
  const itServices = [
    {
      title: 'IT Consulting & Strategy',
      description:
        'Strategic IT planning aligned with business goals to drive efficiency, scalability, and long-term growth.',
      icon: Briefcase
    },
    {
      title: 'Custom Software Development',
      description:
        'Tailor-made software solutions built to solve complex business problems and automate workflows.',
      icon: Code
    },
    {
      title: 'Web & Application Development',
      description:
        'High-performance web and mobile applications using modern frameworks and scalable architectures.',
      icon: Monitor
    },
    {
      title: 'Cloud Services & Migration',
      description:
        'Secure cloud adoption, migration, and optimization across AWS, Azure, and Google Cloud.',
      icon: Cloud
    },
    {
      title: 'Network & Infrastructure Setup',
      description:
        'Design and deployment of robust IT infrastructure ensuring reliability and performance.',
      icon: Network
    },
    {
      title: 'Cybersecurity Services',
      description:
        'Advanced security solutions to protect your systems, networks, and sensitive data.',
      icon: Shield
    },
    {
      title: 'DevOps & Automation',
      description:
        'CI/CD pipelines, infrastructure automation, and DevOps best practices for faster delivery.',
      icon: GitBranch
    },
    {
      title: 'System Integration',
      description:
        'Seamless integration of tools, platforms, and third-party services into your ecosystem.',
      icon: Layers
    },
    {
      title: 'Data & Database Management',
      description:
        'Reliable data architecture, database optimization, backup, and performance tuning.',
      icon: Database
    },
    {
      title: 'IT Project Management',
      description:
        'End-to-end IT project planning, execution, and delivery — on time and on budget.',
      icon: ClipboardCheck
    }
  ];

  /* ================= MSP SERVICES ================= */
  const mspServices = [
    {
      title: 'Managed IT Services (End-to-End)',
      description:
        'Complete IT management covering infrastructure, users, systems, and support.',
      icon: Settings
    },
    {
      title: '24/7 Remote Monitoring & Management',
      description:
        'Proactive system monitoring to detect and resolve issues before they impact operations.',
      icon: Monitor
    },
    {
      title: 'IT Helpdesk Support',
      description:
        'Fast, reliable technical support to keep your teams productive at all times.',
      icon: Headphones
    },
    {
      title: 'Server & Network Management',
      description:
        'Continuous monitoring, maintenance, and optimization of servers and networks.',
      icon: Server
    },
    {
      title: 'Endpoint / Device Management',
      description:
        'Centralized management of laptops, desktops, and mobile devices.',
      icon: HardDrive
    },
    {
      title: 'Managed Cybersecurity',
      description:
        'Threat detection, prevention, and response with enterprise-grade security tools.',
      icon: Lock
    },
    {
      title: 'Backup & Disaster Recovery',
      description:
        'Reliable backup strategies and rapid disaster recovery to protect business continuity.',
      icon: Database
    },
    {
      title: 'Managed Cloud Services',
      description:
        'Ongoing cloud optimization, monitoring, cost management, and support.',
      icon: Cloud
    },
    {
      title: 'IT Asset Management',
      description:
        'Tracking, lifecycle management, and optimization of IT assets.',
      icon: Layers
    },
    {
      title: 'Compliance & Vendor Management',
      description:
        'Ensure regulatory compliance and manage third-party IT vendors effectively.',
      icon: ClipboardCheck
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-6">
              Our <span className="text-[#B4FF39]">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT and Managed Services designed to power your
              business growth, security, and scalability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= IT SERVICES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-4xl font-bold font-['Orbitron']">
              Core <span className="text-[#B4FF39]">IT Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MSP SERVICES ================= */}
      <section className="py-20 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-4xl font-bold font-['Orbitron']">
              Core <span className="text-[#B4FF39]">MSP Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mspServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
