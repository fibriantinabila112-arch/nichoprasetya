import React, { useState } from 'react';
import { ArrowUpRight, FolderOpen, ExternalLink, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS, DRIVE_PORTFOLIO_URL, PortfolioProject } from '../data/portfolioData';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-2">
              <span className="w-6 h-[2px] bg-[#D62828]" />
              <span>FEATURED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
              Karya Pilihan
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] mt-2 font-normal">
              A collection of experiences, creative ideas, and communication projects.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href={DRIVE_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D62828] hover:bg-[#b52020] text-white px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95"
            >
              <FolderOpen size={17} />
              <span>Lihat Portofolio Lengkap</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* 4 Projects Grid (Responsive: 1 col mobile, 2 col tablet, 4 col desktop if space allows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Thumbnail Image with smooth zoom on hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2E2E2E]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#2E2E2E]/85 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-white/20">
                    0{idx + 1}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold text-[#2E2E2E]">
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D62828] block mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-black text-[#2E2E2E] group-hover:text-[#D62828] transition-colors leading-snug line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0 border-t border-transparent">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-3 rounded-lg border border-[#E5E5E5] group-hover:border-[#D62828] group-hover:bg-[#D62828]/5 text-xs font-bold text-[#2E2E2E] group-hover:text-[#D62828] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Lihat Detail</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Banner CTA to Google Drive Portfolio */}
        <div className="mt-14 p-6 sm:p-8 bg-[#2E2E2E] text-white rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#D62828]/30 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D62828] block mb-1">
              ARSIP &amp; BUKTI FISIK PROYEK
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ingin Menelaah Portofolio Lengkap &amp; Berkas Karya?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1.5 font-normal">
              Akses direktori Google Drive resmi yang memuat folder publikasi, sertifikat uji kompetensi, transkrip, materi visual, dan dokumentasi program.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={DRIVE_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#D62828] hover:bg-[#b52020] text-white px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all shadow-md active:scale-95"
            >
              <span>Lihat Portofolio Lengkap</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Modal Dialog Detail Proyek */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E5E5E5] shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E5E5] flex items-center justify-between z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D62828]">
                  {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#2E2E2E]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-lg bg-[#FAFAFA] hover:bg-neutral-200 border border-[#E5E5E5] flex items-center justify-center text-[#2E2E2E] transition-colors"
                aria-label="Tutup detail"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-[#2E2E2E]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-2">
                  Deskripsi Proyek
                </h4>
                <p className="text-sm sm:text-base text-[#2E2E2E] leading-relaxed">
                  {selectedProject.longDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-3">
                  Peran &amp; Tanggung Jawab
                </h4>
                <div className="p-3 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] text-sm font-bold text-[#2E2E2E]">
                  {selectedProject.role}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-3">
                  Poin Sorotan Utama
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#2E2E2E] bg-[#FAFAFA] p-2.5 rounded-lg border border-[#E5E5E5]/70">
                      <CheckCircle2 size={16} className="text-[#D62828] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-2">
                  Tools &amp; Instrumen yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-white border border-[#E5E5E5] rounded-md text-[#2E2E2E]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note on authentic assets */}
              <div className="p-3 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#D62828]" />
                  <span>File asli tersimpan aman di Google Drive</span>
                </span>
                <span className="font-bold text-[#2E2E2E]">Portfolio Verified</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAFAFA] px-6 py-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold text-[#6B6B6B] hover:text-[#2E2E2E]"
              >
                Tutup
              </button>
              <a
                href={selectedProject.externalUrl || DRIVE_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D62828] hover:bg-[#b52020] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm"
              >
                <span>Buka Berkas di Drive</span>
                <ExternalLink size={15} />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
