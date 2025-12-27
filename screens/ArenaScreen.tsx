import React from 'react';

export const ArenaScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center justify-between p-4 pb-2">
          <button className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Community Arena</h2>
          <button className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <section className="px-4 py-3 sticky top-[57px] z-40 bg-dark-bg">
        <div className="flex h-12 w-full items-center justify-center rounded-xl bg-dark-highlight p-1">
          <label className="group flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-dark-bg has-[:checked]:shadow-sm transition-all duration-200">
            <input type="radio" name="tab-view" value="Active Contests" className="peer invisible w-0 h-0 absolute" defaultChecked />
            <span className="text-slate-400 peer-checked:text-white text-sm font-bold leading-normal truncate transition-colors">Active Contests</span>
          </label>
          <label className="group flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-dark-bg has-[:checked]:shadow-sm transition-all duration-200">
            <input type="radio" name="tab-view" value="Leaderboards" className="peer invisible w-0 h-0 absolute" />
            <span className="text-slate-400 peer-checked:text-white text-sm font-bold leading-normal truncate transition-colors">Leaderboards</span>
          </label>
        </div>
      </section>

      {/* Content */}
      <main className="flex flex-col gap-6 px-4">
        {/* Active Contests */}
        <div className="flex flex-col gap-4">
          <article className="bg-dark-surface rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-primary/50 transition-colors group">
            <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjn91pMXcsg_YVYQj_8iBnVzd6XGgOxwBT1BcFCsccF37eRD27su5pRPCl5znNEse40KsixG0RsgfUs9gU3u4UV1ZhyAloohpWiqaMpffgc6DCPZuP8dvviS7IToV79N44g81hXIKN8yItZ4RGxV-t0amQcb2OaGhFHVlGjx_oRQMV8gd0-eDTnoz90jtqrB_F2scyEkQVfrzphUSO7Al7nN2SfgzjuPMGScAkjeDfxYwweqnJmTlJYapha_-0uVC94_YQwfetx9NB")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-90"></div>
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <span className="material-symbols-outlined text-[14px]">timer</span>
                Ending Soon
              </div>
            </div>
            <div className="p-5 relative -mt-12">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Stranger Things</p>
              <h3 className="text-white text-2xl font-bold leading-tight mb-2 group-hover:text-primary-light transition-colors">Predict the Season Finale</h3>
              <p className="text-slate-400 text-sm line-clamp-2 mb-4">Share your best theories on how the final battle will unfold.</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-dark-surface bg-gray-600 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOwlHB8LNdXo9R5J47buXf596_gbNcPzp7IGXbX30T8CsOnqShtGlryMref4r18xCPf8IYwt0F-awRvxslAM5lDU1T_Zou7tXl-VaLsg3daoUJUBYBVj7iUBEqYoX2zpyMgmgwTMbqFxMfgV_UVBPrasHb2y7zb2dln5TwveKyN6E2by3HmXZ7M8e4is8xmeUvNXoveP61SRojEJPzOVvJovw4R5HnU3nVRIamLQxbvAfx4bsqhgpCEl_p431RMMUxghh1ZKC3RKI")' }}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-dark-surface bg-gray-600 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnvTrYEd7MLTUQlrzdxM2-OQzJZd-ehlPe5P9OLmPIUCUFo6H2DAOkUFJUXuETxCyzfzeNSmaj_Z8jnSVpLbDrcc1w9ndmVy2ML3guD8BxvmWNJvKk72g-bNABG2ZkRoGCMhyK34Hu3FKHoW0dVLSxqg5rxtayhrp_VeTXmqn4EoQILcltdaIr5hUxw13B8bchovKO4GJWorSYmlZg5iCH1gYY8DX1WSflR1gahzvQXVtlKuaI8aL6a-EmGjM9dV7xJqyf6gkAxD6_")' }}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-dark-surface bg-dark-highlight flex items-center justify-center text-[10px] font-bold text-white">+1.2k</div>
                  </div>
                  <span className="text-xs font-medium text-slate-400">Joined</span>
                </div>
                <div className="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto">
                  <span className="text-primary-light text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">military_tech</span>
                    500 XP
                  </span>
                  <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 px-5 rounded-lg transition-all shadow-glow">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-dark-surface rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start shadow-md border border-white/5">
            <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw-0GYmKkxKnY2b2mkz5vdWLSR6yeOZo1YhdUNp9Lp_JLm_DC9CK7xrKX9CEaWvuO7A2FIjZ_OQXBVp5me6nLPSqtc7B0GSjZqlfGrPjG2REqsqi5THVUJPrRY2PDTMKEHCn8MzJ3rfXBx3Y_zg1Vmc_hkrnWpD2AXXlQerdE2272MfBsYlyhgRB7LxNAvwkVIBCMj5l4A7wV1z_ONQ__mSnMNUovyC8-aQGGaSsdfdhDLj9qTTE4P0fcbGLxAxvX-kq_jzIylcdVa")' }}>
              <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">LIVE</div>
            </div>
            <div className="flex flex-col grow justify-between h-full gap-2">
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-slate-400 text-xs font-semibold mb-1">The Office</p>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 5h left
                  </span>
                </div>
                <h3 className="text-white text-lg font-bold leading-tight">Meme Contest: Best Jim Prank</h3>
              </div>
              <button className="text-white bg-dark-highlight hover:bg-white/10 text-sm font-medium py-1.5 px-4 rounded-lg border border-white/10 transition-colors self-end">
                Submit Entry
              </button>
            </div>
          </article>
        </div>
        
        {/* Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="h-px bg-white/10 grow"></div>
          <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">Leaderboards Preview</span>
          <div className="h-px bg-white/10 grow"></div>
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-4 py-4">
          {/* Rank 2 */}
          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cover bg-center border-4 border-slate-400 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbK3WiFny1zK6KSYC6jqG6Q86Cr2aTO6pRnjvQEVR3QLdOoNhsjg83FvDvOX7J-l3tA4DyorlGzoIJxXJxeMkBBB_Fczr8SKbYu9uWSoZQ2ggucTJxeA2RRQO6SELpNehyAAtDuDTYkunw-w_VGDb4CpYfNo1W6cnyxRu7OSAiEkbAUr5BkU_7CevTltE7kxTBEAyJCUgT0YbLt6XLtS4R_dsYfYbbVfJS0nzbDLQh2x7fi2zLBVjGCr6pDE8XTzPJQ71HNQGjJJVu")' }}></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-400 text-dark-bg text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-dark-bg">2</div>
            </div>
            <div className="text-center mt-1">
              <p className="text-white text-sm font-bold truncate w-20">Sarah_J</p>
              <p className="text-slate-400 text-xs font-medium">1,840 XP</p>
            </div>
          </div>
          {/* Rank 1 */}
          <div className="flex flex-col items-center gap-2 w-1/3 -mt-8 relative z-10">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 animate-bounce">
                <span className="material-symbols-outlined text-3xl">crown</span>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cover bg-center border-4 border-primary shadow-glow" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5vC5N1hGPfuUr2DzyRkUXzIOtEY8-sH6SL9uH218CLvkz1ibOwevnqnSLYNXHgDOBr5f396rru_X4VugdFVBg_dWSwD7fkPtOUKm7EBB7FiNGxZ0WNqR0l9ubtVusR1Ex0oVtHOovVz4XMIkaHTGQU3g8rjjxOLwHKebaliK_dZDbKDBDizqyRtR7afrfqRpbwg4ECjqiEBA3dFLyWIlxp646noY6j_D_PCATc5i07i-VLu37fxxs7DbOrwJ8qE9rWnYQeN5ZS-y")' }}></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full border-2 border-dark-bg">1</div>
            </div>
            <div className="text-center mt-1">
              <p className="text-white text-base font-bold truncate w-24">SuperFan99</p>
              <p className="text-primary text-sm font-bold">2,150 XP</p>
            </div>
          </div>
          {/* Rank 3 */}
          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cover bg-center border-4 border-amber-700 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVE6a2lUNy3SIPfn_sow9Hw-FteNEMk1ckfwH92MvQFOLJYlRCxPSN0dz1YW5oIamcn-JZ3E3nbsAgZr1mAFTtyY4GwpXpx9P1rV0m8VIiY8tMv208GlsY7T9YbgXahjdKVElKEOxzA2We7mufDm3mjzKL-f4tc41PTD3PGrhPo1bbA8zpsG1bChxoAjKbglv_6zrG7aK-8uQQRIshq9w0Gh45cdLQ9eSkEVlRuCTHbNazUVDlsB_k2RJyUp6satXDC-zEXO9eMGyG")' }}></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-dark-bg">3</div>
            </div>
            <div className="text-center mt-1">
              <p className="text-white text-sm font-bold truncate w-20">MikeTV</p>
              <p className="text-slate-400 text-xs font-medium">1,620 XP</p>
            </div>
          </div>
        </div>

        {/* List Ranks */}
        <div className="flex flex-col gap-2 pb-20">
          {[
            { rank: 4, name: 'Eleven_Eggos', role: 'Level 42 Fan', xp: '1,580 XP', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfVuxi6_gbJMIMuzVGvbeMWCgGy1sxEu3Kw-5bgSn8umcjIVq7AOWwhBuAHYKxw88EtdTeYQ_J8r7dvOzBZspQzI1JoUrPmONEmKsr2yMekZ1BHxQjpvwoUumJFrflJPkeoGHuTjtZ9nnZ_6xqvSkYhKjnH9j1-8krLIY-eWheHrwb3D5O5MC_zwboIYvqKaYD1Ka8HClVfQviVrnOGhUBxXzS7G5dNaJ43RC-gSiE-wzo6ncoGum8lGjOS5Z_V-6B-zZbH1IjM1zJ" },
            { rank: 5, name: 'DwightSchrute', role: 'Assistant Reg. Mgr', xp: '1,450 XP', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtshehUTMnw9F6vxaggy9KeHQK0v_ZmTMqmhRw6QYZmkL2Fhdba7N8AzZtIo5nPcpEYV-il9MRpY0sIYLiMhRjLuM9jHaeADsPiO4lIJrKtwYCyDI-rMGpMdTYkePGVgApLxzvwG2LkkSSs4y1U2SgQfqS8oXRJ9yaol7lC-2MOq37AGS2pElBdcJaHCmMyQ4XbATOu1q4Bu4LuHHGDVobYYCcwC8B6Nqku_Yhb_QMvlnBekZ6cOaSJs3wTKPhxOmf0SEARYH9YcfS" },
          ].map(user => (
            <div key={user.rank} className="flex items-center gap-4 p-3 bg-dark-surface/50 rounded-xl border border-white/5">
              <span className="text-slate-400 font-bold text-sm w-6 text-center">{user.rank}</span>
              <div className="w-10 h-10 rounded-lg bg-cover bg-center bg-gray-600" style={{ backgroundImage: `url("${user.img}")` }}></div>
              <div className="flex flex-col grow">
                <span className="text-white font-semibold text-sm">{user.name}</span>
                <span className="text-slate-400 text-xs">{user.role}</span>
              </div>
              <span className="text-white font-bold text-sm">{user.xp}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky User Rank */}
      <div className="fixed bottom-0 w-full z-50 bg-dark-bg border-t border-white/10 p-4 pb-20 shadow-2xl">
        <div className="flex items-center gap-4 bg-dark-highlight p-3 rounded-xl border border-primary/30 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
          <span className="text-primary font-bold text-sm w-6 text-center">42</span>
          <div className="w-10 h-10 rounded-lg bg-cover bg-center border border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL1eXFwEkwWrU9CnJ3DfevsCEd8SqTCH-NJB-Vh5QYJ4l9atOKWw7oSeptj-675TeugjS4-Dsr1vPbSOd0buVSosjwBP2IbEBnzLDUfUqqqnGom0e5dY0nMvZHI4wd-PdBchjcYgqcTSPIXNQarvWdYFOYPvJZsMWfycyXSuzA9yMinl4Mb2PAHE1tG13v2F4Wz2B89w_-Xy_EoF2nw423ruVpDBENDm5RndO2OvswxzT13Erbk8ua8otOuurO6at1MZlildcIMFwJ")' }}></div>
          <div className="flex flex-col grow">
            <span className="text-white font-bold text-sm">You</span>
            <span className="text-slate-400 text-xs">Moving up! 🚀</span>
          </div>
          <span className="text-white font-bold text-sm">320 XP</span>
        </div>
      </div>
    </div>
  );
};