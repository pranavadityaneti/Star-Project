import React from 'react';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg text-slate-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-light-bg/95 backdrop-blur-md p-4 pt-4 border-b border-gray-200">
        <div className="w-12"></div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">My Profile</h2>
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
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">Sci-Fi Fanatic</span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold">Top Poster</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <span className="material-symbols-outlined text-base">live_tv</span>
                <span>Watching: <span className="font-semibold text-primary">House of the Dragon</span></span>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <button className="flex-1 h-11 items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wide transition-all active:scale-[0.98]">Edit Profile</button>
            <button className="flex-1 h-11 items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-slate-900 text-sm font-bold tracking-wide transition-all active:scale-[0.98]">Share</button>
          </div>
        </div>

        {/* Level */}
        <div className="px-6 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Current Rank</p>
                <p className="text-lg font-bold">Level 14 Fan</p>
              </div>
              <p className="text-xs font-medium text-primary">350 XP to Lvl 15</p>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Community Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">bolt</span>
                <span className="text-xs font-bold uppercase tracking-wide">Engagement</span>
              </div>
              <p className="text-2xl font-bold">8,450</p>
              <p className="text-xs text-slate-500">Top 5% of users</p>
            </div>
            {[{ icon: 'edit_note', label: 'Posts', val: '42' }, { icon: 'forum', label: 'Comments', val: '1,203' }, { icon: 'trophy', label: 'Wins', val: '5', color: 'text-yellow-500' }].map(s => (
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
            <h3 className="text-lg font-bold">Activity</h3>
            <span className="text-sm font-medium text-slate-500">Last 30 Days</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-100">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-sm text-slate-500">Weekly Interactions</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">High</span>
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