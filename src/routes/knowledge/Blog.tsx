import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { CalendarBlank, User, ArrowRight, Tag } from "@phosphor-icons/react";

import { BLOG_POSTS } from "../../data/blogPosts";

export function Component() {
  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const regularPosts = BLOG_POSTS.filter(p => !p.featured);

  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Learn & Insights | {brand.name}</title>
        <meta name="description" content="Expert agricultural insights, seasonal farming guides, disease prevention spotlights, and input safety protocols." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest mb-4">Farmer's Knowledge Hub</h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Empowering your agricultural journey with authoritative, seasonal, and practical guides from our certified agronomists and veterinarians.
          </p>
        </div>
      </div>

      <div className="container-page py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6 flex items-center gap-2">
              <Tag size={24} className="text-harvest" /> Featured Insight
            </h2>
            <Link to={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 flex flex-col md:flex-row hover:shadow-md transition-shadow">
              <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-harvest text-ink text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {featuredPost.category}
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-ink/50 mb-4 font-medium">
                  <span className="flex items-center gap-1"><CalendarBlank size={16} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><User size={16} /> {featuredPost.author}</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-forest mb-4 group-hover:text-leaf transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-ink/70 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-forest font-bold group-hover:text-leaf transition-colors">
                  Read Full Guide <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Posts Grid */}
          <div className="lg:w-3/4">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/5 flex flex-col hover:shadow-md transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur text-forest text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-ink/50 mb-3 font-medium">
                      <span className="flex items-center gap-1"><CalendarBlank size={14} /> {post.date}</span>
                    </div>
                    <h3 className="font-bold text-xl text-forest mb-3 group-hover:text-leaf transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-ink/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-1 text-forest font-bold text-sm group-hover:text-leaf transition-colors">
                      Read more <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-forest/5 sticky top-6">
              <h3 className="font-bold text-lg text-forest mb-4 border-b border-forest/10 pb-2">Topics</h3>
              <ul className="space-y-3 text-sm font-medium text-ink/70">
                <li><Link to="/blog?category=seasonal" className="hover:text-leaf transition-colors flex justify-between items-center">Seasonal Guides <span>(1)</span></Link></li>
                <li><Link to="/blog?category=disease" className="hover:text-leaf transition-colors flex justify-between items-center">Disease Prevention <span>(2)</span></Link></li>
                <li><Link to="/blog?category=safety" className="hover:text-leaf transition-colors flex justify-between items-center">Input Usage & Safety <span>(1)</span></Link></li>
                <li><Link to="/blog?category=success" className="hover:text-leaf transition-colors flex justify-between items-center">Success Stories <span>(3)</span></Link></li>
                <li><Link to="/blog?category=market" className="hover:text-leaf transition-colors flex justify-between items-center">Market Trends <span>(1)</span></Link></li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-forest/10">
                <h3 className="font-bold text-lg text-forest mb-4">Editorial Policy</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  All technical, chemical, or animal health advice generated is strictly reviewed and verified by our qualified in-house agronomists and veterinary professionals to ensure local accuracy and compliance with Kenya's agricultural regulations.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "Blog";
