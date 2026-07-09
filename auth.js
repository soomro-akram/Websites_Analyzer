// ===============================
// AI Website Analyzer - auth.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // SHOW / HIDE PASSWORD
    // ==========================

    const toggleIcons = document.querySelectorAll(".toggle-password");

    toggleIcons.forEach(icon => {

        icon.addEventListener("click", () => {

            const input = icon.previousElementSibling;

            if (input.type === "password") {

                input.type = "text";

                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");

            } else {

                input.type = "password";

                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");

            }

        });

    });

    // ==========================
    // PASSWORD STRENGTH
    // ==========================

    const password = document.getElementById("password");

    const strengthBar = document.querySelector(".strength-bar");

    const strengthText = document.querySelector(".strength-text");

    if (password && strengthBar && strengthText) {

        password.addEventListener("keyup", () => {

            let value = password.value;

            let strength = 0;

            if (value.length >= 8) strength++;
            if (/[A-Z]/.test(value)) strength++;
            if (/[0-9]/.test(value)) strength++;
            if (/[^A-Za-z0-9]/.test(value)) strength++;

            if (strength === 0) {

                strengthBar.style.width = "0%";
                strengthText.innerHTML = "";

            }

            else if (strength === 1) {

                strengthBar.style.width = "25%";
                strengthBar.style.background = "#ef4444";
                strengthText.innerHTML = "Weak Password";

            }

            else if (strength === 2) {

                strengthBar.style.width = "50%";
                strengthBar.style.background = "#f59e0b";
                strengthText.innerHTML = "Medium Password";

            }

            else if (strength === 3) {

                strengthBar.style.width = "75%";
                strengthBar.style.background = "#38bdf8";
                strengthText.innerHTML = "Strong Password";

            }

            else {

                strengthBar.style.width = "100%";
                strengthBar.style.background = "#22c55e";
                strengthText.innerHTML = "Very Strong Password";

            }

        });

    }

    // ==========================
    // LOGIN FORM
    // ==========================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = this.querySelector(".login-btn");

            button.innerHTML = "Logging in...";
            button.disabled = true;

            setTimeout(() => {

                alert("Login Successful!");

                window.location.href = "dashboard.html";

            }, 1800);

        });

    }

    // ==========================
    // SIGNUP FORM
    // ==========================

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const pass = document.getElementById("password").value;

            const confirm = document.getElementById("confirmPassword").value;

            if (pass !== confirm) {

                alert("Passwords do not match.");

                return;

            }

            const button = this.querySelector(".login-btn");

            button.innerHTML = "Creating Account...";
            button.disabled = true;

            setTimeout(() => {

                alert("Account Created Successfully!");

                window.location.href = "login.html";

            }, 1800);

        });

    }

    // ==========================
    // INPUT FOCUS EFFECT
    // ==========================

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.parentElement.style.transform = "scale(1.02)";

        });

        input.addEventListener("blur", () => {

            input.parentElement.style.transform = "scale(1)";

        });

    });

});