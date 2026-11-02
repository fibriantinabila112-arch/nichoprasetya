import React from 'react';
import { Mic, Megaphone, Share2, Clapperboard, Radio, Sparkles, ArrowRight } from 'lucide-react';

export const PassionSection: React.FC = () => {
  const passions = [
    {
      title: 'Komunikasi dan Public Speaking',
      description: 'Menyampaikan pesan secara lugas, terstruktur, serta percaya diri di depan audiens umum maupun forum akademik.',
      icon: Mic,
      tag: 'Oratory & Presentation'
    },
    {
      title: 'Public Relations',
      description: 'Membangun relasi harmonis, mengelola citra positif institusi, serta menyusun rilis pers dan komunikasi korporat.',
      icon: Megaphone,
      tag: 'Media & Brand Image'
    },
    {
      title: 'Social Media Management',
      description: 'Perencanaan content calendar, copywriting, analisis audiens, dan kurasi visual feed yang konsisten & bernilai.',
      icon: Share2,
      tag: 'Strategy & Engagement'
    },
    {
      title: 'Content Creation',
      description: 'Eksplorasi ide cerita visual, penulisan skrip naratif, dan produksi format konten pendek maupun panjang.',
      icon: Clapperboard,
      tag: 'Creative Production'
    },
    {
      title: 'Broadcasting dan Penyiaran',
      description: 'Olah vokal siaran berita, podcasting, intonasi radio, serta keterampilan tata kelola program audio-visual.',
      icon: Radio,
      tag: 'Audio & On-Air'
    },
    {
      title: 'Industri Kreatif dan Media Digital',
      description: 'Mengikuti tren terkini ekosistem media digital, strategi multi-channel, dan inovasi komunikasi masa depan.',
      icon: Sparkles,
      tag: 'Digital Ecosystem'
    }
  ];

  return (
    <section id="passion" className="py-20 md:py-28 bg-[#2E2E2E] text-white relative overflow-hidden">
      {/* Background editorial grid dark */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-40" />
      
      {/* Red accent geometric glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D62828]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-3">
            <span className="w-6 h-[2px] bg-[#D62828]" />
            <span>PASSION &amp; INTEREST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            What Drives <span className="text-[#D62828]">My Creativity</span>
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mt-4 mb-6" />
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Enam pilar minat utama yang memadukan keahlian komunikasi verbal, strategi relasi publik, dan kepekaan produksi media kreatif di era digital.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#242424] hover:bg-[#2b2b2b] border border-white/10 hover:border-[#D62828] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Red top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#D62828] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-[#D62828] border border-white/10 group-hover:border-[#D62828] text-white flex items-center justify-center transition-all duration-300">
                      <Icon size={22} className="text-neutral-200 group-hover:text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/5 rounded text-neutral-400 border border-white/5">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D62828] block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
                  <span className="font-medium">Active Focus</span>
                  <ArrowRight size={14} className="text-[#D62828] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
