import React, { useState } from 'react';

interface ArenaScreenProps {
  language: string;
}

const translations: Record<string, Record<string, string>> = {
  EN: {
    headerTitle: "Community Arena",
    tabContests: "Active Contests",
    tabLeaderboards: "Leaderboards",
    cardEndingSoon: "Ending Soon",
    cardJoined: "Joined",
    cardJoinNow: "Join Now",
    cardLive: "LIVE",
    cardTimeLeft: "5h left",
    cardSubmitEntry: "Submit Entry",
    filterWeekly: "This Week",
    filterAllTime: "All Time",
    headerRunnerUps: "Runner Ups",
    rankYou: "You",
    rankMovingUp: "Moving up! 🚀"
  },
  TE: {
    headerTitle: "కమ్యూనిటీ అరేనా",
    tabContests: "క్రియాశీల పోటీలు",
    tabLeaderboards: "లీడర్‌బోర్డులు",
    cardEndingSoon: "త్వరలో ముగుస్తుంది",
    cardJoined: "చేరారు",
    cardJoinNow: "ఇప్పుడే చేరండి",
    cardLive: "లైవ్",
    cardTimeLeft: "5గం మిగిలి ఉంది",
    cardSubmitEntry: "ఎంట్రీ సమర్పించండి",
    filterWeekly: "ఈ వారం",
    filterAllTime: "ఎప్పటికి",
    headerRunnerUps: "రన్నరప్‌లు",
    rankYou: "మీరు",
    rankMovingUp: "పైకి వెళ్తున్నారు! 🚀"
  },
  TA: {
    headerTitle: "சமூக அரங்கம்",
    tabContests: "செயலில் உள்ள போட்டிகள்",
    tabLeaderboards: "லீடர்போர்டுகள்",
    cardEndingSoon: "விரைவில் முடிகிறது",
    cardJoined: "சேர்ந்தார்",
    cardJoinNow: "இப்போது சேரவும்",
    cardLive: "நேரலை",
    cardTimeLeft: "5ம மீதமுள்ளது",
    cardSubmitEntry: "நுழைவை சமர்ப்பிக்கவும்",
    filterWeekly: "இந்த வாரம்",
    filterAllTime: "எல்லா நேரமும்",
    headerRunnerUps: "ரன்னர் அப்ஸ்",
    rankYou: "நீங்கள்",
    rankMovingUp: "முன்னேறுகிறது! 🚀"
  },
  KA: {
    headerTitle: "ಸಮುದಾಯ ಅಖಾಡ",
    tabContests: "ಸಕ್ರಿಯ ಸ್ಪರ್ಧೆಗಳು",
    tabLeaderboards: "ಲೀಡರ್‌ಬೋರ್ಡ್‌ಗಳು",
    cardEndingSoon: "ಶೀಘ್ರದಲ್ಲೇ ಕೊನೆಗೊಳ್ಳಲಿದೆ",
    cardJoined: "ಸೇರಿದ್ದಾರೆ",
    cardJoinNow: "ಈಗಲೇ ಸೇರಿ",
    cardLive: "ಲೈವ್",
    cardTimeLeft: "5 ಗಂಟೆ ಉಳಿದಿದೆ",
    cardSubmitEntry: "ಎಂಟ್ರಿ ಸಲ್ಲಿಸಿ",
    filterWeekly: "ಈ ವಾರ",
    filterAllTime: "ಎಲ್ಲಾ ಸಮಯ",
    headerRunnerUps: "ರನ್ನರ್ ಅಪ್‌ಗಳು",
    rankYou: "ನೀವು",
    rankMovingUp: "ಮೇಲಕ್ಕೆ ಹೋಗುತ್ತಿದ್ದೀರಿ! 🚀"
  },
  HI: {
    headerTitle: "कम्युनिटी एरीना",
    tabContests: "सक्रिय प्रतियोगिताएं",
    tabLeaderboards: "लीडरबोर्ड",
    cardEndingSoon: "जल्द समाप्त",
    cardJoined: "जुड़ गए",
    cardJoinNow: "अभी शामिल हों",
    cardLive: "लाइव",
    cardTimeLeft: "5 घंटे शेष",
    cardSubmitEntry: "प्रविष्टि जमा करें",
    filterWeekly: "इस सप्ताह",
    filterAllTime: "अब तक",
    headerRunnerUps: "रनर अप",
    rankYou: "आप",
    rankMovingUp: "ऊपर बढ़ रहे हैं! 🚀"
  },
  ML: {
    headerTitle: "കമ്മ്യൂണിറ്റി അരീന",
    tabContests: "സജീവ മത്സരങ്ങൾ",
    tabLeaderboards: "ലീഡർബോർഡുകൾ",
    cardEndingSoon: "ഉടൻ അവസാനിക്കും",
    cardJoined: "ചേർന്നു",
    cardJoinNow: "ഇപ്പോൾ ചേരുക",
    cardLive: "തത്സമയം",
    cardTimeLeft: "5 മണിക്കൂർ ബാക്കി",
    cardSubmitEntry: "എൻട്രി സമർപ്പിക്കുക",
    filterWeekly: "ഈ ആഴ്ച",
    filterAllTime: "എല്ലാ സമയവും",
    headerRunnerUps: "റണ്ണർ അപ്പുകൾ",
    rankYou: "നിങ്ങൾ",
    rankMovingUp: "മുകളിലേക്ക് പോകുന്നു! 🚀"
  }
};

