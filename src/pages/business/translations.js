// src/pages/business/translations.js
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
      s1_v: "$500B+", s1_d: "мировой рынок к 2030 году",
      s2_v: "100M+", s2_d: "население региона",
      s3_v: "20%+", s3_d: "рост рынка в год",
      geo: "География запуска",
      status: "запущено"
    },
    why: {
      badge: "ДЛЯ БИЗНЕСА",
      title: "Почему клиники и аптеки выбирают Sino AI",
      desc: "Развивайте свой медицинский бизнес с помощью нашей интегрированной платформы. Улучшайте уход за пациентами и открывайте новые источники дохода.",
      btn: "Подключить клинику",
      items: [
        { t: "Привлекайте новых клиентов", d: "Расширьте охват и подключитесь к тысячам новых пациентов." },
        { t: "Дополнительный доход", d: "Внедряйте новые модели подписки и пакеты услуг." },
        { t: "AI-помощник для врачей", d: "Используйте AI-аналитику для упрощения процессов." }
      ]
    },
    team: {
      badge: "КОМАНДА",
      title: "Команда, которая создаёт Sino"
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes uchun", team: "Jamoa", partnerBtn: "Hamkor bo'lish" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznesingiz o'rtasida", desc: "Biz ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor bo'lish", btnApp: "Yuklab olish", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor va o'sish yo'li", s1_v: "$500B+", s1_d: "2030 yilga kelib bozor", s2_v: "100M+", s2_d: "mintaqa aholisi", s3_v: "20%+", s3_d: "yillik o'sish", geo: "Ishga tushirish hududi", status: "ishda" },
    why: { badge: "BIZNES UCHUN", title: "Nima uchun Sino AI tanlanadi", desc: "Tibbiy biznesingizni biz bilan rivojlantiring.", btn: "Klinikani ulash", items: [{ t: "Yangi mijozlar", d: "Bemorlar qamrovini kengaytiring." }, { t: "Qo'shimcha daromad", d: "Obuna modellarini joriy qiling." }, { t: "AI-yordamchi", d: "Jarayonlarni soddalashtirish." }] },
    team: { badge: "JAMOA", title: "Sino jamoasi" }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "Download", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "Large market", s1_v: "$500B+", s1_d: "market by 2030", s2_v: "100M+", s2_d: "population", s3_v: "20%+", s3_d: "growth", geo: "Geography", status: "launched" },
    why: { badge: "BUSINESS", title: "Why choose Sino AI", desc: "Grow your medical business with us.", btn: "Connect", items: [{ t: "Attract clients", d: "Expand reach." }, { t: "Income", d: "New models." }, { t: "AI assistant", d: "Simplify work." }] },
    team: { badge: "TEAM", title: "The team behind Sino" }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};