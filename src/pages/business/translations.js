export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Для бизнеса", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: { badge: "SINO AI ДЛЯ БИЗНЕСА", titleGradient: "Связующее звено", titleMain: "между пациентом и вашим бизнесом", desc: "Мы приводим к вам не случайного клиента...", btnPartner: "Стать партнёром", btnApp: "Скачать приложение", socialProof: "20 000+ человек" },
    market: { badge: "ГЛОБАЛЬНЫЙ РЫНОК", title: "Большой рынок", stats: ["рынок к 2030", "население региона", "рост рынка"], geo: "География", status: "запущено" }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes uchun", team: "Jamoa", partnerBtn: "Hamkor bo'lish" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznesingiz o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor", btnApp: "Yuklab olish", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor", stats: ["bozor 2030", "mintaqa aholisi", "o'sish"], geo: "Hudud", status: "ishda" }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "App", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "Global market", stats: ["market 2030", "population", "growth"], geo: "Geography", status: "launched" }
  }
};

// Функция, которую мы будем импортировать в компоненты
export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};