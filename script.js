document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    /* ==========================
       Fade In Animation
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.animate([
                    {
                        opacity: 0,
                        transform: "translateY(40px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ], {
                    duration: 700,
                    fill: "forwards"
                });

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    /* ==========================
       Stats Counter Animation
    ========================== */

    document.querySelectorAll(".stats h2").forEach(counter => {

        const text = counter.textContent;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let current = 0;

        const increment = Math.ceil(number / 50);

        const timer = setInterval(() => {

            current += increment;

            if (current >= number) {

                current = number;

                clearInterval(timer);

            }

            if (text.includes("%")) {

                counter.textContent = current + "%";

            } else if (text.includes("+")) {

                counter.textContent = current + "+";

            } else {

                counter.textContent = current;

            }

        }, 30);

    });

    /* ==========================
       Fake AI Website Analysis
    ========================== */

    const analyzeBtn = document.querySelector(".analyzer button");

    const urlInput = document.querySelector(".analyzer input");

    const resultCard = document.querySelector(".hero-card");

    analyzeBtn.addEventListener("click", () => {

        const url = urlInput.value.trim();

        if (url === "") {

            alert("Please enter a website URL.");

            return;

        }

        analyzeBtn.disabled = true;

        const originalText = analyzeBtn.innerHTML;

        let progress = 0;

        analyzeBtn.innerHTML = "Analyzing... 0%";

        const loader = setInterval(() => {

            progress += 5;

            analyzeBtn.innerHTML = `Analyzing... ${progress}%`;

            if (progress >= 100) {

                clearInterval(loader);

                const performance = random(82, 99);

                const seo = random(85, 100);

                const accessibility = random(80, 98);

                const bestPractices = random(84, 100);

                resultCard.innerHTML = `

                    <h3>AI Analysis Result</h3>

                    <ul>

                        <li>
                            Performance
                            <strong>${performance}</strong>
                        </li>

                        <li>
                            SEO
                            <strong>${seo}</strong>
                        </li>

                        <li>
                            Accessibility
                            <strong>${accessibility}</strong>
                        </li>

                        <li>
                            Best Practices
                            <strong>${bestPractices}</strong>
                        </li>

                    </ul>

                    <p style="
                        margin-top:20px;
                        color:#38ef7d;
                        font-weight:bold;
                    ">
                        ✔ Website analyzed successfully
                    </p>

                `;

                resultCard.animate([

                    {
                        opacity: 0,
                        transform: "scale(.9)"
                    },

                    {
                        opacity: 1,
                        transform: "scale(1)"
                    }

                ], {

                    duration: 500

                });

                analyzeBtn.disabled = false;

                analyzeBtn.innerHTML = originalText;

            }

        }, 120);

    });

    /* ==========================
       Floating Dashboard Effect
    ========================== */

    const card = document.querySelector(".hero-card");

    let angle = 0;

    setInterval(() => {

        angle += 0.03;

        card.style.transform =
            `translateY(${Math.sin(angle) * 8}px)`;

    }, 30);

    /* ==========================
       Random Background Glow
    ========================== */

    setInterval(() => {

        document.body.style.background =
            `linear-gradient(
                135deg,
                rgb(${10 + Math.random() * 10},
                    ${15 + Math.random() * 20},
                    ${35 + Math.random() * 20}),
                #0f172a,
                #111827
            )`;

    }, 5000);

});

/* ==========================
   Random Number Function
========================== */

function random(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

