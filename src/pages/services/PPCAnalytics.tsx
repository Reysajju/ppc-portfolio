import React from 'react';
import { LineChart, PieChart, BarChart } from 'lucide-react';

export default function PPCAnalytics() {
  const metrics = [
    {
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
      title: "Conversion Tracking",
      description: "Setup and monitoring of conversion actions across your campaigns."
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-400" />,
      title: "Attribution Modeling",
      description: "Understanding the customer journey and touchpoint value."
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-400" />,
      title: "Performance Metrics",
      description: "Deep dive into KPIs that matter for your business growth."
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">PPC Analytics & Reporting</h1>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
          alt="PPC Analytics Dashboard"
          className="rounded-lg shadow-xl mb-8"
        />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric) => (
            <div key={metric.title} className="p-6 bg-gray-800 rounded-lg">
              {metric.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{metric.title}</h3>
              <p className="text-gray-300">{metric.description}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Analytics Solutions</h2>
          <p className="mb-4">
            Our analytics services provide clear insights into your PPC performance:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Custom dashboard creation</li>
            <li>Real-time performance monitoring</li>
            <li>Advanced segmentation analysis</li>
            <li>ROI and ROAS tracking</li>
            <li>Competitor benchmarking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}