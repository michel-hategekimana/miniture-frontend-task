import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Coins, Globe2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = ["Accent Chairs", "Dinning Chair", "Dining Room", "Kid's Furniture"];
const informationLinks = ["Privacy policy", "Refund policy", "Shipping & Return", "Term & conditions"];
const languages = ["English", "French", "Deutsch"];
const countries = [
  "Rwanda (USD $)",
  "United States (USD $)",
  "France (EUR)",
  "Germany (EUR)",
  "Canada (CAD $)",
  "United Kingdom (GBP)",
  "Kenya (KES)",
  "South Africa (ZAR)",
  "Nigeria (NGN)",
  "Australia (AUD $)",
];

export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("Rwanda (USD $)");
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setOpenMenu(null);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setOpenMenu(null);
  };

  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto w-[84%] max-w-[1480px]">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:gap-24 lg:py-16">
          <div>
            <h2 className="text-[24px] font-semibold leading-none">Our story</h2>
            <p className="mt-8 max-w-[330px] text-[16px] font-semibold leading-[1.45]">
              Miniture is one of the biggest international fashion companies,
              one of the world's largest distribution groups.
            </p>

            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#ffa12a] hover:bg-[#ffa12a]"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#ffa12a] hover:bg-[#ffa12a]"
              >
                <FaXTwitter size={17} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#ffa12a] hover:bg-[#ffa12a]"
              >
                <FaInstagram size={19} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#ffa12a] hover:bg-[#ffa12a]"
              >
                <FaYoutube size={19} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-semibold leading-none">Quick links</h2>
            <ul className="mt-8 flex flex-col gap-4 text-[16px] font-semibold">
              {quickLinks.map((link, index) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`transition hover:text-[#ffa12a] `}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-semibold leading-none">Information</h2>
            <ul className="mt-8 flex flex-col gap-4 text-[16px] font-semibold">
              {informationLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white transition hover:text-[#ffa12a]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-semibold leading-none">Let's get in touch</h2>
            <form className="mt-7 flex h-[62px] max-w-[302px] items-center rounded-[5px] bg-[#222] pl-7 pr-4">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-white outline-none placeholder:text-[#9c9c9c]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffa12a] text-white transition hover:bg-white hover:text-black"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[84%] max-w-[1480px] flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-semibold">&copy; 2026 Miniture. Powered by Shopify</p>

          <div ref={dropdownRef} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === "language"}
                onClick={() => setOpenMenu(openMenu === "language" ? null : "language")}
                className="flex h-[48px] min-w-[142px] items-center justify-center gap-3 rounded-full border border-white/15 px-5 text-[14px] font-semibold"
              >
                <Globe2 size={17} />
                {selectedLanguage}
                <ChevronDown
                  size={15}
                  className={`transition-transform ${openMenu === "language" ? "rotate-180" : ""}`}
                />
              </button>

              {openMenu === "language" && (
                <div className="absolute bottom-[58px] left-0 z-10 w-full overflow-hidden rounded-[16px] border border-white bg-[#151515] py-2 text-white shadow-2xl">
                  {languages.map((language, index) => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => selectLanguage(language)}
                      className={`block w-full px-5 py-3 text-left text-[14px] font-semibold ${
                        index === languages.length - 1 ? "bg-blue-600 text-white" : "text-white"
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-expanded={openMenu === "country"}
                onClick={() => setOpenMenu(openMenu === "country" ? null : "country")}
                className="flex h-[48px] min-w-[202px] items-center justify-center gap-3 rounded-full border border-white/15 px-5 text-[14px] font-semibold"
              >
                <Coins size={17} />
                {selectedCountry}
                <ChevronDown
                  size={15}
                  className={`transition-transform ${openMenu === "country" ? "rotate-180" : ""}`}
                />
              </button>

              {openMenu === "country" && (
                <div className="absolute bottom-[58px] left-0 z-10 max-h-[286px] w-full overflow-y-auto rounded-[16px] border border-white bg-[#151515] py-2 text-white shadow-2xl">
                  {countries.map((country, index) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => selectCountry(country)}
                      className={`block w-full px-5 py-3 text-left text-[14px] font-semibold ${
                        index === countries.length - 1 ? "bg-blue-600 text-white" : "text-white"
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


