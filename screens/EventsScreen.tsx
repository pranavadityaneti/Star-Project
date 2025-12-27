import React from 'react';

export const EventsScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg text-slate-900 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-light-bg/95 backdrop-blur-md border-b border-gray-200">
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-colors">
          <span className="material-symbols-outlined text-gray-900">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-2">Community Events</h1>
        <button className="flex items-center justify-end">
          <span className="text-primary text-sm font-bold leading-normal tracking-wide">My RSVPs</span>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
        {/* Filters */}
        <div className="sticky top-[64px] z-40 bg-light-bg pt-4 pb-2">
          <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
            <button className="snap-start shrink-0 flex h-9 items-center justify-center px-5 rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-transform active:scale-95">
              <span className="text-sm font-semibold">All</span>
            </button>
            {['Meet & Greets', 'Set Visits', 'Virtual'].map(f => (
              <button key={f} className="snap-start shrink-0 flex h-9 items-center justify-center px-5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors active:scale-95">
                <span className="text-sm font-medium">{f}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Hero */}
        <div className="px-4 py-4">
          <div className="relative w-full overflow-hidden rounded-2xl group shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9WPWFg4oppkCsFAcbf36Mu3L009y_bNzjUXepoZfrbpv42Oc_2PtG5mqXIUsNcFG7kjg51aJbu3t0uXhK5VpuRlWLMq8N_-RAEbIDXtOgmH4HcEErtR-LpqX5-lyYNGw2dQHcx96NzXtryLNEh5HIrB7HO3zGbVQJIkgFMyWwKcxmbsTaUpXNYdQmu3qKsT1gO9Qxy4xWHl8w6fFtAIBT3iaZQPU8B6OM1kmluzbxZ2ibFv8LoExyd4kPH5uhWd2Dg7TEc7O5700A')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#120b18] via-[#120b18]/80 to-transparent"></div>
            <div className="relative flex flex-col p-5 gap-4">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center rounded-md bg-primary/90 px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-primary/20 backdrop-blur-sm">FEATURED EVENT</span>
                <button className="text-white/80 hover:text-white bg-black/20 p-1 rounded-full backdrop-blur-md">
                  <span className="material-symbols-outlined text-[20px]">ios_share</span>
                </button>
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white leading-tight mb-1">Season Finale Watch Party</h2>
                <p className="text-slate-300 text-sm font-medium line-clamp-2">Join the cast and 5,000 other fans for a live reaction stream to the shocking season finale!</p>
              </div>
              <div className="flex gap-2 py-2">
                {['02', '14', '45', '12'].map((time, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10">
                    <span className="text-xl font-bold text-white font-mono">{time}</span>
                    <span className="text-[10px] uppercase text-slate-300 font-bold tracking-wider">{['Days', 'Hrs', 'Mins', 'Secs'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-[#120b18] bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=${i + 10})` }}></div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[#120b18] bg-dark-surface text-xs font-medium text-white">+128</div>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg shadow-primary/30">
                  RSVP Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="flex items-center justify-between px-4 pt-2 pb-3">
          <h3 className="text-lg font-bold text-gray-900">Upcoming Events</h3>
          <button className="text-sm text-primary font-semibold">View Calendar</button>
        </div>
        <div className="flex flex-col gap-4 px-4 pb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-stretch">
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl min-w-[64px] px-2 py-3 h-full">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">OCT</span>
              <span className="text-2xl font-bold text-primary">24</span>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide mb-1 block">Live Stream</span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-gray-200">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    <span>Official</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-gray-900 leading-tight">Exclusive Q&A with Lead Actor</h4>
                <p className="text-sm text-gray-500 mt-1">8:00 PM • Hosted by Admin</p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex -space-x-1.5">
                  <div className="h-6 w-6 rounded-full ring-2 ring-white bg-gray-300 bg-cover" style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=20)` }}></div>
                  <div className="h-6 w-6 rounded-full ring-2 ring-white bg-gray-300 bg-cover" style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=21)` }}></div>
                  <span className="text-xs text-gray-500 ml-3 self-center font-medium">24 fans going</span>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">event_available</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-stretch">
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl min-w-[64px] px-2 py-3 h-full">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">NOV</span>
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-pink-500 uppercase tracking-wide mb-1 block">In Person</span>
                <h4 className="text-base font-bold text-gray-900 leading-tight">Set Visit: The Manor</h4>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-gray-400">location_on</span>
                  <p className="text-sm text-gray-500">Los Angeles, CA</p>
                </div>
              </div>
              <button className="h-8 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors self-end">
                Apply
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};