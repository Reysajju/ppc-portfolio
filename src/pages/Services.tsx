import React from 'react';
import { Search, BarChart2, ShoppingCart, RefreshCw } from 'lucide-react';
import { Link } from '../components/Link';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "Google Ads Management",
      description: "Strategic campaign management to maximize ROI",
      link: "/services/google-ads-management"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
      title: "PPC Analytics",
      description: "Data-driven insights and reporting",
      link: "/services/ppc-analytics"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
      title: "Shopping Campaigns",
      description: "Optimize product listings and performance",
      link: "/services/shopping-campaigns"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      title: "Remarketing",
      description: "Target previous visitors and customers",
      link: "/services/remarketing"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.link}>
              <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}