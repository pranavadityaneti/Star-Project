import React, { useState } from 'react';

interface FeedScreenProps {
  onCreatePost: () => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const translations: Record<string, Record<string, string>> = {
  EN: {
    search: "Search shows, theories, users...",
    trending: "Trending",
    new: "New",
    topContests: "Top Contests",
    fanArt: "Fan Art",
    events: "Events",
    spoiler: "Spoiler",
    tapReveal: "Tap to reveal spoiler",
    share: "Share",
    officialContest: "Official Contest",
    contestTitle: "Weekly Trivia: Win a signed poster!",
    contestDesc: "Test your knowledge of Season 4. Top 10 scores get exclusive merch.",
    endsIn: "Ends in 2h",
    enter: "Enter Contest",
    theory: "Theory",
    theoryTitle: "Character arc prediction for next season: The betrayer is closer than we think.",
    theoryDesc: "Based on the subtle cues in the dialogue during the banquet scene, I'm almost certain that the Captain knows about the mutiny.",
    spoilerTitle: "Who else thinks the finale of 'Dark Mirror' was hinted at in Episode 2?",
    ago4h: "4h ago",
    ago8h: "8h ago",
    comment: "Comment",
  },
  TE: {
    search: "షోలు, సిద్ధాంతాలు, వినియోగదారులను శోధించండి...",
    trending: "ట్రెండింగ్",
    new: "కొత్తవి",
    topContests: "అగ్ర పోటీలు",
    fanArt: "ఫ్యాన్ ఆర్ట్",
    events: "ఈవెంట్‌లు",
    spoiler: "స్పాయిలర్",
    tapReveal: "స్పాయిలర్ చూడటానికి నొక్కండి",
    share: "షేర్",
    officialContest: "అధికారిక పోటీ",
    contestTitle: "వీక్లీ ట్రివియా: సంతకం చేసిన పోస్టర్‌ని గెలవండి!",
    contestDesc: "సీజన్ 4 పై మీ పరిజ్ఞానాన్ని పరీక్షించుకోండి. టాప్ 10 స్కోర్‌లకు ప్రత్యేక బహుమతులు.",
    endsIn: "2 గంటల్లో ముగుస్తుంది",
    enter: "పోటీలో చేరండి",
    theory: "సిద్ధాంతం",
    theoryTitle: "తదుపరి సీజన్ అంచనా: ద్రోహి మనం అనుకున్నదానికంటే దగ్గరగా ఉన్నాడు.",
    theoryDesc: "విందు సన్నివేశంలో సంభాషణలోని సూక్ష్మ సూచనల ఆధారంగా, కెప్టెన్‌కు తిరుగుబాటు గురించి తెలుసు అని నేను ఖచ్చితంగా అనుకుంటున్నాను.",
    spoilerTitle: "'డార్క్ మిర్రర్' ముగింపు ఎపిసోడ్ 2 లోనే సూచించబడిందని ఇంకెవరైనా అనుకుంటున్నారా?",
    ago4h: "4గం క్రితం",
    ago8h: "8గం క్రితం",
    comment: "కామెంట్",
  },
  TA: {
    search: "நிகழ்ச்சிகள், கோட்பாடுகள், பயனர்களைத் தேடுங்கள்...",
    trending: "டிரெண்டிங்",
    new: "புதியது",
    topContests: "சிறந்த போட்டிகள்",
    fanArt: "ரசிகர் கலை",
    events: "நிகழ்வுகள்",
    spoiler: "ஸ்பாய்லர்",
    tapReveal: "காண தட்டவும்",
    share: "பகிர்",
    officialContest: "அதிகாரப்பூர்வ போட்டி",
    contestTitle: "வாராந்திர ட்ரிவியா: கையெழுத்திட்ட சுவரொட்டியை வெல்லுங்கள்!",
    contestDesc: "சீசன் 4 இல் உங்கள் அறிவை சோதிக்கவும். சிறந்த 10 மதிப்பெண்களுக்கு பிரத்யேக பொருட்கள் கிடைக்கும்.",
    endsIn: "2 மணிநேரத்தில் முடிகிறது",
    enter: "போட்டியில் சேரவும்",
    theory: "கோட்பாடு",
    theoryTitle: "அடுத்த சீசனுக்கான பாத்திரக் கணிப்பு: துரோகி நாம் நினைப்பதை விட நெருக்கமாக இருக்கிறார்.",
    theoryDesc: "விருந்து காட்சியில் உரையாடலின் போது நுட்பமான குறிப்புகளின் அடிப்படையில், கேப்டனுக்கு கலகம் பற்றி தெரியும் என்று நான் உறுதியாக நம்புகிறேன்.",
    spoilerTitle: "'டார்க் மிரர்' இறுதிப் போட்டி எபிசோட் 2 இல் குறிக்கப்பட்டதா என்று வேறு யாராவது நினைக்கிறீர்களா?",
    ago4h: "4 ம முன்",
    ago8h: "8 ம முன்",
    comment: "கருத்து",
  },
  HI: {
    search: "शो, सिद्धांत, उपयोगकर्ता खोजें...",
    trending: "ट्रेंडिंग",
    new: "नया",
    topContests: "शीर्ष प्रतियोगिताएं",
    fanArt: "फैन आर्ट",
    events: "कार्यक्रम",
    spoiler: "स्पॉइलर",
    tapReveal: "प्रकट करने के लिए टैप करें",
    share: "शेयर",
    officialContest: "आधिकारिक प्रतियोगिता",
    contestTitle: "साप्ताहिक सामान्य ज्ञान: एक हस्ताक्षरित पोस्टर जीतें!",
    contestDesc: "सीज़न 4 के अपने ज्ञान का परीक्षण करें। शीर्ष 10 स्कोर को विशेष मर्चेंडाइज मिलता है।",
    endsIn: "2 घंटे में समाप्त",
    enter: "प्रतियोगिता में भाग लें",
    theory: "सिद्धांत",
    theoryTitle: "अगले सीज़न के लिए चरित्र भविष्यवाणी: विश्वासघाती हमारी सोच से अधिक करीब है।",
    theoryDesc: "भोज दृश्य के दौरान संवाद में सूक्ष्म संकेतों के आधार पर, मुझे लगभग यकीन है कि कप्तान को विद्रोह के बारे में पता है।",
    spoilerTitle: "क्या किसी और को लगता है कि 'डार्क मिरर' का फिनाले एपिसोड 2 में संकेत दिया गया था?",
    ago4h: "4 घंटे पहले",
    ago8h: "8 घंटे पहले",
    comment: "टिप्पणी",
  },
  KA: {
    search: "ಪ್ರದರ್ಶನಗಳು, ಸಿದ್ಧಾಂತಗಳು, ಬಳಕೆದಾರರನ್ನು ಹುಡುಕಿ...",
    trending: "ಟ್ರೆಂಡಿಂಗ್",
    new: "ಹೊಸ",
    topContests: "ಉನ್ನತ ಸ್ಪರ್ಧೆಗಳು",
    fanArt: "ಫ್ಯಾನ್ ಆರ್ಟ್",
    events: "ಕಾರ್ಯಕ್ರಮಗಳು",
    spoiler: "ಸ್ಪಾಯ್ಲರ್",
    tapReveal: "ನೋಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
    share: "ಹಂಚಿಕೊಳ್ಳಿ",
    officialContest: "ಅಧಿಕೃತ ಸ್ಪರ್ಧೆ",
    contestTitle: "ವಾರದ ರಸಪ್ರಶ್ನೆ: ಸಹಿ ಮಾಡಿದ ಪೋಸ್ಟರ್ ಗೆಲ್ಲಿರಿ!",
    contestDesc: "ಸೀಸನ್ 4 ರ ಬಗ್ಗೆ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ. ಟಾಪ್ 10 ಸ್ಕೋರ್‌ಗಳು ವಿಶೇಷ ಬಹುಮಾನಗಳನ್ನು ಪಡೆಯುತ್ತವೆ.",
    endsIn: "2 ಗಂಟೆಗಳಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ",
    enter: "ಸ್ಪರ್ಧೆಗೆ ಸೇರಿ",
    theory: "ಸಿದ್ಧಾಂತ",
    theoryTitle: "ಮುಂದಿನ ಸೀಸನ್‌ಗಾಗಿ ಪಾತ್ರದ ಭವಿಷ್ಯವಾಣಿ: ದ್ರೋಹಿ ನಾವು ಅಂದುಕೊಂಡಿದ್ದಕ್ಕಿಂತ ಹತ್ತಿರವಾಗಿದ್ದಾರೆ.",
    theoryDesc: "ಔತಣಕೂಟದ ದೃಶ್ಯದಲ್ಲಿನ ಸಂಭಾಷಣೆಯಲ್ಲಿನ ಸೂಕ್ಷ್ಮ ಸುಳಿವುಗಳ ಆಧಾರದ ಮೇಲೆ, ದಂಗೆಯ ಬಗ್ಗೆ ಕ್ಯಾಪ್ಟನ್‌ಗೆ ತಿಳಿದಿದೆ ಎಂದು ನನಗೆ ಖಾತ್ರಿಯಿದೆ.",
    spoilerTitle: "'ಡಾರ್ಕ್ ಮಿರರ್' ಫಿನಾಲೆಯನ್ನು ಎಪಿಸೋಡ್ 2 ರಲ್ಲಿ ಸೂಚಿಸಲಾಗಿದೆ ಎಂದು ಬೇರೆ ಯಾರಾದರೂ ಭಾವಿಸುತ್ತೀರಾ?",
    ago4h: "4 ಗಂಟೆಗಳ ಹಿಂದೆ",
    ago8h: "8 ಗಂಟೆಗಳ ಹಿಂದೆ",
    comment: "ಕಾಮೆಂಟ್",
  },
  ML: {
    search: "ഷോകൾ, സിദ്ധാന്തങ്ങൾ, ഉപയോക്താക്കൾ എന്നിവ തിരയുക...",
    trending: "ട്രെൻഡിംഗ്",
    new: "പുതിയത്",
    topContests: "മികച്ച മത്സരങ്ങൾ",
    fanArt: "ഫാൻ ആർട്ട്",
    events: "ഇവന്റുകൾ",
    spoiler: "സ്പോയിലർ",
    tapReveal: "കാണാൻ ടാപ്പ് ചെയ്യുക",
    share: "പങ്കിടുക",
    officialContest: "ഔദ്യോഗിക മത്സരം",
    contestTitle: "പ്രതിവാര ട്രിവിയ: ഒപ്പിട്ട പോസ്റ്റർ നേടൂ!",
    contestDesc: "സീസൺ 4-നെക്കുറിച്ചുള്ള നിങ്ങളുടെ അറിവ് പരിശോധിക്കുക. മികച്ച 10 സ്കോറുകൾക്ക് എക്സ്ക്ലൂസീവ് മർച്ചൻഡൈസ് ലഭിക്കും.",
    endsIn: "2 മണിക്കൂറിനുള്ളിൽ അവസാനിക്കും",
    enter: "മത്സരത്തിൽ ചേരുക",
    theory: "സിദ്ധാന്തം",
    theoryTitle: "അടുത്ത സീസണിലേക്കുള്ള പ്രവചനം: വഞ്ചകൻ നമ്മൾ കരുതുന്നതിലും അടുത്താണ്.",
    theoryDesc: "വിരുന്നിനിടയിലെ സംഭാഷണത്തിലെ സൂക്ഷ്മമായ സൂചനകളെ അടിസ്ഥാനമാക്കി, കലാപത്തെക്കുറിച്ച് ക്യാപ്റ്റന് അറിയാമെന്ന് എനിക്ക് ഉറപ്പുണ്ട്.",
    spoilerTitle: "'ഡാർക്ക് മിറർ' ഫിനാലെ എപ്പിസോഡ് 2-ൽ സൂചിപ്പിച്ചിട്ടുണ്ടെന്ന് മറ്റാരെങ്കിലും കരുതുന്നുണ്ടോ?",
    ago4h: "4 മണിക്കൂർ മുമ്പ്",
    ago8h: "8 മണിക്കൂർ മുമ്പ്",
    comment: "കമന്റ്",
  }
};

export const FeedScreen: React.FC<FeedScreenProps> = ({ onCreatePost, language, onLanguageChange }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'TE', label: 'Telugu' },
    { code: 'TA', label: 'Tamil' },
    { code: 'KA', label: 'Kannada' },
    { code: 'HI', label: 'Hindi' },
    { code: 'ML', label: 'Malayalam' },
  ];

  // Helper function to get translation
  const t = (key: string) => {
    return translations[language]?.[key] || translations['EN'][key] || key;
  };

  return (
    <div className="min-h-screen bg-light-bg text-slate-900 pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[20px]">tv</span>
            </div>
            <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">TV Fanatics</h2>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex h-9 items-center gap-1.5 pl-2 pr-3 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-700 transition-colors border border-transparent active:border-primary/20"
              >
                <span className="material-symbols-outlined text-[18px]">translate</span>
                <span className="text-xs font-bold">{language}</span>
              </button>

              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)}></div>
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-1 animate-in fade-in zoom-in-95 duration-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-primary bg-primary/5' : 'text-slate-700'}`}
                      >
                        {lang.label}
                        {language === lang.code && <span className="material-symbols-outlined text-[16px]">check</span>}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative">
              <span className="material-symbols-outlined text-slate-700" style={{ fontSize: '24px' }}>notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-2">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-10 bg-gray-100 transition-all focus-within:ring-2 focus-within:ring-primary/50 focus-within:bg-white border border-transparent focus-within:border-primary/20">
              <div className="text-gray-400 flex items-center justify-center pl-3 pr-2">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input 
                className="flex w-full bg-transparent border-none text-slate-900 focus:outline-0 focus:ring-0 h-full placeholder:text-gray-400 px-0 text-sm font-medium" 
                placeholder={t('search')}
              />
            </div>
          </label>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 shadow-lg shadow-primary/20">
            <span className="text-white text-sm font-bold">{t('trending')}</span>
          </button>
          {[
            { id: 'new', label: t('new') },
            { id: 'topContests', label: t('topContests') },
            { id: 'fanArt', label: t('fanArt') },
            { id: 'events', label: t('events') }
          ].map((filter) => (
            <button key={filter.id} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-4 active:bg-gray-100 shadow-sm">
              <span className="text-gray-600 text-sm font-medium">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feed Content */}
      <main className="flex flex-col gap-4 p-4">
        {/* Post 1: Spoiler */}
        <article className="flex flex-col rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv6X3vvjUzZ-dpilVnpqHTu83k89W7HPA9xFuLvrrgV21zDYzrK8cK3vR38DgXZCaRykQDhfQyNYqLJVg5_XYFUp5C-8LuqLMYGRrljDHmDIcDBZYy0QDgjK4ng7uOjsIVIctAjT4AdIl3Su2YP__pCqu8hDSRMv4xOkvZ2R9BnnpQ4vjVl7fWuqYG4H5Mzo4i7Cmt_v7QBy0GApKtRljB2Uii1TpE1_sRZIFBjrWpC3bVQOPeakq_QwAzCFRJBYqus0tkLIg_qdPs")' }}></div>
              <div className="flex flex-col">
                <p className="text-slate-900 text-sm font-bold line-clamp-1">DarkMirrorFan_99</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-xs font-medium">{t('ago4h')}</p>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">{t('spoiler')}</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-slate-900">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
            </button>
          </div>
          <div className="mb-3">
            <h3 className="text-slate-900 text-lg font-bold leading-tight mb-2">{t('spoilerTitle')}</h3>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 p-3 cursor-pointer group">
              <p className="text-gray-400 blur-sm select-none text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 group-hover:bg-transparent transition-colors">
                <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                  <span className="material-symbols-outlined text-primary text-sm">visibility_off</span>
                  <span className="text-xs font-bold text-slate-700">{t('tapReveal')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-2 py-1 gap-1">
                <button className="text-gray-500 hover:text-primary active:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_upward</span>
                </button>
                <span className="text-sm font-bold text-slate-700">1.2k</span>
                <button className="text-gray-500 hover:text-red-500 active:text-red-500 transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_downward</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors ml-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble_outline</span>
                <span className="text-sm font-medium">340</span>
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>ios_share</span>
              <span className="text-sm font-medium hidden sm:block">{t('share')}</span>
            </button>
          </div>
        </article>

        {/* Post 2: Contest */}
        <article className="flex flex-col items-stretch justify-start rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden relative">
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">{t('officialContest')}</span>
          </div>
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH36UWmRyKAggiOebjbIfA_m_j3GkWAt4MPFHcUNHqf55ApknFIIkoQ8XJ7zNcprPrn9RgKzcryF5ruarMvokPgCxzSvDnX4csJNnOrdQFHLubRKTS7DwM7ovjrg1OXwzQ40QyeHP1RQGQc9oXWxjhAGauxVZ_p7B1EeRoBNmO42889sAQGJ0micLStuixmII1qDcQrfg2CGIBVZp2PX0TGyFvqS-qmAKAZyCmwl4afhEa7AO0IOeMZcCDCf8ezS1WLPuHZZGrs_dV")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center gap-1 p-4 -mt-12 relative z-20">
            <h3 className="text-slate-900 text-xl font-bold leading-tight drop-shadow-sm mb-1">{t('contestTitle')}</h3>
            <p className="text-slate-600 text-sm font-normal leading-relaxed mb-4">{t('contestDesc')}</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border border-white bg-gray-200 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCySrtJ1X99z9oNGNeMXkbWJm_tq9LDPy8lFFPXpSQabuygYcuilR3HJtS-aYnmZmPINEGI69h-YggLuS9OP80MKCmuDMLgpqGejnpV-ZQH7hCwQvXO68c6V_c69RkevBDPV5ax2y2FyOA2GRpi-7TqxDnKyr7Lj8uwFFGuFDK3bpNM__BAQEoOZI0jWMO8ntrQmRa5fjkytuiClkKduIdxU0KPWCte7mW68Q-FKkrAW9z1-y7nc5sTQ54N0PDTGxyl5FyNdmRgi9K")' }}></div>
                <div className="w-6 h-6 rounded-full border border-white bg-gray-200 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6_RD_WkfGFQJtPew7MA1y4BVUsE40Qvz2BzNrXi2Z8Uv47Pk5fMJ4_KJDyJolKReFPRowLhNtVVrKOY123JIyRrO9ggSHYzDXpPg3DhTsuz-UnkzeT8u7QfsTIwCFw5aPGkwD-_JCHHsU1S71L8TK4VhFIZ6TfGqKtlnchk9KZGgwZkoOylFMO-RU6jmMOZ1ZNJB3ynKWecjUK2IaaKIca_acfIfrO8A-I5cJZUXOHz9PoPo0c-N-nWpGB6M-AEiK8K8kInWxtn-P")' }}></div>
                <div className="w-6 h-6 rounded-full border border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-slate-600">+42</div>
              </div>
              <p className="text-gray-500 text-xs">{t('endsIn')}</p>
            </div>
            <button className="mt-4 w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
              {t('enter')}
            </button>
          </div>
        </article>

        {/* Post 3: Image Theory */}
        <article className="flex flex-col rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbsCcWcwHKrf69QkyHZk23RhJ_8t3Fo9mSf0BGtzP7oNjKr31r5UYQrDBR2DHgN4-4VE43EjMd9rPmWto5UgSpElkMhOIBdf59oTA2mvU_CNzLMLNLptYZ7ynAovXywY88ZKVnIxs_XNJoKD6o2Fq49-Jl-jRpU0sPS9BPwHyBmuxV7SfUDERMGBMW6oybRedsUdiaGaTwQpHZvf9xob5ytIqb5Tt4px6ucimhugOHc1wUd3PDoeeELK6I402lciWW4Qu2E5KDdq2g")' }}></div>
              <div className="flex flex-col">
                <p className="text-slate-900 text-sm font-bold line-clamp-1">SciFi_Theorist</p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-xs font-medium">{t('ago8h')}</p>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span className="text-xs font-bold text-purple-600 bg-purple-100 px-1.5 py-0.5 rounded">{t('theory')}</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-slate-900">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
            </button>
          </div>
          <div className="mb-3">
            <h3 className="text-slate-900 text-lg font-bold leading-tight mb-2">{t('theoryTitle')}</h3>
            <div className="w-full rounded-lg bg-gray-100 overflow-hidden mb-2">
              <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBki0VnS0imQASvUGemGyyBLFBZgMGspH2Iyqrx8bXLwL7gDPGEN0AOO5IoAX9xZbelZ5MQuKqMt2yIRs7buZGFiXfz6qyZkfJDaX1Ti8rrBXE1CGBsbrroMTc5bPj7yHJXCGNMoRO7S-A1x-OBNNcxXLggl-rK2hVX0kvSmiPTmGP0_-3S2WOMop3X_mkQ7i3eTx_jQ4cWljMRgFvIdmZYrtiXJVdu86HsSr7oIH5vB9otemNPlvryRsE7DR136jogN3e8U76LThLz")' }}></div>
            </div>
            <p className="text-slate-600 text-sm leading-normal line-clamp-3">
              {t('theoryDesc')}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-2 py-1 gap-1">
                <button className="text-primary hover:text-primary active:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined filled" style={{ fontSize: '20px' }}>arrow_upward</span>
                </button>
                <span className="text-sm font-bold text-slate-700">2.5k</span>
                <button className="text-gray-500 hover:text-red-500 active:text-red-500 transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_downward</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors ml-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble_outline</span>
                <span className="text-sm font-medium">89</span>
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-2 py-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>ios_share</span>
            </button>
          </div>
        </article>
      </main>

      {/* FAB */}
      <div className="fixed bottom-24 right-4 z-40">
        <button 
          onClick={onCreatePost}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-glow text-white transition-transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
        </button>
      </div>
    </div>
  );
};