/* ==========================================
   Anjan Digital Services
   Main JavaScript
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .process-card, .testimonial-card, .contact-card, .stat-card, .notice-box, .reveal"
    );

    function revealOnScroll() {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                el.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();



    /* ==========================
       FAQ Accordion
    ========================== */

    document.querySelectorAll(".faq-question").forEach(button => {

        button.addEventListener("click", () => {

            const answer = button.nextElementSibling;

            document.querySelectorAll(".faq-answer").forEach(item => {

                if (item !== answer) {

                    item.style.display = "none";

                }

            });

            answer.style.display =
                answer.style.display === "block"
                    ? "none"
                    : "block";

        });

    });



    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display =
                window.scrollY > 300 ? "block" : "none";

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();



    /* ==========================
       Mobile Menu
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");
            document.body.classList.toggle("menu-open");

        });

        navbar.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");
                document.body.classList.remove("menu-open");

            });

        });

    }



    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();



    /* ==========================
       Scroll Progress Bar
    ========================== */

    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const pageHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / pageHeight) * 100;

            progressBar.style.width = progress + "%";

        });

    }



    /* ==========================
       Animated Counter
    ========================== */

    const counters = document.querySelectorAll(".counter");

    if (counters.length) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = Math.max(1, Math.ceil(target / 120));

                function updateCounter() {

                    current += increment;

                    if (current >= target) {

                        counter.textContent = target + "+";

                    } else {

                        counter.textContent = current;

                        requestAnimationFrame(updateCounter);

                    }

                }

                updateCounter();

                observer.unobserve(counter);

            });

        }, {

            threshold: 0.5

        });

        counters.forEach(counter => observer.observe(counter));

    }



    /* ==========================
       Mouse Glow
    ========================== */

    const glow = document.getElementById("mouse-glow");

    if (glow) {

        document.addEventListener("mousemove", e => {

            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";

        });

    }



    /* ==========================
       Theme Switcher
    ========================== */

    const themeBtn = document.getElementById("theme-toggle");

    if (themeBtn) {

        const icon = themeBtn.querySelector("i");

        if (localStorage.getItem("theme") === "dark") {

            document.body.classList.add("dark");

            if (icon) {

                icon.className = "fas fa-sun";

            }

        }

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

                if (icon) icon.className = "fas fa-sun";

            } else {

                localStorage.setItem("theme", "light");

                if (icon) icon.className = "fas fa-moon";

            }

        });

    }

});



/* ==========================
   Page Loader
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hidden");

        }, 700);

    }

});