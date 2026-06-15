import React from 'react';

export default function AboutBanner() {
  return (
    <section className="w-full bg-white pb-16 px-9 md:px-12 lg:px-9 select-none">
      <div className="max-w-[1440px] mx-auto">
        
        
        <div className="w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[2.4/1] bg-[#F9F9F9] rounded-3xl overflow-hidden border border-gray-100 relative shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1800" // Replace this placeholder URL string with your local image asset path when ready
            alt="Beautifully Crafted Living Space"
            className="w-full h-full object-cover object-center contrast-[102%] brightness-[99%]"
          />
 
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
        </div>

      </div>
    </section>
  );
}