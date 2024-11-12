import React from 'react';
import { Calendar, User } from 'lucide-react';

export default function GoogleAdsStrategies() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Advanced Google Ads Strategies for 2024</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
          alt="Google Ads Strategies"
          className="rounded-lg shadow-xl mb-8"
        />
        
        <div className="prose prose-invert max-w-none">
          <p className="lead mb-6">
            Stay ahead of the competition with these cutting-edge Google Ads strategies for 2024...
          </p>
          
          <h2>1. Performance Max Campaigns</h2>
          <p>
            Learn how to leverage Google's AI-driven Performance Max campaigns effectively...
          </p>
          
          <h2>2. First-Party Data Integration</h2>
          <p>
            Discover strategies for utilizing first-party data in your campaigns...
          </p>
          
          <h2>3. Advanced Audience Targeting</h2>
          <p>
            Explore new audience targeting capabilities and best practices...
          </p>
          
          <div className="bg-gray-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
            <ul className="list-disc pl-6 mb-0">
              <li>Implement automated bidding strategies</li>
              <li>Utilize responsive search ads</li>
              <li>Focus on conversion value optimization</li>
              <li>Leverage cross-channel attribution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}