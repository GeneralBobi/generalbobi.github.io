/**
 * Translation system for Boran Birtanır Portfolio
 * Handles language switching while preserving layout and special effects
 */

// Define translations
const translations = {
    // Navigation
    'nav_home': {
        'en': 'Home',
        'tr': 'Ana Sayfa'
    },
    'nav_about': {
        'en': 'About',
        'tr': 'Hakkımda'
    },
    'nav_gallery': {
        'en': 'Gallery',
        'tr': 'Galeri'
    },
    'nav_diary': {
        'en': 'Diary',
        'tr': 'Günlük'
    },
    'nav_socials': {
        'en': 'Socials',
        'tr': 'Sosyal'
    },

    // Hero section
    'hero_subtitle': {
        'en': 'A curious mind exploring life through art, technology, and philosophy.',
        'tr': 'Sanat, teknoloji ve felsefe aracılığıyla hayatı keşfeden meraklı bir zihin.'
    },

    // About section
    'about_me': {
        'en': 'About Me',
        'tr': 'Hakkımda'
    },
    'about_subtitle': {
        'en': 'Get to know me better - my journey, philosophy, and what drives my creativity.',
        'tr': 'Beni daha iyi tanıyın - yolculuğum, felsefem ve yaratıcılığımı yönlendiren şeyler.'
    },
    'about_welcome': {
        'en': 'Welcome to my digital space where I share my thoughts, creations, and journey. I\'m passionate about exploring the intersection of technology, art, and philosophical inquiry.',
        'tr': 'Düşüncelerimi, yaratımlarımı ve yolculuğumu paylaştığım dijital alanıma hoş geldiniz. Teknoloji, sanat ve felsefi sorgulamanın kesişimini keşfetme konusunda tutkuluyum.'
    },
    'about_quote': {
        'en': 'I\'m alive but I don\'t live... In other hand, that\'s the life I chose... Maybe...',
        'tr': 'Hayattayım ama yaşamıyorum... Diğer yandan, bu seçtiğim hayat... Belki...'
    },
    'about_invite': {
        'en': 'Through this portfolio, I invite you to experience my perspective and join me on this journey of exploration and self-expression.',
        'tr': 'Bu portfolyo aracılığıyla, bakış açımı deneyimlemeye ve keşif ve kendini ifade etme yolculuğumda bana katılmaya davet ediyorum.'
    },
    'interests_title': {
        'en': 'Interests & Passions',
        'tr': 'İlgi Alanları & Tutkular'
    },
    'interest_gaming': {
        'en': 'Gaming',
        'tr': 'Oyun'
    },
    'interest_ai': {
        'en': 'Artificial Intelligence',
        'tr': 'Yapay Zeka'
    },
    'interest_music': {
        'en': 'Music & Composition',
        'tr': 'Müzik & Kompozisyon'
    },
    'interest_science': {
        'en': 'Science & Technology',
        'tr': 'Bilim & Teknoloji'
    },
    'interest_philosophy': {
        'en': 'Philosophy & Existentialism',
        'tr': 'Felsefe & Varoluşçuluk'
    },

    // Gallery section
    'gallery_title': {
        'en': 'Gallery',
        'tr': 'Galeri'
    },
    'gallery_subtitle': {
        'en': 'A visual exploration of my creative work and inspirations.',
        'tr': 'Yaratıcı çalışmalarımın ve ilham kaynaklarımın görsel bir keşfi.'
    },
    'gallery_filter_all': {
        'en': 'All',
        'tr': 'Tümü'
    },
    'gallery_filter_digital': {
        'en': 'Digital Art',
        'tr': 'Dijital Sanat'
    },
    'gallery_filter_photo': {
        'en': 'Photography',
        'tr': 'Fotoğrafçılık'
    },
    'gallery_filter_concept': {
        'en': 'Concept Art',
        'tr': 'Konsept Sanat'
    },
    'gallery_view': {
        'en': 'View',
        'tr': 'Görüntüle'
    },

    // Diary section
    'diary_title': {
        'en': 'Diary',
        'tr': 'Günlük'
    },
    'diary_subtitle': {
        'en': 'Thoughts, reflections, and philosophical musings.',
        'tr': 'Düşünceler, yansımalar ve felsefi düşünceler.'
    },
    'read_more': {
        'en': 'Read More',
        'tr': 'Devamını Oku'
    },

    // Socials section
    'socials_title': {
        'en': 'Connect With Me',
        'tr': 'Benimle Bağlantı Kurun'
    },
    'socials_subtitle': {
        'en': 'Follow my journey across digital platforms',
        'tr': 'Dijital platformlarda yolculuğumu takip edin'
    },
    'socials_intro': {
        'en': 'I\'m always interested in meaningful conversations, creative collaborations, and intellectual exchanges. Feel free to reach out through any of these platforms where I share my thoughts, creative work, and engage with like-minded individuals.',
        'tr': 'Her zaman anlamlı konuşmalar, yaratıcı işbirlikleri ve entelektüel alışverişlerle ilgileniyorum. Düşüncelerimi, yaratıcı çalışmalarımı paylaştığım ve benzer düşünen kişilerle etkileşimde bulunduğum bu platformlardan herhangi biri aracılığıyla bana ulaşmaktan çekinmeyin.'
    },
    'lets_talk': {
        'en': 'Let\'s Talk',
        'tr': 'Konuşalım'
    },
    'email_contact_desc': {
        'en': 'For direct inquiries, collaboration proposals, or philosophical discussions, email is the best way to reach me.',
        'tr': 'Doğrudan sorular, işbirliği teklifleri veya felsefi tartışmalar için e-posta bana ulaşmanın en iyi yoludur.'
    },
    'send_mail': {
        'en': 'Send Mail',
        'tr': 'E-posta Gönder'
    },

    // Social platforms
    'twitter': {
        'en': 'X',
        'tr': 'X'
    },
    'instagram': {
        'en': 'Visual journey through my creative process, daily inspirations, and artistic explorations. A window into my aesthetic world.',
        'tr': 'Yaratıcı sürecim, günlük ilham kaynaklarım ve sanatsal keşiflerim aracılığıyla görsel bir yolculuk. Estetik dünyama bir pencere.'
    },
    'github': {
        'en': 'My code repositories, open-source contributions, and technical experiments. Explore the technical side of my creative work.',
        'tr': 'Kod depolarım, açık kaynak katkılarım ve teknik deneyler. Yaratıcı çalışmamın teknik yönünü keşfedin.'
    },
    'linkedin': {
        'en': 'Professional profile and networking. Connect to discuss potential collaborations, opportunities, or just to stay in touch.',
        'tr': 'Profesyonel profil ve ağ oluşturma. Potansiyel işbirlikleri, fırsatlar hakkında konuşmak veya sadece iletişimde kalmak için bağlantı kurun.'
    },
    'discord': {
        'en': 'Join my community server for discussions about philosophy, art, technology, and collaborative projects with fellow explorers.',
        'tr': 'Felsefe, sanat, teknoloji ve ortak kaşiflerle işbirliği projeleri hakkında tartışmalar için topluluk sunucuma katılın.'
    },

    // Footer
    'footer_description': {
        'en': 'A personal journey through art, technology, and philosophy.',
        'tr': 'Sanat, teknoloji ve felsefe aracılığıyla kişisel bir yolculuk.'
    },
    'footer_navigation': {
        'en': 'Navigation',
        'tr': 'Navigasyon'
    },
    'footer_connect': {
        'en': 'Connect',
        'tr': 'Bağlantı'
    },
    'footer_copyright': {
        'en': '© 2023 Boran Birtanır. All rights reserved.',
        'tr': '© 2023 Boran Birtanır. Tüm hakları saklıdır.'
    },

    // Language toggle
    'language': {
        'en': 'Türkçe\'ye Geç',
        'tr': 'Switch to English'
    },

    // About page - Philosophy section
    'philosophy_title': {
        'en': 'Philosophy & Approach',
        'tr': 'Felsefe & Yaklaşım'
    },
    'philosophy_para1': {
        'en': 'My philosophical approach is rooted in existentialism and the belief that meaning is created rather than discovered. I see life as a continuous creative process where we are constantly shaping our understanding of ourselves and the world around us.',
        'tr': 'Felsefi yaklaşımım varoluşçuluğa ve anlamın keşfedilmekten ziyade yaratıldığı inancına dayanır. Hayatı, kendimizi ve çevremizdeki dünyayı anlayışımızı sürekli şekillendirdiğimiz sürekli bir yaratıcı süreç olarak görüyorum.'
    },
    'philosophy_para2': {
        'en': 'In my creative work, I\'m fascinated by the tension between structure and chaos, between the rational and the intuitive. I believe that the most interesting art emerges from navigating this boundary, creating frameworks that allow for spontaneity and discovery.',
        'tr': 'Yaratıcı çalışmalarımda, yapı ile kaos arasındaki, rasyonel ile sezgisel arasındaki gerilim beni büyülüyor. En ilginç sanatın bu sınırda gezinmekten, kendiliğindenliğe ve keşfe izin veren çerçeveler oluşturmaktan ortaya çıktığına inanıyorum.'
    },
    'philosophy_quote': {
        'en': 'I\'m alive but I don\'t live... In other hand, that\'s the life I chose... Maybe...',
        'tr': 'Hayattayım ama yaşamıyorum... Diğer yandan, bu seçtiğim hayat... Belki...'
    },
    'philosophy_para3': {
        'en': 'This quote reflects my recognition of the paradoxes inherent in existence - how we can simultaneously be present in life while feeling disconnected from it, how choice itself can be both liberating and constraining. It\'s these tensions and contradictions that often fuel my creative explorations.',
        'tr': 'Bu alıntı, varoluşun içinde bulunan paradoksları tanımamı yansıtıyor - hayatta nasıl aynı anda hem mevcut olup hem de ondan kopuk hissedebileceğimizi, seçimin kendisinin nasıl hem özgürleştirici hem de kısıtlayıcı olabileceğini. Genellikle yaratıcı keşiflerimi besleyen bu gerilimler ve çelişkilerdir.'
    },
    'philosophy_para4': {
        'en': 'I approach technology not just as a tool but as a medium for expression and exploration. The digital realm offers unique possibilities for creating experiences that blend logic and emotion, precision and ambiguity. I\'m particularly interested in how AI can be used as a collaborative creative partner, extending human imagination in new directions.',
        'tr': 'Teknolojiye sadece bir araç olarak değil, ifade ve keşif için bir ortam olarak yaklaşıyorum. Dijital alan, mantık ve duygu, kesinlik ve belirsizliği harmanlaşan deneyimler yaratmak için benzersiz olanaklar sunar. Özellikle yapay zekanın insan hayal gücünü yeni yönlere genişleten işbirlikçi bir yaratıcı ortak olarak nasıl kullanılabileceğiyle ilgileniyorum.'
    },
    'philosophy_para5': {
        'en': 'Ultimately, my goal is to create work that invites contemplation and opens up new perspectives - work that doesn\'t simply present answers but creates space for questions and reflection.',
        'tr': 'Sonuçta, amacım düşünmeye davet eden ve yeni bakış açıları açan işler yaratmaktır - sadece cevaplar sunmayan, sorulara ve düşünmeye alan yaratan işler.'
    },

    // About page - Timeline section
    'timeline_title': {
        'en': 'Journey Timeline',
        'tr': 'Yolculuk Zaman Çizelgesi'
    },
    'timeline_early': {
        'en': 'Early Explorations',
        'tr': 'İlk Keşifler'
    },
    'timeline_early_desc': {
        'en': 'First encounters with technology and artistic expression, laying the groundwork for future endeavors.',
        'tr': 'Teknoloji ve sanatsal ifadeyle ilk karşılaşmalar, gelecekteki çabalar için temel oluşturuyor.'
    },
    'timeline_education': {
        'en': 'Formal Education',
        'tr': 'Resmi Eğitim'
    },
    'timeline_education_desc': {
        'en': 'Pursued studies in computer science while independently exploring digital art and music production.',
        'tr': 'Bağımsız olarak dijital sanat ve müzik prodüksiyonunu keşfederken bilgisayar bilimlerinde eğitim aldım.'
    },
    'timeline_professional': {
        'en': 'Professional Beginnings',
        'tr': 'Profesyonel Başlangıçlar'
    },
    'timeline_professional_desc': {
        'en': 'Started working in technology sector while developing side projects combining tech and art.',
        'tr': 'Teknoloji ve sanatı birleştiren yan projeler geliştirirken teknoloji sektöründe çalışmaya başladım.'
    },
    'timeline_creative': {
        'en': 'Creative Expansion',
        'tr': 'Yaratıcı Genişleme'
    },
    'timeline_creative_desc': {
        'en': 'Began more serious exploration of philosophical writing and advanced music composition.',
        'tr': 'Felsefi yazı ve ileri düzey müzik kompozisyonunun daha ciddi keşfine başladım.'
    },
    'timeline_ai': {
        'en': 'AI Exploration',
        'tr': 'Yapay Zeka Keşfi'
    },
    'timeline_ai_desc': {
        'en': 'Focused on the creative potential of artificial intelligence and its implications for art and society.',
        'tr': 'Yapay zekanın yaratıcı potansiyeline ve sanat ve toplum için etkilerine odaklandım.'
    },
    'timeline_current': {
        'en': 'Current Ventures',
        'tr': 'Güncel Girişimler'
    },
    'timeline_current_desc': {
        'en': 'Working on integrating various disciplines into cohesive projects that reflect my multifaceted interests.',
        'tr': 'Çok yönlü ilgi alanlarımı yansıtan tutarlı projeler oluşturmak için çeşitli disiplinleri entegre etmeye çalışıyorum.'
    },

    // Mobile About page - Skills section
    'skills_title': {
        'en': 'Skills & Interests',
        'tr': 'Yetenekler & İlgi Alanları'
    },
    'skill_programming': {
        'en': 'Programming',
        'tr': 'Programlama'
    },
    'skill_digital_art': {
        'en': 'Digital Art',
        'tr': 'Dijital Sanat'
    },
    'skill_philosophy': {
        'en': 'Philosophy',
        'tr': 'Felsefe'
    },
    'skill_writing': {
        'en': 'Writing',
        'tr': 'Yazarlık'
    },

    // Footer quote
    'footer_quote': {
        'en': 'Exploring the boundaries of creativity and thought.',
        'tr': 'Yaratıcılık ve düşüncenin sınırlarını keşfetmek.'
    },

    // Progress tracker
    'progress_viewed': {
        'en': '% viewed',
        'tr': '% görüntülendi'
    }
};

