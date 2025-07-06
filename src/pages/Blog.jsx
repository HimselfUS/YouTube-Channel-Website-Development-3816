import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCalendar, FiTag } = FiIcons;

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The History and Significance of Benin Bronze',
      excerpt: 'Explore the incredible artistry and cultural significance behind Benin\'s world-famous bronze sculptures and plaques.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      date: '2024-01-15',
      category: 'Art & Culture',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Traditional Festivals That Unite Communities',
      excerpt: 'Discover the vibrant celebrations and festivals that bring West African communities together throughout the year.',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=600&h=400&fit=crop',
      date: '2024-01-12',
      category: 'Festivals',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Culinary Journey: The Flavors of Benin',
      excerpt: 'Take a deep dive into the rich culinary traditions of Benin, from ingredients to cooking techniques.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
      date: '2024-01-10',
      category: 'Food & Culture',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'The Role of Music in West African Traditions',
      excerpt: 'Understanding how music serves as a bridge between generations and communities in West Africa.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      date: '2024-01-08',
      category: 'Music & Arts',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Photo Gallery: Markets of Cotonou',
      excerpt: 'A visual journey through the bustling markets of Cotonou, showcasing daily life and commerce.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
      date: '2024-01-05',
      category: 'Photography',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Language Preservation in Modern Times',
      excerpt: 'How traditional languages are being preserved and passed down to new generations.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      date: '2024-01-03',
      category: 'Language',
      readTime: '9 min read'
    },
    {
      id: 7,
      title: 'Traditional Textile Arts and Their Stories',
      excerpt: 'Every pattern tells a story - learn about the meanings behind traditional West African textiles.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=600&h=400&fit=crop',
      date: '2024-01-01',
      category: 'Textiles',
      readTime: '8 min read'
    },
    {
      id: 8,
      title: 'Modern Benin: Where Tradition Meets Progress',
      excerpt: 'Exploring how contemporary Benin balances modernization with cultural preservation.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
      date: '2023-12-28',
      category: 'Modern Culture',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Art & Culture', 'Festivals', 'Food & Culture', 'Music & Arts', 'Photography', 'Language', 'Textiles', 'Modern Culture'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deeper into West African culture with our in-depth articles, photo galleries, and cultural insights
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-benin-green hover:text-white hover:border-benin-green transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-benin-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <SafeIcon icon={FiTag} className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-benin-green transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-benin-green font-medium hover:text-benin-yellow transition-colors flex items-center"
                >
                  Read More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-benin-green to-benin-yellow text-white rounded-lg p-8 mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and updates about West African culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-benin-green px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;