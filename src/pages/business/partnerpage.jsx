import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getT } from "./translations";

// Принимаем текущий язык (currentLang), функцию его изменения (setLang) и функцию закрытия формы (onClose)
const PartnerPage = ({ onClose, currentLang, setLang }) => {
  // Загружаем переводы на основе переданного языка
  const t = getT(currentLang || 'ru').partner;

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    orgType: '',
    location: '',
    phone: '',
    email: '',
    interestType: ''
  });

  // Мягкий автоматический скролл вверх при открытии страницы формы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!t) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы партнера:', formData);
  };

  return (
    <div className="min-h-screen w-full font-sans text-white bg-[#05110B] relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Сложные фоновые градиенты */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-green-900/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-emerald-800/10 blur-[160px]" />
      </div>

      {/* ШАПКА СТРАНИЦЫ ФОРМЫ */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onClose}>
          <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center font-bold text-sm tracking-tighter">
            <img src="./log.webp" alt="" />
          </div>
          <span className="text-xl font-bold tracking-tight">sino</span>
        </div>

        <div className="flex items-center gap-3">
          {/* УДОБНЫЕ КНОПКИ СМЕНЫ ЯЗЫКА ВМЕСТО СЕЛЕКТА */}
          <div className="flex border border-white/10 bg-white/5 rounded-full overflow-hidden text-xs font-semibold">
            {['uz', 'ru', 'en'].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang && setLang(l)} // Меняем язык приложения на лету
                className={`px-3 py-1.5 transition-all cursor-pointer ${
                  currentLang === l 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Крестик закрытия страницы */}
          <button 
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* ЛЕВАЯ КОЛОНКА (Преимущества) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          <div className="space-y-3">
            <p className="text-emerald-400 font-bold text-[11px] tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-1 h-1 bg-emerald-400 rounded-full" />
              {t.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              {t.titleMain}<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                {t.titleGradient}
              </span>
            </h1>
          </div>

          <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-md">
            {t.desc}
          </p>

          <ul className="space-y-3 pt-2">
            {(t.benefits || []).map((text, idx) => (
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className="flex items-center gap-3 text-sm md:text-base text-white/90 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-[10px] shrink-0">
                  ✓
                </span>
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ПРАВАЯ КОЛОНКА (ФОРМА — ШРИФТЫ УВЕЛИЧЕНЫ НА 2-3px) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-xl bg-[#091D14]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/40">
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-emerald-400 text-base">📋</span>
              <h2 className="text-base font-bold text-white tracking-tight">{t.formTitle}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Ряд 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelName} <span className="text-emerald-400">*</span></label>
                  <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder-white/20" placeholder={t.placeholderName} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelCompany} <span className="text-emerald-400">*</span></label>
                  <input required type="text" name="company" value={formData.company} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder-white/20" placeholder={t.placeholderCompany} />
                </div>
              </div>

              {/* Ряд 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelOrgType} <span className="text-emerald-400">*</span></label>
                  <select required name="orgType" value={formData.orgType} onChange={handleChange} className="bg-[#091D14] border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white/80 focus:outline-none focus:border-emerald-500/50 transition-all">
                    <option value="">{t.placeholderSelect}</option>
                    {(t.orgTypes || []).map((type) => (
                      <option key={type.v} value={type.v}>{type.t}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelLocation}</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder-white/20" placeholder={t.placeholderLocation} />
                </div>
              </div>

              {/* Ряд 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelPhone} <span className="text-emerald-400">*</span></label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder-white/20" placeholder={t.placeholderPhone} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[14px] text-white/50 font-semibold">{t.labelEmail} <span className="text-emerald-400">*</span></label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder-white/20" placeholder={t.placeholderEmail} />
                </div>
              </div>

                        {/* Ряд 4 */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[14px] text-white/50 font-semibold">{t.labelInterest} <span className="text-emerald-400">*</span></label>
                <select required name="interestType" value={formData.interestType} onChange={handleChange} className="bg-[#091D14] border border-white/10 rounded-xl px-4 py-2.5 text-[15px] text-white/80 focus:outline-none focus:border-emerald-500/50 transition-all">
                  <option value="">{t.placeholderSelect}</option>
                  {(t.interests || []).map((interest) => (
                    <option key={interest.v} value={interest.v}>{interest.t}</option>
                  ))}
                </select>
              </div>

              {/* Финальный футер формы с кнопкой отправки */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[11px] text-white/30 font-medium">{t.requiredNotes}</span>
                <button type="submit" className="bg-white hover:bg-gray-100 text-[#05110B] px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95">
                  {t.btnSubmit}
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      <footer className="relative z-10 text-center py-6 text-white/20 text-xs font-medium border-t border-white/5">
        © Sino AI — {new Date().getFullYear()}
      </footer>

    </div>
  );
};

export default PartnerPage;
