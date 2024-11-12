import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <User className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            alt="Digital Marketing Dashboard"
            className="rounded-lg shadow-xl"
          />
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm a results-driven PPC specialist with a proven track record in managing successful Google Ads campaigns.
              My expertise lies in maximizing ROI through strategic keyword research, compelling ad copy, and data-driven optimization.
            </p>
            <p className="text-gray-300">
              With years of experience in digital advertising, I help businesses achieve their marketing goals through
              targeted campaigns, conversion rate optimization, and advanced analytics implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}