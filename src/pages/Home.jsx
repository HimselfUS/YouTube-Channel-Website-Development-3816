import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import VideoEmbed from '../components/VideoEmbed';

const { FiPlay, FiArrowRight, FiBookOpen, FiShoppingBag } = FiIcons;

const Home = () => {
  // Sample data - replace with actual data
  const latestVideo = {
    id: 'dQw4w9WgXcQ',
    title: 'Exploring the Rich Culture of Benin',
    description: 'Join us as we dive deep into the fascinating traditions and customs of Benin.'
  };

  const recentBlogPosts = [
    {
      id: 1,
      title: 'The History of Benin Bronze',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      excerpt: 'Discover the incredible artistry behind Benin\'s famous bronze sculptures.'
    },
    {
      id: 2,
      title: 'Traditional Festivals of West Africa',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=400&h=250&fit=crop',
      excerpt: 'Experience the vibrant celebrations that bring communities together.'
    },
    {
      id: 3,
      title: 'Culinary Delights of Benin',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop',
      excerpt: 'Explore the flavors and ingredients that make Beninese cuisine unique.'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Benin Culture Guide (Digital)',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
      type: 'digital'
    },
    {
      id: 2,
      name: 'Traditional Kente Cloth',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=300&h=300&fit=crop',
      type: 'affiliate'
    },
    {
      id: 3,
      name: 'African Art Print Collection',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      type: 'digital'
    },
    {
      id: 4,
      name: 'Handcrafted Wooden Mask',
      price: '$85.00',
      image: 'https://images.unsplash.com/photo-1583225214464-9296029427aa?w=300&h=300&fit=crop',
      type: 'affiliate'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Welcome to Sweet Benin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover the heart of West Africa through authentic stories, rich culture, and beautiful traditions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/videos" 
              className="bg-white text-benin-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" />
              Watch Our Videos
            </Link>
            <Link 
              to="/shop" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-benin-green transition-colors flex items-center justify-center"
            >
              <SafeIcon icon={FiShoppingBag} className="w-5 h-5 mr-2" />
              Explore Treasures
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Latest from Our Channel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our newest content exploring West African culture and heritage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <VideoEmbed 
              videoId={latestVideo.id} 
              title={latestVideo.title}
              description={latestVideo.description}
            />
          </motion.div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Latest Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deeper into West African culture with our in-depth articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-benin-green font-medium hover:text-benin-yellow transition-colors flex items-center"
                  >
                    Read More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/blog"
              className="bg-benin-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiBookOpen} className="w-5 h-5 mr-2" />
              View All Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Treasures of Benin and Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover authentic African art, crafts, and digital resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-benin-green font-bold text-xl mb-3">{product.price}</p>
                  <Link 
                    to={`/shop/${product.id}`}
                    className="w-full bg-benin-green text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/shop"
              className="bg-benin-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiShoppingBag} className="w-5 h-5 mr-2" />
              Browse All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;