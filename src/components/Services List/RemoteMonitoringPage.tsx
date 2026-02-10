import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const rmmServices = [
  {
    title: '24/7 Infrastructure Monitoring',
    desc:
      'Our 24/7 Infrastructure Monitoring service continuously tracks the health, availability, and performance of your entire IT environment. Servers, networks, cloud resources, and critical applications are monitored in real time using enterprise-grade RMM tools. This allows us to detect abnormal behavior, system overloads, and potential failures before they impact business operations. By identifying issues early, we reduce downtime, prevent data loss, and maintain consistent system performance. Continuous monitoring ensures your infrastructure remains stable, reliable, and aligned with business demands at all times.',
    image: 'https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg'
  },
  {
    title: 'Proactive Alerting & Issue Resolution',
    desc:
      'Instead of reacting to failures, our proactive alerting system identifies issues as soon as they occur. Intelligent alerts notify our support team about performance degradation, hardware failures, disk space shortages, or unusual activity. Our engineers analyze alerts and resolve problems remotely before users are affected. This proactive approach minimizes business disruptions, improves system reliability, and ensures issues are addressed quickly without waiting for user complaints.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Endpoint & Device Monitoring',
    desc:
      'Endpoints such as laptops, desktops, and mobile devices are essential to daily operations. Our RMM solution monitors device health, performance, patch status, antivirus protection, and system errors across all endpoints. By tracking devices continuously, we prevent crashes, reduce security risks, and ensure employees remain productive. This service supports both on-site and remote work environments, providing visibility and control over every connected device.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'Automated Patch & Update Management',
    desc:
      'Keeping systems up to date is critical for security and stability. Our automated patch and update management service ensures operating systems, applications, and security tools are updated regularly. Updates are tested and deployed during scheduled maintenance windows to minimize disruption. This automation reduces vulnerabilities, improves performance, and ensures compliance with industry security standards while eliminating manual maintenance tasks.',
    image: 'https://www.techfunnel.com/wp-content/uploads/2023/12/patch-management-challenges.png'
  },
  {
    title: 'Reporting, Insights & Optimization',
    desc:
      'We provide detailed reports and actionable insights into your IT environment through our RMM platform. Performance trends, incident history, and system health metrics help identify optimization opportunities. These insights support better decision-making, capacity planning, and cost optimization. Continuous analysis allows us to fine-tune systems, improve reliability, and ensure your IT infrastructure evolves with your business needs.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786'
  }
];

export function RemoteMonitoringPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              24/7 Remote <span className="text-[#B4FF39]">Monitoring (RMM)</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proactive monitoring solutions that detect, prevent, and resolve
              IT issues before they impact your business operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  RMM SERVICES  */}
      {rmmServices.map((service, index) => {
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
                          <Button size="lg">Request RMM Demo</Button>
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
                          <Button size="lg">Request RMM Demo</Button>
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
