import React from 'react';
import { Target, ArrowRight, ShieldCheck, Share2, Sparkles } from 'lucide-react';

export const CareerGoalsSection: React.FC = () => {
  const careerFocuses = [
    {
      title: 'Public Relations',
      role: 'PR & Corporate Communication',
      icon: ShieldCheck,
      description: 'Membangun dan menjaga citra positif institusi, menyusun strategi komunikasi krisis, serta merajut relasi harmonis dengan media dan stakeholder.'
    },
    {
      title: 'Social Media Specialist',
      role: 'Digital Strategist & Planner',
      icon: Share2,
      description: 'Mengelola komunikasi digital interaktif, menganalisis insight audiens, merancang kampanye media sosial, serta meningkatkan reach & engagement.'
    },
    {
      title: 'Content Creator',
      role: 'Creative Storyteller & Producer',
      icon: Sparkles,
      description: 'Menghasilkan konten kreatif, informatif, dan relevan melalui kekuatan narasi audio-visual, broadcasting, dan eksplorasi tren terkini.'
    }
  ];

  return (
    <section id="career-goals" className="py-20 md:py-28 bg-white border-t border-[#E5E5E5] relative overflow-hidden">
      {/* Editorial geometric accent red square */}
      <div className="absolute top-12 right-12 w-32 h-32 border border-[#D62828]/20 rounded-2xl pointer-events-none hidden lg:block" />
      <div className="absolute top-16 right-16 w-32 h-32 bg-[#D62828]/5 rounded-2xl pointer-events-none hidden lg:block" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-3">
            <span className="w-6 h-[2px] bg-[#D62828]" />
            <span>VISION &amp; ASPIRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
            Tujuan <span className="text-[#D62828]">Karier</span>
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mt-4 mb-6" />
          
          {/* Deskripsi sesuai instruksi prompt */}
          <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl relative">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D62828] rounded-l-xl" />
            <p className="text-base sm:text-lg text-[#2E2E2E] leading-relaxed font-normal">
              “Setelah menyelesaikan studi Ilmu Komunikasi, saya ingin mengembangkan karier di bidang <strong className="text-[#D62828] font-bold">Public Relations</strong>, <strong className="text-[#D62828] font-bold">Social Media Specialist</strong>, dan <strong className="text-[#D62828] font-bold">Content Creator</strong>. Saya ingin berkontribusi dalam membangun citra positif perusahaan, mengelola komunikasi digital, serta menghasilkan konten kreatif dan informatif yang relevan bagi audiens.”
            </p>
          </div>
        </div>

        {/* 3 Career Focus Labels / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerFocuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828] p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-lg group flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] group-hover:bg-[#D62828] border border-[#E5E5E5] group-hover:border-[#D62828] text-[#D62828] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider">
                      Fokus 0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#D62828] mb-1">
                    {focus.role}
                  </p>

                  <h3 className="text-2xl font-black text-[#2E2E2E] group-hover:text-[#D62828] transition-colors mb-3">
                    {focus.title}
                  </h3>

                  <p className="text-sm text-[#6B6B6B] leading-relaxed font-normal">
                    {focus.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#2E2E2E] group-hover:text-[#D62828] transition-colors">
                  <span>Target Profesional</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Commitment */}
        <div className="mt-10 p-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2E2E2E] text-white flex items-center justify-center shrink-0">
              <Target size={20} className="text-[#D62828]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#2E2E2E]">Siap Berkolaborasi &amp; Berkontribusi</p>
              <p className="text-xs text-[#6B6B6B]">Membawa perspektif segar komunikasi generasi muda yang strategis, etis, dan dinamis.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#D62828] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Hubungi Saya</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};
