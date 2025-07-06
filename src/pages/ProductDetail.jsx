import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiShoppingCart, FiDownload, FiExternalLink, FiStar, FiHeart } = FiIcons;

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data - in a real app, this would be fetched based on the ID
  const product = {
    id: 1,
    name: 'Complete Guide to Benin Culture (Digital)',
    price: 9.99,
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop'
    ],
    category: 'Digital',
    type: 'digital',
    description: 'Comprehensive digital guide covering the rich culture and traditions of Benin.',
    longDescription: `
      This comprehensive digital guide takes you on an immersive journey through the rich culture and traditions of Benin. 
      Written by cultural experts and historians, this guide offers deep insights into the heart of West African heritage.
      
      What you'll discover:
      • Historical overview of the Kingdom of Benin
      • Traditional customs and ceremonies
      • Art and craftsmanship traditions
      • Language and oral traditions
      • Modern Benin and cultural preservation
      • Photo galleries and illustrations
      • Interactive cultural map
      • Audio pronunciations of key terms
      
      This digital guide is perfect for students, researchers, travelers, and anyone interested in learning about 
      the authentic culture of Benin. Download includes PDF format optimized for all devices, plus bonus audio content.
    `,
    features: [
      '150+ pages of comprehensive content',
      'High-resolution images and illustrations',
      'Interactive cultural timeline',
      'Audio pronunciations included',
      'Bonus video content access',
      'Lifetime access and updates',
      'Mobile-friendly format',
      'Printer-friendly version included'
    ],
    rating: 4.8,
    reviews: 127,
    inStock: true
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Traditional Kente Cloth',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=300&h=300&fit=crop',
      type: 'affiliate'
    },
    {
      id: 3,
      name: 'African Art Print Collection',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      type: 'digital'
    },
    {
      id: 5,
      name: 'West African Recipe Collection',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop',
      type: 'digital'
    }
  ];

  const handlePurchase = () => {
    if (product.type === 'digital') {
      // Handle digital product purchase
      alert('Digital product purchase flow would be implemented here');
    } else {
      // Redirect to affiliate partner
      window.open('https://affiliate-partner.com/product/' + product.id, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/shop"
            className="text-benin-green hover:text-benin-yellow transition-colors flex items-center"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-benin-green' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.type === 'digital' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {product.type === 'digital' ? 'Digital Product' : 'Physical Product'}
                </span>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon 
                      key={i}
                      icon={FiStar} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-4xl font-bold text-benin-green mb-6">
                ${product.price}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-benin-green rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handlePurchase}
                className="flex-1 bg-benin-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                {product.type === 'digital' ? (
                  <>
                    <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5 mr-2" />
                    Buy Now
                  </>
                )}
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiHeart} className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {product.type === 'digital' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Digital Product Benefits</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Instant download after purchase</li>
                  <li>• Access from any device</li>
                  <li>• Lifetime access guaranteed</li>
                  <li>• No shipping costs</li>
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Product Details</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="whitespace-pre-line">{product.longDescription}</p>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-benin-green font-bold text-xl mb-3">${relatedProduct.price}</p>
                  <Link 
                    to={`/shop/${relatedProduct.id}`}
                    className="w-full bg-benin-green text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;