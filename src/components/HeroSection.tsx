import React from 'react';
import { ArrowDownRight, Mail, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import nichoPortrait from '../assets/nicho-portrait.jpg';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Editorial subtle grid background */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-60" />

      {/* Subtle red accent lines */}
      <div className="absolute top-20 right-0 w-72 h-[1px] bg-gradient-to-l from-[#D62828]/30 to-transparent pointer-events-none" />
      <div className="absolute top-44 left-0 w-48 h-[2px] bg-[#D62828]/20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Informasi */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Label Kecil */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#E5E5E5] rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#2E2E2E] uppercase">
                COMMUNICATION STUDENT &amp; CREATIVE MEDIA ENTHUSIAST
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#2E2E2E] leading-[1.08]">
              Hi, I'm <span className="text-[#D62828] relative inline-block">
                Nicho Prasetya
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D62828]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl font-normal">
              Saya mahasiswa Ilmu Komunikasi yang tertarik pada{' '}
              <strong className="font-semibold text-[#2E2E2E]">Public Relations</strong>,{' '}
              <strong className="font-semibold text-[#2E2E2E]">broadcasting</strong>,{' '}
              <strong className="font-semibold text-[#2E2E2E]">social media management</strong>, dan{' '}
              <strong className="font-semibold text-[#2E2E2E]">content creation</strong>.
            </p>

            {/* Quick value tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-medium px-3 py-1 bg-white border border-[#E5E5E5] text-[#2E2E2E] rounded-md shadow-xs">
                🎓 Mahasiswa UMSIDA 2023–Sekarang
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-white border border-[#E5E5E5] text-[#2E2E2E] rounded-md shadow-xs">
                🎙️ Certified News Announcer
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-white border border-[#E5E5E5] text-[#2E2E2E] rounded-md shadow-xs">
                📍 Sidoarjo &amp; Surabaya
              </span>
            </div>

            {/* Dua Tombol CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => scrollTo('portfolio')}
                className="inline-flex items-center gap-2 bg-[#D62828] hover:bg-[#b52020] text-white px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDownRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#2E2E2E] border-2 border-[#2E2E2E] hover:border-[#D62828] hover:text-[#D62828] px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Ikon Media Sosial */}
            <div className="pt-4 flex items-center gap-4 border-t border-[#E5E5E5]">
              <span className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B]">
                Social Channels:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#2E2E2E] hover:text-white hover:bg-[#D62828] hover:border-[#D62828] transition-all duration-200 shadow-xs"
                  aria-label="Instagram Nicho Prasetya"
                >
                  <InstagramIcon size={18} />
                </a>

                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#2E2E2E] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200 shadow-xs"
                  aria-label="WhatsApp Nicho Prasetya"
                >
                  <WhatsAppIcon size={18} />
                </a>

                <a
                  href={SOCIAL_LINKS.emailMailto}
                  className="w-10 h-10 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#2E2E2E] hover:text-white hover:bg-[#D62828] hover:border-[#D62828] transition-all duration-200 shadow-xs"
                  aria-label="Email Nicho Prasetya"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Foto Portrait Editorial dengan Bentuk Geometris Merah */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Geometris merah di belakang foto */}
              <div className="absolute -top-4 -right-4 w-44 h-44 bg-[#D62828] rounded-2xl -z-10 transition-transform hover:scale-105 duration-300" />
              
              {/* Aksen geometris pendukung */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 border-2 border-dashed border-[#D62828]/35 rounded-2xl -z-10" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#E5E5E5] rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute top-1/3 -left-8 w-16 h-1 bg-[#D62828] hidden sm:block" />

              {/* Card Container Utama Foto */}
              <div className="relative bg-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-[#E5E5E5] overflow-hidden group">
                
                {/* Frame Foto */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#2E2E2E]">
                  {/* Untuk mengganti foto: timpa file src/assets/nicho-portrait.jpg dengan foto asli */}
                  <img
                    src={nichoPortrait}
                    alt="Foto Nicho Prasetya, mahasiswa Ilmu Komunikasi UMSIDA, mengenakan jas almamater merah dengan tangan menyilang di studio"
                    className="w-full h-full object-cover object-[50%_28%] transition-transform duration-700 group-hover:scale-105 contrast-[1.03] saturate-[1.05]"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette & editorial tag overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

                  {/* Badge Editorial di dalam foto */}
                  <div className="absolute top-3 left-3 bg-[#2E2E2E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/20">
                    PORTFOLIO 2026
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-lg border border-[#E5E5E5] text-[#2E2E2E]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#D62828] tracking-wider uppercase">COMMUNICATION</p>
                        <p className="text-sm font-black text-[#2E2E2E]">UMSIDA Student</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#D62828]/10 text-[#D62828] flex items-center justify-center font-bold text-xs">
                        NP.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strip identitas di bawah foto.
                    Catatan: file foto berada di src/assets/nicho-portrait.jpg —
                    timpa file tersebut dengan foto asli Nicho agar otomatis tampil di sini. */}
                <div
                  className="mt-2.5 px-2.5 py-1.5 bg-[#FAFAFA] rounded-md border border-[#E5E5E5]/70 flex items-center justify-between gap-2 text-[11px] text-[#6B6B6B]"
                  title="Ganti foto melalui berkas public/images/nicho-portrait.jpg"
                >
                  <span className="flex items-center gap-1.5 min-w-0">
                    <Sparkles size={12} className="text-[#D62828] shrink-0" />
                    <span className="truncate">PR · Broadcasting · Social Media · Content</span>
                  </span>
                  <span className="font-bold text-[#2E2E2E] shrink-0">Ilmu Komunikasi</span>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -right-2 bg-white border-2 border-[#D62828] shadow-lg rounded-xl px-4 py-2.5 hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D62828] animate-ping" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">Status</p>
                  <p className="text-xs font-extrabold text-[#2E2E2E]">Open for Opportunities</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
