export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Для бизнеса", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: {
      badge: "SINO AI ДЛЯ БИЗНЕСА",
      titleGradient: "Связующее звено",
      titleMain: "между пациентом и вашим бизнесом",
      desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности — когда он понял свой риск, получил анализы или ищет врача.",
      btnPartner: "Стать партнёром",
      btnApp: "Скачать приложение",
      socialProof: "20 000+ человек заботятся о здоровье с Sino"
    },
    market: {
      badge: "ГЛОБАЛЬНЫЙ РЫНОК",
      title: "Большой рынок — и понятный путь роста",
      stats: ["мировой рынок к 2030", "население региона", "рост рынка в год"],
      geo: "География запуска",
      status: "запущено"
    },
    team: {
      badge: "КОМАНДА",
      title: "Команда, которая создаёт Sino"
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes uchun", team: "Jamoa", partnerBtn: "Hamkor bo'lish" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznes o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor bo'lish", btnApp: "Yuklab olish", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor — va tushunarli o'sish yo'li", stats: ["bozor 2030", "aholi", "o'sish"], geo: "Ishga tushirish", status: "ishda" },
    team: { badge: "JAMOA", title: "Sino jamoasi" }
  },
  en: {
    nav: { market: "Market", business: "For Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "Download", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "Large market — clear growth path", stats: ["market by 2030", "population", "growth"], geo: "Launch Geography", status: "launched" },
    team: { badge: "TEAM", title: "Sino Team" }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};