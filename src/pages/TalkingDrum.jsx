import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMessageCircle, FiUser, FiClock } = FiIcons;

const TalkingDrum = () => {
  const [showNewTopicForm, setShowNewTopicForm] = useState(false);
  const [newTopic, setNewTopic] = useState({ title: '', content: '' });

  // Sample forum data
  const forumTopics = [
    {
      id: 1,
      title: 'Welcome to the Talking Drum Community!',
      author: 'Sweet Benin Team',
      replies: 12,
      lastActivity: '2 hours ago',
      content: 'Welcome to our community forum! This is a place where we can share stories, ask questions, and connect with fellow lovers of West African culture.',
      isSticky: true
    },
    {
      id: 2,
      title: 'Share Your Favorite Beninese Recipe',
      author: 'CultureLover23',
      replies: 8,
      lastActivity: '5 hours ago',
      content: 'I\'d love to learn more traditional recipes from Benin. What are your family favorites?'
    },
    {
      id: 3,
      title: 'Planning a Trip to Benin - Any Recommendations?',
      author: 'Traveler2024',
      replies: 15,
      lastActivity: '1 day ago',
      content: 'Hi everyone! I\'m planning my first trip to Benin next year. What are the must-see places and experiences?'
    },
    {
      id: 4,
      title: 'Traditional Music Instruments Discussion',
      author: 'MusicEnthusiast',
      replies: 6,
      lastActivity: '2 days ago',
      content: 'Let\'s talk about the beautiful traditional instruments from West Africa. What\'s your favorite?'
    },
    {
      id: 5,
      title: 'Language Learning Exchange',
      author: 'LanguageLearner',
      replies: 20,
      lastActivity: '3 days ago',
      content: 'Anyone interested in practicing local languages? I\'m learning Fon and would love to practice with native speakers.'
    }
  ];

  const handleNewTopicSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New topic:', newTopic);
    setNewTopic({ title: '', content: '' });
    setShowNewTopicForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            The Talking Drum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our community forum where voices unite to share stories, knowledge, and connections across the African diaspora
          </p>
          
          {/* New Topic Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setShowNewTopicForm(true)}
            className="bg-benin-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
            Start New Discussion
          </motion.button>
        </motion.div>

        {/* New Topic Form */}
        {showNewTopicForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start a New Discussion</h2>
            <form onSubmit={handleNewTopicSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Topic Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={newTopic.title}
                  onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green"
                  placeholder="Enter your topic title..."
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  value={newTopic.content}
                  onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green"
                  placeholder="Share your thoughts, questions, or stories..."
                  required
                ></textarea>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-benin-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Post Topic
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewTopicForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Forum Topics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {forumTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                topic.isSticky ? 'border-l-4 border-benin-yellow' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {topic.isSticky && (
                      <span className="bg-benin-yellow text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                        Pinned
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-benin-green transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">{topic.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                      {topic.author}
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4 mr-1" />
                      {topic.replies} replies
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      {topic.lastActivity}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6 mt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Guidelines</h2>
          <div className="space-y-3 text-gray-600">
            <p>• Be respectful and welcoming to all community members</p>
            <p>• Share authentic experiences and knowledge about West African culture</p>
            <p>• Keep discussions relevant and constructive</p>
            <p>• No spam, advertising, or inappropriate content</p>
            <p>• Help create a safe space for learning and cultural exchange</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TalkingDrum;