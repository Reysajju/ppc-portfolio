import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce ROAS Optimization",
      description: "Achieved 300% ROAS improvement for online retailer through strategic campaign optimization",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Lead Generation Campaign",
      description: "Generated 500+ qualified B2B leads with 40% reduction in cost per acquisition",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Case Studies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}