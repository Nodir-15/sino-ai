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
      stats: ["мировой рынок к 2030", "население региона", "рост рынка"],
      geo: "География запуска",
      status: "запущено"
    },
    why: {
      badge: "ДЛЯ БИЗНЕСА",
      title: "Почему клиники, лаборатории и аптеки выбирают Sino AI",
      desc: "Развивайте свой медицинский бизнес с помощью нашей интегрированной платформы. Улучшайте уход за пациентами и открывайте новые источники дохода.",
      btn: "Подключить клинику",
      items: [
        { t: "Привлекайте новых клиентов", d: "Расширьте охват и подключитесь к тысячам новых пациентов." },
        { t: "Дополнительный доход", d: "Внедряйте новые модели подписки и пакеты услуг." },
        { t: "AI-помощник для врачей", d: "Используйте AI-аналитику для упрощения процессов." }
      ]
    }
  },
  uz: {
    nav: { market: "Bozor", business: "Biznes uchun", team: "Jamoa", partnerBtn: "Hamkor bo'lish" },
    hero: {
      badge: "BIZNES UCHUN SINO AI",
      titleGradient: "Bog'lovchi bo'g'in",
      titleMain: "bemor va sizning biznesingiz o'rtasida",
      desc: "Biz sizga reklamadan tasodifiy mijozni emas, balki ongli ehtiyoj paytidagi odamni olib kelamiz. Klinikalar va dorixonalar Sino bilan rivojlanadi.",
      btnPartner: "Hamkor bo'lish",
      btnApp: "Yuklab olish",
      socialProof: "20 000+ kishi Sino bilan birga"
    },
    market: {
      badge: "GLOBAL BOZOR",
      title: "Katta bozor va aniq o'sish yo'li",
      stats: ["jahon bozori 2030 yilga", "mintaqa aholisi", "yillik o'sish"],
      geo: "Ishga tushirish geografiyasi",
      status: "ishga tushdi"
    },
    why: {
      badge: "BIZNES UCHUN",
      title: "Nima uchun klinikalar Sino AI ni tanlaydi",
      desc: "Tibbiy biznesingizni bizning platformamiz bilan rivojlantiring.",
      btn: "Klinikani ulash",
      items: [
        { t: "Yangi mijozlar", d: "Minglab yangi bemorlar bilan aloqa o'rnating." },
        { t: "Qo'shimcha daromad", d: "Obuna modellarini joriy qiling." },
        { t: "AI-yordamchi", d: "AI-tahlildan foydalaning." }
      ]
    }
  },
  en: {
    nav: { market: "Market", business: "For Business", team: "Team", partnerBtn: "Become a partner" },
    hero: {
      badge: "SINO AI FOR BUSINESS",
      titleGradient: "The link",
      titleMain: "between patient and your business",
      desc: "We bring you not a random customer, but a person at the moment of conscious need.",
      btnPartner: "Become a partner",
      btnApp: "Download App",
      socialProof: "20,000+ people trust Sino"
    },
    market: {
      badge: "GLOBAL MARKET",
      title: "A large market and a clear growth path",
      stats: ["market by 2030", "region population", "annual growth"],
      geo: "Launch Geography",
      status: "launched"
    },
    why: {
      badge: "FOR BUSINESS",
      title: "Why clinics choose Sino AI",
      desc: "Grow your medical business with our integrated platform.",
      btn: "Connect Clinic",
      items: [
        { t: "Attract new clients", d: "Connect with thousands of new patients." },
        { t: "Extra income", d: "Implement subscription models." },
        { t: "AI assistant", d: "Use AI analytics." }
      ]
    }
  }
};

export const getT = (lang) => {
  const code = lang?.split('-')[0] || 'ru';
  return businessTranslations[code] || businessTranslations['ru'];
};