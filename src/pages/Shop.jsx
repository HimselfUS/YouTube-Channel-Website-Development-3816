import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiShoppingCart, FiDownload, FiExternalLink } = FiIcons;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Complete Guide to Benin Culture (Digital)',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      category: 'Digital',
      type: 'digital',
      description: 'Comprehensive digital guide covering the rich culture and traditions of Benin.',
      featured: true
    },
    {
      id: 2,
      name: 'Traditional Kente Cloth',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=400&h=400&fit=crop',
      category: 'Textiles',
      type: 'affiliate',
      description: 'Authentic handwoven Kente cloth with traditional patterns and vibrant colors.',
      featured: true
    },
    {
      id: 3,
      name: 'African Art Print Collection (Digital)',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      category: 'Digital',
      type: 'digital',
      description: 'High-resolution digital prints of traditional African art and bronze sculptures.',
      featured: false
    },
    {
      id: 4,
      name: 'Handcrafted Wooden Mask',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1583225214464-9296029427aa?w=400&h=400&fit=crop',
      category: 'Art',
      type: 'affiliate',
      description: 'Authentic handcrafted wooden mask representing traditional West African spirits.',
      featured: true
    },
    {
      id: 5,
      name: 'West African Recipe Collection (Digital)',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop',
      category: 'Digital',
      type: 'digital',
      description: 'Traditional recipes from across West Africa with step-by-step instructions.',
      featured: false
    },
    {
      id: 6,
      name: 'Bronze Sculpture Replica',
      price: 125.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      category: 'Art',
      type: 'affiliate',
      description: 'Museum-quality replica of famous Benin bronze sculpture.',
      featured: false
    },
    {
      id: 7,
      name: 'Traditional Music Collection (Digital)',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      category: 'Digital',
      type: 'digital',
      description: 'Curated collection of traditional West African music and instruments.',
      featured: false
    },
    {
      id: 8,
      name: 'Beaded Jewelry Set',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      category: 'Jewelry',
      type: 'affiliate',
      description: 'Beautiful handmade beaded jewelry set with traditional patterns.',
      featured: true
    }
  ];

  const categories = ['All', 'Digital', 'Textiles', 'Art', 'Jewelry'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const featuredProducts = products.filter(product => product.featured);

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
            Treasures of Benin and Africa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic African art, crafts, and digital resources that celebrate the rich heritage of West Africa
          </p>
        </motion.div>

        {/* Featured Products */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.type === 'digital' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.type === 'digital' ? 'Digital' : 'Physical'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-benin-green font-bold text-xl mb-3">${product.price}</p>
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
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <SafeIcon icon={FiFilter} className="w-5 h-5 text-gray-600 mr-2 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedCategory === category
                  ? 'bg-benin-green text-white border-benin-green'
                  : 'border-gray-300 text-gray-700 hover:bg-benin-green hover:text-white hover:border-benin-green'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* All Products */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.type === 'digital' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.type === 'digital' ? 'Digital' : 'Physical'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <p className="text-benin-green font-bold text-xl mb-3">${product.price}</p>
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
        </motion.section>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2 text-benin-green" />
                Digital Products
              </h3>
              <p className="text-gray-600">
                Our digital products include e-books, high-resolution art prints, music collections, and cultural guides. 
                After purchase, you'll receive instant download links to access your content.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SafeIcon icon={FiExternalLink} className="w-5 h-5 mr-2 text-benin-green" />
                Physical Products
              </h3>
              <p className="text-gray-600">
                Our physical products are sourced from authentic African artisans and craftspeople. 
                These items are available through our trusted affiliate partners who handle shipping and fulfillment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;