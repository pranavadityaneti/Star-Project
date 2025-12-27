import React from 'react';

interface CreatePostScreenProps {
  onClose: () => void;
}

export const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-light-bg text-slate-900 flex flex-col antialiased">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-50">
        <button 
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
        >
          <span className="material-symbols-outlined !text-[28px]">close</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Create Post</h1>
        <button 
          onClick={onClose}
          className="px-4 py-1.5 bg-primary/20 text-primary font-bold text-sm rounded-full transition-colors hover:bg-primary hover:text-white"
        >
          Post
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Community Selector */}
        <div className="px-4 py-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                GOT
              </div>
            </div>
            <select className="appearance-none w-full bg-gray-100 text-slate-900 border-0 rounded-xl py-3 pl-11 pr-10 focus:ring-2 focus:ring-primary/50 font-semibold cursor-pointer transition-shadow">
              <option value="got">r/GameOfThrones</option>
              <option value="hotd">r/HouseOfTheDragon</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="px-4 pb-2">
          <input 
            className="w-full bg-transparent border-none p-0 text-2xl font-bold placeholder:text-gray-400 focus:ring-0" 
            placeholder="An interesting title..." 
            type="text"
            autoFocus
          />
        </div>

        {/* Tags */}
        <div className="px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold whitespace-nowrap shadow-sm shadow-primary/30">
              <span className="material-symbols-outlined !text-[16px]">visibility_off</span>
              Spoiler
            </button>
            {['Theory', 'News', 'Meme', 'Discussion'].map(tag => (
              <button key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 border border-transparent hover:border-primary/50 text-xs font-semibold whitespace-nowrap transition-colors">
                <span className="material-symbols-outlined !text-[16px]">
                  {tag === 'Theory' ? 'psychology' : tag === 'News' ? 'newspaper' : tag === 'Meme' ? 'sentiment_very_satisfied' : 'forum'}
                </span>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-4 pb-4 flex-1 min-h-[200px]">
          <textarea 
            className="w-full h-full min-h-[30vh] bg-transparent border-none p-0 text-base font-normal leading-relaxed placeholder:text-gray-400 focus:ring-0 resize-none" 
            placeholder="Share your thoughts, theories, or questions..."
          ></textarea>
        </div>

        {/* Image Preview */}
        <div className="px-4 pb-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3">
            <div className="relative group shrink-0 w-32 h-32 rounded-xl overflow-hidden border border-gray-200">
              <img 
                alt="Upload preview" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1MM2DfzBSGAsdD4UNUihLC5yukhG2hT58fok6B31yzEMKFq-7Fr6MFSnThV2H7D6r_ql5F5CzsnrRXsrWIVh7tppCQHA1Wdo6BurpAIFeimsiVOnZ_o1RxMxyiuoHcEhVaObC6BRC0hx9yME8Zm4yDCEHdcFs4EGxy5t_N826GilX15mCCL1AnjS-8dM_GisxRROVdnMffIxBlLdEe7_lHkYDmg7bZqNbxsoztaI_WCFHcoXJC2Y0wgCHI3rIhkfJf-0nAdeuy-P"
              />
              <button className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-red-500 transition-colors backdrop-blur-sm">
                <span className="material-symbols-outlined !text-[16px]">close</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Toolbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pb-safe z-50">
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-1">
            <button className="p-3 rounded-full text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">image</span>
            </button>
            <button className="p-3 rounded-full text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="p-3 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">link</span>
            </button>
            <button className="p-3 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">poll</span>
            </button>
          </div>
          <div className="flex items-center pr-2">
            <button className="p-3 rounded-full text-gray-400 hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
        <div className="h-6 w-full bg-transparent"></div>
      </div>
    </div>
  );
};