import { AnimatedSection } from '../AnimatedSection';
import { Card } from '../ui/Card';
import { Target, Lightbulb } from 'lucide-react';

interface MissionVisionBlockProps {
    title: 'Mission' | 'Vision';
    highlightColor: string;
    icon: 'mission' | 'vision';
    image: string;
    reverse?: boolean;
    content: {
        primary: string;
        secondary: string;
    };
}

export function MissionVisionBlock({
    title,
    highlightColor,
    icon,
    image,
    reverse = false,
    content
}: MissionVisionBlockProps) {
    const Icon = icon === 'mission' ? Target : Lightbulb;

    return (
        <section className="py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <AnimatedSection>
                    <h2
                        className={`text-4xl md:text-5xl font-bold font-['Orbitron'] mb-12 ${reverse ? 'text-right' : 'text-left'
                            }`}
                    >
                        Our{' '}
                        <span style={{ color: highlightColor }}>
                            {title}
                        </span>
                    </h2>
                </AnimatedSection>

                {/* Combined Card */}
                <AnimatedSection direction="up">
                    <Card className="p-10 lg:p-14 bg-white/5 border border-white/10 rounded-3xl">
                        <div
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={`${reverse ? 'lg:order-2' : ''}`}>
                                <Icon
                                    className="w-12 h-12 mb-6"
                                    style={{ color: highlightColor }}
                                />

                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    {content.primary}
                                </p>

                                <p className="text-gray-400 leading-relaxed">
                                    {content.secondary}
                                </p>
                            </div>

                            {/* Image (NOT STUCK) */}
                            <div className={`${reverse ? 'lg:order-1' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-[360px] object-cover "
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/40" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </AnimatedSection>
            </div>
        </section>
    );
}
