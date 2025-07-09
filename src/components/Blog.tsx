import React, { useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [activeTag, setActiveTag] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const blogPosts = [
    {
      title: 'Companies Using Linux & Their Benefits',
      excerpt: 'Explore how major companies leverage Linux for enterprise solutions and the benefits they gain.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Linux', 'Enterprise', 'DevOps'],
      featured: true
    },
    {
      title: 'Customize Program Icons in Linux',
      excerpt: 'Learn how to personalize your Linux desktop by customizing program icons and creating a unique workspace.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Linux', 'Customization', 'UI'],
      featured: false
    },
    {
      title: 'Run Graphical Software in Docker',
      excerpt: 'Step-by-step guide to running GUI applications inside Docker containers with X11 forwarding.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Docker', 'GUI', 'Containerization'],
      featured: false
    },
    {
      title: 'Set Up Docker Inside Docker (DIND)',
      excerpt: 'Advanced Docker configuration for running Docker containers within Docker containers.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2023-12-28',
      readTime: '12 min read',
      tags: ['Docker', 'Advanced', 'DevOps'],
      featured: true
    },
    {
      title: 'CI/CD Pipeline Best Practices',
      excerpt: 'Essential practices for building robust and efficient CI/CD pipelines in modern DevOps.',
      image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2023-12-20',
      readTime: '15 min read',
      tags: ['CI/CD', 'DevOps', 'Automation'],
      featured: false
    },
    {
      title: 'Cloud-Native Architecture Patterns',
      excerpt: 'Understanding key patterns and practices for building scalable cloud-native applications.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2023-12-15',
      readTime: '11 min read',
      tags: ['Cloud', 'Architecture', 'Patterns'],
      featured: false
    }
  ];

  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = activeTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeTag));

  const featuredPost = blogPosts.find(post => post.featured);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus('idle');

    try {
      // Simulate API call for subscription
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful subscription
      console.log('Subscribing email:', email);
      
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on DevOps, cloud technologies, and software development
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Article</h3>
            <div className="glass-card overflow-hidden hover:glow-card transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h4>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-6">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock size={16} className="mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white glow-button'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <Tag size={16} />
              <span className="capitalize">{tag}</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <article
              key={index}
              className="glass-card overflow-hidden hover:glow-card transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-gray-400 text-xs mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={14} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get notified about new articles and insights on DevOps, cloud technologies, and software development.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  disabled={isSubscribing}
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              
              {/* Status Messages */}
              {subscriptionStatus === 'success' && (
                <div className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  ✅ Successfully subscribed! You'll receive updates about new articles.
                </div>
              )}
              
              {subscriptionStatus === 'error' && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  ❌ Please enter a valid email address.
                </div>
              )}
            </form>
            
            <p className="text-gray-400 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;