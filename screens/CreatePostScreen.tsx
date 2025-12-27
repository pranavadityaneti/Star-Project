import React, { useState, useRef } from 'react';

interface CreatePostScreenProps {
  onClose: () => void;
}

type PostType = 'spoiler' | 'theory' | 'contest' | 'discussion';

export const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ onClose }) => {
  const [community, setCommunity] = useState('got');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [postType, setPostType] = useState<PostType>('discussion');
  const [images, setImages] = useState<string[]>([]); // Array of data URLs

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImages(prev => [...prev, e.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handlePost = () => {
    if (!title.trim() || !body.trim()) return;
    
    // In a real app, we would send this data to a backend
    console.log({
      community,
      title,
      body,
      postType,
      images
    });
    
    onClose();
  };

  const postTypes: { id: PostType; label: string; icon: string }[] = [
    { id: 'discussion', label: 'Discussion', icon: 'forum' },
    { id: 'theory', label: 'Theory', icon: 'psychology' },
    { id: 'spoiler', label: 'Spoiler', icon: 'visibility_off' },
    { id: 'contest', label: 'Contest', icon: 'trophy' },
  ];

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
          onClick={handlePost}
          disabled={!title.trim() || !body.trim()}
          className="px-4 py-1.5 bg-primary/20 text-primary font-bold text-sm rounded-full transition-colors hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                {community === 'got' ? 'GOT' : 'HOTD'}
              </div>
            </div>
            <select 
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="appearance-none w-full bg-gray-100 text-slate-900 border-0 rounded-xl py-3 pl-11 pr-10 focus:ring-2 focus:ring-primary/50 font-semibold cursor-pointer transition-shadow"
            >
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent border-none p-0 text-2xl font-bold placeholder:text-gray-400 focus:ring-0" 
            placeholder="An interesting title..." 
            type="text"
            autoFocus
          />
        </div>

        {/* Tags / Post Types */}
        <div className="px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {postTypes.map(type => (
              <button 
                key={type.id} 
                onClick={() => setPostType(type.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                  postType === type.id 
                    ? 'bg-primary text-white border-primary shadow-sm shadow-primary/30' 
                    : 'bg-gray-100 text-gray-600 border-transparent hover:border-primary/50'
                }`}
              >
                <span className="material-symbols-outlined !text-[16px]">
                  {type.icon}
                </span>
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-4 pb-4 flex-1 min-h-[150px]">
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-full min-h-[30vh] bg-transparent border-none p-0 text-base font-normal leading-relaxed placeholder:text-gray-400 focus:ring-0 resize-none" 
            placeholder="Share your thoughts, theories, or questions..."
          ></textarea>
        </div>

        {/* Image Preview */}
        {images.length > 0 && (
          <div className="px-4 pb-6 overflow-x-auto no-scrollbar">
            <div className="flex gap-3">
              {images.map((img, index) => (
                <div key={index} className="relative group shrink-0 w-32 h-32 rounded-xl overflow-hidden border border-gray-200">
                  <img 
                    alt={`Upload preview ${index + 1}`} 
                    className="w-full h-full object-cover" 
                    src={img}
                  />
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-red-500 transition-colors backdrop-blur-sm"
                  >
                    <span className="material-symbols-outlined !text-[16px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Toolbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pb-safe z-50">
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-1">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="p-3 rounded-full text-primary hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined">image</span>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*" 
            />
            
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