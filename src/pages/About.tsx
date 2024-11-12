import React from 'react';
import { Award, Users, Target } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "10+ Years Experience",
      description: "Dedicated to digital advertising excellence"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "200+ Clients",
      description: "Across various industries globally"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "$10M+ Ad Spend",
      description: "Managed with positive ROAS"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((item) => (
            <div key={item.title} className="p-6 bg-gray-800 rounded-lg text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            As a certified Google Ads expert, I've helped businesses across various industries achieve their marketing goals through strategic PPC campaigns.
          </p>
          <p className="text-lg mb-6">
            My approach combines data-driven decision making with creative strategy to deliver measurable results for my clients.
          </p>
        </div>
      </div>
    </div>
  );
}