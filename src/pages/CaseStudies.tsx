import React from 'react';
import { Link } from '../components/Link';

export default function CaseStudies() {
  const cases = [
    {
      title: "E-commerce PPC Success",
      description: "350% ROAS improvement for online retailer",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/ecommerce-ppc"
    },
    {
      title: "B2B Lead Generation",
      description: "40% reduction in cost per lead",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/b2b-leads"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_) => (
            <Link key={case_.title} href={case_.link}>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                    <p className="text-gray-300">{case_.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}