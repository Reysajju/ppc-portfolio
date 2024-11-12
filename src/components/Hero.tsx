import React from 'react';
import { Linkedin, Mail, BarChart } from 'lucide-react';

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          PPC & Google Ads Specialist
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Driving ROI through data-driven digital advertising strategies
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <BarChart className="w-6 h-6 absolute bottom-8 animate-bounce text-blue-400" />
    </header>
  );
}