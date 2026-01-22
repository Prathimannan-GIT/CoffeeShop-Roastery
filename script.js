/* ================= SUBSCRIPTION ================= */
function subscribe() {
    const plan = document.getElementById("plan").value;
    document.getElementById("subscription-result").innerHTML =
        `✔ You subscribed to the <strong>${plan}</strong> plan`;
}

/* ================= CONTACT FORM ================= */
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const message = document.getElementById("customerMessage").value;

    const mailto = `mailto:coffee@roastery.com?subject=Customer Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = mailto;
}

/* ================= DARK / LIGHT THEME ================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    const icon = toggle.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
});


