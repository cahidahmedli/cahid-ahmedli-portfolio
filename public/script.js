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
    contactShort: 'Əlaqə', contactLine1: 'Növbəti yaxşı ideyanı', contactLine2: 'birlikdə formalaşdıraq.', backTop: 'Yuxarı qayıt', soundOn: 'SƏS AÇIQ', soundOff: 'SƏS BAĞLI'
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
    contactShort: 'Contact', contactLine1: 'Let’s shape the next', contactLine2: 'great idea together.', backTop: 'Back to top', soundOn: 'SOUND ON', soundOff: 'SOUND OFF'
  }
};

const soundButton = document.createElement('button');
soundButton.className = 'sound-toggle';
soundButton.type = 'button';
soundButton.setAttribute('aria-pressed', 'false');
soundButton.innerHTML = '<span class="sound-label"></span>';
document.body.appendChild(soundButton);

let soundPlaying = false;
let audioContext = null;
let musicBus = null;
let masterGain = null;
let noiseBuffer = null;
let musicTimer = null;
let musicStep = 0;
let nextMusicTime = 0;

function updateSoundButton() {
  const lang = translations[root.lang] ? root.lang : 'az';
  const label = translations[lang][soundPlaying ? 'soundOn' : 'soundOff'];
  soundButton.querySelector('.sound-label').textContent = label;
  soundButton.setAttribute('aria-label', label);
  soundButton.setAttribute('aria-pressed', String(soundPlaying));
  soundButton.classList.toggle('is-playing', soundPlaying);
}

function createNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) data[index] = Math.random() * 2 - 1;
  return buffer;
}

function playTone(frequency, time, duration, options = {}) {
  if (!audioContext || !musicBus) return;
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const attack = options.attack || .018;
  const volume = options.volume || .018;

  oscillator.type = options.type || 'sine';
  oscillator.frequency.setValueAtTime(frequency, time);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(options.cutoff || 1800, time);
  filter.Q.setValueAtTime(.7, time);
  gain.gain.setValueAtTime(.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + attack);
  gain.gain.exponentialRampToValueAtTime(.0001, time + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(musicBus);
  oscillator.start(time);
  oscillator.stop(time + duration + .04);
}

function playNoise(time, duration, volume, frequency) {
  if (!audioContext || !musicBus || !noiseBuffer) return;
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = noiseBuffer;
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(frequency, time);
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(.0001, time + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(musicBus);
  source.start(time);
  source.stop(time + duration);
}

function playSoftKick(time, volume = .035) {
  if (!audioContext || !musicBus) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(92, time);
  oscillator.frequency.exponentialRampToValueAtTime(44, time + .18);
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(.0001, time + .2);
  oscillator.connect(gain);
  gain.connect(musicBus);
  oscillator.start(time);
  oscillator.stop(time + .22);
}

const ambientChords = [
  [220, 261.63, 329.63, 392],
  [174.61, 220, 261.63, 329.63],
  [196, 261.63, 329.63, 392],
  [196, 246.94, 293.66, 329.63]
];
const ambientBass = [110, 87.31, 130.81, 98];
const melodicSteps = [0, 2, 1, 3];
const stepDuration = 60 / 82 / 4;

function scheduleMusicStep(step, time) {
  const bar = Math.floor(step / 16);
  const position = step % 16;
  const chord = ambientChords[bar];

  if (position === 0) {
    chord.forEach((frequency, index) => playTone(frequency, time, stepDuration * 15.6, {
      type: index % 2 ? 'sine' : 'triangle',
      volume: .012,
      attack: .28,
      cutoff: 1150
    }));
    playTone(ambientBass[bar], time, stepDuration * 7.4, { type: 'sine', volume: .028, attack: .04, cutoff: 420 });
  }

  if (position === 8) playTone(ambientBass[bar], time, stepDuration * 6.8, { type: 'sine', volume: .022, attack: .035, cutoff: 420 });
  if (position === 0 || position === 8) playSoftKick(time, position === 0 ? .032 : .022);
  if (position % 4 === 2) playNoise(time, .055, .0045, 5200);
  if (position === 6 || position === 14) playNoise(time, .12, .006, 1900);

  const melodyIndex = [2, 6, 10, 14].indexOf(position);
  if (melodyIndex !== -1) {
    playTone(chord[melodicSteps[melodyIndex]], time, stepDuration * 2.3, {
      type: 'triangle',
      volume: .014,
      attack: .012,
      cutoff: 2100
    });
  }
}

function scheduleMusic() {
  if (!audioContext || !soundPlaying) return;
  while (nextMusicTime < audioContext.currentTime + .18) {
    scheduleMusicStep(musicStep, nextMusicTime);
    nextMusicTime += stepDuration;
    musicStep = (musicStep + 1) % 64;
  }
}

async function startSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    soundButton.hidden = true;
    return;
  }

  try {
    audioContext = new AudioContextClass();
    await audioContext.resume();

    musicBus = audioContext.createGain();
    const toneFilter = audioContext.createBiquadFilter();
    const compressor = audioContext.createDynamicsCompressor();
    masterGain = audioContext.createGain();
    noiseBuffer = createNoiseBuffer(audioContext);

    musicBus.gain.setValueAtTime(.82, audioContext.currentTime);
    toneFilter.type = 'lowpass';
    toneFilter.frequency.setValueAtTime(2600, audioContext.currentTime);
    compressor.threshold.setValueAtTime(-22, audioContext.currentTime);
    compressor.knee.setValueAtTime(18, audioContext.currentTime);
    compressor.ratio.setValueAtTime(3, audioContext.currentTime);
    masterGain.gain.setValueAtTime(.0001, audioContext.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(.48, audioContext.currentTime + .35);

    musicBus.connect(toneFilter);
    toneFilter.connect(compressor);
    compressor.connect(masterGain);
    masterGain.connect(audioContext.destination);

    soundPlaying = true;
    musicStep = 0;
    nextMusicTime = audioContext.currentTime + .08;
    scheduleMusic();
    musicTimer = window.setInterval(scheduleMusic, 60);
    updateSoundButton();
  } catch (error) {
    soundPlaying = false;
    updateSoundButton();
  }
}

function stopSound() {
  soundPlaying = false;
  window.clearInterval(musicTimer);
  musicTimer = null;
  updateSoundButton();

  const contextToClose = audioContext;
  const gainToFade = masterGain;
  audioContext = null;
  musicBus = null;
  masterGain = null;
  noiseBuffer = null;

  if (contextToClose && gainToFade) {
    const now = contextToClose.currentTime;
    gainToFade.gain.cancelScheduledValues(now);
    gainToFade.gain.setValueAtTime(Math.max(gainToFade.gain.value, .0001), now);
    gainToFade.gain.exponentialRampToValueAtTime(.0001, now + .22);
    window.setTimeout(() => contextToClose.close(), 260);
  }
}

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
  updateSoundButton();
  localStorage.setItem('portfolio-lang', lang);
}