// Check if language setting has expired (after 24 hours)
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const lastLanguageSession = localStorage.getItem('languageSessionTimestamp');

// Default language
const DEFAULT_LANGUAGE = 'en';

// Initialize language
let currentLanguage = DEFAULT_LANGUAGE;

if (lastLanguageSession) {
    const sessionTimestamp = parseInt(lastLanguageSession, 10);
    const currentTime = Date.now();

    // If session is still valid, load the saved language
    if (currentTime - sessionTimestamp <= SESSION_DURATION) {
        currentLanguage = localStorage.getItem('language') || DEFAULT_LANGUAGE;
    } else {
        // Session expired, reset to default
        localStorage.removeItem('language');
        localStorage.removeItem('languageSessionTimestamp');
    }
} else {
    // No session recorded yet, use default
    currentLanguage = DEFAULT_LANGUAGE;
}

// Function to get translation
function getTranslation(key, language = currentLanguage) {
    if (translations[key] && translations[key][language]) {
        return translations[key][language];
    }
    // Fallback to English if translation not found
    if (translations[key] && translations[key]['en']) {
        return translations[key]['en'];
    }
    // Return the key as is if not found at all
    return key;
}

// Function to update specific elements that need special handling
function updateSpecialElements(language) {
    // Update glitch effect text without breaking it
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        // Keep the name "Boran Birtanır" unchanged as it's a name
        // Just ensure the data-text attribute matches for the glitch effect
        glitchElement.setAttribute('data-text', glitchElement.textContent);
    }

    // Update typing animation without breaking it
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        typingElement.textContent = getTranslation('hero_subtitle');
    }
}

