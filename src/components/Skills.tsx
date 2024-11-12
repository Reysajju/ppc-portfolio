import React from 'react';
import { Code2 } from 'lucide-react';

export default function Skills() {
  const skills = [
    "Google Ads",
    "PPC Campaign Management",
    "Search Engine Marketing",
    "Display Advertising",
    "Conversion Optimization",
    "A/B Testing",
    "Analytics & Reporting",
    "Keyword Research",
    "Ad Copywriting"
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Expertise</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}