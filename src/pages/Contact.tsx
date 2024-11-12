import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      details: "contact@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: "Location",
      details: "New York, NY"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => (
            <div key={info.title} className="p-6 bg-gray-800 rounded-lg text-center">
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-gray-300">{info.details}</p>
            </div>
          ))}
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
            placeholder="Message"
            rows={6}
            className="w-full bg-gray-700/50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}