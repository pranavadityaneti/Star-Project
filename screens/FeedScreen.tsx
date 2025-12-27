import React from 'react';

interface FeedScreenProps {
  onCreatePost: () => void;
}

export const FeedScreen: React.FC<FeedScreenProps> = ({ onCreatePost }) => {
  // Force dark mode for this screen wrapper
  return (
    <div className="min-h-screen bg-dark-bg text-white pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[20px]">tv</span>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">TV Fanatics</h2>
          </div>
          <button className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors relative">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-dark-bg"></span>
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-2">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-10 bg-dark-highlight transition-all focus-within:ring-2 focus-within:ring-primary/50">
              <div className="text-slate-400 flex items-center justify-center pl-3 pr-2">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input 
                className="flex w-full bg-transparent border-none text-white focus:outline-0 focus:ring-0 h-full placeholder:text-slate-400/70 px-0 text-sm font-medium" 
                placeholder="Search shows, theories, users..."
              />
            </div>
          </label>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 shadow-lg shadow-primary/20">
            <span className="text-white text-sm font-bold">Trending</span>
          </button>
          {['New', 'Top Contests', 'Fan Art', 'Events'].map((filter) => (
            <button key={filter} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-dark-highlight border border-white/5 px-4 active:bg-primary/20">
              <span className="text-white text-sm font-medium">{filter}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feed Content */}
      <main className="flex flex-col gap-4 p-4">
        {/* Post 1: Spoiler */}
        <article className="flex flex-col rounded-xl bg-dark-surface p-4 shadow-md border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv6X3vvjUzZ-dpilVnpqHTu83k89W7HPA9xFuLvrrgV21zDYzrK8cK3vR38DgXZCaRykQDhfQyNYqLJVg5_XYFUp5C-8LuqLMYGRrljDHmDIcDBZYy0QDgjK4ng7uOjsIVIctAjT4AdIl3Su2YP__pCqu8hDSRMv4xOkvZ2R9BnnpQ4vjVl7fWuqYG4H5Mzo4i7Cmt_v7QBy0GApKtRljB2Uii1TpE1_sRZIFBjrWpC3bVQOPeakq_QwAzCFRJBYqus0tkLIg_qdPs")' }}></div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-bold line-clamp-1">DarkMirrorFan_99</p>
                <div className="flex items-center gap-2">
                  <p className="text-slate-400 text-xs font-medium">4h ago</p>
                  <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                  <span className="text-xs font-bold text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded">Spoiler</span>
                </div>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
            </button>
          </div>
          <div className="mb-3">
            <h3 className="text-white text-lg font-bold leading-tight mb-2">Who else thinks the finale of 'Dark Mirror' was hinted at in Episode 2?</h3>
            <div className="relative overflow-hidden rounded-lg bg-black/20 p-3 cursor-pointer group">
              <p className="text-white/40 blur-sm select-none text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors">
                <div className="bg-dark-surface border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-sm">visibility_off</span>
                  <span className="text-xs font-bold text-white">Tap to reveal spoiler</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1 gap-1">
                <button className="text-slate-400 hover:text-primary active:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_upward</span>
                </button>
                <span className="text-sm font-bold text-white">1.2k</span>
                <button className="text-slate-400 hover:text-red-400 active:text-red-400 transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_downward</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1 text-slate-400 hover:bg-white/5 rounded-full transition-colors ml-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble_outline</span>
                <span className="text-sm font-medium">340</span>
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-2 py-1 text-slate-400 hover:bg-white/5 rounded-full transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>ios_share</span>
              <span className="text-sm font-medium hidden sm:block">Share</span>
            </button>
          </div>
        </article>

        {/* Post 2: Contest */}
        <article className="flex flex-col items-stretch justify-start rounded-xl shadow-lg border border-primary/20 bg-dark-surface overflow-hidden relative">
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">Official Contest</span>
          </div>
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH36UWmRyKAggiOebjbIfA_m_j3GkWAt4MPFHcUNHqf55ApknFIIkoQ8XJ7zNcprPrn9RgKzcryF5ruarMvokPgCxzSvDnX4csJNnOrdQFHLubRKTS7DwM7ovjrg1OXwzQ40QyeHP1RQGQc9oXWxjhAGauxVZ_p7B1EeRoBNmO42889sAQGJ0micLStuixmII1qDcQrfg2CGIBVZp2PX0TGyFvqS-qmAKAZyCmwl4afhEa7AO0IOeMZcCDCf8ezS1WLPuHZZGrs_dV")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-80"></div>
          </div>
          <div className="flex w-full flex-col items-stretch justify-center gap-1 p-4 -mt-12 relative z-20">
            <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md mb-1">Weekly Trivia: Win a signed poster!</h3>
            <p className="text-white/80 text-sm font-normal leading-relaxed mb-4">Test your knowledge of Season 4. Top 10 scores get exclusive merch.</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border border-dark-surface bg-gray-600 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCySrtJ1X99z9oNGNeMXkbWJm_tq9LDPy8lFFPXpSQabuygYcuilR3HJtS-aYnmZmPINEGI69h-YggLuS9OP80MKCmuDMLgpqGejnpV-ZQH7hCwQvXO68c6V_c69RkevBDPV5ax2y2FyOA2GRpi-7TqxDnKyr7Lj8uwFFGuFDK3bpNM__BAQEoOZI0jWMO8ntrQmRa5fjkytuiClkKduIdxU0KPWCte7mW68Q-FKkrAW9z1-y7nc5sTQ54N0PDTGxyl5FyNdmRgi9K")' }}></div>
                <div className="w-6 h-6 rounded-full border border-dark-surface bg-gray-500 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6_RD_WkfGFQJtPew7MA1y4BVUsE40Qvz2BzNrXi2Z8Uv47Pk5fMJ4_KJDyJolKReFPRowLhNtVVrKOY123JIyRrO9ggSHYzDXpPg3DhTsuz-UnkzeT8u7QfsTIwCFw5aPGkwD-_JCHHsU1S71L8TK4VhFIZ6TfGqKtlnchk9KZGgwZkoOylFMO-RU6jmMOZ1ZNJB3ynKWecjUK2IaaKIca_acfIfrO8A-I5cJZUXOHz9PoPo0c-N-nWpGB6M-AEiK8K8kInWxtn-P")' }}></div>
                <div className="w-6 h-6 rounded-full border border-dark-surface bg-gray-700 flex items-center justify-center text-[8px] font-bold text-white">+42</div>
              </div>
              <p className="text-slate-400 text-xs">Ends in 2h</p>
            </div>
            <button className="mt-4 w-full cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
              Enter Contest
            </button>
          </div>
        </article>

        {/* Post 3: Image Theory */}
        <article className="flex flex-col rounded-xl bg-dark-surface p-4 shadow-md border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbsCcWcwHKrf69QkyHZk23RhJ_8t3Fo9mSf0BGtzP7oNjKr31r5UYQrDBR2DHgN4-4VE43EjMd9rPmWto5UgSpElkMhOIBdf59oTA2mvU_CNzLMLNLptYZ7ynAovXywY88ZKVnIxs_XNJoKD6o2Fq49-Jl-jRpU0sPS9BPwHyBmuxV7SfUDERMGBMW6oybRedsUdiaGaTwQpHZvf9xob5ytIqb5Tt4px6ucimhugOHc1wUd3PDoeeELK6I402lciWW4Qu2E5KDdq2g")' }}></div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-bold line-clamp-1">SciFi_Theorist</p>
                <div className="flex items-center gap-2">
                  <p className="text-slate-400 text-xs font-medium">8h ago</p>
                  <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                  <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">Theory</span>
                </div>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
            </button>
          </div>
          <div className="mb-3">
            <h3 className="text-white text-lg font-bold leading-tight mb-2">Character arc prediction for next season: The betrayer is closer than we think.</h3>
            <div className="w-full rounded-lg bg-black/20 overflow-hidden mb-2">
              <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBki0VnS0imQASvUGemGyyBLFBZgMGspH2Iyqrx8bXLwL7gDPGEN0AOO5IoAX9xZbelZ5MQuKqMt2yIRs7buZGFiXfz6qyZkfJDaX1Ti8rrBXE1CGBsbrroMTc5bPj7yHJXCGNMoRO7S-A1x-OBNNcxXLggl-rK2hVX0kvSmiPTmGP0_-3S2WOMop3X_mkQ7i3eTx_jQ4cWljMRgFvIdmZYrtiXJVdu86HsSr7oIH5vB9otemNPlvryRsE7DR136jogN3e8U76LThLz")' }}></div>
            </div>
            <p className="text-slate-400 text-sm leading-normal line-clamp-3">
              Based on the subtle cues in the dialogue during the banquet scene, I'm almost certain that the Captain knows about the mutiny.
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1 gap-1">
                <button className="text-primary hover:text-primary active:text-primary transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined filled" style={{ fontSize: '20px' }}>arrow_upward</span>
                </button>
                <span className="text-sm font-bold text-white">2.5k</span>
                <button className="text-slate-400 hover:text-red-400 active:text-red-400 transition-colors flex items-center justify-center p-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_downward</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1 text-slate-400 hover:bg-white/5 rounded-full transition-colors ml-2">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble_outline</span>
                <span className="text-sm font-medium">89</span>
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-2 py-1 text-slate-400 hover:bg-white/5 rounded-full transition-colors">
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