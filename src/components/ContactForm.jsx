import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="w-full bg-white py-16 px-9 md:px-12 lg:px-12 select-none">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#F9F9F9] border-none rounded-lg p-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none focus:bg-[#f3f3f3] transition-colors"
                required
              />
              <input 
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#F9F9F9] border-none rounded-lg p-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none focus:bg-[#f3f3f3] transition-colors"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-[#F9F9F9] border-none rounded-lg p-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none focus:bg-[#f3f3f3] transition-colors"
              />
              <div className="relative w-full">
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#F9F9F9] border-none rounded-lg p-4 text-[15px] text-gray-400 outline-none appearance-none cursor-pointer focus:bg-[#f3f3f3] transition-colors"
                  required
                >
                  <option value="" disabled hidden>Subject</option>
                  <option value="support" className="text-gray-700">Customer Support</option>
                  <option value="sales" className="text-gray-700">Sales Inquiry</option>
                  <option value="custom" className="text-gray-700">Custom Order Request</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full">
              <textarea 
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#F9F9F9] border-none rounded-lg p-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none focus:bg-[#f3f3f3] transition-colors resize-none"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <button 
                type="submit"
                className="bg-[#FFAE34] hover:bg-black text-white font-medium text-[15px] px-10 py-3.5 rounded-full shadow-sm transition-all transform active:scale-[0.98] cursor-pointer"
              >
                Send message
              </button>
              <p className="text-[12px] text-gray-500 mt-2">
                This site is protected by hCaptcha and the hCaptcha{' '}
                <a href="#privacy" className="hover:underline text-gray-900 font-medium">Privacy Policy</a> and{' '}
                <a href="#terms" className="hover:underline text-gray-900 font-medium">Terms of Service</a> apply.
              </p>
            </div>

          </form>
        </div>
        <div className="lg:col-span-4 w-full flex flex-col gap-8 lg:pl-8 text-left">
          
          <div className="flex flex-col gap-1.5">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
              Address
            </h4>
            <p className="text-[15px] font-medium text-gray-900 leading-relaxed">
              12/A, New Boston Tower, New York<br />
              United States, NY
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
              Email
            </h4>
            <div className="flex flex-col text-[15px] font-medium text-gray-900 gap-1">
              <a href="mailto:contact@yourstore.com" className="hover:text-[#FFAE34] transition-colors">contact@yourstore.com</a>
              <a href="mailto:sales@yourstore.com" className="hover:text-[#FFAE34] transition-colors">sales@yourstore.com</a>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
              Phone
            </h4>
            <div className="flex flex-col text-[15px] font-medium text-gray-900 gap-1">
              <a href="tel:+88899977766" className="hover:text-[#FFAE34] transition-colors">+888 999 777 66</a>
              <a href="tel:+99955566600" className="hover:text-[#FFAE34] transition-colors">+999 555 666 00</a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
              Follow Us
            </h4>
            <div className="flex items-center gap-5 text-gray-900 mt-1">
            
              <a href="#facebook" className="hover:text-[#FFAE34] transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#twitter" className="hover:text-[#FFAE34] transition-colors">
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#instagram" className="hover:text-[#FFAE34] transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}