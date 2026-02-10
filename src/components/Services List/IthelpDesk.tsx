import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const helpdeskServices = [
  {
    title: '24/7 IT Helpdesk Support',
    desc:
      'Our 24/7 IT Helpdesk Support ensures your employees always have access to technical assistance, regardless of time or location. From login issues and software errors to critical system failures, our skilled support team is available around the clock to resolve problems quickly. We follow structured ticketing and escalation processes to ensure issues are prioritized based on business impact. This continuous support minimizes downtime, improves employee productivity, and ensures your operations run smoothly without interruptions.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Multi-Channel User Support',
    desc:
      'We provide IT support through multiple channels including phone, email, chat, and remote access. This flexibility allows users to get help in the way that suits them best. Our support agents are trained to diagnose issues efficiently while maintaining a professional and friendly experience. Multi-channel support reduces resolution time, increases user satisfaction, and ensures consistent service delivery across your organization.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786'
  },
  {
    title: 'Incident & Ticket Management',
    desc:
      'Our incident and ticket management system ensures every IT issue is logged, tracked, and resolved efficiently. Tickets are categorized, prioritized, and assigned based on urgency and complexity. Automated workflows and escalation policies ensure critical incidents receive immediate attention. This structured approach improves accountability, transparency, and service quality while providing detailed reporting and performance insights.',
    image: 'https://www.n-able.com/wp-content/uploads/2024/10/102324_BB_Incident-Management_PD_Final_1200x628-1200x628.jpg'
  },
  {
    title: 'Remote Troubleshooting & Resolution',
    desc:
      'Most IT issues can be resolved quickly through secure remote access. Our remote troubleshooting services allow technicians to diagnose and fix problems without waiting for on-site visits. This approach significantly reduces downtime, lowers support costs, and improves response times. From software configuration issues to system errors, our experts ensure fast and secure problem resolution.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'Knowledge Base & Continuous Improvement',
    desc:
      'We build and maintain a centralized knowledge base containing common issues, solutions, and best practices. By analyzing support trends and recurring problems, we proactively improve systems and reduce future incidents. This continuous improvement approach enhances IT stability, empowers users with self-help resources, and ensures your helpdesk support evolves with your business needs.',
    image: 'https://t3.ftcdn.net/jpg/05/43/61/76/360_F_543617627_eyFOjkYcQl6J9HtAQ7N8aHWjUNZjLe6y.jpg'
  }
];

export function ITHelpdeskSupportPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              IT <span className="text-[#B4FF39]">Helpdesk Support</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reliable, responsive IT helpdesk services designed to resolve
              issues quickly, reduce downtime, and keep your teams productive.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  HELP DESK SERVICES  */}
      {helpdeskServices.map((service, index) => {
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
                          <Button size="lg">Request Support</Button>
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
                          <Button size="lg">Request Support</Button>
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
