export const businessTranslations = {
  ru: {
    nav: { market: "Рынок", business: "Для бизнеса", team: "Команда", partnerBtn: "Стать партнёром" },
    hero: { badge: "SINO AI ДЛЯ БИЗНЕСА", titleGradient: "Связующее звено", titleMain: "между пациентом и вашим бизнесом", desc: "Мы приводим к вам не случайного клиента из рекламы, а человека в момент осознанной потребности.", btnPartner: "Стать партнёром", btnApp: "Скачать приложение", socialProof: "20 000+ человек" },
    market: { badge: "ГЛОБАЛЬНЫЙ РЫНОК", title: "Большой рынок — и понятный путь роста", stats: ["рынок к 2030", "население региона", "рост рынка в год"], geo: "География запуска", status: "запущено" },
    why: { badge: "ДЛЯ БИЗНЕСА", title: "Почему выбирают Sino AI", btn: "Подключить клинику", items: [{t: "Привлекайте клиентов", d: "Расширьте охват пациентов."}, {t: "Доход", d: "Новые модели подписки."}, {t: "AI-помощник", d: "Упрощение процессов."}] },
    team: { badge: "КОМАНДА", title: "Команда, которая создаёт Sino", desc: "Эксперты в медицине, AI и продукте." }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes uchun", team: "Jamoa", partnerBtn: "Hamkor bo'lish" },
    hero: { badge: "BIZNES UCHUN SINO AI", titleGradient: "Bog'lovchi bo'g'in", titleMain: "bemor va biznesingiz o'rtasida", desc: "Biz sizga ongli ehtiyoj paytidagi odamni olib kelamiz.", btnPartner: "Hamkor bo'lish", btnApp: "Yuklab olish", socialProof: "20 000+ kishi" },
    market: { badge: "GLOBAL BOZOR", title: "Katta bozor va aniq o'sish yo'li", stats: ["bozor 2030 yilga", "mintaqa aholisi", "yillik o'sish"], geo: "Ishga tushirish hududi", status: "ishga tushdi" },
    why: { badge: "BIZNES UCHUN", title: "Nima uchun Sino AI tanlanadi", btn: "Klinikani ulash", items: [{t: "Mijozlarni jalb qiling", d: "Bemorlar qamrovini kengaytiring."}, {t: "Daromad", d: "Yangi obuna modellari."}, {t: "AI-yordamchi", d: "Jarayonlarni soddalashtirish."}] },
    team: { badge: "JAMOA", title: "Sino-ni yaratayotgan jamoa", desc: "Tibbiyot va AI bo'yicha ekspertlar." }
  },
  en: {
    nav: { market: "Market", business: "Business", team: "Team", partnerBtn: "Partner" },
    hero: { badge: "SINO AI FOR BUSINESS", titleGradient: "The link", titleMain: "between patient and business", desc: "We bring you customers at the moment of need.", btnPartner: "Partner", btnApp: "Download", socialProof: "20,000+ people" },
    market: { badge: "GLOBAL MARKET", title: "A large market and growth path", stats: ["market by 2030", "population", "annual growth"], geo: "Geography", status: "launched" },
    why: { badge: "BUSINESS", title: "Why choose Sino AI", btn: "Connect", items: [{t: "Attract clients", d: "Expand reach."}, {t: "Income", d: "New models."}, {t: "AI helper", d: "Simplify work."}] },
    team: { badge: "TEAM", title: "The team behind Sino", desc: "Medical and AI experts." }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};