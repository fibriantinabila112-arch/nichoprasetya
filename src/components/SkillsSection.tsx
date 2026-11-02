import React from 'react';
import { Palette, Video, FileText, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skills = [
    {
      title: 'Canva',
      category: 'Visual & Graphic Design',
      description: 'Desain grafis, materi publikasi, dan konten visual untuk media digital.',
      icon: Palette,
      badge: 'Visual Design',
      applications: [
        'Desain Feed & Story Instagram interaktif',
        'Pamflet, flyer, banner publikasi acara kampus',
        'Infografis materi public relations & pers rilis visual',
        'Presentasi proposal dan laporan kegiatan'
      ]
    },
    {
      title: 'CapCut',
      category: 'Video Editing & Audiovisual',
      description: 'Penyuntingan video dan produksi konten audiovisual.',
      icon: Video,
      badge: 'Video Production',
      applications: [
        'Pemotongan video ritmis (beat sync) konten Reels & TikTok',
        'Pemberian takarir (auto caption / subtitle) yang dinamis',
        'Color grading dasar dan transisi estetik',
        'Pengolahan audio klip podcast & dokumentasi liputan'
      ]
    },
    {
      title: 'Microsoft Office',
      category: 'Administration & Productivity',
      description: 'Pengolahan dokumen, pembuatan presentasi, dan administrasi.',
      icon: FileText,
      badge: 'Productivity Suite',
      applications: [
        'Microsoft Word: Penyusunan proposal, LPJ, & press release',
        'Microsoft PowerPoint: Slide presentasi visual terstruktur',
        'Microsoft Excel: Manajemen rundown teknis & data peserta',
        'Standarisasi format administrasi akademik & organisasi'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-3">
            <span className="w-6 h-[2px] bg-[#D62828]" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
            Keahlian <span className="text-[#D62828]">Aplikasi &amp; Tools</span>
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mt-4 mb-6" />
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            Perangkat lunak dan instrumen digital utama yang digunakan secara aktif dalam mendukung efektivitas produksi media kreatif, komunikasi visual, serta administrasi kehumasan.
          </p>
        </div>

        {/* 3 Skill Cards: Sesuai Instruksi prompt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828] p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D62828] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] group-hover:border-[#D62828]/40 group-hover:bg-[#D62828]/5 text-[#D62828] flex items-center justify-center transition-colors">
                      <Icon size={28} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#FAFAFA] text-[#6B6B6B] border border-[#E5E5E5] rounded-full">
                      {skill.badge}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#D62828] mb-1">
                    {skill.category}
                  </p>

                  <h3 className="text-2xl font-black text-[#2E2E2E] group-hover:text-[#D62828] transition-colors mb-3">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-[#2E2E2E] leading-relaxed font-medium mb-6 pb-4 border-b border-[#E5E5E5]">
                    {skill.description}
                  </p>

                  {/* Bullet Applications */}
                  <div className="space-y-2.5">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B]">
                      Pemanfaatan Praktis:
                    </p>
                    <ul className="space-y-2">
                      {skill.applications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                          <CheckCircle size={14} className="text-[#D62828] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#6B6B6B]">
                  <span className="font-semibold">Workflow Tool</span>
                  <span className="text-[#2E2E2E] font-bold">Produksi Aktif</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Note / Disclaimer */}
        <div className="mt-10 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl flex items-center gap-3 text-xs text-[#6B6B6B]">
          <span className="w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
          <span>
            <strong className="text-[#2E2E2E] font-bold">Catatan Profesional:</strong> Evaluasi keahlian didasarkan pada aplikasi praktis riil dan pengoperasian nyata dalam proyek, bukan persentase metrik yang tidak terverifikasi.
          </span>
        </div>

      </div>
    </section>
  );
};
