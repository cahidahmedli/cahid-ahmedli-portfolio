const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const langButton = document.querySelector('.lang-toggle');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const translations = {
  az: {
    menu: 'Menyu', navWork: 'İşlər', navAbout: 'Haqqımda', navExperience: 'Təcrübə', navContact: 'Əlaqə', catUi: 'UX/UI dizayn', catBrand: 'Loqo və brendinq', catPrint: 'Flayer və bannerlər', catProduct: 'Məhsul və promo',
    heroKicker: 'Dizayn liderliyi və seçilmiş layihələr üçün açıq', heroLine1: 'Mürəkkəb ideyaları', heroLine2: 'aydın dizayna', heroLine3: 'çevirirəm.',
    heroIntro: '10+ illik təcrübə ilə istifadəçi yönümlü rəqəmsal məhsullar və məqsədyönlü vizual kimliklər yaradıram.',
    selected: 'Seçilmiş', selectedWork: 'Seçilmiş işlər', workIntro: 'Məhsul strategiyasından vizual kimliyə qədər — fərqli sahələr üçün hazırlanmış işlər.',
    archiveKicker: 'Portfolio arxivi', archiveTitle: 'Bütün işlər', archiveIntro: 'UX/UI-dan brendinqə, məhsul dizaynından kampaniyalara qədər seçilmiş layihələr kolleksiyası.', backHome: 'Ana səhifəyə qayıt',
    backToWork: 'Bütün işlərə qayıt', pashaCaseTitle: 'Treyder idarə paneli', pashaCaseLead: 'Portfel məlumatlarını, bazar göstəricilərini, hesabatları və istifadəçi müraciətlərini vahid, aydın interfeysdə birləşdirən treyder paneli.', metaRole: 'Rol', metaSector: 'Sahə', metaProduct: 'Məhsul', metaDashboard: 'Veb və tablet idarə paneli', metaScope: 'Əhatə', metaScopeValue: 'Dashboard, hesabatlar, xəbərlər, müraciətlər',
    overview: 'Ümumi baxış', overviewTitle: 'Mürəkkəb məlumat üçün sadə struktur', overviewLead: 'Maliyyə panelində əsas məqsəd istifadəçinin vacib məlumatı sürətlə görməsi və əsas əməliyyatlara maneəsiz keçməsidir.', overviewP1: 'İnterfeys portfel balansı, aktiv bölgüsü, gəlir və xərc dinamikası, seçilmiş alətlər və xəbərlər kimi fərqli məlumat qatlarını vahid vizual sistemdə birləşdirir.', overviewP2: 'Modul kart quruluşu məlumat sıxlığını idarə edir, sabit sol naviqasiya isə panel, bazar, müraciətlər, xəbərlər və hesabatlar arasında keçidi aydın saxlayır.',
    approach: 'Yanaşma', approachTitle: 'İnformasiya iyerarxiyası əvvəl gəlir', pillar1Title: 'Sürətli baxış', pillar1Text: 'Balans, portfel bölgüsü və əsas statistika ilk ekranda prioritetləşdirildi.', pillar2Title: 'Modul sistem', pillar2Text: 'Kart əsaslı quruluş müxtəlif məlumat növlərinin ardıcıl təqdimatını təmin edir.', pillar3Title: 'Aydın hərəkətlər', pillar3Text: 'Əsas əməliyyatlar və dəstək kanalları görünən, rahat tapılan mövqelərdə saxlanıldı.',
    dashboardTitle: 'Əsas idarə paneli', dashboardText: 'Portfel göstəriciləri, statistik dinamika, seçilmiş aktivlər və əsas əməliyyatlar eyni baxışda təqdim olunur.', newsTitle: 'Xəbərlər və analitika', newsText: 'Kateqoriya filtrləri, gündəlik bazar xəbərləri və təlim videoları bir məlumat mərkəzində toplanır.', reportsTitle: 'Hesabatların oxunaqlılığı', reportsText: 'Əsas rəqəmlər, portfel cədvəlləri və qrafiklər pilləli vizual iyerarxiya ilə təşkil edilir.', supportTitle: 'Müraciət və dəstək', supportText: 'Yeni müraciət yaratmaq, əvvəlki müraciətlərə baxmaq və əlaqə kanallarına keçmək vahid səhifədə birləşdirilir.',
    systemTitle: 'Sakit vizual dil, güclü məlumat kontrastı', systemP1: 'Yaşıl əsas əməliyyat və müsbət göstəriciləri vurğulayır. Tünd qırmızı ikinci dərəcəli brend aksenti və əlaqə nöqtələri üçün istifadə olunur.', systemP2: 'Açıq neytral fon, incə sərhədlər və ölçülü rəng istifadəsi uzunmüddətli ekran baxışında diqqəti məzmun üzərində saxlayır.', nextStep: 'Növbəti', exploreMore: 'Daha çox layihəyə bax', nextProject: 'Növbəti layihə',
    filterAll: 'Hamısı', filterBrand: 'Brendinq', filterPrint: 'Flayer və bannerlər', filterProduct: 'Məhsul və promo',
    uiWork: 'Rəqəmsal məhsul · UX/UI dizayn', brandWork: 'Vizual kimlik · Loqo dizaynı', printWork: 'Kampaniya · Flayer və bannerlər', productWork: 'Məhsul və promo dizaynı', centerName: 'Heydər Əliyev Mərkəzi', agbulagName: 'Ağbulaq Xizək Mərkəzi', gamigayaName: 'Gəmiqaya Holding', clockName: 'Saat Meydanı', bordoName: 'Bordo İnşaat',
    pashaType: 'Treyder idarə paneli · UX/UI dizayn', foundationName: 'Heydər Əliyev Fondu', foundationType: 'Vebsayt · UX/UI dizayn', azalType: 'Mobil tətbiq · UX/UI dizayn', birbankType: 'Mobil bankçılıq · UX/UI dizayn', naqName: 'Nəqşicahan Qrup', naqType: 'Vizual kimlik · Loqo dizaynı',
    aboutShort: 'Haqqımda', designBeyond: 'Görünüşdən daha artığı', aboutLead: 'Dizaynı estetika ilə biznes məqsədləri arasında körpü kimi görürəm.',
    aboutP1: 'Senior Graphic & UX/UI Designer və Head of Design olaraq fintech, e-commerce, SaaS və brendinq sahələrində 100-dən çox layihə üzərində işləmişəm.',
    aboutP2: 'Strategiya və araşdırmadan wireframe, dizayn sistemi və pixel-perfect icraya qədər bütün prosesi idarə edir, komandaları ortaq yaradıcı istiqamət ətrafında birləşdirirəm.',
    downloadCv: 'CV-ni yüklə', years: 'il təcrübə', projects: 'tamamlanmış layihə', focusAreas: 'əsas fokus sahəsi',
    career: 'Karyera', experienceTitle: 'Təcrübə', present: 'indi', investmentCompany: 'İnvestisiya şirkəti · Tam ştat', independent: 'Müstəqil',
    exp1: 'Mobil tətbiqlər, veb platformalar, brend dizaynı və motion qrafika üzrə yaradıcı istiqamət və icra.',
    exp2: 'Mobil və veb məhsullar üçün UX/UI, miqyaslana bilən dizayn sistemi və istifadəçi araşdırmaları.',
    exp3: 'Fintech, bankçılıq, e-commerce, aviasiya, avtomobil və daşınmaz əmlak sahələrində tam dizayn prosesi.',
    service1: 'Araşdırma, user flow, wireframe, prototip və dizayn sistemləri.', service2: 'Strategiyaya əsaslanan loqo və bütöv vizual kimlik sistemləri.', service3: 'Dizayn komandalarının, proseslərin və yaradıcı keyfiyyətin idarə olunması.', service4: 'Rəqəmsal kampaniyalar, motion qrafika və vizual kommunikasiya sistemləri.',
    contactShort: 'Əlaqə', contactLine1: 'Növbəti yaxşı ideyanı', contactLine2: 'birlikdə formalaşdıraq.', backTop: 'Yuxarı qayıt'
  },
  en: {
    menu: 'Menu', navWork: 'Work', navAbout: 'About', navExperience: 'Experience', navContact: 'Contact', catUi: 'UX/UI design', catBrand: 'Logo & branding', catPrint: 'Flyers & banners', catProduct: 'Product & promo',
    heroKicker: 'Open to design leadership and selected projects', heroLine1: 'Turning complex ideas', heroLine2: 'into clear design', heroLine3: 'experiences.',
    heroIntro: 'With 10+ years of experience, I create user-centered digital products and purposeful visual identities.',
    selected: 'Selected', selectedWork: 'Selected work', workIntro: 'From product strategy to visual identity — work created for a range of industries.',
    archiveKicker: 'Portfolio archive', archiveTitle: 'All work', archiveIntro: 'A curated collection spanning UX/UI, branding, product design, and campaigns.', backHome: 'Back to home',
    backToWork: 'Back to all work', pashaCaseTitle: 'Trader dashboard', pashaCaseLead: 'A trader dashboard that brings portfolio data, market indicators, reports, and support requests into one clear interface.', metaRole: 'Role', metaSector: 'Sector', metaProduct: 'Product', metaDashboard: 'Web & tablet dashboard', metaScope: 'Scope', metaScopeValue: 'Dashboard, reports, news, support requests',
    overview: 'Overview', overviewTitle: 'A simple structure for complex data', overviewLead: 'The core goal of a financial dashboard is to help users see what matters quickly and move to key actions without friction.', overviewP1: 'The interface unifies portfolio balance, asset allocation, income and expense trends, selected instruments, and news within one visual system.', overviewP2: 'A modular card structure manages information density, while persistent left navigation keeps movement between dashboard, market, requests, news, and reports clear.',
    approach: 'Approach', approachTitle: 'Information hierarchy comes first', pillar1Title: 'Quick overview', pillar1Text: 'Balance, portfolio allocation, and key statistics are prioritized on the first screen.', pillar2Title: 'Modular system', pillar2Text: 'A card-based structure keeps different data types consistent and scalable.', pillar3Title: 'Clear actions', pillar3Text: 'Primary actions and support channels remain visible and easy to locate.',
    dashboardTitle: 'Main dashboard', dashboardText: 'Portfolio indicators, trends, selected assets, and primary actions are presented in one view.', newsTitle: 'News and analytics', newsText: 'Category filters, daily market news, and learning videos come together in one information hub.', reportsTitle: 'Readable reporting', reportsText: 'Key figures, portfolio tables, and charts are organized through a layered visual hierarchy.', supportTitle: 'Requests and support', supportText: 'Creating a request, reviewing previous cases, and reaching support channels are unified on one page.',
    systemTitle: 'Quiet visual language, strong data contrast', systemP1: 'Green highlights primary actions and positive indicators. Deep red acts as a secondary brand accent and marks contact points.', systemP2: 'A light neutral canvas, subtle borders, and measured color usage keep attention on content during extended screen use.', nextStep: 'Next', exploreMore: 'Explore more work', nextProject: 'Next project',
    filterAll: 'All', filterBrand: 'Branding', filterPrint: 'Flyers & banners', filterProduct: 'Product & promo',
    uiWork: 'Digital product · UX/UI design', brandWork: 'Visual identity · Logo design', printWork: 'Campaign · Flyers & banners', productWork: 'Product & promo design', centerName: 'Heydar Aliyev Center', agbulagName: 'Agbulag Ski Center', gamigayaName: 'Gamigaya Holding', clockName: 'Clock Square', bordoName: 'Bordo Construction',
    pashaType: 'Trader dashboard · UX/UI design', foundationName: 'Heydar Aliyev Foundation', foundationType: 'Website · UX/UI design', azalType: 'Mobile app · UX/UI design', birbankType: 'Mobile banking · UX/UI design', naqName: 'Naqshijahan Group', naqType: 'Visual identity · Logo design',
    aboutShort: 'About', designBeyond: 'Beyond appearances', aboutLead: 'I see design as the bridge between aesthetics and business goals.',
    aboutP1: 'As a Senior Graphic & UX/UI Designer and Head of Design, I have delivered 100+ projects across fintech, e-commerce, SaaS, and branding.',
    aboutP2: 'I lead the full process — from strategy and research to wireframes, design systems, and pixel-perfect execution — aligning teams around a shared creative direction.',
    downloadCv: 'Download CV', years: 'years of experience', projects: 'completed projects', focusAreas: 'core focus areas',
    career: 'Career', experienceTitle: 'Experience', present: 'present', investmentCompany: 'Investment company · Full-time', independent: 'Independent',
    exp1: 'Creative direction and execution across mobile apps, web platforms, brand design, and motion graphics.',
    exp2: 'UX/UI for mobile and web products, scalable design systems, and user research.',
    exp3: 'End-to-end design across fintech, banking, e-commerce, aviation, automotive, and real estate.',
    service1: 'Research, user flows, wireframes, prototypes, and design systems.', service2: 'Strategy-led logos and complete visual identity systems.', service3: 'Leading design teams, workflows, and creative quality.', service4: 'Digital campaigns, motion graphics, and visual communication systems.',
    contactShort: 'Contact', contactLine1: 'Let’s shape the next', contactLine2: 'great idea together.', backTop: 'Back to top'
  }
};

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  const isDark = theme === 'dark';
  themeButton.setAttribute('aria-label', isDark ? 'İşıqlı rejimə keç' : 'Tünd rejimə keç');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#111210' : '#f4f4f0');
}

