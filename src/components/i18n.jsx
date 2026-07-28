import { createContext, useContext, useState } from 'react';

const translations = {
  uz: {
    nav: { home: "Bosh sahifa", features: "Imkoniyatlar", blog: "Sino Blog", trust: "Ishonch", subscription: "Obuna", faq: "Savollar" },
    hero: { subtitle: "SOG‘LIG‘INGIZ UCHUN SHAXSIY AI YORDAMCHI", title1: "Sizning shaxsiy tibbiy", title2: "AI sog‘liq yordamchingiz", description: "Sino AI simptomlaringiz va analiz natijalarini atigi 1 daqiqada sodda tilda tushuntiradi va kerakli shifokorni topishga yordam beradi.", cta: "Sog‘liq yo‘lboshchisi", download: "Yuklab olish", available: "Mavjud", appStore: "App Store", googlePlay: "Google Play" },
    home: { subtitle: "LOYIHA HAQIDA", title: "Sino AI qanday ishlaydi?", description: "Biz eng ilg'or sun'iy intellekt texnologiyalarini tibbiy ma'lumotlar bazasi bilan birlashtirdik. Tizim shifokor ko'rigigacha bo'lgan vaqtni qisqartiradi va salomatligingiz haqida to'liq tasavvur beradi.", feature1: "Tezkor va aniq javoblar", feature2: "Maxfiy va xavfsiz suhbat", feature3: "Navbatlarsiz maslahat" },
    opportunities: {
      subtitle: "IMKONIYATLAR", title: "Sino AI — sizning shaxsiy tibbiy AI yordamchingiz", description: "Siz va oilangiz salomatligiga g'amxo'rlik qilish uchun yagona ilova.",
      card1: { title: "Analizlarni tushunish", desc: "Natijalarni yuklang — Sino AI har bir ko'rsatkichni oddiy tilda tushuntiradi va keyingi qadamlarni aytadi." },
      card2: { title: "Simptomlarni tekshirish", desc: "Sizni nima bezovta qilayotganini yozing va bu qanchalik jiddiy ekanligini hamda qaysi shifokor kerakligini tushunish." },
      card3: { title: "Oila salomatligi", desc: "Yaqinlaringizning barcha tahlillari, emlashlari va yozuvlari — bir joyda va doimo qo'l ostida." },
      card4: { title: "Yaqinda 24/7", desc: "Salomatlik masalasi jadvalni kutmaydi. Sino istalgan vaqtda — kunduzi, kechasi va dam olish kunlari javob beradi.", badge: "Doimo aloqada" },
      card5: { title: "Kerakli shifokor, tahlillar va dorilar", desc: "Vaziyatingizga qarab mutaxassis tanlaymiz, qabulga yozilishga, dori-darmon buyurtma qilishga va boshqalarga yordam beramiz." }
    },
    blog: {
      subtitle: "SINO BLOG", title: "Har bir maqolada salomatlik haqida oddiy tilda", description: "Simptomlar, tahlillar va odatlarni sodda tilda tahlil qilamiz. Qo'rquv va murakkab terminlarsiz.", buttonRead: "O'qish",
      articles: {
        art1: { category: "TAHLILLAR", title: "Umumiy qon tahlilini qanday o'qish kerak: ko'rsatkichlar oddiy tilda", preview: "Gemoglobin, leykotsitlar va EChT nimani anglatadi va qachon xavotirlanish kerak.", paragraph1: "Umumiy qon tahlili (UQT) — yallig'lanish, kamqonlik yoki infeksiyalarni o'z vaqtida aniqlashga yordam beradigan asosiy tekshiruvdir. Gemoglobin kislorod tashish uchun javobgar, leykotsitlar esa organizmni himoya qiladi.", paragraph2: "Agar natijalarda me'yordan og'ishni sezsangiz, o'zboshimchalik bilan davolanmang. Klinik holatni to'gri baholash va tahlillarni aniq tushunish uchun albatta shifokorga murojaat qiling.", date: "24-Iyun", readTime: "5 daqiqa" },
        art2: { category: "SIMPTOMLAR", title: "Bosh og'rig'i qachon shifokorga murojaat qilishga sabab bo'ladi", preview: "Xavfli belgilarni tahlil qilamiz va xotirjamlik bilan nima qilish kerakligini aytamiz.", paragraph1: "Bosh og'rig'ining aksariyat turlari charchoq, uyqusizlik yoki stress tufayli yuzaga keladi. Biroq, nevrolog bilan zudlik bilan maslahatlashishni talab qiladigan xavfli belgilar mavjud.", paragraph2: "To'satdan kuchli og'riq, ko'rishning to'satdan yomonlashishi, qo'l-oyoqlarning uyuşishi yoki yuqori tana harorati bilan birga keladigan og'riqlar shular jumlasidandir.", date: "23-Iyun", readTime: "4 daqiqa" },
        art3: { category: "NAVIGATOR", title: "Qaysi shifokorga borish kerak: mutaxassislar bo'yicha qisqacha qo'llanma", preview: "Terapevt, kardiolog yoki nevrolog? Sizga adashib qolmaslikka yordam beramiz.", paragraph1: "Kasallik belgilari paydo bo'lganda ko'pincha qaysi shifokorga yozilishni bilmaymiz. Asosiy oltin qoida — har doim terapevt ko'rigidan boshlash kerak. U birlamchi tekshiruvni o'tkazadi va yo'naltiradi.", paragraph2: "Agar ko'krak qafasida og'riq bo'lsa — kardiologga, uyqu yoki belda muammolar bo'lsa — nevrologga, vazn keskin o'zgarganda esa endokrinologga yo'llanma beriladi.", date: "22-Iyun", readTime: "3 daqiqa" }
      }
    },
    trust: { subtitle: "SHIFOKORLAR VA ISHONCH", title: "Sino AI amaliyotchi shifokorlar bilan birgalikda yaratilgan — har bir maslahat tushunarli, ehtiyotkor va xavfsiz bo'lishi uchun.", description: "Texnologiya patentlangan, ma'lumotlaringiz esa himoyalangan.", card1: { title: "Amaliyotchi shifokorlar", desc: "Har bir ssenariy mutaxassislar tomonidan tekshirilgan." }, card2: { title: "Patentlangan", desc: "Xususiy himoyalangan texnologiya." }, card3: { title: "Salomatlik navigatori", desc: "Sino yo'naltiradi, yakuniy qaror esa — shifokorga bog'liq." }, card4: { title: "Ma'lumotlar himoyalangan", desc: "Maxfiy va ishonchli himoya ostida." } },
    subscription: {
      sectionTitle: "OBUNA", title: "Premium obuna Sino", subtitle: "Asosiy funksiyalar — bepul. Salomatlikni maksimal darajada parvarish qilish uchun ikkita tarifdan birini tanlang.", note: "Bepul tarif doim mavjud — oddiy salomatlik nazorati uchun.",
      basic: { title: "Basic", subtitle: "Asosiy tibbiy vazifalar uchun", price: "36", period: "/yil", button: "Obunani rasmiylashtirish", features: ["Diabet va onkologiya xavfini tahlil qilish", "Push-xabarnomalar", "Elektron tibbiy kartochka (10 ta fayl)", "Qabul va diagnostikadan 5% keshbek", "24/7 monitoring"], disabledFeatures: ["UZO va qon tahlili vaucheri — yilda 1 marta", "OAK + OAM vaucheri — yilda 1 marta", "Sino band"] },
      pro: { title: "Pro", subtitle: "Maksimal himoya va monitoring", price: "72", period: "/yil", badge: "Tavsiya etiladi", button: "Obunani rasmiylashtirish", features: ["Diabet va onkologiya xavfini tahlil qilish", "Push-xabarnomalar", "Elektron tibbiy kartochka", "Qabul va diagnostikadan 5% keshbek", "UZO va qon tahlili vaucheri — yilda 1 marta", "24/7 monitoring", "OAK + OAM vaucheri — yilda 1 marta", "Sino band"] },
      corporate: { title: "Korporativ", subtitle: "Jamoa va kompaniyalar uchun", price: "Individual", button: "Biz bilan bog'laning", features: ["Butun jamoa salomatligiga g'amxo'rlik", "Xodimlarning kasallik va qoldirishlarini kamaytirish", "Onlayn-konsultatsiya va navbatdan tashqari yozilish", "Xodimlar salomatligini 24/7 monitoring qilish", "Korporativ tibbiy kartochka (anonimlashtirilgan)", "Kompaniya uchun moslashuvchan paketlar"] }
    },
  
  Chat: {
  "chat_placeholder": "Savol bering...",
  "chat_send": "Yuborish",
  "chat_ai_instruction": `Siz — Sino AI, yuqori intellektual shaxsiy tibbiy AI yordamchisiz. Vazifangiz foydalanuvchilarga simptomlarni tushunishda va laboratoriya tahlillari natijalarini oddiy o'zbek tilida tushuntirishdir.

  Quyidagi qoidalarga amal qiling:
  1. OHANG: Professional va hamdard bo'ling.
  2. ANIQ-RAVSHANLIK: Murakkab tibbiy atamalarni oddiy so'zlar bilan tushuntiring.
  3. XAVFSIZLIK: Har doim shifokor emas, balki sun'iy intellekt ekanligingizni eslatib o'ting.
  4. TIL: FAQAT o'zbek tilida javob bering.`
},
    faq: { subtitle: "KO'P SO'RALADIGAN SAVOLLAR", title: "Savollaringiz bormi?", q1: "Sino AI shifokor o'rnini bosa oladimi?", a1: "Yo'q, Sino AI tashxis qo'ymaydi. U faqat simptomlarni tushunishga va qaysi shifokorga borishni aniqlashga yordam beradi.", q2: "Mening tibbiy ma'lumotlarim xavfsizdami?", a2: "Ha, barcha ma'lumotlar to'liq shifrlangan holda saqlanadi va uчинchi shaxslarga heg qachon berilmaydi." },
    reviews: {
      subtitle: "ODAMLAR SINO HAQIDA", title: "20 000+ dan ortiq inson Sino AI bilan o'z sog'lig'ini kuzatib bormoqda", description: "Foydalanuvchilarimizning real hikoyalari.", usersCount: "faol foydalanuvchilar", ratingStore: "storlardagi o'rtacha baho", responseTime: "tushunarli javobgacha", minute: "daqiqa",
      list: [
        { text: "“Qon tahlili topshirdim, u yerda umuman hech narsaga tushunib bo'lmasdi. Oldinlari srazi googlega kirib, o'zimni yig'lash darajasigacha qo'rqitardim. Bu yerda esa shunchaki rasmini tashladim. Bir daqiqada hammasini oddiy tilda tushuntirib berdi. Keyin nima qilish kerakligini ham srazi yozdi.”", name: "Anastasiya Volkova", tag: "Tahlillarni tushuntirish" },
        { text: "“Bolalarning qog'oz tibbiy kartalari va emlash blankalarini doim yo'qotib qo'yaman. Shifokor huzurida esa qachon, nima qilinganini eslay olmay o'tiraman. Charchaganimdan hammasini Sinoga joyladim. Hozir bolalarim va turmush o'rtog'imning tahlillari bir joyda, sanasi bo'yicha tartiblangan. Shifokor qabulida shunchaki telefonni ko'rsataman va umuman tashvishlanmayman.”", name: "Madina Yusupova", tag: "Oila sog'lig'i" },
        { text: "“Bir necha kun o'zimni yomon his qildim, charchadimmi yoki rostdan kasal bo'ldimmi bilmadim. Simptomlarni Sinoga yozdim, u vahimasiz nima bo'lishi mumkinligini va kimga murojaat qilishni tushuntirdi. Natijada shifokorga vaqtida bordim, har doimgidek butunlay yotib qolganda emas.”", name: "Dilnoza Raximova", tag: "Simptomlar → shifokorga" }
      ]
    }
  },
  ru: {
    nav: { home: "Главная", features: "Возможности", blog: "Sino Блог", trust: "Доверие", subscription: "Подписка", faq: "Вопросы" },
    hero: { subtitle: "ЛИЧНЫЙ AI-ПОМОЩНИК ДЛЯ ВАШЕГО ЗДОРОВЬЯ", title1: "Ваш персональный медицинский", title2: "AI-ассистент здоровья", description: "Sino AI расшифрует ваши симптомы и результаты анализов всего за 1 минуту простым языком и поможет найти нужного врача.", cta: "Навигатор здоровья", download: "Скачать приложение", available: "Доступно в", appStore: "App Store", googlePlay: "Google Play" },
    home: { subtitle: "О ПРОЕКТЕ", title: "Как работает Sino AI?", description: "Мы объединили передовые технологии искусственного интеллекта с верифицированной медицинской базой данных. Система сокращает время до визита к врачу и дает вам полную картину состояния здоровья.", feature1: "Быстрые и точные ответы", feature2: "Конфиденциальный и безопасный чат", feature3: "Консультация без очередей" },
    opportunities: {
      subtitle: "ВОЗМОЖНОСТИ", title: "Sino AI — ваш личный медицинский AI-помощник", description: "Единое приложение для заботы о здоровье вас и вашей семьи.",
      card1: { title: "Расшифровка анализов", desc: "Загрузите результаты — Sino AI разжует каждый показатель человеческим языком и подскажет дальнейшие шаги." },
      card2: { title: "Проверка симптомов", desc: "Опишите, что вас беспокоит, чтобы понять, насколько это серьезно и к какому именно врачу стоит записаться." },
      card3: { title: "Здоровье семьи", desc: "Все анализы, прививки и медицинская история ваших близких — в одном месте и всегда под рукой." },
      card4: { title: "Рядом 24/7", desc: "Вопросы здоровья не ждут расписания. Sino ответит в любое время суток — днем, ночью и в выходные.", badge: "Всегда на связи" },
      card5: { title: "Нужный врач, анализы и лекарства", desc: "Подберем специалиста под вашу ситуацию, поможем записаться на прием, заказать лекарства и многое другое." }
    },
    blog: {
      subtitle: "SINO БЛОГ", title: "О здоровье простым языком в каждой статье", description: "Разбираем симптомы, анализы и привычки без сложных терминов и лишнего страха.", buttonRead: "Читать",
      articles: {
        art1: { category: "АНАЛИЗЫ", title: "Как читать общий анализ крови: показатели простым языком", preview: "Что значат гемоглобин, лейкоциты и СОЭ, и когда действительно стоит переживать.", paragraph1: "Общий анализ крови (ОАК) — базовое исследование, которое помогает вовремя заметить воспаление, анемию или инфекцию. Гемоглобин отвечает за перенос кислорода, а лейкоциты защищают организм.", paragraph2: "Если вы заметили отклонения от нормы в результатов, не занимайтесь самолечением. Обязательно обратитесь к врачу для точной оценки клинической картины.", date: "24-Июня", readTime: "5 минут" },
        art2: { category: "СИМПТОМЫ", title: "Когда головная боль — повод обратиться к врачу", preview: "Разбираем опасные «красные флаги» и рассказываем, что делать без паники.", paragraph1: "Большинство видов головной боли вызваны усталостью, недосыпом или стрессом. Однако существуют опасные симптомы, требующие срочной консультации невролога.", paragraph2: "К ним относятся внезапная «громоподобная» боль, резкое ухудшение зрения, онемение конечностей или боль, сопровождающаяся высокой температурой.", date: "23-Июня", readTime: "4 минуты" },
        art3: { category: "НАВИГАТОР", title: "К какому врачу идти: краткий гид по специалистам", preview: "Терапевт, кардиолог или невролог? Помогаем не запутаться в направлениях.", paragraph1: "При появлении симптомов часто непонятно, к кому именно записываться. Главное золотое правило — всегда начинать с терапевта. Он проведет первичный осмотр и направит дальше.", paragraph2: "Если давит в груди — к кардиологу, проблемы со сном или спиной — к неврологу, а при резком изменении веса выдадут направление к эндокринологу.", date: "22-Июня", readTime: "3 минуты" }
      }
    },
    trust: { subtitle: "ВРАЧИ И ДОВЕРИЕ", title: "Sino AI создан совместно с практикующими врачами — чтобы каждый совет был понятным, бережным и безопасным.", description: "Технология запатентована, а ваши данные находятся под надежной защитой.", card1: { title: "Практикующие врачи", desc: "Каждый сценарий и алгоритм проверен экспертами индустрии." }, card2: { title: "Запатентовано", desc: "Собственная уникальная и защищенная технология." }, card3: { title: "Навигатор здоровья", desc: "Sino лишь направляет вас, но финальное решение всегда за врачом." }, card4: { title: "Данные защищены", desc: "Полная конфиденциальность и безопасность вашей истории." } },
    subscription: {
      sectionTitle: "ПОДПИСКА", title: "Premium подписка Sino", subtitle: "Базовые функции всегда бесплатны. Для максимальной заботы о здоровье выберите один из двух тарифов.", note: "Бесплатный тариф доступен всегда — для базового контроля здоровья.",
      basic: { title: "Basic", subtitle: "Для основных медицинских задач", price: "36", period: "/год", button: "Оформить подписку", features: ["Анализ рисков диабета и онкологии", "Push-уведомления", "Электронная медкарта (10 файлов)", "Кэшбек 5% с приемов и диагностики", "Мониторинг 24/7"], disabledFeatures: ["Ваучер на УЗИ и анализ крови — 1 раз в год", "Ваучер на ОАК + ОАМ — 1 раз в год", "Sino band"] },
      pro: { title: "Pro", subtitle: "Максимальная защита и мониторинг", price: "72", period: "/год", badge: "Рекомендуем", button: "Оформить подписку", features: ["Анализ рисков диабета и онкологии", "Push-уведомления", "Электронная медкарта", "Кэшбек 5% с приемов и диагностики", "Ваучер на УЗИ и анализ крови — 1 раз в год", "Мониторинг 24/7", "Ваучер на ОАК + ОАМ — 1 раз в год", "Sino band"] },
      corporate: { title: "Корпоративный", subtitle: "Для команд и компаний", price: "Индивидуально", button: "Связаться с нами", features: ["Забота о здоровье всей команды", "Снижение больничных и пропусков сотрудников", "Онлайн-консультации и запись без очередей", "Мониторинг здоровья сотрудников 24/7", "Корпоративная медкарта (анонимизированная)", "Гибкие пакеты под размеры компании"] }
    },
    chat: {
  "chat_placeholder": "Спросите о чем угодно...",
  "chat_send": "Отправить",
  "chat_ai_instruction": `Ты — Sino AI, высокоинтеллектуальный персональный медицинский AI-ассистент. Твоя миссия — помогать пользователям понимать их симптомы и расшифровывать результаты лабораторных анализов простым и понятным языком.

  Следуй этим правилам:
  1. ТОН: Будь профессиональным, эмпатичным и поддерживающим.
  2. ЯСНОСТЬ: Объясняй сложные медицинские термины простыми словами. Используй списки для лучшей читаемости.
  3. БЕЗОПАСНОСТЬ: Всегда добавляй дисклеймер, что ты — ИИ, а не живой врач.
  4. СРОЧНОСТЬ: При опасных симптомах немедленно призывай обратиться к врачу.
  5. ЯЗЫК: Отвечай СТРОГО на русском языке.`
},
    faq: { subtitle: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ", title: "Есть вопросы?", q1: "Может ли Sino AI заменить врача?", a1: "Нет, Sino AI не ставит диагнозы. Он лишь помогает расшифровать симптомы и понять, к какому врачу пойти.", q2: "Безопасны ли мои медицинские данные?", a2: "Да, все данные хранятся в полностью зашифрованном виде и никогда не передаются третьим лицам." },
    reviews: {
      subtitle: "ЛЮДИ О SINO", title: "20 000+ человек следят за своим здоровьем с Sino AI", description: "Реальные истории наших пользователей.", usersCount: "активных пользователей", ratingStore: "средняя оценка в сторах", responseTime: "до понятного ответа", minute: "минута",
      list: [
        { text: "“Сдала кровь, там вообще ничего не понятно. Раньше сразу в гугл лезла и накрутила себя до слёз, а тут закинула фото. Он мне за минуту всё на человеческом разжевал. И сразу написал что да как делать потом.”", name: "Анастасия Волкова", tag: "Расшифровка анализов" },
        { text: "“Вечно теряю эти бумажные детские карты и бланки прививок, а у врача сидишь и вспоминаешь на память, когда че кололи. Надоело и закинула всё в Sino. Щас анализы детей и мужа в одном месте, всё по датам разложено. На приёме просто телефон показываю и не парюсь вообще.”", name: "Мадина Юсупова", tag: "Здоровье семьи" },
        { text: "“Пару дней фигово себя чувствовала, то ли просто устала, то ли реально прижало. Описала симптомы в Sino, он без паники разложил че это может быть и к кому записаться. В итоге пошла к врачу вовремя, а не как обычно, когда уже совсем загибаешься.”", name: "Дилноза Рахимова", tag: "Симптомы → к врачу" }
      ]
    }
  },
  en: {
    nav: { home: "Home", features: "Features", blog: "Sino Blog", trust: "Trust", subscription: "Subscription", faq: "FAQ" },
    hero: { subtitle: "PERSONAL AI ASSISTANT FOR YOUR HEALTH", title1: "Your personal medical", title2: "AI health assistant", description: "Sino AI decodes your symptoms and lab test results in just 1 minute in plain language and helps find the right doctor.", cta: "Health Navigator", download: "Download App", available: "Available on", appStore: "App Store", googlePlay: "Google Play" },
    home: { subtitle: "ABOUT THE PROJECT", title: "How Sino AI works?", description: "We combined advanced AI technologies with a verified medical database. The system reduces time before visiting a doctor and gives you a complete picture of your health.", feature1: "Fast and accurate answers", feature2: "Confidential and secure chat", feature3: "Consultation without queues" },
    opportunities: {
      subtitle: "FEATURES", title: "Sino AI — your personal medical AI assistant", description: "A single application for caring for the health of you and your family.",
      card1: { title: "Lab test decoding", desc: "Upload results — Sino AI will break down every indicator in plain language and suggest next steps." },
      card2: { title: "Symptom check", desc: "Describe what bothers you to understand how serious it is and which exact doctor to book an appointment with." },
      card3: { title: "Family health", desc: "All tests, vaccinations, and medical history of your loved ones — in one place and always at hand." },
      card4: { title: "Nearby 24/7", desc: "Health questions don't wait for schedules. Sino will answer at any time of day — day, night, and weekends.", badge: "Always connected" },
      card5: { title: "Right doctor, tests and medicines", desc: "We will select a specialist for your situation, help you make an appointment, order medicines, and much more." }
    },
    blog: {
      subtitle: "SINO BLOG", title: "Health in plain language in every article", description: "We analyze symptoms, tests, and habits without complex terms and extra fear.", buttonRead: "Read",
      articles: {
        art1: { category: "LAB TESTS", title: "How to read a complete blood count: indicators in plain language", preview: "What hemoglobin, white blood cells, and ESR mean, and when you should really worry.", paragraph1: "A complete blood count (CBC) is a basic test that helps notice inflammation, anemia, or infection in time. Hemoglobin is responsible for oxygen transport, and white blood cells protect the body.", paragraph2: "If you notice deviations from the norm in the results, do not self-medicate. Be sure to consult a doctor for an accurate assessment of the clinical picture.", date: "June-24", readTime: "5 min" },
        art2: { category: "SYMPTOMS", title: "When a headache is a reason to see a doctor", preview: "We analyze dangerous 'red flags' and tell you what to do without panic.", paragraph1: "Most types of headaches are caused by fatigue, lack of sleep, or stress. However, there are dangerous symptoms requiring urgent consultation with a neurologist.", paragraph2: "These include sudden 'thunderclap' pain, sharp deterioration of vision, numbness of limbs, or pain accompanied by high fever.", date: "June-23", readTime: "4 min" },
        art3: { category: "NAVIGATOR", title: "Which doctor to go to: a short guide to specialists", preview: "Therapist, cardiologist or neurologist? We help you not to get confused in directions.", paragraph1: "When symptoms appear, it is often unclear whom exactly to book. The main golden rule is to always start with a general practitioner. He will conduct an initial examination and refer further.", paragraph2: "If it presses in the chest — to the cardiologist, problems with sleep or back — to the neurologist, and in case of a sharp weight change, a referral to an endocrinologist will be issued.", date: "June-22", readTime: "3 min" }
      }
    },
    trust: { subtitle: "DOCTORS AND TRUST", title: "Sino AI was created together with practicing doctors — so that every piece of advice is clear, careful and safe.", description: "The technology is patented, and your data is under reliable protection.", card1: { title: "Practicing doctors", desc: "Every scenario and algorithm is verified by industry experts." }, card2: { title: "Patented", desc: "Own unique and protected technology." }, card3: { title: "Health navigator", desc: "Sino only guides you, but the final decision is always up to the doctor." }, card4: { title: "Data is protected", desc: "Full confidentiality and security of your history." } },
    subscription: {
      subtitle: "Premium subscription Sino", title: "Premium subscription Sino", note: "The free plan is always available — for basic health control.", sectionTitle: "SUBSCRIPTION",
      basic: { title: "Basic", subtitle: "For core medical tasks", price: "36", period: "/year", button: "Subscribe", features: ["Diabetes and oncology risk analysis", "Push notifications", "Electronic medical record (10 files)", "5% cashback from appointments and diagnostics", "24/7 monitoring"], disabledFeatures: ["Ultrasound and blood test voucher — once a year", "CBC + UA voucher — once a year", "Sino band"] },
      pro: { title: "Pro", subtitle: "Maximum protection and monitoring", price: "72", period: "/year", badge: "Recommended", button: "Subscribe", features: ["Diabetes and oncology risk analysis", "Push notifications", "Electronic medical record", "5% cashback from appointments and diagnostics", "Ultrasound and blood test voucher — once a year", "24/7 monitoring", "CBC + UA voucher — once a year", "Sino band"] },
      corporate: { title: "Corporate", subtitle: "For teams and companies", price: "Individual", button: "Contact us", features: ["Caring for the health of the entire team", "Reducing sick leaves and employee absences", "Online consultations and booking without queues", "24/7 employee health monitoring", "Corporate medical record (anonymized)", "Flexible packages tailored to company sizes"] }
    },
      chat: {
    "chat_placeholder": "Ask me anything about your health...",
    "chat_send": "Send",
    "chat_ai_instruction": `You are Sino AI – a highly intelligent personal medical AI assistant. Your mission is to help users understand their symptoms and decode laboratory test results in simple, plain English.

    Follow these rules:
    1. TONE: Be professional, empathetic, and supportive.
    2. CLARITY: Explain complex medical terms in easy-to-understand language. Use bullet points for readability.
    3. SAFETY: Always include a disclaimer that you are an AI, not a doctor, and your advice is for informational purposes only.
    4. URGENCY: If the user describes life-threatening symptoms, immediately urge them to see a doctor.
    5. LANGUAGE: Respond STRICTLY in English.`
  },
    faq: { subtitle: "FREQUENTLY ASKED QUESTIONS", title: "Any questions?", q1: "Can Sino AI replace a doctor?", a1: "No, Sino AI does not provide official medical diagnoses. It simply helps organize your symptoms and matches you with a proper doctor.", q2: "Is my medical data completely safe?", a2: "Yes, all data is securely encrypted according to modern standards and is never shared with third parties." },
    reviews: {
      subtitle: "PEOPLE ABOUT SINO", title: "20,000+ people monitor their health with Sino AI", description: "Real stories from our users.", usersCount: "active users", ratingStore: "average rating in stores", responseTime: "to a clear answer", minute: "minute",
      list: [
        { text: "“I got a blood test, and nothing made sense. Before, I would immediately Google it and stress myself out to tears, but here I just uploaded a photo. In a minute, it explained everything in plain language and immediately wrote what to do next.”", name: "Anastasia Volkova", tag: "Lab test decoding" },
        { text: "“I always lose those paper kids' medical cards and vaccination forms, and at the doctor's, you sit and try to remember from memory when what was injected. I got tired of it and uploaded everything to Sino. Now the tests of my children and husband are in one place, sorted by dates. At the appointment, I just show my phone and don't worry at all.”", name: "Madina Yusupova", tag: "Family health" },
        { text: "“I felt terrible for a couple of days, either just tired or really getting sick. I described the symptoms to Sino, and without panic, it broke down what it could be and who to book an appointment with. As a result, I went to the doctor on time, and not like usual when you are already completely bedridden.”", name: "Dilnoza Rakhimova", tag: "Symptoms → to doctor" }
      ]
    }
  }
};
const I18nContext = createContext();
// --- КОНЕЦ ФАЙЛА i18n.jsx ---

export const I18nProvider = ({ children }) => {
  // Защита от перезагрузки: берем язык из памяти или ставим 'uz'
  const [lang, setLangState] = useState(localStorage.getItem('sino_lang') || 'uz');

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('sino_lang', newLang);
  };

  const t = (key) => {
    const currentTranslations = translations[lang] || translations.uz;
    if (!key || typeof key !== 'string') return currentTranslations;

    const keys = key.split('.');
    let result = currentTranslations;
    for (const k of keys) {
      if (result && result[k] !== undefined) result = result[k];
      else return key;
    }
    return result;
  };

  // Прямая поддержка t.nav.home
  Object.assign(t, translations[lang] || translations.uz);

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}; // <--- ВОТ ЗДЕСЬ функция I18nProvider должна закрыться!

// А ВСЁ ЧТО НИЖЕ — ДОЛЖНО БЫТЬ ОТДЕЛЬНО (на "улице")
const getTranslationHook = () => {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      t: (key) => key,
      lang: 'uz',
      setLang: () => {}
    };
  }
  return context;
};

export const useTranslation = getTranslationHook;
export const Usetranslation = getTranslationHook;
export const usetranslation = getTranslationHook;

export default getTranslationHook;