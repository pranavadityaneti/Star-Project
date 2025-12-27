import React from 'react';
import { ScreenName } from '../types';

interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
  isDark: boolean;
  language: string;
}

const navTranslations: Record<string, Record<string, string>> = {
  EN: { home: 'Home', events: 'Events', arena: 'Arena', profile: 'Profile' },
  TE: { home: 'హోమ్', events: 'ఈవెంట్‌లు', arena: 'అరేనా', profile: 'ప్రొఫైల్' },
  TA: { home: 'முகப்பு', events: 'நிகழ்வுகள்', arena: 'அரங்கம்', profile: 'சுயவிவரம்' },
  KA: { home: 'ಮುಖಪುಟ', events: 'ಕಾರ್ಯಕ್ರಮಗಳು', arena: 'ಅಖಾಡ', profile: 'ಪ್ರೊಫೈಲ್' },
  HI: { home: 'होम', events: 'इवेंट्स', arena: 'एरीना', profile: 'प्रोफाइल' },
  ML: { home: 'ഹോം', events: 'ഇവന്റുകൾ', arena: 'അരീന', profile: 'പ്രൊഫൈൽ' },
};

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate, isDark, language }) => {
  const navClass = isDark 
    ? "bg-dark-bg/90 border-white/5 text-slate-400" 
    : "bg-white/95 border-gray-200 text-gray-400";
    
  const activeClass = isDark ? "text-primary-light" : "text-primary";
  const inactiveClass = isDark ? "text-slate-400 hover:text-white" : "text-gray-400 hover:text-primary";

  const t = navTranslations[language] || navTranslations['EN'];

  const NavItem = ({ screen, icon, label, filled = false }: { screen: ScreenName, icon: string, label: string, filled?: boolean }) => {
    const isActive = currentScreen === screen;
    return (
      <button 
        onClick={() => onNavigate(screen)}
        className={`flex flex-col items-center justify-center w-16 h-12 gap-1 transition-colors relative ${isActive ? activeClass : inactiveClass}`}
      >
        {isActive && <span className={`absolute -top-2 w-1 h-1 rounded-full ${isDark ? 'bg-primary-light' : 'bg-primary'}`}></span>}
        <span 
          className={`material-symbols-outlined text-[24px] ${filled || isActive ? 'filled' : ''}`}
        >
          {icon}
        </span>
        <span className="text-[10px] font-medium">{label}</span>
      </button>
    );
  };

  return (
    <nav className={`fixed bottom-0 left-0 w-full z-50 backdrop-blur-xl border-t pb-safe pt-2 ${navClass}`}>
      <div className="flex justify-around items-center px-2 pb-5 h-14">
        <NavItem screen="feed" icon="home" label={t.home} filled={currentScreen === 'feed'} />
        <NavItem screen="events" icon="explore" label={t.events} />
        
        {/* Floating Middle Button space if we wanted one, but strictly following the screenshot layout which distributes them evenly or uses a specific set */}
        <NavItem screen="arena" icon="trophy" label={t.arena} />
        
        <button 
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center justify-center w-16 h-12 gap-1 transition-colors ${currentScreen === 'profile' ? activeClass : inactiveClass}`}
        >
          <div 
            className={`w-6 h-6 rounded-full bg-cover bg-center border ${isActive('profile') ? (isDark ? 'border-primary-light' : 'border-primary') : 'border-transparent'}`}
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP6XnyBsWux0cXMFiQk7WoFlCxTN9JveKtyqc1dM5ZG1FeiynpjbBfmsNizKTXbh6rVNY-dDjT8s_rpPqW1-e8ILeBNCJ84WHx8m8Ze3ZBEjgauTn5djX0eJLapas9vSBBy-J-SLZnPTyT70goAFo48GuNYxlnp73IKmc7OjV1vZgcGNymFY218B1bcysO3q-1JGaHC_fhAWx8RdkbMbeHz908ZuFYqVmZebaJUEDCDuk4twsDCvSGYFYMgL_zrSGzA6zTD5ADsVq-")' }}
          ></div>
          <span className="text-[10px] font-medium">{t.profile}</span>
        </button>
      </div>
    </nav>
  );

  function isActive(s: ScreenName) {
    return currentScreen === s;
  }
};