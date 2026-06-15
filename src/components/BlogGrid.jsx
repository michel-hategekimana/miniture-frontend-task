import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "Cozy Fireplaces to Take the Chill",
      excerpt: "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop", 
      date: "October 24, 2023",
      comments: 0,
    },
    {
      id: 2,
      title: "Which Sofa Style is Best for You?",
      excerpt: "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
      date: "October 24, 2023",
      comments: 0,
    },
    {
      id: 3,
      title: "Bring a Little Joy to Your Days With These 14 Items",
      excerpt: "From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and more, you can make your life a bit easier with a new table or desk. Knicker lining concealed back zip...",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      date: "October 24, 2023",
      comments: 0,
    }
  ];

  return (
    <section className="w-full bg-white px-9 pb-24 pt-4">
      <div className="w-full max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col text-left items-start">
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-50 mb-5 relative cursor-pointer">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-104"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-[13px] font-medium select-none mb-4 px-1">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} strokeWidth={2} />
                  <span>{post.date}</span>
                </div>
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-1.5">
                  <MessageSquare size={13} strokeWidth={2} />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              <h3 className="text-[25px] font-bold text-black leading-[1.2] tracking-[-0.02em] mb-4 px-1 hover:text-[#FFAE34] transition-colors duration-200 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-[15px] font-normal text-gray-500 leading-[1.65] mb-6 px-1 max-w-[96%]">
                {post.excerpt}
              </p>
              <a 
                href={`/blog/${post.id}`}
                className="inline-block text-[14px] font-medium text-black bg-white border border-gray-200 rounded-full px-6 py-2.5 transition-all duration-200 hover:bg-[#FFAE34] hover:text-white hover:border-[#FFAE34] no-underline select-none ml-1 cursor-pointer"
              >
                Read more
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}