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

  // Based on the screenshots:
  // Feed & Arena are Dark
  // Events, Create Post, Profile are Light
  // We handle the background class in the individual screens, but we need to tell BottomNav how to style itself.
  const isDarkScreen = currentScreen === 'feed' || currentScreen === 'arena';

  const renderScreen = () => {
    switch (currentScreen) {
      case 'feed':
        return <FeedScreen onCreatePost={() => setShowCreatePost(true)} />;
      case 'arena':
        return <ArenaScreen />;
      case 'events':
        return <EventsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <FeedScreen onCreatePost={() => setShowCreatePost(true)} />;
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

      {/* Navigation - Always visible unless CreatePost is open (though in many apps it might hide, sticking to layout) */}
      {!showCreatePost && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
          isDark={isDarkScreen}
        />
      )}
    </div>
  );
}