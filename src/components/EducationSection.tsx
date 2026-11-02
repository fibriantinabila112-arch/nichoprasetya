import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educations = [
    {
      institution: 'Universitas Muhammadiyah Sidoarjo (UMSIDA)',
      shortName: 'UMSIDA',
      program: 'Ilmu Komunikasi',
      degree: 'Sarjana Ilmu Komunikasi (S.I.Kom) candidate',
      period: '2023 – Sekarang',
      location: 'Sidoarjo, Jawa Timur',
      status: 'Sedang Menempuh Pendidikan',
      isCurrent: true,
      focus: 'Public Relations, Media Broadcasting, Jurnalistik Digital, Komunikasi Korporat, & Riset Komunikasi',
      notes: 'Aktif berpartisipasi dalam program kehumasan kampus (P3TU UMSIDA), kepanitiaan kampus, serta memimpin Tim KKN-P 2026.'
    },
    {
      institution: 'SMA Cendekia Sidoarjo',
      shortName: 'SMA Cendekia',
      program: 'Ilmu Pengetahuan Alam (IPA)',
      degree: 'Pendidikan Menengah Atas',
      period: '2020 – 2023',
      location: 'Sidoarjo, Jawa Timur',
      status: 'Lulus',
      isCurrent: false,
      focus: 'Pondasi logika analitis, kerja kelompok laboratorium, serta keaktifan ekstrakurikuler sekolah',
      notes: 'Membentuk dasar kemampuan analisis berpikir runtut, kedisiplinan organisasi, dan keterampilan presentasi verbal.'
    }
  ];

  return (
    <section id="education" className="py-20 md:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-2">
              <span className="w-6 h-[2px] bg-[#D62828]" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2E2E2E] tracking-tight">
              Riwayat Pendidikan
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-md mt-2 md:mt-0 font-medium">
            Jejak akademis yang membentuk wawasan teoritis dan keterampilan komunikasi praktis.
          </p>
        </div>

        {/* 2 Education Cards with modern editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828]/60 p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Corner Red Accent */}
              <div className="absolute top-0 right-0 w-2 h-full bg-[#D62828] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] group-hover:border-[#D62828]/40 text-[#D62828] flex items-center justify-center shrink-0 transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      edu.isCurrent
                        ? 'bg-[#D62828]/10 text-[#D62828] border-[#D62828]/30'
                        : 'bg-[#FAFAFA] text-[#6B6B6B] border-[#E5E5E5]'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#D62828] mb-1">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#2E2E2E] group-hover:text-[#D62828] transition-colors leading-snug">
                  {edu.institution}
                </h3>

                <div className="mt-3 py-2 px-3 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] inline-block">
                  <span className="text-xs text-[#6B6B6B] font-medium">Program Studi / Jurusan: </span>
                  <span className="text-sm font-bold text-[#2E2E2E]">{edu.program}</span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                    <BookOpen size={15} className="text-[#D62828] shrink-0 mt-0.5" />
                    <span><strong className="text-[#2E2E2E] font-semibold">Fokus:</strong> {edu.focus}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                    <Award size={15} className="text-[#D62828] shrink-0 mt-0.5" />
                    <span><strong className="text-[#2E2E2E] font-semibold">Catatan:</strong> {edu.notes}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin size={13} className="text-[#D62828]" />
                  {edu.location}
                </span>
                <span className="font-bold text-[#2E2E2E]">{edu.shortName}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
