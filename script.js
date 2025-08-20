const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });
});

document.getElementById("y").textContent = new Date().getFullYear();