function setLanguage(lang) {
  root.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-az][data-en]').forEach((element) => {
    element.textContent = lang === 'az' ? element.dataset.az : element.dataset.en;
  });
  document.querySelector('.lang-current').textContent = lang.toUpperCase();
  document.querySelector('.lang-next').textContent = lang === 'az' ? 'EN' : 'AZ';
  const customTitle = lang === 'az' ? document.body.dataset.titleAz : document.body.dataset.titleEn;
  if (customTitle) document.title = customTitle;
  else if (document.body.classList.contains('project-page')) document.title = lang === 'az' ? 'PAŞA Kapital — UX/UI layihəsi' : 'PAŞA Kapital — UX/UI Case Study';
  else if (document.body.classList.contains('work-page')) document.title = lang === 'az' ? 'Cahid Ahmedli — Bütün işlər' : 'Cahid Ahmedli — All Work';
  else document.title = lang === 'az' ? 'Cahid Ahmedli — Dizayn Portfoliosu' : 'Cahid Ahmedli — Design Portfolio';
  localStorage.setItem('portfolio-lang', lang);
}

const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(storedTheme || preferredTheme);
setLanguage(localStorage.getItem('portfolio-lang') || 'az');

themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
langButton.addEventListener('click', () => setLanguage(root.lang === 'az' ? 'en' : 'az'));

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  if (index < 5) element.style.transitionDelay = `${index * 70}ms`;
  revealObserver.observe(element);
});

