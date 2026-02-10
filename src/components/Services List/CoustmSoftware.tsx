import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const services = [
  {
    title: 'Enterprise Software Development',
    desc:
      'Our enterprise software development services are designed to build scalable, secure, and high-performance systems tailored to complex business needs. We work closely with stakeholders to understand workflows, data requirements, and operational challenges before designing custom solutions. From internal management platforms to large-scale enterprise applications, we focus on reliability, performance, and long-term maintainability. Our solutions integrate seamlessly with existing systems while remaining flexible enough to adapt as your organization grows and evolves.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    title: 'Web-Based Software Applications',
    desc:
      'We build powerful web-based software applications that are accessible, secure, and optimized for performance. Our team leverages modern frameworks and cloud-ready architectures to deliver applications that work flawlessly across browsers and devices. From customer portals to SaaS platforms, we ensure clean user experiences, robust backend systems, and scalable deployment models. Our focus on usability and performance ensures your application delivers consistent value to users while supporting future expansion.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Custom Business Automation Solutions',
    desc:
      'Our custom business automation solutions help organizations reduce manual work, eliminate errors, and improve productivity. We analyze your existing processes to identify automation opportunities and design software that streamlines operations. Whether it’s workflow automation, data processing, or system integrations, our solutions improve efficiency and free your teams to focus on strategic tasks. Automation is implemented securely and tailored to your exact operational needs.',
    image:
      'https://leadstocompany.com/wp-content/uploads/2025/11/1_tc9bvH4ge8JAIAaQa0zpig.jpeg'
  },
  {
    title: 'API Development & System Integration',
    desc:
      'We design and develop secure, well-documented APIs that allow systems, applications, and third-party platforms to communicate seamlessly. Our integration services ensure data flows efficiently between tools, eliminating silos and improving visibility. Whether integrating legacy systems, cloud platforms, or external services, we build reliable connections that support scalability, security, and performance. This approach ensures your software ecosystem operates as a unified, efficient environment.',
    image:
      'https://thumbs.dreamstime.com/b/application-programming-interface-api-concept-developer-working-secure-data-connectivity-futuristic-digital-development-358257550.jpg'
  },
  {
    title: 'Maintenance, Scaling & Long-Term Support',
    desc:
      'Custom software requires continuous improvement to remain secure, efficient, and relevant. Our maintenance and long-term support services ensure your applications stay updated, optimized, and protected. We provide performance monitoring, feature enhancements, security patches, and scalability planning. By proactively supporting your software, we help you extend its lifecycle, reduce technical debt, and ensure it continues delivering business value as your requirements change.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475'
  }
];

export function CustomSoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen pt-20">

      {/*  HEADER  */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              Custom <span className="text-[#B4FF39]">Software Development</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailor-made software solutions designed to solve complex business
              challenges, automate workflows, and scale with your organization.
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

                  {/* Odd = Content Left, Image Right */}
                  {!isEven ? (
                    <>
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

                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[360px] object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Even = Image Left, Content Right */}
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[360px] object-cover"
                        />
                      </div>

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
