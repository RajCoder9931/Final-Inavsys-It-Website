import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const services = [
  {
    title: 'IT Consulting & Business Alignment',
    desc:
      'Our IT Consulting & Business Alignment services focus on ensuring that your technology investments directly support your business goals. We begin by understanding your organization’s objectives, workflows, and challenges, then map technology solutions that improve efficiency, reduce costs, and enhance scalability. By aligning IT strategy with business priorities, we help organizations eliminate inefficiencies, modernize legacy systems, and plan for future growth. This strategic approach ensures technology becomes an enabler of success rather than a bottleneck.',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786'
  },
  {
    title: 'Technology Roadmap & Digital Transformation',
    desc:
      'We create detailed technology roadmaps that guide your digital transformation journey. This includes evaluating existing systems, identifying gaps, and defining a clear path toward modernization. Our consultants help you prioritize initiatives, adopt emerging technologies, and transition smoothly without disrupting operations. With a structured roadmap in place, your organization gains clarity, reduces risk, and confidently invests in solutions that deliver long-term value.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'IT Infrastructure & Architecture Planning',
    desc:
      'Our infrastructure and architecture planning services ensure your IT foundation is reliable, secure, and scalable. We assess on-premise, cloud, and hybrid environments to design architectures that support performance and resilience. From network design to server architecture and cloud adoption strategies, we help organizations build future-ready infrastructure that adapts as business needs evolve.',
    image:
      'https://cdn.ezo.io/wp-content/uploads/2024/09/IT-infrastructure.jpg'
  },
  {
    title: 'Risk Management, Compliance & Governance',
    desc:
      'Managing IT risks and maintaining compliance are critical in today’s regulatory landscape. We help organizations identify vulnerabilities, implement governance frameworks, and ensure compliance with industry standards. Our consultants design security policies, access controls, and audit-ready processes that protect sensitive data while meeting regulatory requirements. This proactive approach minimizes risk and strengthens trust.',
    image:
      'https://wissda.com/blogs/wp-content/uploads/2023/10/1-Governance-Risk-Management-and-Compliance-GRC-The-Triad-of-Business-Resilience-1.jpg'
  },
  {
    title: 'Continuous Optimization & Strategic Advisory',
    desc:
      'IT strategy is not a one-time effort. Our continuous optimization and advisory services ensure your technology evolves with your business. We provide ongoing assessments, performance reviews, and strategic recommendations to keep systems efficient and cost-effective. By continuously refining your IT strategy, we help you stay competitive, agile, and prepared for future challenges.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475'
  }
];

export function ITConsultingStrategyPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              IT Consulting & <span className="text-[#B4FF39]">Strategy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic IT consulting services designed to align technology with
              business goals, improve efficiency, and enable sustainable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/*  SERVICE BLOCKS  */}
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

                  {/* Left Content / Image */}
                  {!isEven ? (
                    <>
                      {/* Content */}
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
                        <Button size="lg">
                          Learn More
                        </Button>
                      </div>

                      {/* Image */}
                      <div>
                        <div className="relative rounded-2xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image */}
                      <div>
                        <div className="relative rounded-2xl overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
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
                        <Button size="lg">
                          Learn More
                        </Button>
                      </div>
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
