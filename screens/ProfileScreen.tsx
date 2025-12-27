import React from 'react';

interface ProfileScreenProps {
  language: string;
}

const translations: Record<string, Record<string, string>> = {
  EN: {
    headerTitle: "My Profile",
    fanType: "Sci-Fi Fanatic",
    topPoster: "Top Poster",
    watching: "Watching:",
    btnEdit: "Edit Profile",
    btnShare: "Share",
    rankTitle: "Current Rank",
    xpToNext: "350 XP to Lvl 15",
    statsTitle: "Community Stats",
    statEngagement: "Engagement",
    statPosts: "Posts",
    statComments: "Comments",
    statWins: "Wins",
    activityTitle: "Activity",
    last30Days: "Last 30 Days",
    weeklyInteractions: "Weekly Interactions",
    high: "High"
  },
  TE: {
    headerTitle: "నా ప్రొఫైల్",
    fanType: "సై-ఫై అభిమాని",
    topPoster: "టాప్ పోస్టర్",
    watching: "వీక్షిస్తున్నారు:",
    btnEdit: "ప్రొఫైల్ సవరించండి",
    btnShare: "షేర్ చేయండి",
    rankTitle: "ప్రస్తుత ర్యాంక్",
    xpToNext: "లెవెల్ 15కి 350 XP",
    statsTitle: "కమ్యూనిటీ గణాంకాలు",
    statEngagement: "ఎంగేజ్‌మెంట్",
    statPosts: "పోస్ట్‌లు",
    statComments: "కామెంట్‌లు",
    statWins: "విజయాలు",
    activityTitle: "కార్యకలాపాలు",
    last30Days: "గత 30 రోజులు",
    weeklyInteractions: "వారపు పరస్పర చర్యలు",
    high: "అధికం"
  },
  TA: {
    headerTitle: "எனது சுயவிவரம்",
    fanType: "அறிவியல் புனைகதை ரசிகர்",
    topPoster: "சிறந்த பதிவாளர்",
    watching: "பார்க்கிறார்:",
    btnEdit: "சுயவிவரத்தைத் திருத்து",
    btnShare: "பகிர்",
    rankTitle: "தற்போதைய தரவரிசை",
    xpToNext: "நிலை 15 க்கு 350 XP",
    statsTitle: "சமூக புள்ளிவிவரங்கள்",
    statEngagement: "ஈடுபாடு",
    statPosts: "பதிவுகள்",
    statComments: "கருத்துகள்",
    statWins: "வெற்றிகள்",
    activityTitle: "செயல்பாடு",
    last30Days: "கடந்த 30 நாட்கள்",
    weeklyInteractions: "வாராந்திர தொடர்புகள்",
    high: "உயர்"
  },
  KA: {
    headerTitle: "ನನ್ನ ಪ್ರೊಫೈಲ್",
    fanType: "ಸೈ-ಫೈ ಅಭಿಮಾನಿ",
    topPoster: "ಟಾಪ್ ಪೋಸ್ಟರ್",
    watching: "ವೀಕ್ಷಿಸುತ್ತಿದ್ದಾರೆ:",
    btnEdit: "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
    btnShare: "ಹಂಚಿಕೊಳ್ಳಿ",
    rankTitle: "ಪ್ರಸ್ತುತ ಶ್ರೇಯಾಂಕ",
    xpToNext: "ಹಂತ 15 ಕ್ಕೆ 350 XP",
    statsTitle: "ಸಮುದಾಯ ಅಂಕಿಅಂಶಗಳು",
    statEngagement: "ಎಂಗೇಜ್‌ಮೆಂಟ್",
    statPosts: "ಪೋಸ್ಟ್‌ಗಳು",
    statComments: "ಕಾಮೆಂಟ್‌ಗಳು",
    statWins: "ಗೆಲುವುಗಳು",
    activityTitle: "ಚಟುವಟಿಕೆ",
    last30Days: "ಕಳೆದ 30 ದಿನಗಳು",
    weeklyInteractions: "ಸಾಪ್ತಾಹಿಕ ಸಂವಹನಗಳು",
    high: "ಹೆಚ್ಚು"
  },
  HI: {
    headerTitle: "मेरी प्रोफाइल",
    fanType: "विज्ञान-फाई प्रशंसक",
    topPoster: "शीर्ष पोस्टर",
    watching: "देख रहे हैं:",
    btnEdit: "प्रोफ़ाइल संपादित करें",
    btnShare: "शेयर करें",
    rankTitle: "वर्तमान रैंक",
    xpToNext: "लेवल 15 के लिए 350 XP",
    statsTitle: "सामुदायिक आँकड़े",
    statEngagement: "जुड़ाव",
    statPosts: "पोस्ट",
    statComments: "टिप्पणियाँ",
    statWins: "जीत",
    activityTitle: "गतिविधि",
    last30Days: "पिछले 30 दिन",
    weeklyInteractions: "साप्ताहिक सहभागिता",
    high: "उच्च"
  },
  ML: {
    headerTitle: "എന്റെ പ്രൊഫൈൽ",
    fanType: "സയൻസ് ഫിക്ഷൻ ആരാധകൻ",
    topPoster: "മികച്ച പോസ്റ്റർ",
    watching: "കാണുന്നു:",
    btnEdit: "പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക",
    btnShare: "പങ്കിടുക",
    rankTitle: "നിലവിലെ റാങ്ക്",
    xpToNext: "ലെവൽ 15-ലേക്ക് 350 XP",
    statsTitle: "കമ്മ്യൂണിറ്റി സ്ഥിതിവിവരക്കണക്കുകൾ",
    statEngagement: "ഇടപെടൽ",
    statPosts: "പോസ്റ്റുകൾ",
    statComments: "കമന്റുകൾ",
    statWins: "വിജയങ്ങൾ",
    activityTitle: "പ്രവർത്തനം",
    last30Days: "കഴിഞ്ഞ 30 ദിവസങ്ങൾ",
    weeklyInteractions: "പ്രതിവാര ഇടപെടലുകൾ",
    high: "ഉയർന്ന"
  }
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ language }) => {
  const t = (key: string) => translations[language]?.[key] || translations['EN'][key] || key;

  return (
    <div className="min-h-screen bg-light-bg text-slate-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-light-bg/95 backdrop-blur-md p-4 pt-4 border-b border-gray-200">
        <div className="w-12"></div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{t('headerTitle')}</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full p-2 hover:bg-black/5 transition-colors">
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Profile Info */}
        <div className="flex flex-col items-center p-6 gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="h-32 w-32 rounded-full p-1 bg-gradient-to-tr from-primary to-purple-400">
                <div className="h-full w-full rounded-full bg-cover bg-center border-4 border-light-bg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1E8f-oERZG2x1igma4UgauwzmXrSFWdbilULDjV1ZxeIVtuWCjJLmHCWcZcgdCNp8UFWKlnWdBeZjvp1L4nExsDP3Qu2Yu81s-Dz--Ozg2pahuHEZK2QnArOq280MZR_6YvgwQG4QhYodPPy9AZf38GVHFJYNh3npu5VzHfx3593oocTcQX_c7HeQyChEWTveT5vjqaj7f0xV1oImFNqv2kbttWjZOpxm-yJRTkA27WtN9Z6osBSsmN6fgamNtEBnJuOSfWeEZ6wB')" }}></div>
              </div>
              <div className="absolute bottom-1 right-1 bg-green-500 h-5 w-5 rounded-full border-4 border-light-bg"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold tracking-tight">Alex_Streamer</h1>
              <p className="text-slate-500 font-medium">@alex_streamer</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">{t('fanType')}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold">{t('topPoster')}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-base">live_tv</span>
                <span>{t('watching')} <span className="font-semibold text-primary">House of the Dragon</span></span>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <button className="flex-1 h-11 items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-all active:scale-[0.98]">{t('btnEdit')}</button>
            <button className="flex-1 h-11 items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-slate-900 text-sm font-bold tracking-wide transition-all active:scale-[0.98]">{t('btnShare')}</button>
          </div>
        </div>

        {/* Level */}
        <div className="px-6 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t('rankTitle')}</p>
                <p className="text-lg font-bold">Level 14 Fan</p>
              </div>
              <p className="text-xs font-medium text-primary">{t('xpToNext')}</p>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 mb-8">
          <h3 className="text-lg font-bold mb-4">{t('statsTitle')}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">bolt</span>
                <span className="text-xs font-bold uppercase tracking-wide">{t('statEngagement')}</span>
              </div>
              <p className="text-2xl font-bold">8,450</p>
              <p className="text-xs text-slate-500">Top 5% of users</p>
            </div>
            {[
              { icon: 'edit_note', label: t('statPosts'), val: '42' }, 
              { icon: 'forum', label: t('statComments'), val: '1,203' }, 
              { icon: 'trophy', label: t('statWins'), val: '5', color: 'text-yellow-500' }
            ].map(s => (
              <div key={s.label} className="p-4 rounded-xl bg-white border border-gray-100 flex flex-col gap-1">
                <div className={`flex items-center gap-2 ${s.color || 'text-slate-500'} mb-1`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wide">{s.label}</span>
                </div>
                <p className="text-2xl font-bold">{s.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">{t('activityTitle')}</h3>
            <span className="text-sm font-medium text-slate-500">{t('last30Days')}</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-100">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-sm text-slate-500">{t('weeklyInteractions')}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{t('high')}</span>
                  <span className="text-sm font-medium text-emerald-500 flex items-center">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                    +15%
                  </span>
                </div>
              </div>
            </div>
            {/* Simple SVG Chart */}
            <div className="relative h-40 w-full">
              <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 40 Q 15 45, 25 35 T 50 20 T 75 25 T 100 10 V 50 H 0 Z" fill="url(#chartGradient)" />
                <path d="M0 40 Q 15 45, 25 35 T 50 20 T 75 25 T 100 10" fill="none" stroke="#7C3AED" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="100" cy="10" fill="#fff" r="1.5" stroke="#7C3AED" strokeWidth="1" />
              </svg>
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};