import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiCalendar, FiTag, FiUser, FiHeart, FiMessageCircle } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Cultural Explorer',
      content: 'This is such an insightful article! I learned so much about the history behind these beautiful bronze pieces.',
      date: '2024-01-16',
      likes: 5
    },
    {
      id: 2,
      author: 'Art Lover',
      content: 'Thank you for sharing this knowledge. The craftsmanship described here is truly remarkable.',
      date: '2024-01-15',
      likes: 3
    }
  ]);

  // Sample blog post data - in a real app, this would be fetched based on the ID
  const blogPost = {
    id: 1,
    title: 'The History and Significance of Benin Bronze',
    content: `
      <p>The Benin Bronzes are among the most celebrated works of art from Africa, representing centuries of skilled craftsmanship and rich cultural heritage. These magnificent sculptures and plaques tell the story of the great Kingdom of Benin, which flourished in what is now southern Nigeria from the 13th to the 19th centuries.</p>
      
      <h2>Origins and Historical Context</h2>
      <p>The art of bronze casting in Benin dates back to the 13th century, when the technique was first introduced to the royal court. The guild of bronze casters, known as the Igun-Eronmwon, held a prestigious position in Benin society and were responsible for creating works exclusively for the Oba (king) and his court.</p>
      
      <p>These artworks served multiple purposes: they decorated the royal palace, commemorated important events and people, and demonstrated the power and wealth of the Benin Empire. The intricate details and sophisticated techniques used in their creation reflect the high level of artistic achievement reached by Benin craftsmen.</p>
      
      <h2>Artistic Techniques and Materials</h2>
      <p>Contrary to their name, the "Benin Bronzes" are actually made from brass, an alloy of copper and zinc. The lost-wax casting technique, known locally as "cire perdue," was used to create these masterpieces. This process involved:</p>
      
      <ul>
        <li>Creating a detailed wax model of the desired sculpture</li>
        <li>Covering the wax with clay to form a mold</li>
        <li>Heating the mold to melt out the wax</li>
        <li>Pouring molten brass into the cavity left by the wax</li>
        <li>Breaking away the clay mold to reveal the finished bronze</li>
      </ul>
      
      <h2>Cultural Significance</h2>
      <p>Each bronze piece carries deep cultural meaning. The plaques that once adorned the pillars of the royal palace depicted historical events, court ceremonies, and the genealogy of the royal family. Portrait heads honored deceased Obas and queen mothers, while animal figures represented the power and authority of the monarchy.</p>
      
      <p>The leopard, for instance, was a symbol of royal power, while the mudfish represented the king's ability to move between the earthly and spiritual realms. These symbols were not merely decorative but served as visual narratives that preserved and transmitted cultural knowledge across generations.</p>
      
      <h2>The 1897 Expedition and Its Aftermath</h2>
      <p>The British punitive expedition of 1897 marked a tragic turning point in the history of these artworks. Thousands of bronze plaques, sculptures, and other treasures were looted from the royal palace and dispersed to museums and private collections around the world. This event not only robbed the Benin people of their cultural heritage but also disrupted the continuity of artistic traditions.</p>
      
      <h2>Contemporary Relevance and Repatriation Efforts</h2>
      <p>Today, there is growing international recognition of the need to return these cultural artifacts to their homeland. Museums worldwide are beginning to acknowledge the colonial circumstances under which these works were acquired and are engaging in discussions about repatriation.</p>
      
      <p>The Benin Bronzes continue to inspire contemporary African artists and serve as powerful symbols of African artistic achievement. They remind us of the sophisticated civilizations that flourished in Africa long before European contact and challenge Western narratives about African history and culture.</p>
      
      <h2>Preserving the Legacy</h2>
      <p>Understanding and appreciating the Benin Bronzes is crucial for preserving African cultural heritage. These works represent not just artistic excellence but also the complex social, political, and spiritual life of the Benin Kingdom. They stand as testament to the creativity, skill, and cultural sophistication of African civilizations.</p>
      
      <p>As we continue to learn about and from these magnificent artworks, we honor the memory of the craftsmen who created them and the culture they represent. The Benin Bronzes remain a source of pride for the African diaspora and a bridge connecting past and present, tradition and modernity.</p>
    `,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    date: '2024-01-15',
    category: 'Art & Culture',
    readTime: '8 min read',
    author: 'Sweet Benin Team'
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: 'Guest User',
        content: comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/blog"
            className="text-benin-green hover:text-benin-yellow transition-colors flex items-center"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
              <span className="mr-4">{new Date(blogPost.date).toLocaleDateString()}</span>
              <SafeIcon icon={FiTag} className="w-4 h-4 mr-1" />
              <span className="mr-4">{blogPost.category}</span>
              <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
              <span className="mr-4">{blogPost.author}</span>
              <span>{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </motion.article>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <SafeIcon icon={FiMessageCircle} className="w-6 h-6 mr-2" />
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <div className="mb-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                placeholder="Share your thoughts about this article..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-benin-green resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-benin-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-benin-green rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{comment.author}</p>
                      <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button className="flex items-center text-gray-500 hover:text-benin-green transition-colors">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 mr-1" />
                    <span className="text-sm">{comment.likes}</span>
                  </button>
                </div>
                <p className="text-gray-700 ml-13">{comment.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;