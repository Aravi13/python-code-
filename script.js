// SMOOTH ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(li => {
        li.classList.remove("active");
        if (li.textContent.toLowerCase() === current) {
            li.classList.add("active");
        }
    });
});

// SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll(".section");

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 120) {
            el.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// CTA BUTTON SCROLL
const ctaBtn = document.querySelector(".cta-btn");
const projectSection = document.getElementById("projects");

ctaBtn.addEventListener("click", () => {
    projectSection.scrollIntoView({ behavior: "smooth" });
});
// about section scroll