// Function to translate all elements with data-translate attribute
function translatePage(language) {
    // Update page language
    document.documentElement.lang = language;

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = getTranslation(translationKey, language);
    });

    // Handle special elements
    updateSpecialElements(language);

    // Update language toggle button titles
    const langToggles = document.querySelectorAll('#lang-toggle, #mobile-lang-toggle');
    langToggles.forEach(toggle => {
        toggle.setAttribute('title', getTranslation('language', language));
    });
}

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    localStorage.setItem('language', currentLanguage);
    localStorage.setItem('languageSessionTimestamp', Date.now()); // Update session timestamp
    translatePage(currentLanguage);
}

// Function to add translation attributes to elements when DOM is loaded
function preparePageForTranslation() {
    // Navigation
    const navLinks = document.querySelectorAll('nav .nav-links li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') {
            link.setAttribute('data-translate', 'nav_home');
        } else if (href === 'about.html') {
            link.setAttribute('data-translate', 'nav_about');
        } else if (href === 'gallery.html') {
            link.setAttribute('data-translate', 'nav_gallery');
        } else if (href === 'diary.html') {
            link.setAttribute('data-translate', 'nav_diary');
        } else if (href === 'socials.html') {
            link.setAttribute('data-translate', 'nav_socials');
        }
    });

    // Add language toggle to navigation
    addLanguageToggle();

    // Apply saved language preference
    translatePage(currentLanguage);
}

// Function to add language toggle to navigation
function addLanguageToggle() {
    // Desktop navigation
    const desktopNav = document.querySelector('header nav .nav-links');
    if (desktopNav) {
        const langItem = document.createElement('li');
        langItem.className = 'lang-item';

        const langLink = document.createElement('a');
        langLink.href = '#';
        langLink.id = 'lang-toggle';
        langLink.setAttribute('title', getTranslation('language'));
        langLink.innerHTML = '🌐'; // Only show the icon
        langLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleLanguage();
        });

        langItem.appendChild(langLink);
        desktopNav.appendChild(langItem);
    }

    // Mobile navigation
    const mobileNav = document.querySelector('.mobile-nav .nav-links');
    if (mobileNav) {
        const langItem = document.createElement('li');
        langItem.className = 'lang-item';

        const langLink = document.createElement('a');
        langLink.href = '#';
        langLink.id = 'mobile-lang-toggle';
        langLink.setAttribute('title', getTranslation('language'));
        langLink.innerHTML = '🌐'; // Only show the icon
        langLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleLanguage();
        });

        langItem.appendChild(langLink);
        mobileNav.appendChild(langItem);
    }
}

// Initialize translation system on DOM load
document.addEventListener('DOMContentLoaded', preparePageForTranslation);
