import React from 'react';
import { Target, BarChart2, TrendingUp } from 'lucide-react';

export default function GoogleAdsManagement() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Campaign Strategy",
      description: "Custom-tailored advertising strategies aligned with your business goals and target audience."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of campaigns to maximize ROI and reduce wasted spend."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Growth Scaling",
      description: "Strategic scaling of successful campaigns to capture more market share and revenue."
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Google Ads Management</h1>
        <img 
          src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200" 
          alt="Google Ads Management"
          className="rounded-lg shadow-xl mb-8"
        />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-gray-800 rounded-lg">
              {feature.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="mb-4">
            We implement a data-driven approach to Google Ads management, ensuring every dollar spent contributes to your business objectives. Our process includes:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Comprehensive account audits and competitive analysis</li>
            <li>Strategic keyword research and targeting</li>
            <li>Custom ad copy creation and testing</li>
            <li>Landing page optimization recommendations</li>
            <li>Regular performance reporting and strategy adjustments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}