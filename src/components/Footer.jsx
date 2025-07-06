import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <h3 className="text-xl font-display font-bold">Sweet Benin</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the heart of West Africa through authentic stories, rich culture, and beautiful traditions. Join us on a journey of education and connection.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@sweetbenin8553" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-benin-yellow transition-colors">
                <SafeIcon icon={FiYoutube} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-benin-yellow transition-colors">
                <SafeIcon icon={FiInstagram} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-benin-yellow transition-colors">
                <SafeIcon icon={FiFacebook} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-benin-yellow transition-colors">
                <SafeIcon icon={FiTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-benin-yellow transition-colors">Home</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-benin-yellow transition-colors">Videos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-benin-yellow transition-colors">Blog</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-benin-yellow transition-colors">Shop</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link to="/talking-drum" className="text-gray-300 hover:text-benin-yellow transition-colors">The Talking Drum</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-benin-yellow transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@sweetbenin.com" className="text-gray-300 hover:text-benin-yellow transition-colors flex items-center">
                <SafeIcon icon={FiMail} className="w-4 h-4 mr-2" />
                Get in Touch
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Sweet Benin. All rights reserved. Made with love for the African diaspora.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;