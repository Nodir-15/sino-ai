export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Для бизнеса", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: {
      badge: "SINO AI ДЛЯ БИЗНЕСА",
      titleGradient: "Связующее звено",
      titleMain: "между пациентом и вашим бизнесом",
      desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности.",
      btnPartner: "Стать партнёром",
      btnApp: "Скачать приложение",
      socialProof: "20 000+ человек заботятся о здоровье с Sino"
    },
    market: {
      badge: "ГЛОБАЛЬНЫЙ РЫНОК",
      title: "Большой рынок — и понятный путь роста",
      s1_v: "$500B+", s1_d: "мировой рынок к 2030 году",
      s2_v: "100M+", s2_d: "население региона",
      s3_v: "20%+", s3_d: "рост рынка в год",
      geo: "География запуска",
      status: "запущено"
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes", team: "Jamoa", partnerBtn: "Hamkor" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznes o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor", btnApp: "Ilova", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor — o'sish yo'li", s1_v: "$500B+", s1_d: "2030 yilga kelib bozor", s2_v: "100M+", s2_d: "mintaqa aholisi", s3_v: "20%+", s3_d: "yillik o'sish", geo: "Hudud", status: "ishda" }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "App", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "Large market — growth path", s1_v: "$500B+", s1_d: "market by 2030", s2_v: "100M+", s2_d: "region population", s3_v: "20%+", s3_d: "annual growth", geo: "Geography", status: "launched" }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};