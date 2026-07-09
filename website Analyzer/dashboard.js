// ======================================
// AI Website Analyzer Dashboard
// dashboard.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const analyzeBtn = document.getElementById("analyzeBtn");
    const urlInput = document.getElementById("url");

    const perf = document.getElementById("perf");
    const seo = document.getElementById("seo");
    const acc = document.getElementById("acc");
    const best = document.getElementById("best");

    const table = document.querySelector("table");

    // ===============================
    // Random Number Generator
    // ===============================

    function random(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    // ===============================
    // Animate Counter
    // ===============================

    function animateCounter(element, target) {

        let current = 0;

        const speed = 20;

        const interval = setInterval(() => {

            current++;

            element.innerHTML = current;

            if (current >= target) {

                clearInterval(interval);

            }

        }, speed);

    }

    // ===============================
    // Analyze Button
    // ===============================

    analyzeBtn.addEventListener("click", () => {

        const url = urlInput.value.trim();

        if (url === "") {

            alert("Please enter a website URL.");

            return;

        }

        analyzeBtn.disabled = true;

        analyzeBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        setTimeout(() => {

            const performance = random(80, 99);

            const seoScore = random(82, 100);

            const accessibility = random(78, 98);

            const bestPractices = random(84, 100);

            animateCounter(perf, performance);

            animateCounter(seo, seoScore);

            animateCounter(acc, accessibility);

            animateCounter(best, bestPractices);

            addHistory(url);

            analyzeBtn.disabled = false;

            analyzeBtn.innerHTML =
                '<i class="fas fa-search"></i> Analyze Website';

        }, 3000);

    });

    // ===============================
    // History Table
    // ===============================

    function addHistory(url) {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${url}</td>

            <td style="color:#22c55e;font-weight:bold;">
                Completed
            </td>

        `;

        table.appendChild(row);

    }

    // ===============================
    // Floating Cards
    // ===============================

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        let angle = index * 30;

        setInterval(() => {

            angle += 0.03;

            card.style.transform =
                `translateY(${Math.sin(angle) * 6}px)`;

        }, 30);

    });

    // ===============================
    // Live AI Metrics
    // ===============================

    setInterval(() => {

        document.title =
            "🤖 AI Website Analyzer Dashboard";

    }, 1000);

    // ===============================
    // Welcome Animation
    // ===============================

    const heading = document.querySelector(".topbar h1");

    heading.animate([

        {

            opacity: 0,

            transform: "translateY(-25px)"

        },

        {

            opacity: 1,

            transform: "translateY(0)"

        }

    ], {

        duration: 1000

    });

    // ===============================
    // Background Glow Effect
    // ===============================

    setInterval(() => {

        document.body.style.background =

            `linear-gradient(
                135deg,
                rgb(${10 + Math.random() * 20},
                    ${15 + Math.random() * 25},
                    ${35 + Math.random() * 25}),
                #0f172a,
                #111827
            )`;

    }, 5000);

});