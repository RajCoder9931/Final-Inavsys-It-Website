import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

const devopsServices = [
  {
    title: 'CI / CD Pipeline Implementation',
    desc:
      'Continuous Integration and Continuous Deployment (CI/CD) pipelines are the backbone of modern DevOps practices. We design and implement automated pipelines that streamline code integration, testing, and deployment. By automating builds and deployments, we help teams release features faster with fewer errors. Our CI/CD solutions reduce manual intervention, improve code quality, and ensure consistent deployments across environments. This results in faster time-to-market, improved collaboration between development and operations teams, and a more reliable software delivery lifecycle.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240705114951/ci-cd-pipeline-system-design.webp'
  },
  {
    title: 'Infrastructure as Code (IaC)',
    desc:
      'Infrastructure as Code allows organizations to manage infrastructure using code instead of manual processes. We implement IaC solutions using industry-standard tools to provision, configure, and manage infrastructure consistently across environments. This approach improves scalability, reduces configuration drift, and enhances disaster recovery capabilities. By version-controlling infrastructure, teams gain visibility, repeatability, and confidence in their environments while significantly reducing human error.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    title: 'Cloud Automation & Orchestration',
    desc:
      'Cloud automation enables businesses to manage complex cloud environments efficiently. We automate provisioning, scaling, and management of cloud resources to optimize performance and cost. Our orchestration solutions ensure resources are deployed consistently while adapting dynamically to workload demands. This automation reduces operational overhead, improves reliability, and ensures cloud environments remain secure, scalable, and cost-effective.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'Monitoring, Logging & Observability',
    desc:
      'Monitoring and observability are critical to maintaining high-performing systems. We implement centralized monitoring, logging, and alerting solutions that provide real-time visibility into application and infrastructure health. By analyzing metrics and logs, we proactively identify issues, reduce downtime, and improve system reliability. These insights help teams make informed decisions and continuously optimize performance.',
    image: 'https://dt-cdn.net/wp-content/uploads/2023/02/observability-logs-metrics-traces.png'
  },
  {
    title: 'Security Automation & DevSecOps',
    desc:
      'DevSecOps integrates security into every stage of the development lifecycle. We automate security testing, vulnerability scanning, and compliance checks to ensure applications remain secure without slowing development. By embedding security into CI/CD pipelines, we reduce risks, improve compliance, and create a culture of shared responsibility between development, operations, and security teams.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786'
  }
];

export function DevOpsAutomationPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ================= HEADER ================= */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              DevOps & <span className="text-[#B4FF39]">Automation</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Accelerate software delivery, improve reliability, and automate
              operations with modern DevOps and automation practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= DEVOPS SERVICES ================= */}
      {devopsServices.map((service, index) => {
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
                          <Button size="lg">Talk to DevOps Expert</Button>
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
                          <Button size="lg">Talk to DevOps Expert</Button>
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