function applyProjectFilter(filter) {
  const available = [...document.querySelectorAll('.filter')].map((item) => item.dataset.filter);
  const activeFilter = available.includes(filter) ? filter : 'all';
  document.querySelectorAll('.filter').forEach((item) => item.classList.toggle('is-active', item.dataset.filter === activeFilter));
  document.querySelectorAll('.project').forEach((project) => {
    project.classList.toggle('is-hidden', activeFilter !== 'all' && project.dataset.category !== activeFilter);
  });
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    applyProjectFilter(button.dataset.filter);
    if (document.body.classList.contains('work-page')) history.replaceState(null, '', `#${button.dataset.filter}`);
  });
});

if (document.body.classList.contains('work-page')) {
  applyProjectFilter(location.hash.slice(1) || 'all');
  window.addEventListener('hashchange', () => applyProjectFilter(location.hash.slice(1) || 'all'));
}

const progress = document.querySelector('.scroll-progress span');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.querySelector('.cursor-dot');
  document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`;
    document.body.classList.add('cursor-active');
  });
  document.querySelectorAll('a, button, .project').forEach((element) => {
    element.addEventListener('mouseenter', () => document.body.classList.add('cursor-link'));
    element.addEventListener('mouseleave', () => document.body.classList.remove('cursor-link'));
  });
}
