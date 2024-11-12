import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export default function EcommercePPC() {
  const results = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      metric: "350% ROAS",
      description: "Return on Ad Spend"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
      metric: "2.5x",
      description: "Conversion Rate Increase"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      metric: "-40%",
      description: "Cost per Acquisition"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">E-commerce PPC Success Story</h1>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
          alt="E-commerce Success"
          className="rounded-lg shadow-xl mb-8"
        />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result) => (
            <div key={result.metric} className="p-6 bg-gray-800 rounded-lg text-center">
              {result.icon}
              <h3 className="text-3xl font-bold mt-4 mb-2">{result.metric}</h3>
              <p className="text-gray-300">{result.description}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="mb-4">
            Learn how we helped an e-commerce client achieve exceptional results through strategic PPC management...
          </p>
          <h3 className="text-xl font-bold mb-3">Challenge</h3>
          <p className="mb-4">
            The client was struggling with high CPAs and low ROAS across their Google Ads campaigns...
          </p>
          <h3 className="text-xl font-bold mb-3">Solution</h3>
          <p className="mb-4">
            We implemented a comprehensive strategy including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Shopping campaign restructure</li>
            <li>Advanced audience targeting</li>
            <li>Dynamic remarketing setup</li>
            <li>Bid strategy optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}