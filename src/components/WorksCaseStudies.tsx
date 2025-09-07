import React from 'react';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const WorksCaseStudies: React.FC = () => {
  const { elementRef, isVisible } = useScrollTrigger();

  const projects = [
    {
      id: 1,
      title: 'Luxury Hotel Brand Identity',
      category: 'Brand Identity',
      client: 'Al-Rashid Hotels',
      year: '2024',
      description: 'Complete brand overhaul for a luxury hotel chain across the Gulf region, including logo design, visual identity, and brand guidelines.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Branding', 'Hospitality', 'Luxury']
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      category: 'UI/UX Design',
      client: 'PayFlow',
      year: '2024',
      description: 'User-centered design for a revolutionary fintech mobile application serving the Middle East market.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Mobile', 'FinTech', 'UX/UI']
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'Full-Stack Development',
      client: 'Souq Al-Khaleej',
      year: '2023',
      description: 'Custom e-commerce platform built for a major retail brand with advanced inventory management and analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['E-commerce', 'Development', 'Analytics']
    },
    {
      id: 4,
      title: 'Healthcare Digital Transformation',
      category: 'Design Strategy',
      client: 'MedCare Group',
      year: '2023',
      description: 'Comprehensive digital strategy and platform design for a leading healthcare provider in the UAE.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Healthcare', 'Strategy', 'Digital']
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'UI/UX Design',
      client: 'Emirates Properties',
      year: '2023',
      description: 'Modern property search platform with advanced filtering and virtual tour integration.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Real Estate', 'Portal', 'Virtual Tours']
    },
    {
      id: 6,
      title: 'Restaurant Chain Rebrand',
      category: 'Brand Identity',
      client: 'Taste of Arabia',
      year: '2022',
      description: 'Complete rebranding for a popular restaurant chain, including new visual identity and packaging design.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Food & Beverage', 'Packaging', 'Rebrand']
    }
  ];

  const handleProjectClick = (projectId: number) => {
    // Navigate to project detail page
    console.log(`Navigate to project ${projectId}`);
    // In a real app, you would use React Router or Next.js router
    // router.push(`/projects/${projectId}`);
  };

  return (
    <section 
      id="works" 
      className="py-16 md:py-32 bg-gray-50"
      ref={elementRef}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-black leading-tight uppercase tracking-tight mb-6">
            Our Works & Case Studies
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl">
            Explore our portfolio of successful projects across various industries. 
            Each case study showcases our strategic approach to design and development challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 stagger-children ${
          isVisible ? 'visible' : ''
        }`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Project Image - 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-black uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-light">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span className="font-light">{project.client}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-normal text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-light hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 md:mt-24 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black rounded-lg p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-300 font-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with strategic design and development.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-white text-black text-base font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksCaseStudies;