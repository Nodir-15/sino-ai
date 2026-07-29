export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Бизнес", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: {
      badge: "SINO AI ДЛЯ БИЗНЕСА",
      titleGradient: "Связующее звено",
      titleMain: "между пациентом и вашим бизнесом",
      desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности — когда он понял свой риск, получил анализы или ищет врача. Клиники, лаборатории и аптеки растут вместе с Sino.",
      btnPartner: "Стать партнёром",
      btnApp: "Скачать приложение",
      socialProof: "20 000+ человек заботятся о здоровье с Sino"
    },
    market: {
      badge: "ГЛОБАЛЬНЫЙ РЫНОК",
      title: "Большой рынок — путь роста",
      stats: ["мировой рынок к 2030", "население региона", "рост в год"],
      geo: "География запуска",
      status: "запущено"
    },
    why: {
      badge: "БИЗНЕС",
      title: "Почему выбирают Sino AI",
      btn: "Подключить клинику",
      items: [
        { t: "Привлекайте клиентов", d: "Расширьте охват и подключитесь к тысячам новых пациентов." },
        { t: "Дополнительный доход", d: "Внедряйте новые модели подписки и пакеты услуг." },
        { t: "AI-помощник", d: "Используйте AI-аналитику для упрощения процессов." }
      ]
    },
    team: {
      badge: "КОМАНДА",
      title: "Команда, которая создаёт Sino"
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes", team: "Jamoa", partnerBtn: "Hamkor" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznesingiz o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor", btnApp: "Yuklab olish", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor va o'sish", stats: ["bozor 2030", "aholi soni", "o'sish"], geo: "Ishga tushirish hududi", status: "ishda" },
    why: { badge: "BIZNES", title: "Nima uchun Sino AI", btn: "Ulash", items: [{ t: "Mijozlar", d: "Bemorlar qamrovini kengaytiring." }, { t: "Daromad", d: "Yangi modellar." }, { t: "AI", d: "Jarayonlarni soddalashtiring." }] },
    team: { badge: "JAMOA", title: "Sino yaratuvchilari" }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "Download", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "Large market", stats: ["market 2030", "population", "growth"], geo: "Geography", status: "launched" },
    why: { badge: "BUSINESS", title: "Why choose Sino AI", btn: "Connect", items: [{ t: "Attract clients", d: "Expand reach." }, { t: "Income", d: "New models." }, { t: "AI helper", d: "Simplify work." }] },
    team: { badge: "TEAM", title: "The team behind Sino" }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};