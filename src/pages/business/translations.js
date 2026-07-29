// src/pages/business/translations.js
export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Бизнес", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: {
      badge: "SINO AI ДЛЯ БИЗНЕСА",
      titleGradient: "Связующее звено",
      titleMain: "между пациентом и вашим бизнесом",
      desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности.",
      btnPartner: "Стать партнёром",
      btnApp: "Скачать приложение",
      socialProof: "20 000+ человек"
    },
    market: {
      badge: "ГЛОБАЛЬНЫЙ РЫНОК",
      title: "Большой рынок",
      stats: ["рынок к 2030", "население региона", "рост в год"],
      geo: "География запуска",
      status: "запущено"
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes", team: "Jamoa", partnerBtn: "Hamkor" },
    hero: {
      badge: "BIZNES UCHUN SINO AI",
      titleGradient: "Bog'lovchi bo'g'in",
      titleMain: "bemor va biznes o'rtasida",
      desc: "Biz sizga reklamadan tasodifiy mijozni emas, balki ongli ehtiyoj paytidagi odamni olib kelamiz.",
      btnPartner: "Hamkor bo'lish",
      btnApp: "Yuklab olish",
      socialProof: "20 000+ kishi"
    },
    market: {
      badge: "GLOBAL BOZOR",
      title: "Katta bozor",
      stats: ["bozor 2030 yilga", "aholi soni", "yillik o'sish"],
      geo: "Ishga tushirish hududi",
      status: "ishga tushdi"
    }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: {
      badge: "SINO AI FOR BUSINESS",
      titleGradient: "The link",
      titleMain: "between patient and business",
      desc: "We bring you customers at the moment of need. Clinics, labs, and pharmacies grow with Sino.",
      btnPartner: "Become partner",
      btnApp: "Download App",
      socialProof: "20,000+ people"
    },
    market: {
      badge: "GLOBAL MARKET",
      title: "Large market",
      stats: ["market by 2030", "population", "growth"],
      geo: "Geography",
      status: "launched"
    }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  // Если языка нет, возвращаем русский, чтобы сайт не упал
  return businessTranslations[code] || businessTranslations['ru'];
};