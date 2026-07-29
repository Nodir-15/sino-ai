// translations.js
export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Для бизнеса", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: {
        badge: "SINO AI ДЛЯ БИЗНЕСА",
        titleGradient: "Связующее звено",
        titleMain: "между пациентом и вашим бизнесом",
        desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности. Клиники, лаборатории и аптеки растут вместе с Sino.",
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
    }
    // ... (добавь остальные разделы по аналогии)
  },
  uz: { /* копия структуры ru с узбекским текстом */ },
  en: { /* копия структуры ru с английским текстом */ }
};

// ХЕЛПЕР: Безопасное получение перевода
export const getT = (lang) => {
  const shortLang = lang?.split('-')[0] || 'ru'; // превращает ru-RU в ru
  return businessTranslations[shortLang] || businessTranslations['ru'];
};