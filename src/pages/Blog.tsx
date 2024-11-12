import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from '../components/Link';

export default function Blog() {
  const posts = [
    {
      title: "Advanced Google Ads Strategies for 2024",
      date: "March 15, 2024",
      excerpt: "Stay ahead of the competition with these cutting-edge strategies...",
      link: "/blog/google-ads-strategies"
    },
    {
      title: "Maximizing ROAS in E-commerce PPC",
      date: "March 10, 2024",
      excerpt: "Learn how to optimize your campaigns for better returns...",
      link: "/blog/maximize-roas"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.title} href={post.link}>
              <article className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-300">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}