import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { WhatsAppIcon, InstagramIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyWA = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.whatsappRaw);
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      formData.subject || 'Kolaborasi / Diskusi Proyek'
    )}&body=${encodeURIComponent(
      `Halo Nicho Prasetya,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#E5E5E5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D62828] mb-3">
            <span className="w-6 h-[2px] bg-[#D62828]" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E2E2E] tracking-tight">
            Have a Project or <span className="text-[#D62828]">Opportunity in Mind?</span>
          </h2>
          <div className="w-16 h-1 bg-[#D62828] mt-4 mb-6" />
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            Mari terhubung untuk bertukar ide, berkolaborasi, dan menciptakan peluang baru.
          </p>
        </div>

        {/* Grid 2 Kolom: Informasi Kontak Interaktif & Formulir Surel Cepat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: 3 Kartu Kontak Utama */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#25D366] p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider block">
                    WhatsApp Resmi
                  </span>
                  <p className="text-lg font-bold text-[#2E2E2E]">
                    {SOCIAL_LINKS.whatsappRaw}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">Respon cepat untuk pesan langsung</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyWA}
                  title="Salin Nomor WhatsApp"
                  className="p-2.5 rounded-lg border border-[#E5E5E5] hover:bg-neutral-100 text-[#2E2E2E] transition-colors"
                >
                  {copiedWA ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <span>WhatsApp Me</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828] p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D62828]/10 text-[#D62828] flex items-center justify-center shrink-0 border border-[#D62828]/20">
                  <InstagramIcon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider block">
                    Instagram Profil
                  </span>
                  <p className="text-lg font-bold text-[#2E2E2E]">
                    {SOCIAL_LINKS.instagramHandle}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">Aktivitas, portofolio &amp; creative highlights</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E2E2E] hover:bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl border border-[#E5E5E5] hover:border-[#D62828] p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D62828]/10 text-[#D62828] flex items-center justify-center shrink-0 border border-[#D62828]/20">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider block">
                    Email Kontak
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#2E2E2E] break-all">
                    {SOCIAL_LINKS.email}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">Untuk komunikasi resmi, proposal &amp; kerja sama</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Salin Alamat Email"
                  className="p-2.5 rounded-lg border border-[#E5E5E5] hover:bg-neutral-100 text-[#2E2E2E] transition-colors"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={SOCIAL_LINKS.emailMailto}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#D62828] hover:bg-[#b52020] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <span>Send an Email</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Availability note */}
            <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-xs text-[#6B6B6B]">
                <strong className="text-[#2E2E2E] font-semibold">Tersedia untuk Magang, Proyek PR, Event Organizer, &amp; Kolaborasi Media.</strong>
              </p>
            </div>

          </div>

          {/* Kolom Kanan: Interactive Message Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E5E5]">
              <div>
                <h3 className="text-xl font-black text-[#2E2E2E]">Kirim Pesan Langsung</h3>
                <p className="text-xs text-[#6B6B6B]">Tuliskan pesan Anda dan kirimkan secara praktis ke email saya.</p>
              </div>
              <Sparkles size={18} className="text-[#D62828]" />
            </div>

            {formSent && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-medium">
                Klien email Anda telah dibuka dengan template pesan ini! Anda juga dapat menghubungi via WhatsApp untuk respon cepat.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                  Nama Anda / Instansi
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Sarah / BEM UMSIDA"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D62828] text-sm text-[#2E2E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                  Email Anda
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@perusahaan.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D62828] text-sm text-[#2E2E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                  Topik / Perihal
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tawaran Kerja Sama / Liputan Media / Diskusi Proyek"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D62828] text-sm text-[#2E2E2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2E2E2E] mb-1.5">
                  Pesan Anda
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Jelaskan kebutuhan, ruang lingkup proyek, atau tanggal rencana kegiatan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D62828] text-sm text-[#2E2E2E] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D62828] hover:bg-[#b52020] text-white py-3 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
              >
                <Send size={16} />
                <span>Kirimkan Pesan Melalui Email</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
