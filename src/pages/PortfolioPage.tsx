import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ExternalLink, Eye, Play } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PDFModal } from '../components/PDFModal';
export function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const categories = ['All', 'Websites', 'Apps', 'Design', 'Marketing'];
  const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Websites',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Health & Fitness App',
    category: 'Apps',
    img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Luxury Brand Identity',
    category: 'Design',
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'E-commerce Platform',
    category: 'Websites',
    img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Social Campaign',
    category: 'Marketing',
    img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Travel Booking App',
    category: 'Apps',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
  }];

  const filteredProjects =
  filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <div className="min-h-screen pt-20">
      <PDFModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject || ''} />


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-['Orbitron'] mb-6">
              Our <span className="text-[#B4FF39]">Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Explore our portfolio of successful projects and digital
              transformations.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, index) =>
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat ? 'bg-[#B4FF39] text-black shadow-[0_0_15px_rgba(180,255,57,0.4)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>

                  {cat}
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) =>
            <AnimatedSection
              key={`${project.title}-${index}`}
              delay={index * 0.1}>

                <Card className="group p-0 overflow-hidden border-0 relative aspect-[4/3]">
                  <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />


                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[#B4FF39] text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6">
                      {project.title}
                    </h3>

                    <div className="flex gap-3">
                      <Button
                      size="sm"
                      variant="primary"
                      className="flex-1"
                      onClick={() => setSelectedProject(project.title)}>

                        <Eye className="w-4 h-4 mr-2" /> Preview
                      </Button>
                      <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none text-white">

                        <Play className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>);

}