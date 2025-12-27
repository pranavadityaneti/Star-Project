import React, { useState } from 'react';
import { ScreenName } from './types';
import { FeedScreen } from './screens/FeedScreen';
import { CreatePostScreen } from './screens/CreatePostScreen';
import { ArenaScreen } from './screens/ArenaScreen';
import { EventsScreen } from './screens/EventsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('feed');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [language, setLanguage] = useState('EN');

  // All screens are now light mode based on the request
  const isDarkScreen = false;

  const renderScreen = () => {
    switch (currentScreen) {
      case 'feed':
        return <FeedScreen 
          onCreatePost={() => setShowCreatePost(true)} 
          language={language}
          onLanguageChange={setLanguage}
        />;
      case 'arena':
        return <ArenaScreen language={language} />;
      case 'events':
        return <EventsScreen language={language} />;
      case 'profile':
        return <ProfileScreen language={language} />;
      default:
        return <FeedScreen 
          onCreatePost={() => setShowCreatePost(true)} 
          language={language}
          onLanguageChange={setLanguage}
        />;
    }
  };

  return (
    // Outer container
    <div className={`relative w-full mx-auto max-w-md bg-white min-h-screen shadow-2xl overflow-hidden`}>
      {renderScreen()}
      
      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePostScreen onClose={() => setShowCreatePost(false)} />
      )}

      {/* Navigation - Always visible unless CreatePost is open */}
      {!showCreatePost && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
          isDark={isDarkScreen}
          language={language}
        />
      )}
    </div>
  );
}