const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(storedTheme || preferredTheme);
setLanguage(localStorage.getItem('portfolio-lang') || 'az');

themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
langButton.addEventListener('click', () => setLanguage(root.lang === 'az' ? 'en' : 'az'));
soundButton.addEventListener('click', () => {
  if (soundPlaying) stopSound();
  else startSound();
});

document.addEventListener('visibilitychange', () => {
  if (!audioContext || !soundPlaying) return;
  if (document.hidden) audioContext.suspend();
  else audioContext.resume();
});
window.addEventListener('pagehide', stopSound, { once: true });

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

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const smoothWheel = window.matchMedia('(hover: hover) and (pointer: fine)');

if (smoothWheel.matches && !reducedMotion.matches) {
  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  let scrollFrame = null;

  const maximumScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  function stopSmoothScroll() {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = null;
    currentScroll = window.scrollY;
    targetScroll = window.scrollY;
  }

  function renderSmoothScroll() {
    const distance = targetScroll - currentScroll;
    currentScroll += distance * .3;

    if (Math.abs(distance) < .35) {
      currentScroll = targetScroll;
      window.scrollTo(0, targetScroll);
      scrollFrame = null;
      return;
    }

    window.scrollTo(0, currentScroll);
    scrollFrame = requestAnimationFrame(renderSmoothScroll);
  }

  window.addEventListener('wheel', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.defaultPrevented) return;
    if (event.target instanceof Element && event.target.closest('textarea, select, [data-native-scroll]')) return;

    event.preventDefault();
    const multiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
    targetScroll = Math.min(maximumScroll(), Math.max(0, targetScroll + event.deltaY * multiplier));

    if (!scrollFrame) {
      currentScroll = window.scrollY;
      scrollFrame = requestAnimationFrame(renderSmoothScroll);
    }
  }, { passive: false });

  window.addEventListener('resize', () => {
    targetScroll = Math.min(targetScroll, maximumScroll());
  }, { passive: true });
  window.addEventListener('pointerdown', stopSmoothScroll, { passive: true });
  window.addEventListener('scroll', () => {
    if (!scrollFrame) currentScroll = targetScroll = window.scrollY;
  }, { passive: true });
}

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
