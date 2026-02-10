import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const services = [
  {
    title: 'Server Performance Monitoring',
    desc:
      'Our server performance monitoring services ensure your critical systems operate reliably at all times. We continuously track CPU usage, memory consumption, disk performance, and system health to identify issues before they cause downtime. By proactively managing performance metrics, we prevent slowdowns, crashes, and resource bottlenecks. This approach improves system availability, enhances reliability, and ensures business applications remain accessible. Continuous monitoring allows us to fine-tune performance and maintain a stable server environment that supports your operations.',
    image: 'https://www.kualitatem.com/wp-content/uploads/2023/08/Blog-Image-81123-01-scaled-1.jpg'
  },
  {
    title: 'Network Design & Optimization',
    desc:
      'A strong network foundation is critical for modern businesses. Our network design and optimization services focus on building secure, high-performance networks that support current and future demands. We analyze traffic patterns, bandwidth usage, and security risks to design efficient network architectures. By optimizing routing, switching, and connectivity, we ensure fast, reliable communication across your organization while minimizing latency and downtime.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    title: 'Patch & Update Management',
    desc:
      'Keeping servers updated is essential for security and performance. Our patch and update management services ensure operating systems and server applications remain up to date. We test and deploy updates during planned maintenance windows to minimize disruption. This proactive approach reduces vulnerabilities, improves stability, and ensures compliance with security best practices.',
    image: 'https://www.n-able.com/wp-content/uploads/2025/05/043025_BB_German-Focused_PD_Patch-Management_Final_1200x628-1200x628.jpg'
  },
  {
    title: 'Network Security & Firewall Management',
    desc:
      'We protect your network with advanced firewall management, intrusion prevention systems, and secure access controls. Our team continuously monitors network traffic to detect threats and prevent unauthorized access. This layered security approach safeguards sensitive data and ensures business continuity.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'High Availability & Disaster Readiness',
    desc:
      'Our high-availability solutions ensure your servers and networks remain operational even during failures. We design redundancy, failover systems, and disaster readiness strategies to minimize downtime and ensure business continuity.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  }
];

export function ServerNetworkManagementPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              Server & <span className="text-[#B4FF39]">Network Management</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proactive server and network management services designed to
              maximize uptime, performance, and security across your IT
              infrastructure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  SERVICE SECTIONS  */}
      {services.map((service, index) => {
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
                          <Button size="lg">Learn More</Button>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection direction="right">
                        <div className="relative rounded-2xl overflow-hidden">
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
                        <div className="relative rounded-2xl overflow-hidden">
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
                          <Button size="lg">Learn More</Button>
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
