import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const services = [
    {
      title: 'Managed IT Services (End-to-End)',
      desc:
        'Our end-to-end Managed IT Services are designed to take complete ownership of your IT environment so you don’t have to worry about daily technical challenges. We manage everything from user support, systems, servers, and infrastructure to security, updates, and performance optimization. Our proactive approach ensures issues are identified and resolved before they impact your operations. With predictable monthly pricing, dedicated experts, and enterprise-grade tools, we function as your extended IT department. This allows your internal teams to stay focused on business growth while we ensure stability, security, and scalability across your entire technology ecosystem.',
      image:
        'https://stl.tech/wp-content/uploads/2022/10/managed-services23.jpg'
    },
    {
      title: '24/7 Monitoring & Proactive Support',
      desc:
        'Our 24/7 monitoring and proactive support services continuously track the health, performance, and security of your IT systems. Using advanced monitoring tools, we detect unusual activity, performance bottlenecks, and potential failures in real time. This proactive approach helps prevent downtime, data loss, and productivity disruptions before they occur. Our support team responds instantly to alerts, ensuring quick remediation and minimal impact. Whether it’s servers, networks, cloud environments, or endpoints, we keep your systems running smoothly around the clock, giving you peace of mind and uninterrupted business operations.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      title: 'IT Helpdesk & User Support',
      desc:
        'Our IT Helpdesk and User Support services provide fast, reliable assistance for your employees whenever they face technical issues. From password resets and software troubleshooting to complex system problems, our skilled support team is always available to help. We offer multiple support channels, including phone, email, and remote assistance, ensuring quick resolution times. By reducing frustration and downtime, our helpdesk services boost employee productivity and satisfaction. We act as a friendly, knowledgeable point of contact, resolving issues efficiently while maintaining a consistent, high-quality support experience.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
    },
    {
      title: 'Server, Network & Infrastructure Management',
      desc:
        'Our Server, Network, and Infrastructure Management services ensure your core IT foundation is secure, reliable, and optimized for performance. We manage on-premise, cloud, and hybrid infrastructures, handling configuration, updates, patching, and performance tuning. Our experts continuously monitor network traffic, server health, and system availability to minimize downtime and maximize efficiency. By proactively managing capacity and scalability, we help your infrastructure grow with your business. This ensures consistent connectivity, fast system response times, and a stable environment that supports mission-critical applications.',
      image:
        'https://johnsonpremier.com/images/illustrations/network-infrastructure-management.jpg'
    },
    {
      title: 'Backup, Disaster Recovery & Security',
      desc:
        'Our Backup, Disaster Recovery, and Security services are designed to protect your business from data loss, cyber threats, and unexpected disruptions. We implement secure, automated backup solutions and test recovery plans regularly to ensure rapid restoration when needed. In addition, we apply layered security controls, including endpoint protection, access management, and threat monitoring. This comprehensive approach ensures business continuity even during system failures, cyberattacks, or natural disasters. With strong recovery strategies and security measures in place, your data remains protected, accessible, and resilient at all times.',
      image:
        'https://lirp.cdn-website.com/93cf0bc4/dms3rep/multi/opt/iStock-1331748980_HDCrop-640w.jpg'
    }
  ];
  

export function ManagedITServicesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              Managed <span className="text-[#B4FF39]">IT Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end managed IT solutions designed to keep your business
              secure, productive, and future-ready.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  SERVICES LIST  */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 space-y-32">

          {services.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <AnimatedSection key={index} direction="up">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    reverse ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={reverse ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Button size="lg">
                      Learn More
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={reverse ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[360px] object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/50" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

        </div>
      </section>

    </div>
  );
}
