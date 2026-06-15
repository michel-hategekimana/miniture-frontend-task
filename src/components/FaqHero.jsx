import React from 'react';

export default function FaqHero() {
  return (
    <section className="w-full relative py-20 md:py-28 px-6 overflow-hidden select-none bg-[#F5F5F3]">
      {/* 🖼️ Serene background imagery with shadow textures matching your snapshot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://miniture-demo.myshopify.com/cdn/shop/files/page_heder_2.jpg?v=1777002486&width=1800" // Replace with your local asset when ready
          alt="FAQ Background Shadows"
          className="w-full h-full object-cover object-center opacity-60 contrast-[102%] brightness-[102%] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* 📝 Centered Text Matrix Content */}
      <div className="max-w-[1440px] mx-auto text-center relative z-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-[32px] md:text-[44px] font-bold text-[#1C1C1C] tracking-tight">
          FAQs
        </h1>
        <p className="text-[14px] md:text-[15px] font-normal text-gray-600 tracking-normal max-w-[600px]">
          Welcome to our FAQ, we are so happy to have you here and as a client.
        </p>
      </div>
    </section>
  );
}