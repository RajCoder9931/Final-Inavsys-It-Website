import { AnimatedSection } from '../AnimatedSection';
import { Button } from '../ui/Button';

interface ServiceItem {
  title: string;
  desc: string;
  image: string;
}

interface Props {
  pageTitle: string;
  highlight: string;
  subtitle: string;
  services: ServiceItem[];
}

export function ZigZagServicePage({
  pageTitle,
  highlight,
  subtitle,
  services
}: Props) {
  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] text-white mb-6">
              {pageTitle}{' '}
              <span className="text-[#B4FF39]">{highlight}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sections */}
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
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                        <Button size="lg">Learn More</Button>
                      </div>

                      {/* Image */}
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[360px] object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image */}
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[360px] object-cover"
                        />
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
                        <Button size="lg">Learn More</Button>
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
