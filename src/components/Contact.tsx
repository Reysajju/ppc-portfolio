import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Send className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-700/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-700/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            placeholder="Tell me about your project"
            rows={6}
            className="w-full bg-gray-700/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </section>
  );
}