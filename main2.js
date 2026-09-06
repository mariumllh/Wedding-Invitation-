/**
 * Wedding Invitation Application Script
 * Groom: Mohammed | Bride: Nada
 * Custom Modules: Configuration, i18n Translation, Petals Animation, Countdown, Audio, Lightbox, RSVP
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. WEDDING CONFIGURATION (Easy Customization)
       ========================================================================== */
    const weddingConfig = {
        groom: "Mohammed",
        bride: "Nada",
        targetDate: "2026-10-02T18:00:00", // YYYY-MM-DDThh:mm:ss
        locationName: "The Grand Royal Ballroom",
        locationAddress: "123 Luxury Avenue, Metropolis",
        mapUrl: "https://maps.google.com",
    };

    /* ==========================================================================
       2. TRANSLATION DICTIONARY (English & Arabic RTL)
       ========================================================================== */
    const translations = {
        en: {
            navHome: "Home",
            navStory: "Our Story",
            navDetails: "Details",
            navGallery: "Gallery",
            navRsvp: "RSVP",
            openingSubtitle: "OUR WEDDING INVITATION",
            openInvitationBtn: "OPEN INVITATION",
            heroParentsNote: "Together with their families",
            heroDateText: "02 OCTOBER 2026",
            saveTheDate: "Save The Date",
            scrollDiscover: "Scroll to discover",
            countdownTag: "Counting down to forever",
            days: "DAYS",
            hours: "HOURS",
            minutes: "MINUTES",
            seconds: "SECONDS",
            loveQuote: '"Two hearts, one journey, a lifetime of eternal love."',
            arabicVerse: '"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا"',
            storySub: "Where it all began",
            storyTitle: "Our Story",
            story1Title: "The First Encounter",
            story1Desc: "A quiet moment that sparkled a conversation, turning strangers into inseparable soulmates.",
            story2Title: "The Promise",
            story2Desc: "Hand in hand under the twilight sky, choosing each other for all of life's chapters.",
            story3Title: "Forever Begins",
            story3Desc: "Surrounded by those we treasure most, we step together into our new lifetime.",
            detailsSub: "Join us for the celebration",
            detailsTitle: "Event Details",
            ceremonyTitle: "Wedding Ceremony",
            ceremonyTime: "06:00 PM",
            ceremonyVenue: "The Grand Royal Ballroom",
            ceremonyAddress: "123 Luxury Avenue, Metropolis",
            dressCode: "Dress Code: Formal Evening / Black Tie",
            receptionTitle: "Dinner & Celebration",
            receptionTime: "08:00 PM",
            receptionVenue: "The Crystal Garden Pavilion",
            receptionAddress: "123 Luxury Avenue, Metropolis",
            receptionNote: "Music, Fine Dining & Dancing",
            viewLocation: "View Location",
            copyAddress: "Copy Address",
            gallerySub: "Captured Moments",
            galleryTitle: "Our Moments",
            rsvpSub: "Kindly respond by September 1st",
            rsvpTitle: "Will You Join Us?",
            labelName: "Full Name",
            labelGuests: "Number of Guests",
            labelAttendance: "Attendance",
            optAccept: "Joyfully Accept",
            optDecline: "Regretfully Decline",
            labelMessage: "Message for the Couple (Optional)",
            confirmRsvp: "Confirm RSVP",
            rsvpSuccessTitle: "Thank You!",
            rsvpSuccessText: "Your response has been delightfully received. We look forward to celebrating with you.",
            footerNote: "With love & gratitude"
        },
        ar: {
            navHome: "الرئيسية",
            navStory: "قصتنا",
            navDetails: "التفاصيل",
            navGallery: "الصور",
            navRsvp: "تأكيد الحضور",
            openingSubtitle: "دعوة حفل زفافنا",
            openInvitationBtn: "فتح الدعوة",
            heroParentsNote: "ببالغ الفرح والسرور ندعوكم لحضور حفل زفاف",
            heroDateText: "٠٢ أكتوبر ٢٠٢٦",
            saveTheDate: "حفظ الموعد",
            scrollDiscover: "تمرير للاستكشاف",
            countdownTag: "العد التنازلي لليوم الكبير",
            days: "يوم",
            hours: "ساعة",
            minutes: "دقيقة",
            seconds: "ثانية",
            loveQuote: '"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"',
            arabicVerse: 'محمد & ندى',
            storySub: "كيف بدأت رحلتنا",
            storyTitle: "قصتنا",
            story1Title: "اللقاء الأول",
            story1Desc: "لحظة هادئة بدأت بحوار بسيط، للتحول القلوب إلى أرواح لا تفترق.",
            story2Title: "الوعد",
            story2Desc: "يداً بيد تحت أضواء النجوم، اخترنا بعضنا لنكمل الطريق معاً.",
            story3Title: "بداية الأبدية",
            story3Desc: "بوجود من نحبهم ونعتز بهم، نخطو أولى خطواتنا في فصلنا الجديد.",
            detailsSub: "شاركونا فرحتنا",
            detailsTitle: "تفاصيل الحفل",
            ceremonyTitle: "حفل الزفاف",
            ceremonyTime: "٠٦:٠٠ مساءً",
            ceremonyVenue: "قاعة الملكية الكبرى",
            ceremonyAddress: "شارع الملكية ١٢٣، العاصمة",
            dressCode: "زي الحفل: رسمي كلاسيكي",
            receptionTitle: "العشاء والاحتفال",
            receptionTime: "٠٨:٠٠ مساءً",
            receptionVenue: "جناح الحديقة الكريستالية",
            receptionAddress: "شارع الملكية ١٢٣، العاصمة",
            receptionNote: "موسيقى، عشاء فاخر وأجواء سعيدة",
            viewLocation: "عرض الموقع",
            copyAddress: "نسخ العنوان",
            gallerySub: "أجمل اللحظات",
            galleryTitle: "معرض الصور",
            rsvpSub: "يرجى تأكيد الحضور قبل ١ سبتمبر",
            rsvpTitle: "هل ستشاركوننا الفرحة؟",
            labelName: "الاسم الكامل",
            labelGuests: "عدد المرافقين",
            labelAttendance: "موقف الحضور",
            optAccept: "يشرفني الحضور بكل سرور",
            optDecline: "أعتذر عن الحضور",
            labelMessage: "رسالة للعروسين (اختياري)",
            confirmRsvp: "تأكيد الحضور",
            rsvpSuccessTitle: "شكراً لكم!",
            rsvpSuccessText: "تم استلام ردكم بنجاح. نتطلع بشوق للرؤية والاحتفال معكم.",
            footerNote: "مع كل الحب والامتنان"
        }
    };

    /* ==========================================================================
       3. DYNAMIC TIME GREETING & OPENING EXPERIENCE
       ========================================================================== */
    const greetingEl = document.getElementById('greeting-time');
    const hour = new Date().getHours();
    let timeGreeting = "Good day, you are warmly invited";
    if (hour < 12) timeGreeting = "Good morning, you are warmly invited";
    else if (hour < 18) timeGreeting = "Good afternoon, you are warmly invited";
    else timeGreeting = "Good evening, you are warmly invited";
    if (greetingEl) greetingEl.textContent = timeGreeting;

    const openBtn = document.getElementById('open-invitation-btn');
    const openingScreen = document.getElementById('opening-screen');
    const bgAudio = document.getElementById('bg-music');
    const audioToggleBtn = document.getElementById('audio-toggle');

    openBtn.addEventListener('click', () => {
        openingScreen.classList.add('fade-out');
        
        // Attempt audio autoplay on click interaction
        if (bgAudio) {
            bgAudio.play().then(() => {
                audioToggleBtn.classList.add('playing');
            }).catch(() => {
                console.log("Autoplay restricted by browser policy.");
            });
        }
    });

    /* ==========================================================================
       4. LANGUAGE SWITCHER (RTL Support)
       ========================================================================== */
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    let currentLang = 'en';

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', currentLang);

        // Toggle active visual class on button
        document.querySelectorAll('.lang-label').forEach(el => {
            el.classList.toggle('active', el.getAttribute('data-lang-code') === currentLang);
        });

        // Translate text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
    });

    /* ==========================================================================
       5. COUNTDOWN TIMER ENGINE
       ========================================================================== */
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const target = new Date(weddingConfig.targetDate).getTime();
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = `<h3 class="hero-date-text">TODAY IS THE DAY ❤️</h3>`;
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    /* ==========================================================================
       6. AUDIO PLAYER TOGGLE
       ========================================================================== */
    audioToggleBtn.addEventListener('click', () => {
        if (bgAudio.paused) {
            bgAudio.play();
            audioToggleBtn.classList.add('playing');
        } else {
            bgAudio.pause();
            audioToggleBtn.classList.remove('playing');
        }
    });

    /* ==========================================================================
       7. ICS CALENDAR GENERATOR ("Save The Date")
       ========================================================================== */
    const saveDateBtn = document.getElementById('save-date-btn');
    if (saveDateBtn) {
        saveDateBtn.addEventListener('click', () => {
            const icsData = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mohammed & Nada Wedding//EN
BEGIN:VEVENT
SUMMARY:Mohammed & Nada Wedding Ceremony
DESCRIPTION:Join us as we celebrate our wedding day!
LOCATION:${weddingConfig.locationName}, ${weddingConfig.locationAddress}
DTSTART:20261002T180000Z
DTEND:20261002T230000Z
END:VEVENT
END:VCALENDAR`;

            const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute('download', 'Mohammed_Nada_Wedding.ics');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    /* ==========================================================================
       8. MAPS & COPY ADDRESS INTERACTIONS
       ========================================================================== */
    const ceremonyMapBtn = document.getElementById('ceremony-map-btn');
    const receptionMapBtn = document.getElementById('reception-map-btn');

    if (ceremonyMapBtn) ceremonyMapBtn.href = weddingConfig.mapUrl;
    if (receptionMapBtn) receptionMapBtn.href = weddingConfig.mapUrl;

    document.querySelectorAll('.copy-location-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const loc = btn.getAttribute('data-location');
            navigator.clipboard.writeText(loc).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = `<i data-lucide="check"></i> Copied!`;
                if (window.lucide) lucide.createIcons();
                setTimeout(() => { btn.innerHTML = originalText; if (window.lucide) lucide.createIcons(); }, 2000);
            });
        });
    });

    /* ==========================================================================
       9. GALLERY LIGHTBOX MODAL
       ========================================================================== */
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-img-src');
            lightboxImg.src = src;
            lightboxModal.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', () => lightboxModal.classList.remove('active'));
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) lightboxModal.classList.remove('active');
    });

    /* ==========================================================================
       10. RSVP FORM HANDLING
       ========================================================================== */
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpSuccess = document.getElementById('rsvp-success');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            rsvpForm.classList.add('hidden');
            rsvpSuccess.classList.remove('hidden');
        });
    }

    /* ==========================================================================
       11. MOBILE NAVIGATION TOGGLE
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* ==========================================================================
       12. FLOATING FLOWER PETALS CANVAS ANIMATION
       ========================================================================== */
    const canvas = document.getElementById('petals-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const petals = Array.from({ length: 18 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 6 + 4,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3
        }));

        function animatePetals() {
            ctx.clearRect(0, 0, width, height);
            petals.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;

                if (p.y > height) p.y = -10;
                if (p.x > width) p.x = 0;
                if (p.x < 0) p.x = width;

                ctx.beginPath();
                ctx.fillStyle = `rgba(197, 160, 89, ${p.opacity})`;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animatePetals);
        }
        animatePetals();
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});