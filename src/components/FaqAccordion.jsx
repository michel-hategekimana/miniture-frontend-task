import React, { useState } from 'react';

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState({});
  const leftColumnFaqs = [
    { id: 'l1', question: "What is your return policy?", answer: "We offer a 30-day return policy on all standard furniture items. Products must be in their original condition and packaging." },
    { id: 'l2', question: "How do I track my order?", answer: "Once your order ships, a tracking link will be sent to your registered email address to monitor the freight delivery milestones live." },
    { id: 'l3', question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, Apple Pay, and secure bank wire transfers for large custom orders." },
    { id: 'l4', question: "Do you offer international shipping?", answer: "Yes, we ship our premium crafted collections worldwide with fully insured international freight courier services." },
    { id: 'l5', question: "How can I contact your customer support?", answer: "You can reach out instantly via our built-in digital Contact Form or drop us a direct email at support@yourstore.com." },
    { id: 'l6', question: "Are the sizes true to measurements?", answer: "Yes. Every piece is constructed precisely according to the structural dimensions specified on our store product pages." },
    { id: 'l7', question: "Can I modify or cancel my order after it's been placed?", answer: "Order modifications can be processed within 24 hours of placement before our wood workshop initiates production." }
  ];

  const rightColumnFaqs = [
    { id: 'r1', question: "Do you offer gift wrapping services?", answer: "While we don't offer standard gift wrap due to furniture box scales, we can include custom luxury printed notes with your order." },
    { id: 'r2', question: "How do I care for my garments?", answer: "For our solid wood pieces, simply wipe down with a soft, dry microfiber cloth and avoid direct exposure to extreme humidity or heat sources." },
    { id: 'r3', question: "Do you offer online ordering and shipping?", answer: "Yes! Our entire digital interface is built to configure, order securely, and coordinate flat-rate premium home delivery seamlessly." },
    { id: 'r4', question: "Can I sign up for exclusive offers and updates?", answer: "Absolutely. You can subscribe to our inner workspace circle through the newsletter field block located right down in our footer layout." },
    { id: 'r5', question: "How do I create an account?", answer: "Click the profile icon element inside the main navigation bar to register your account information securely in seconds." },
    { id: 'r6', question: "What if an item I want is out of stock?", answer: "You can click the 'Notify Me' button on any out-of-stock piece to receive an instant message the moment it comes off the workshop bench." },
    { id: 'r7', question: "Can I change my shipping address after placing an order?", answer: "Yes, as long as the freight carrier hasn't picked up the container box from our logistics center. Contact team support immediately." }
  ];

  const toggleItem = (id) => {
    setOpenIndexes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const FaqCard = ({ item }) => {
    const isOpen = !!openIndexes[item.id];
    return (
      <div className="w-full bg-white border border-gray-100 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-200">
        <button
          onClick={() => toggleItem(item.id)}
          className="w-full flex items-center justify-between text-left p-4 md:p-5 cursor-pointer focus:outline-none group select-none"
        >
          <span className="text-[14px] md:text-[15px] font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {item.question}
          </span>
          <div className="flex-shrink-0 ml-4 text-gray-500">
            <svg 
              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </button>
        <div 
          className={`grid transition-all duration-200 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-gray-50/50' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="p-4 md:p-5 pt-0 md:pt-0 text-[13px] md:text-[14px] font-normal text-gray-500 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6 md:px-20 lg:px-30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 items-start">
        
        {/* 📋 LEFT GRID COLUMN */}
        <div className="flex flex-col gap-4 w-full">
          {leftColumnFaqs.map(item => (
            <FaqCard key={item.id} item={item} />
          ))}
        </div>

        {/* 📋 RIGHT GRID COLUMN */}
        <div className="flex flex-col gap-4 w-full">
          {rightColumnFaqs.map(item => (
            <FaqCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}