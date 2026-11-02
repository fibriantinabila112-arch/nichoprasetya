import React from 'react';
import { Users, Calendar, Award, Radio, Share2, Sparkles, ArrowUpRight } from 'lucide-react';
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData';

interface ExperienceItem {
  number: string;
  role: string;
  institution: string;
  year: string;
  description: string;
  keyResponsibilities: string[];
  category: string;
  icon: React.ElementType;
  mediaImage: string;
  mediaCaption: string;
}

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      number: '01',
      role: 'Ketua KKN-P UMSIDA 2026',
      institution: 'Universitas Muhammadiyah Sidoarjo',
      year: '2026',
      description: 'Memimpin dan mengoordinasikan pelaksanaan kegiatan KKN-P, mengatur pembagian tugas anggota tim, serta memastikan program kerja berjalan sesuai rencana.',
      keyResponsibilities: [
        'Koordinasi kepemimpinan dan manajemen konflik anggota kelompok',
        'Penetapan timeline program kerja dan delegasi tugas teknis',
        'Jembatan komunikasi antara pihak kampus, mitra desa, dan warga',
        'Pengawasan penyusunan dokumentasi dan laporan pertanggungjawaban'
      ],
      category: 'Leadership & Community',
      icon: Users,
      mediaImage: 'https://images.pexels.com/photos/26593312/pexels-photo-26593312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
      mediaCaption: 'Dokumentasi Kepemimpinan & Pengabdian KKN-P UMSIDA 2026'
    },
    {
      number: '02',
      role: 'Divisi Acara — Thezstage 2025',
      institution: 'Thezstage Production',
      year: '2025',
      description: 'Terlibat dalam perencanaan konsep acara, koordinasi teknis, dan pelaksanaan rangkaian kegiatan.',
      keyResponsibilities: [
        'Brainstorming konsep pertunjukan panggung dan alur penonton',
        'Penyusunan rundown detail dan sinkronisasi technical cue',
        'Koordinasi pengisi acara (talent/guest stars) dan floor management',
        'Penanganan kendala panggung secara cepat dan adaptif saat live acara'
      ],
      category: 'Event & Creative Production',
      icon: Calendar,
      mediaImage: 'https://images.pexels.com/photos/29775304/pexels-photo-29775304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
      mediaCaption: 'Manajemen Rundown & Koordinasi Panggung Thezstage 2025'
    },
    {
      number: '03',
      role: 'Social Media Management — P3TU UMSIDA',
      institution: 'P3TU Universitas Muhammadiyah Sidoarjo',
      year: '2024 – 2025',
      description: 'Mengelola perencanaan konten, materi publikasi, dan evaluasi konten media sosial untuk membantu meningkatkan engagement serta memperkenalkan layanan P3TU.',
      keyResponsibilities: [
        'Menyusun content calendar mingguan & bulanan teratur',
        'Produksi infografis visual, caption informatif, dan Instagram stories',
        'Membantu meningkatkan citra positif dan pemahaman layanan P3TU',
        'Evaluasi matriks jangkauan (reach) dan interaksi audiens'
      ],
      category: 'Public Relations & Social Media',
      icon: Share2,
      mediaImage: 'https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
      mediaCaption: 'Perencanaan Konten & Kurasi Feed Media Sosial P3TU UMSIDA'
    },
    {
      number: '04',
      role: 'Uji Kompetensi Penyiar Berita',
      institution: 'Lembaga Sertifikasi / Penguji Kompetensi Penyiaran',
      year: '2024',
      description: 'Lulus uji kompetensi penyiar berita dan memperoleh sertifikat sebagai bukti kompetensi dalam penyampaian informasi.',
      keyResponsibilities: [
        'Penguasaan teknik artikulasi, intonasi, tempo, dan olah vokal on-air',
        'Standar etika jurnalistik penyiaran dan akurasi naskah berita',
        'Kesiapan mental siaran langsung (live news reading) dan improvisasi',
        'Sertifikasi resmi verifikasi kompetensi penyiar profesional'
      ],
      category: 'Certification & Broadcasting',
      icon: Award,
      mediaImage: 'https://images.pexels.com/photos/31213674/pexels-photo-31213674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
      mediaCaption: 'Sertifikat & Uji Kompetensi Penyiar Berita Profesional'
    },
    {
      number: '05',
      role: 'Announcer — Talkmbois (2023)',
      institution: 'Komunitas Announcer Talkmbois',
      year: '2023',
      description: 'Terlibat dalam kegiatan komunitas announcer dan produksi podcast, termasuk karya berjudul “Sulung vs Bungsu”.',
      keyResponsibilities: [
        'Berperan sebagai announcer / pembawa acara dalam sesi podcast',
        'Merumuskan topik diskusi hangat seputar relasi keluarga generasi Z',
        'Latihan vokal dan teknik membangun chemistry antar pembicara',
        'Kolaborasi audio-recording bersama pegiat penyiaran muda'
      ],
      category: 'Broadcasting & Podcast',
      icon: Radio,
      mediaImage: 'https://images.pexels.com/photos/4319926/pexels-photo-4319926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
      mediaCaption: 'Produksi Podcast Komunitas Talkmbois “Sulung vs Bungsu”'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E5E5]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-2">
              <span className="w-6 h-[2px] bg-[#D62828]" />
              <span>CAREER &amp; LEADERSHIP PATH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
              Pengalaman dan Organisasi
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-md mt-2 md:mt-0 font-medium">
            Rekam jejak kepemimpinan, kepanitiaan, manajemen media sosial, dan sertifikasi penyiaran.
          </p>
        </div>

        {/* Vertical Timeline Modern */}
        <div className="relative">
          {/* Vertical central/left red line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-8 w-[2px] bg-gradient-to-b from-[#D62828] via-[#D62828]/60 to-[#D62828]/20" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative pl-12 md:pl-20 group">
                  
                  {/* Timeline Dot Marker with Icon */}
                  <div className="absolute left-2 md:left-8 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#D62828] flex items-center justify-center text-[#D62828] group-hover:scale-125 transition-transform duration-300 shadow-sm z-10">
                    <Icon size={12} />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white rounded-xl border border-[#E5E5E5] group-hover:border-[#D62828]/60 p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-lg">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Detail Info */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="px-2.5 py-1 bg-[#2E2E2E] text-white text-[11px] font-bold tracking-wider uppercase rounded">
                            {item.year}
                          </span>
                          <span className="px-2.5 py-1 bg-[#D62828]/10 text-[#D62828] border border-[#D62828]/20 text-[11px] font-bold tracking-wider uppercase rounded">
                            {item.category}
                          </span>
                          <span className="text-xs text-[#6B6B6B] font-semibold">
                            #{item.number}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-[#2E2E2E] group-hover:text-[#D62828] transition-colors leading-snug">
                            {item.role}
                          </h3>
                          <p className="text-sm font-semibold text-[#6B6B6B] mt-1">
                            {item.institution}
                          </p>
                        </div>

                        <p className="text-sm sm:text-base text-[#2E2E2E] leading-relaxed font-normal">
                          {item.description}
                        </p>

                        {/* Bullet responsibilities */}
                        <div className="pt-2">
                          <p className="text-xs uppercase tracking-wider font-bold text-[#6B6B6B] mb-2">
                            Poin Kunci &amp; Kontribusi:
                          </p>
                          <ul className="space-y-1.5">
                            {item.keyResponsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Foto Dokumentasi / Placeholder Thumbnail & Sertifikat */}
                      <div className="lg:col-span-5">
                        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl overflow-hidden group/img">
                          <div className="relative aspect-video overflow-hidden bg-[#2E2E2E]">
                            <img
                              src={item.mediaImage}
                              alt={item.mediaCaption}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-[#2E2E2E]/80 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider">
                              Dokumentasi Kegiatan
                            </div>
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                              <p className="text-xs font-bold line-clamp-1">{item.role}</p>
                            </div>
                          </div>
                          <div className="p-3 bg-white flex items-center justify-between text-[11px] text-[#6B6B6B] border-t border-[#E5E5E5]">
                            <span className="flex items-center gap-1 line-clamp-1">
                              <Sparkles size={12} className="text-[#D62828] shrink-0" />
                              <span>{item.mediaCaption}</span>
                            </span>
                            <a
                              href={DRIVE_PORTFOLIO_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#D62828] hover:underline font-bold shrink-0 flex items-center gap-0.5 ml-2"
                            >
                              <span>Aset</span>
                              <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
