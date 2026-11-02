export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  highlights: string[];
  role: string;
  tools: string[];
  externalUrl?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p3tu-umsida',
    title: 'Media Sosial P3TU UMSIDA',
    category: 'Social Media Management',
    badge: 'Social Media Management',
    shortDesc: 'Mengelola strategi konten, editorial feed, dan publikasi media sosial Pusat Penjaminan Mutu & Transformasi Universitas.',
    longDesc: 'Bertanggung jawab dalam merancang content calendar terstruktur, copywriting materi promosi akademik & layanan penjaminan mutu, serta visualisasi feed dan story untuk meningkatkan literasi dan keterlibatan (engagement) sivitas akademika UMSIDA terhadap layanan P3TU.',
    image: 'https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    highlights: [
      'Perencanaan editorial calendar bulanan',
      'Penyusunan copywriting edukatif & informatif',
      'Desain konten grafis feed & story Instagram',
      'Evaluasi performa konten berkala'
    ],
    role: 'Social Media Content & Planner',
    tools: ['Canva', 'Meta Business Suite', 'Instagram', 'Google Workspace'],
    externalUrl: 'https://drive.google.com/drive/folders/1EXnxwIOluK7vWAcDd31ZAKoxZUbYBnH3'
  },
  {
    id: 'talkmbois-podcast',
    title: 'Podcast “Sulung vs Bungsu”',
    category: 'Broadcasting & Content Creation',
    badge: 'Broadcasting & Content Creation',
    shortDesc: 'Produksi serial podcast bersama komunitas Talkmbois bertema dinamika peran keluarga dan relasi sosial.',
    longDesc: 'Terlibat sebagai Announcer dan perumus alur narasi audio dalam proyek podcast "Sulung vs Bungsu". Menyiapkan skrip pembuka, teknik olah vokal, interaksi dialogis, serta alur penceritaan yang dekat dengan keseharian generasi muda.',
    image: 'https://images.pexels.com/photos/4319926/pexels-photo-4319926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    highlights: [
      'Penyusunan naskah podcast (talking points & cues)',
      'Penguasaan vokal dan dinamika siaran radio/podcast',
      'Sesi rekaman audio studio komunitas',
      'Kolaborasi kreatif bersama tim Talkmbois'
    ],
    role: 'Podcast Host & Announcer',
    tools: ['Broadcasting Microphone', 'Audio Scriptwriting', 'CapCut / Audio Editor', 'Talkmbois Media'],
    externalUrl: 'https://drive.google.com/drive/folders/1EXnxwIOluK7vWAcDd31ZAKoxZUbYBnH3'
  },
  {
    id: 'kkn-p-umsida',
    title: 'Dokumentasi KKN-P UMSIDA',
    category: 'Community & Leadership',
    badge: 'Community & Leadership',
    shortDesc: 'Dokumentasi dan koordinasi publikasi pelaksanaan program kerja pengabdian mahasiswa KKN-P UMSIDA 2026.',
    longDesc: 'Sebagai Ketua Tim KKN-P UMSIDA 2026, mengawal perencanaan dan pelaksanaan program kerja di lokasi pengabdian, membagi tugas fungsional anggota, serta menyusun laporan dokumentasi kegiatan dan publikasi kehumasan kepada mitra masyarakat.',
    image: 'https://images.pexels.com/photos/26593312/pexels-photo-26593312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    highlights: [
      'Kepemimpinan koordinasi kelompok & stakeholder',
      'Perumusan rencana kerja pengabdian masyarakat',
      'Dokumentasi visual rangkaian kegiatan lapangan',
      'Penyusunan laporan pertanggungjawaban'
    ],
    role: 'Ketua Kelompok KKN-P & Koordinator Humas',
    tools: ['Leadership & PR', 'Dokumentasi Lapangan', 'Microsoft Office', 'Canva'],
    externalUrl: 'https://drive.google.com/drive/folders/1EXnxwIOluK7vWAcDd31ZAKoxZUbYBnH3'
  },
  {
    id: 'thezstage-2025',
    title: 'Thezstage 2025',
    category: 'Event & Creative Production',
    badge: 'Event & Creative Production',
    shortDesc: 'Perencanaan konsep acara, rundown teknis, dan manajemen operasional panggung Thezstage 2025.',
    longDesc: 'Sebagai bagian dari Divisi Acara Thezstage 2025, bertanggung jawab dalam brainstorming konsep panggung, pembuatan rundown teknis detik per detik, sinkronisasi pengisi acara dengan kru teknis, serta mitigasi kendala di hari pelaksanaan.',
    image: 'https://images.pexels.com/photos/29775304/pexels-photo-29775304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
    highlights: [
      'Perumusan rundown & time management acara',
      'Koordinasi teknis penampil & tim panggung',
      'Komunikasi cepat antar divisi (HT / Walkie-talkie)',
      'Eksekusi flow panggung secara dinamis'
    ],
    role: 'Divisi Acara (Event Program & Stage Flow)',
    tools: ['Event Rundown', 'Stage Management', 'Team Coordination', 'Google Sheets'],
    externalUrl: 'https://drive.google.com/drive/folders/1EXnxwIOluK7vWAcDd31ZAKoxZUbYBnH3'
  }
];

export const DRIVE_PORTFOLIO_URL = 'https://drive.google.com/drive/folders/1EXnxwIOluK7vWAcDd31ZAKoxZUbYBnH3';

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/6285733530629',
  whatsappRaw: '085733530629',
  instagram: 'https://www.instagram.com/nichoprstya/',
  instagramHandle: '@nichoprstya',
  email: 'nichoprasetya2@gmail.com',
  emailMailto: 'mailto:nichoprasetya2@gmail.com'
};
