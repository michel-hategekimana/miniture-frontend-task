import React, { useState } from 'react';

export default function BlogHero() {

  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'clean', 'creative', 'design', 'furniture', 'post'];

  return (
    <section className="w-full bg-white pt-[160px] pb-12 flex flex-col items-center justify-center border-b border-gray-50">
      <div className="text-center max-w-4xl px-4">
      
        <h1 className="text-[54px] font-bold tracking-tight text-black mb-8 select-none">
          Furniture
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {tags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`
                  text-[14px] font-medium px-[22px] py-[7px] rounded-full 
                  border transition-all duration-200 cursor-pointer select-none outline-none
                  ${isActive 
                    ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-xs' 
                    : 'bg-white text-gray-500 border-gray-200 hover:text-black hover:border-black'
                  }
                `}
              >
                {tag === 'All' ? 'All' : tag}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}