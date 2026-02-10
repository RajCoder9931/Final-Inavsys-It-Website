import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const endpointServices = [
  {
    title: 'Centralized Endpoint Monitoring',
    desc:
      'Our centralized endpoint monitoring service provides complete visibility into all user devices, including laptops, desktops, and mobile devices. We continuously monitor system health, performance metrics, and security status to detect issues early. By tracking CPU usage, memory consumption, disk health, and system uptime, we prevent small problems from escalating into major disruptions. This proactive monitoring ensures devices remain reliable, secure, and optimized, enabling employees to work efficiently without unexpected downtime or technical interruptions.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'Endpoint Security & Antivirus Management',
    desc:
      'Endpoints are one of the most common attack vectors for cyber threats. Our endpoint security and antivirus management services protect devices from malware, ransomware, and unauthorized access. We deploy and manage enterprise-grade antivirus, endpoint detection, and response tools while ensuring real-time threat monitoring. Automated updates and policy enforcement reduce vulnerabilities and maintain compliance with security standards. This layered security approach safeguards sensitive business data and protects your workforce from evolving cyber risks.',
    image:
      'https://www.acumera.com/wp-content/uploads/2024/05/What-Is-Endpoint-Security-and-Why-Is-It-Important-blog-header.jpg'
  },
  {
    title: 'Patch & Update Management',
    desc:
      'Keeping endpoints up to date is critical for security and performance. Our patch and update management service ensures operating systems, applications, and security tools are always current. We test updates before deployment and schedule rollouts during optimal windows to minimize disruption. This proactive approach reduces security vulnerabilities, improves system stability, and ensures consistent configurations across all devices, freeing internal teams from routine maintenance tasks.',
    image:
      'https://www.n-able.com/wp-content/uploads/2025/05/043025_BB_German-Focused_PD_Patch-Management_Final_1200x628-1200x628.jpg'
  },
  {
    title: 'Device Configuration & Policy Enforcement',
    desc:
      'We standardize device configurations and enforce security policies across all endpoints to maintain consistency and compliance. From user access controls and encryption settings to application restrictions, our policy-driven approach ensures devices align with organizational standards. This reduces misconfigurations, enhances security posture, and simplifies device management. Centralized control allows IT teams to manage devices efficiently while supporting remote and hybrid work environments.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Remote Support & Device Lifecycle Management',
    desc:
      'Our remote support and device lifecycle management services cover the entire lifespan of endpoint devices. From onboarding and configuration to troubleshooting, upgrades, and decommissioning, we ensure devices remain productive and secure. Secure remote access allows technicians to resolve issues quickly without on-site visits, reducing downtime and costs. This end-to-end approach ensures devices are managed efficiently throughout their lifecycle, supporting business continuity and growth.',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786'
  }
];

export function EndpointDeviceManagementPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              Endpoint / <span className="text-[#B4FF39]">Device Management</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Secure, monitor, and manage all employee devices with centralized
              endpoint management solutions designed for modern workplaces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  ENDPOINT SERVICES  */}
      {endpointServices.map((service, index) => {
        const isEven = index % 2 !== 0;

        return (
          <section
            key={index}
            className={`py-32 ${
              isEven ? 'bg-white text-black' : 'bg-[#0a0a0a] text-white'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <AnimatedSection direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                  {/* Odd → Content Left, Image Right */}
                  {!isEven ? (
                    <>
                      <AnimatedSection direction="left">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {service.title}
                          </h2>
                          <p
                            className={`leading-relaxed mb-8 ${
                              isEven ? 'text-gray-700' : 'text-gray-400'
                            }`}
                          >
                            {service.desc}
                          </p>
                          <Button size="lg">Manage Devices</Button>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="right">
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                      </AnimatedSection>
                    </>
                  ) : (
                    <>
                      {/* Even → Image Left, Content Right */}
                      <AnimatedSection direction="left">
                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="right">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {service.title}
                          </h2>
                          <p
                            className={`leading-relaxed mb-8 ${
                              isEven ? 'text-gray-700' : 'text-gray-400'
                            }`}
                          >
                            {service.desc}
                          </p>
                          <Button size="lg">Manage Devices</Button>
                        </div>
                      </AnimatedSection>
                    </>
                  )}

                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

    </div>
  );
}
