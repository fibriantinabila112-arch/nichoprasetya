import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#2E2E2E] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background editorial subtle pattern */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-1 text-3xl font-extrabold tracking-tight">
              <span>NP</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D62828]" />
            </div>

            <p className="text-base font-bold text-white tracking-wide">
              Nicho Prasetya — Personal Branding Portfolio
            </p>

            {/* Tagline */}
            <p className="text-sm text-neutral-300 max-w-md font-normal leading-relaxed">
              “Membangun komunikasi, menciptakan kreativitas, dan menghadirkan dampak melalui media.”
            </p>

            <div className="pt-2 text-xs text-neutral-400">
              <span className="text-[#D62828] font-bold">UMSIDA</span> • Ilmu Komunikasi • Public Relations &amp; Broadcasting
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D62828]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  About Me &amp; Karakter
                </a>
              </li>
              <li>
                <a href="#education" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Riwayat Pendidikan
                </a>
              </li>
              <li>
                <a href="#passion" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Passion &amp; Interest
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Pengalaman &amp; Organisasi
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Karya Pilihan &amp; Drive
                </a>
              </li>
              <li>
                <a href="#career-goals" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                  Tujuan Karier
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D62828]">
              Koneksi Sosial
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram Nicho Prasetya"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp Nicho Prasetya"
              >
                <WhatsAppIcon size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.emailMailto}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Email Nicho Prasetya"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-[#D62828] transition-colors cursor-pointer"
              >
                <ArrowUp size={14} />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} Nicho Prasetya. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Modern Editorial Portfolio</span>
            <span className="w-1 h-1 rounded-full bg-[#D62828]" />
            <span>UMSIDA Communication Studies</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
