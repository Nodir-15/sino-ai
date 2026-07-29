// src/pages/business/translations.js
export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Бизнес", team: "Команда", partnerBtn: "Партнёр" },
    hero: { badge: "SINO AI ДЛЯ БИЗНЕСА", titleGradient: "Связующее звено", titleMain: "между пациентом и вашим бизнесом", desc: "Мы приводим к вам не случайного клиента...", btnPartner: "Стать партнёром", btnApp: "Приложение", socialProof: "20k+ человек" },
    market: { badge: "ГЛОБАЛЬНЫЙ РЫНОК", title: "Большой рынок", stats: ["рынок", "население", "рост"], geo: "География", status: "запущено" },
    why: { badge: "БИЗНЕС", title: "Почему Sino AI", btn: "Подключить", items: [] },
    team: { badge: "КОМАНДА", title: "Команда", desc: "Эксперты" }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes", team: "Jamoa", partnerBtn: "Hamkor" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznes o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor", btnApp: "Ilova", socialProof: "20k+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor", stats: ["bozor", "aholi", "o'sish"], geo: "Hudud", status: "ishda" },
    why: { badge: "BIZNES", title: "Nima uchun Sino AI", btn: "Ulash", items: [] },
    team: { badge: "JAMOA", title: "Jamoa", desc: "Ekspertlar" }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "App", socialProof: "20k+ people" },
    market: { badge: "GLOBAL MARKET", title: "Large market", stats: ["market", "population", "growth"], geo: "Geography", status: "launched" },
    why: { badge: "BUSINESS", title: "Why Sino AI", btn: "Connect", items: [] },
    team: { badge: "TEAM", title: "Team", desc: "Experts" }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};