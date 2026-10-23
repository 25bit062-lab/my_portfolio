// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isExpanded = navLinks.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isExpanded);

});


// Close Mobile Menu After Clicking a Link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// Automatically Update Copyright Year

document.getElementById("year").textContent = new Date().getFullYear();


// Highlight the Active Navigation Link

const sections = document.querySelectorAll(
    "main section[id]"
);

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navItems.forEach(function (item) {

        item.classList.toggle(
            "active",
            item.getAttribute("href") === "#" + currentSection
        );

    });

});