export const ArenaScreen: React.FC<ArenaScreenProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'contests' | 'leaderboards'>('contests');
  const [timeframe, setTimeframe] = useState<'weekly' | 'allTime'>('weekly');

  const t = (key: string) => translations[language]?.[key] || translations['EN'][key] || key;

  return (
    <div className="min-h-screen bg-light-bg text-slate-900 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4 pb-2">
          <button className="text-gray-500 hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">{t('headerTitle')}</h2>
          <button className="text-gray-500 hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <section className="px-4 py-3 sticky top-[57px] z-40 bg-light-bg">
        <div className="flex h-12 w-full items-center justify-center rounded-xl bg-gray-200 p-1">
          <button 
            onClick={() => setActiveTab('contests')}
            className={`flex-1 h-full rounded-lg text-sm font-bold transition-all duration-200 ${
              activeTab === 'contests' 
                ? 'bg-white shadow-sm text-slate-900' 
                : 'text-gray-500 hover:text-slate-700'
            }`}
          >
            {t('tabContests')}
          </button>
          <button 
            onClick={() => setActiveTab('leaderboards')}
            className={`flex-1 h-full rounded-lg text-sm font-bold transition-all duration-200 ${
              activeTab === 'leaderboards' 
                ? 'bg-white shadow-sm text-slate-900' 
                : 'text-gray-500 hover:text-slate-700'
            }`}
          >
            {t('tabLeaderboards')}
          </button>
        </div>
      </section>

      {/* Content */}
      <main className="flex flex-col px-4">
        {activeTab === 'contests' ? (
          /* --- Contests View --- */
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <article className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:border-primary/50 transition-colors group">
              <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjn91pMXcsg_YVYQj_8iBnVzd6XGgOxwBT1BcFCsccF37eRD27su5pRPCl5znNEse40KsixG0RsgfUs9gU3u4UV1ZhyAloohpWiqaMpffgc6DCPZuP8dvviS7IToV79N44g81hXIKN8yItZ4RGxV-t0amQcb2OaGhFHVlGjx_oRQMV8gd0-eDTnoz90jtqrB_F2scyEkQVfrzphUSO7Al7nN2SfgzjuPMGScAkjeDfxYwweqnJmTlJYapha_-0uVC94_YQwfetx9NB")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[14px]">timer</span>
                  {t('cardEndingSoon')}
                </div>
              </div>
              <div className="p-5 relative -mt-12">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Stranger Things</p>
                <h3 className="text-slate-900 text-2xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">Predict the Season Finale</h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">Share your best theories on how the final battle will unfold.</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOwlHB8LNdXo9R5J47buXf596_gbNcPzp7IGXbX30T8CsOnqShtGlryMref4r18xCPf8IYwt0F-awRvxslAM5lDU1T_Zou7tXl-VaLsg3daoUJUBYBVj7iUBEqYoX2zpyMgmgwTMbqFxMfgV_UVBPrasHb2y7zb2dln5TwveKyN6E2by3HmXZ7M8e4is8xmeUvNXoveP61SRojEJPzOVvJovw4R5HnU3nVRIamLQxbvAfx4bsqhgpCEl_p431RMMUxghh1ZKC3RKI")' }}></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnvTrYEd7MLTUQlrzdxM2-OQzJZd-ehlPe5P9OLmPIUCUFo6H2DAOkUFJUXuETxCyzfzeNSmaj_Z8jnSVpLbDrcc1w9ndmVy2ML3guD8BxvmWNJvKk72g-bNABG2ZkRoGCMhyK34Hu3FKHoW0dVLSxqg5rxtayhrp_VeTXmqn4EoQILcltdaIr5hUxw13B8bchovKO4GJWorSYmlZg5iCH1gYY8DX1WSflR1gahzvQXVtlKuaI8aL6a-EmGjM9dV7xJqyf6gkAxD6_")' }}></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+1.2k</div>
                    </div>
                    <span className="text-xs font-medium text-gray-500">{t('cardJoined')}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto">
                    <span className="text-primary text-sm font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">military_tech</span>
                      500 XP
                    </span>
                    <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 px-5 rounded-lg transition-all shadow-glow">
                      {t('cardJoinNow')}
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start shadow-sm border border-gray-200">
              <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw-0GYmKkxKnY2b2mkz5vdWLSR6yeOZo1YhdUNp9Lp_JLm_DC9CK7xrKX9CEaWvuO7A2FIjZ_OQXBVp5me6nLPSqtc7B0GSjZqlfGrPjG2REqsqi5THVUJPrRY2PDTMKEHCn8MzJ3rfXBx3Y_zg1Vmc_hkrnWpD2AXXlQerdE2272MfBsYlyhgRB7LxNAvwkVIBCMj5l4A7wV1z_ONQ__mSnMNUovyC8-aQGGaSsdfdhDLj9qTTE4P0fcbGLxAxvX-kq_jzIylcdVa")' }}>
                <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">{t('cardLive')}</div>
              </div>
              <div className="flex flex-col grow justify-between h-full gap-2">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-500 text-xs font-semibold mb-1">The Office</p>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {t('cardTimeLeft')}
                    </span>
                  </div>
                  <h3 className="text-slate-900 text-lg font-bold leading-tight">Meme Contest: Best Jim Prank</h3>
                </div>
                <button className="text-slate-900 bg-gray-100 hover:bg-gray-200 text-sm font-medium py-1.5 px-4 rounded-lg border border-gray-200 transition-colors self-end">
                  {t('cardSubmitEntry')}
                </button>
              </div>
            </article>
          </div>
        ) : (
          /* --- Leaderboards View --- */
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300 pb-32">
            
            {/* Timeframe Filter */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                <button 
                  onClick={() => setTimeframe('weekly')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${timeframe === 'weekly' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {t('filterWeekly')}
                </button>
                <button 
                  onClick={() => setTimeframe('allTime')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${timeframe === 'allTime' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {t('filterAllTime')}
                </button>
              </div>
            </div>

            {/* Podium */}
            <div className="flex items-end justify-center gap-4 py-4 mb-6">
              {/* Rank 2 */}
              <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cover bg-center border-4 border-slate-300 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbK3WiFny1zK6KSYC6jqG6Q86Cr2aTO6pRnjvQEVR3QLdOoNhsjg83FvDvOX7J-l3tA4DyorlGzoIJxXJxeMkBBB_Fczr8SKbYu9uWSoZQ2ggucTJxeA2RRQO6SELpNehyAAtDuDTYkunw-w_VGDb4CpYfNo1W6cnyxRu7OSAiEkbAUr5BkU_7CevTltE7kxTBEAyJCUgT0YbLt6XLtS4R_dsYfYbbVfJS0nzbDLQh2x7fi2zLBVjGCr6pDE8XTzPJQ71HNQGjJJVu")' }}></div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">2</div>
                </div>
                <div className="text-center mt-1">
                  <p className="text-slate-900 text-sm font-bold truncate w-20">Sarah_J</p>
                  <p className="text-gray-500 text-xs font-medium">1,840 XP</p>
                </div>
              </div>
              {/* Rank 1 */}
              <div className="flex flex-col items-center gap-2 w-1/3 -mt-8 relative z-10">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 animate-bounce">
                    <span className="material-symbols-outlined text-3xl filled">crown</span>
                  </div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cover bg-center border-4 border-primary shadow-glow" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5vC5N1hGPfuUr2DzyRkUXzIOtEY8-sH6SL9uH218CLvkz1ibOwevnqnSLYNXHgDOBr5f396rru_X4VugdFVBg_dWSwD7fkPtOUKm7EBB7FiNGxZ0WNqR0l9ubtVusR1Ex0oVtHOovVz4XMIkaHTGQU3g8rjjxOLwHKebaliK_dZDbKDBDizqyRtR7afrfqRpbwg4ECjqiEBA3dFLyWIlxp646noY6j_D_PCATc5i07i-VLu37fxxs7DbOrwJ8qE9rWnYQeN5ZS-y")' }}></div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-white shadow-sm">1</div>
                </div>
                <div className="text-center mt-1">
                  <p className="text-slate-900 text-base font-bold truncate w-24">SuperFan99</p>
                  <p className="text-primary text-sm font-bold">2,150 XP</p>
                </div>
              </div>
              {/* Rank 3 */}
              <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cover bg-center border-4 border-amber-700 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVE6a2lUNy3SIPfn_sow9Hw-FteNEMk1ckfwH92MvQFOLJYlRCxPSN0dz1YW5oIamcn-JZ3E3nbsAgZr1mAFTtyY4GwpXpx9P1rV0m8VIiY8tMv208GlsY7T9YbgXahjdKVElKEOxzA2We7mufDm3mjzKL-f4tc41PTD3PGrhPo1bbA8zpsG1bChxoAjKbglv_6zrG7aK-8uQQRIshq9w0Gh45cdLQ9eSkEVlRuCTHbNazUVDlsB_k2RJyUp6satXDC-zEXO9eMGyG")' }}></div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">3</div>
                </div>
                <div className="text-center mt-1">
                  <p className="text-slate-900 text-sm font-bold truncate w-20">MikeTV</p>
                  <p className="text-gray-500 text-xs font-medium">1,620 XP</p>
                </div>
              </div>
            </div>

            {/* List Ranks Header */}
            <div className="flex items-center gap-4 py-2 mb-2">
               <span className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-2">{t('headerRunnerUps')}</span>
               <div className="h-px bg-gray-100 grow"></div>
            </div>

            {/* List Ranks */}
            <div className="flex flex-col gap-3">
              {[
                { rank: 4, name: 'Eleven_Eggos', role: 'Level 42 Fan', xp: '1,580 XP', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfVuxi6_gbJMIMuzVGvbeMWCgGy1sxEu3Kw-5bgSn8umcjIVq7AOWwhBuAHYKxw88EtdTeYQ_J8r7dvOzBZspQzI1JoUrPmONEmKsr2yMekZ1BHxQjpvwoUumJFrflJPkeoGHuTjtZ9nnZ_6xqvSkYhKjnH9j1-8krLIY-eWheHrwb3D5O5MC_zwboIYvqKaYD1Ka8HClVfQviVrnOGhUBxXzS7G5dNaJ43RC-gSiE-wzo6ncoGum8lGjOS5Z_V-6B-zZbH1IjM1zJ" },
                { rank: 5, name: 'DwightSchrute', role: 'Assistant Reg. Mgr', xp: '1,450 XP', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtshehUTMnw9F6vxaggy9KeHQK0v_ZmTMqmhRw6QYZmkL2Fhdba7N8AzZtIo5nPcpEYV-il9MRpY0sIYLiMhRjLuM9jHaeADsPiO4lIJrKtwYCyDI-rMGpMdTYkePGVgApLxzvwG2LkkSSs4y1U2SgQfqS8oXRJ9yaol7lC-2MOq37AGS2pElBdcJaHCmMyQ4XbATOu1q4Bu4LuHHGDVobYYCcwC8B6Nqku_Yhb_QMvlnBekZ6cOaSJs3wTKPhxOmf0SEARYH9YcfS" },
                { rank: 6, name: 'WalterWhite', role: 'The One Who Knocks', xp: '1,320 XP', img: "https://i.pravatar.cc/150?img=11" },
                { rank: 7, name: 'Daenerys_T', role: 'Mother of Dragons', xp: '1,290 XP', img: "https://i.pravatar.cc/150?img=5" },
                { rank: 8, name: 'Mando_Way', role: 'Bounty Hunter', xp: '1,150 XP', img: "https://i.pravatar.cc/150?img=3" },
              ].map(user => (
                <div key={user.rank} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
                  <span className="text-gray-400 font-bold text-sm w-6 text-center">{user.rank}</span>
                  <div className="w-10 h-10 rounded-lg bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url("${user.img}")` }}></div>
                  <div className="flex flex-col grow">
                    <span className="text-slate-900 font-semibold text-sm">{user.name}</span>
                    <span className="text-gray-500 text-xs">{user.role}</span>
                  </div>
                  <span className="text-slate-900 font-bold text-sm">{user.xp}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Sticky User Rank - Only visible on Leaderboards */}
      {activeTab === 'leaderboards' && (
        <div className="fixed bottom-0 w-full z-50 bg-light-bg border-t border-gray-200 p-4 pb-20 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom-full duration-500">
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
            <span className="text-primary font-bold text-sm w-6 text-center">42</span>
            <div className="w-10 h-10 rounded-lg bg-cover bg-center border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL1eXFwEkwWrU9CnJ3DfevsCEd8SqTCH-NJB-Vh5QYJ4l9atOKWw7oSeptj-675TeugjS4-Dsr1vPbSOd0buVSosjwBP2IbEBnzLDUfUqqqnGom0e5dY0nMvZHI4wd-PdBchjcYgqcTSPIXNQarvWdYFOYPvJZsMWfycyXSuzA9yMinl4Mb2PAHE1tG13v2F4Wz2B89w_-Xy_EoF2nw423ruVpDBENDm5RndO2OvswxzT13Erbk8ua8otOuurO6at1MZlildcIMFwJ")' }}></div>
            <div className="flex flex-col grow">
              <span className="text-slate-900 font-bold text-sm">{t('rankYou')}</span>
              <span className="text-gray-500 text-xs">{t('rankMovingUp')}</span>
            </div>
            <span className="text-slate-900 font-bold text-sm">320 XP</span>
          </div>
        </div>
      )}
    </div>
  );
};