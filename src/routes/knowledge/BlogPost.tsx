import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ArrowLeft, CalendarBlank, User, Tag } from "@phosphor-icons/react";
import { BLOG_POSTS } from "../../data/blogPosts";

// Simple markdown renderer for our structured blog data
const renderMarkdown = (text: string) => {
  return text.split('\n\n').map((paragraph, i) => {
    let p = paragraph.trim();
    if (!p) return null;
    
    // Headings
    if (p.startsWith('### ')) {
      return <h3 key={i} className="text-2xl font-bold font-heading text-forest mt-10 mb-4">{p.replace('### ', '')}</h3>;
    }
    
    // Simple bold & italic
    p = p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    p = p.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Bullet Lists
    if (p.startsWith('- ')) {
      const items = p.split('\n').map((item, j) => (
        <li key={j} dangerouslySetInnerHTML={{ __html: item.replace('- ', '') }} />
      ));
      return <ul key={i} className="list-disc list-inside space-y-3 mb-6 text-ink/80 leading-relaxed text-lg pl-4">{items}</ul>;
    }
    
    // Numbered Lists
    if (p.match(/^\d+\./)) {
      const items = p.split('\n').map((item, j) => (
        <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, '') }} />
      ));
      return <ol key={i} className="list-decimal list-inside space-y-3 mb-6 text-ink/80 leading-relaxed text-lg pl-4">{items}</ol>;
    }
    
    // Regular paragraphs
    return <p key={i} className="mb-6 text-ink/80 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: p }} />;
  });
};

export function Component() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-cream min-h-screen py-24 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest mb-4">Post Not Found</h1>
        <p className="text-ink/60 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="inline-block bg-forest text-cream font-bold px-6 py-3 rounded-full hover:bg-forest/90 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }



  return (
    <div className="bg-cream min-h-screen pb-16">
      <Helmet>
        <title>{post.title} | {brand.name}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Article Header */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-forest transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Knowledge Hub
          </Link>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-harvest text-ink text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-forest mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-ink/60 font-medium">
            <span className="flex items-center gap-2"><CalendarBlank size={18} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={18} /> By {post.author}</span>
          </div>
        </div>
      </div>

      <div className="container-page max-w-4xl mt-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5">
          {/* Featured Image */}
          <div className="aspect-video relative w-full bg-gray-100">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          {/* Article Body */}
          <article className="p-8 md:p-16 text-ink/90">
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-forest prose-p:leading-relaxed prose-a:text-harvest hover:prose-a:text-leaf">
              {renderMarkdown(post.content)}
            </div>

            <div className="mt-12 pt-8 border-t border-forest/10 flex items-center gap-2">
              <Tag size={20} className="text-forest" /> 
              <span className="font-bold text-ink/80 text-sm">Tagged:</span>
              <span className="bg-forest/5 text-forest px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
              <span className="bg-forest/5 text-forest px-3 py-1 rounded-full text-xs font-bold">Agriculture</span>
            </div>
          </article>
        </div>

        {/* Next Steps / CTA */}
        <div className="bg-forest text-cream rounded-3xl p-8 md:p-12 shadow-sm mt-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Have questions about this topic?</h2>
          <p className="text-cream/80 max-w-xl mx-auto mb-8 text-lg">
            Our certified agronomists and veterinarians are ready to assist you. Bring your questions to Shambani Agrovet today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-harvest text-ink font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition shadow-sm">
              Contact our Experts
            </Link>
            <Link to="/shop" className="bg-transparent border-2 border-cream text-cream font-bold px-8 py-3 rounded-full hover:bg-cream/10 transition">
              Browse Related Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "BlogPost";
