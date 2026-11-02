import React from 'react';
import { User, Calendar, Building2, GraduationCap, Clock, MessageSquare, CheckCircle2, RefreshCw, Users2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const profileDetails = [
    {
      label: 'Nama Lengkap',
      value: 'Nicho Prasetya',
      icon: User,
    },
    {
      label: 'Tanggal Lahir',
      value: '29 November 2004',
      icon: Calendar,
    },
    {
      label: 'Perguruan Tinggi',
      value: 'Universitas Muhammadiyah Sidoarjo (UMSIDA)',
      icon: Building2,
    },
    {
      label: 'Program Studi',
      value: 'Ilmu Komunikasi',
      icon: GraduationCap,
    },
    {
      label: 'Periode Kuliah',
      value: '2023 – Sekarang',
      icon: Clock,
    },
  ];

  const coreTraits = [
    {
      title: 'Komunikatif',
      description: 'Mampu menyampaikan gagasan secara jelas, persuasif, dan empatik di depan publik maupun media siaran.',
      icon: MessageSquare,
    },
    {
      title: 'Teliti',
      description: 'Cermat dalam merancang narasi, perencanaan rundown teknis, hingga pengolahan detail konten digital.',
      icon: CheckCircle2,
    },
    {
      title: 'Adaptif',
      description: 'Cepat menyesuaikan diri dengan dinamika tim, perkembangan tren media sosial, dan platform teknologi baru.',
      icon: RefreshCw,
    },
    {
      title: 'Kolaboratif',
      description: 'Dapat bekerja solid dalam tim kepanitiaan, kepemimpinan organisasi, serta kolaborasi antar divisi.',
      icon: Users2,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-3">
            <span className="w-6 h-[2px] bg-[#D62828]" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
            Communication <span className="text-[#D62828]">with Purpose.</span>
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mt-4 mb-6" />
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            Saya adalah mahasiswa Ilmu Komunikasi Universitas Muhammadiyah Sidoarjo yang memiliki ketertarikan pada komunikasi, media, Public Relations, dan produksi konten kreatif. Melalui pengalaman organisasi, pengelolaan media sosial, kegiatan komunitas, serta proyek perkuliahan, saya terus mengembangkan kemampuan komunikasi, kreativitas, kepemimpinan, dan kerja sama tim.
          </p>
        </div>

        {/* Grid 2 Kolom: Kartu Informasi Profil & 4 Karakter Profesional */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Profil Singkat */}
          <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D62828]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E5E5E5]">
              <div>
                <h3 className="text-lg font-bold text-[#2E2E2E]">Profil Singkat</h3>
                <p className="text-xs text-[#6B6B6B]">Informasi Akademik &amp; Biodata</p>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-bold bg-[#D62828] text-white rounded">
                AKTIF
              </span>
            </div>

            <dl className="space-y-4">
              {profileDetails.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 pb-3.5 border-b border-[#E5E5E5]/60 last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#D62828] shrink-0 mt-0.5">
                      <IconComponent size={16} />
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[#6B6B6B] font-semibold">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-bold text-[#2E2E2E] mt-0.5">
                        {item.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <div className="mt-6 pt-5 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#6B6B6B]">
              <span>Konsentrasi Minat:</span>
              <span className="font-bold text-[#2E2E2E]">PR, Broadcasting &amp; Social Media</span>
            </div>
          </div>

          {/* Kolom 4 Karakter Profesional */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="text-xl font-extrabold text-[#2E2E2E] tracking-tight">
                Karakter Profesional
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                Prinsip kerja dan nilai fundamental dalam setiap proyek komunikasi dan kolaborasi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreTraits.map((trait, index) => {
                const TraitIcon = trait.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white border border-[#E5E5E5] hover:border-[#D62828] p-5 rounded-xl transition-all duration-300 hover:shadow-md relative overflow-hidden"
                  >
                    {/* Top small accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#D62828] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="w-11 h-11 rounded-lg bg-[#FAFAFA] group-hover:bg-[#D62828]/10 text-[#D62828] border border-[#E5E5E5] group-hover:border-[#D62828]/30 flex items-center justify-center mb-4 transition-colors">
                      <TraitIcon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-[#2E2E2E] group-hover:text-[#D62828] transition-colors mb-1.5">
                      {trait.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote block editorial */}
            <div className="mt-6 p-4 sm:p-5 bg-[#FAFAFA] border-l-4 border-[#D62828] rounded-r-xl">
              <p className="text-xs sm:text-sm italic text-[#2E2E2E] font-medium leading-relaxed">
                “Komunikasi bukan sekadar menyampaikan kata-kata, melainkan menciptakan pemahaman bersama, membangun kepercayaan publik, dan menyajikan cerita yang bernilai.”
              </p>
              <p className="text-xs font-bold text-[#D62828] mt-2 tracking-wide uppercase">
                — Nicho Prasetya
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
