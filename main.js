/* =========================================================
   ABDELRAHMAN & NANCI
   PREMIUM WEDDING INVITATION
   Vanilla JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const weddingConfig = {

        groom: "Abdelrahman",

        bride: "Nanci",

        targetDate:
            "2026-10-07T00:00:00",

        locationName:
            "Riviera Wedding Hall",

        locationAddress:
            "El-Manzala"

    };


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            navHome: "Home",

            navDetails: "Details",

            navGallery: "Gallery",

            openingSubtitle:
                "OUR WEDDING INVITATION",

            openInvitationBtn:
                "OPEN INVITATION",

            heroParentsNote:
                "Together with their families",

            heroDateText:
                "07 OCTOBER 2026",

            saveTheDate:
                "Save The Date",

            scrollDiscover:
                "Scroll to discover",

            countdownTag:
                "Counting down to forever",

            days: "DAYS",

            hours: "HOURS",

            minutes: "MINUTES",

            seconds: "SECONDS",

            loveQuote:
                '"Two hearts, one journey, a lifetime of eternal love."',

            arabicVerse:
                '"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا"',

            detailsSub:
                "Join us for the celebration",

            detailsTitle:
                "Event Details",

            ceremonyTitle:
                "Wedding Location",

            ceremonyVenue:
                "Riviera Wedding Hall",

            ceremonyAddress:
                "El-Manzala",

            receptionTitle:
                "Wedding Celebration",

            receptionTime:
                "08:00 PM",

            dressCode:
                "Dress Code: Beige, Baby Pink & Burgundy",

            gallerySub:
                "Captured Moments",

            galleryTitle:
                "Our Moments",

            footerNote:
                "With love & gratitude"
        },


        ar: {

            navHome:
                "الرئيسية",

            navDetails:
                "التفاصيل",

            navGallery:
                "الصور",

            openingSubtitle:
                "دعوة حفل زفافنا",

            openInvitationBtn:
                "فتح الدعوة",

            heroParentsNote:
                "ببالغ الفرح والسرور ندعوكم لحضور حفل زفاف",

            heroDateText:
                "٠٧ أكتوبر ٢٠٢٦",

            saveTheDate:
                "حفظ الموعد",

            scrollDiscover:
                "مرر للاستكشاف",

            countdownTag:
                "العد التنازلي لليوم الكبير",

            days:
                "يوم",

            hours:
                "ساعة",

            minutes:
                "دقيقة",

            seconds:
                "ثانية",

            loveQuote:
                '"ومن آياته أن خلق لكم من أنفسكم أزواجًا لتسكنوا إليها وجعل بينكم مودة ورحمة"',

            arabicVerse:
                "عبدالرحمن & نانسي",

            detailsSub:
                "شاركونا فرحتنا",

            detailsTitle:
                "تفاصيل الحفل",

            ceremonyTitle:
                "مكان حفل الزفاف",

            ceremonyVenue:
                "قاعة ريفيرا للأفراح",

            ceremonyAddress:
                "المنزلة",

            receptionTitle:
                "احتفال الزفاف",

            receptionTime:
                "٠٨:٠٠ مساءً",

            dressCode:
                "الزي المقترح: بيج، بينك فاتح وبرغندي",

            gallerySub:
                "أجمل اللحظات",

            galleryTitle:
                "لحظاتنا",

            footerNote:
                "مع كل الحب والامتنان"
        }

    };


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const openingScreen =
        document.getElementById(
            "opening-screen"
        );

    const openInvitationBtn =
        document.getElementById(
            "open-invitation-btn"
        );

    const bgAudio =
        document.getElementById(
            "bg-music"
        );

    const audioToggleBtn =
        document.getElementById(
            "audio-toggle"
        );

    const langToggleBtn =
        document.getElementById(
            "lang-toggle-btn"
        );

    const navToggle =
        document.getElementById(
            "nav-toggle"
        );

    const navLinks =
        document.getElementById(
            "nav-links"
        );


    /* =====================================================
       DYNAMIC GREETING
    ===================================================== */

    const greetingEl =
        document.getElementById(
            "greeting-time"
        );

    if (greetingEl) {

        const hour =
            new Date().getHours();

        let greeting =
            "Good day, you are warmly invited";

        if (hour < 12) {

            greeting =
                "Good morning, you are warmly invited";

        } else if (hour < 18) {

            greeting =
                "Good afternoon, you are warmly invited";

        } else {

            greeting =
                "Good evening, you are warmly invited";

        }

        greetingEl.textContent =
            greeting;
    }


    /* =====================================================
       OPEN INVITATION
    ===================================================== */

    if (
        openInvitationBtn &&
        openingScreen
    ) {

        openInvitationBtn.addEventListener(
            "click",
            async () => {

                openingScreen.classList.add(
                    "fade-out"
                );

                if (bgAudio) {

                    try {

                        await bgAudio.play();

                        if (audioToggleBtn) {

                            audioToggleBtn.classList.add(
                                "playing"
                            );
                        }

                    } catch (error) {

                        console.log(
                            "Audio autoplay was blocked."
                        );

                    }

                }

            }
        );

    }


    /* =====================================================
       LANGUAGE SWITCHER
    ===================================================== */

    let currentLang = "en";

    function applyLanguage(lang) {

        currentLang = lang;

        document.documentElement
            .setAttribute(
                "lang",
                lang
            );

        document.documentElement
            .setAttribute(
                "dir",
                lang === "ar"
                    ? "rtl"
                    : "ltr"
            );


        document
            .querySelectorAll(
                ".lang-label"
            )
            .forEach(label => {

                label.classList.toggle(
                    "active",
                    label.dataset.langCode === lang
                );

            });


        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                const value =
                    translations[
                        lang
                    ]?.[key];

                if (value) {

                    element.textContent =
                        value;

                }

            });

    }


    if (langToggleBtn) {

        langToggleBtn.addEventListener(
            "click",
            () => {

                const nextLang =
                    currentLang === "en"
                        ? "ar"
                        : "en";

                applyLanguage(
                    nextLang
                );

            }
        );

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const daysEl =
        document.getElementById(
            "days"
        );

    const hoursEl =
        document.getElementById(
            "hours"
        );

    const minutesEl =
        document.getElementById(
            "minutes"
        );

    const secondsEl =
        document.getElementById(
            "seconds"
        );

    const countdown =
        document.getElementById(
            "countdown"
        );


    function updateCountdown() {

        const target =
            new Date(
                weddingConfig.targetDate
            ).getTime();

        const now =
            Date.now();

        const difference =
            target - now;


        if (difference <= 0) {

            if (countdown) {

                countdown.innerHTML =
                    `<h3 class="hero-date-text">
                        TODAY IS THE DAY ♥
                    </h3>`;

            }

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                1000
            );


        if (daysEl) {

            daysEl.textContent =
                String(days).padStart(
                    2,
                    "0"
                );

        }

        if (hoursEl) {

            hoursEl.textContent =
                String(hours).padStart(
                    2,
                    "0"
                );

        }

        if (minutesEl) {

            minutesEl.textContent =
                String(minutes).padStart(
                    2,
                    "0"
                );

        }

        if (secondsEl) {

            secondsEl.textContent =
                String(seconds).padStart(
                    2,
                    "0"
                );

        }

    }

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       AUDIO
    ===================================================== */

    if (audioToggleBtn && bgAudio) {

        audioToggleBtn.addEventListener(
            "click",
            async () => {

                if (bgAudio.paused) {

                    try {

                        await bgAudio.play();

                        audioToggleBtn.classList.add(
                            "playing"
                        );

                    } catch (error) {

                        console.log(
                            "Unable to play audio."
                        );

                    }

                } else {

                    bgAudio.pause();

                    audioToggleBtn.classList.remove(
                        "playing"
                    );

                }

            }
        );

    }


    /* =====================================================
       SAVE THE DATE
    ===================================================== */

    const saveDateBtn =
        document.getElementById(
            "save-date-btn"
        );

    if (saveDateBtn) {

        saveDateBtn.addEventListener(
            "click",
            () => {

                const icsData =

`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Abdelrahman & Nanci Wedding//EN
BEGIN:VEVENT
SUMMARY:Abdelrahman & Nanci Wedding
DESCRIPTION:Join us as we celebrate the beginning of our forever.
LOCATION:Riviera Wedding Hall, El-Manzala
DTSTART:20261007T180000
DTEND:20261007T230000
END:VEVENT
END:VCALENDAR`;

                const blob =
                    new Blob(
                        [icsData],
                        {
                            type:
                                "text/calendar;charset=utf-8"
                        }
                    );

                const url =
                    URL.createObjectURL(
                        blob
                    );

                const link =
                    document.createElement(
                        "a"
                    );

                link.href = url;

                link.download =
                    "Abdelrahman_Nanci_Wedding.ics";

                document.body.appendChild(
                    link
                );

                link.click();

                link.remove();

                URL.revokeObjectURL(
                    url
                );

            }
        );

    }


    /* =====================================================
       GALLERY LIGHTBOX
    ===================================================== */

    const lightboxModal =
        document.getElementById(
            "lightbox-modal"
        );

    const lightboxImg =
        document.getElementById(
            "lightbox-img"
        );

    const lightboxClose =
        document.getElementById(
            "lightbox-close"
        );


    document
        .querySelectorAll(
            ".gallery-item"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const source =
                        item.dataset.imgSrc;

                    if (
                        !source ||
                        !lightboxModal ||
                        !lightboxImg
                    ) {
                        return;
                    }

                    lightboxImg.src =
                        source;

                    lightboxModal.classList.add(
                        "active"
                    );

                    lightboxModal.setAttribute(
                        "aria-hidden",
                        "false"
                    );

                    document.body.style.overflow =
                        "hidden";

                }
            );

        });


    function closeLightbox() {

        if (!lightboxModal) {
            return;
        }

        lightboxModal.classList.remove(
            "active"
        );

        lightboxModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightboxModal) {

        lightboxModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightboxModal
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (
        navToggle &&
        navLinks
    ) {

        navToggle.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle(
                    "active"
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       FALLING RED PETALS
    ===================================================== */

    const canvas =
        document.getElementById(
            "petals-canvas"
        );


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        canvas &&
        !reducedMotion
    ) {

        const ctx =
            canvas.getContext(
                "2d"
            );


        let width =
            window.innerWidth;

        let height =
            window.innerHeight;


        let animationFrame;


        function resizeCanvas() {

            const pixelRatio =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                );

            width =
                window.innerWidth;

            height =
                window.innerHeight;

            canvas.width =
                width * pixelRatio;

            canvas.height =
                height * pixelRatio;

            canvas.style.width =
                `${width}px`;

            canvas.style.height =
                `${height}px`;

            ctx.setTransform(
                pixelRatio,
                0,
                0,
                pixelRatio,
                0,
                0
            );

        }


        resizeCanvas();


        window.addEventListener(
            "resize",
            resizeCanvas,
            {
                passive: true
            }
        );


        const isMobile =
            width <= 768;


        const petalCount =
            isMobile
                ? 28
                : 35;


        const colors = [

            "rgba(111, 29, 44, 0.55)",

            "rgba(130, 31, 48, 0.48)",

            "rgba(141, 52, 68, 0.42)",

            "rgba(169, 84, 95, 0.35)"

        ];


        function createPetal(
            startAnywhere = true
        ) {

            return {

                x:
                    Math.random() *
                    width,

                y:
                    startAnywhere
                        ? Math.random() *
                          height
                        : -30,

                size:
                    Math.random() *
                    3.4 +
                    2.8,

                speed:
                    Math.random() *
                    0.40 +
                    0.36,

                sway:
                    Math.random() *
                    0.6 +
                    0.25,

                swaySpeed:
                    Math.random() *
                    0.018 +
                    0.008,

                rotation:
                    Math.random() *
                    Math.PI *
                    2,

                rotationSpeed:
                    (Math.random() - 0.5) *
                    0.018,

                opacity:
                    Math.random() *
                    0.100 +
                    0.70,

                color:
                    colors[
                        Math.floor(
                            Math.random() *
                            colors.length
                        )
                    ],

                phase:
                    Math.random() *
                    Math.PI *
                    2

            };

        }


        const petals =
            Array.from(
                {
                    length:
                        petalCount
                },
                () =>
                    createPetal(true)
            );


        function drawPetal(petal) {

            ctx.save();

            ctx.translate(
                petal.x,
                petal.y
            );

            ctx.rotate(
                petal.rotation
            );

            ctx.globalAlpha =
                petal.opacity;

            ctx.fillStyle =
                petal.color;


            /*
                Small elegant petal shape.
                Not a circle.
            */

            ctx.beginPath();

            ctx.moveTo(
                0,
                -petal.size
            );

            ctx.bezierCurveTo(

                petal.size * 0.8,
                -petal.size * 0.45,

                petal.size * 0.8,
                petal.size * 0.55,

                0,
                petal.size

            );

            ctx.bezierCurveTo(

                -petal.size * 0.8,
                petal.size * 0.55,

                -petal.size * 0.8,
                -petal.size * 0.45,

                0,
                -petal.size

            );

            ctx.closePath();

            ctx.fill();

            ctx.restore();

        }


        let lastTime =
            performance.now();


        function animatePetals(
            currentTime
        ) {

            const delta =
                Math.min(
                    currentTime -
                    lastTime,
                    32
                );

            lastTime =
                currentTime;


            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            petals.forEach(
                petal => {

                    const factor =
                        delta / 16.67;


                    petal.y +=
                        petal.speed *
                        factor;

                    petal.phase +=
                        petal.swaySpeed *
                        factor;

                    petal.x +=
                        Math.sin(
                            petal.phase
                        ) *
                        petal.sway *
                        0.12;

                    petal.rotation +=
                        petal.rotationSpeed *
                        factor;


                    if (
                        petal.y >
                        height + 30
                    ) {

                        Object.assign(
                            petal,
                            createPetal(false)
                        );

                    }


                    if (
                        petal.x <
                        -30
                    ) {

                        petal.x =
                            width + 20;

                    }


                    if (
                        petal.x >
                        width + 30
                    ) {

                        petal.x =
                            -20;

                    }


                    drawPetal(
                        petal
                    );

                }
            );


            animationFrame =
                requestAnimationFrame(
                    animatePetals
                );

        }


        animationFrame =
            requestAnimationFrame(
                animatePetals
            );


        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.hidden
                ) {

                    cancelAnimationFrame(
                        animationFrame
                    );

                } else {

                    lastTime =
                        performance.now();

                    animationFrame =
                        requestAnimationFrame(
                            animatePetals
                        );

                }

            }
        );

    }


    /* =====================================================
       LUCIDE ICONS
    ===================================================== */

    if (window.lucide) {

        lucide.createIcons();

    }

});