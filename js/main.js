// Copyright Year

const copyrightYear = document.getElementById("copyright-year");

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}


// Portfolio accordions

const portfolioToggles = document.querySelectorAll(".portfolio-toggle");

portfolioToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {

        const item = toggle.parentElement;
        const content = item.querySelector(".portfolio-content");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }

    });
});


// Scroll reveal

const revealElements = document.querySelectorAll(".focus-card, .gallery-image");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// Global Scroll Progress

const scrollProgress = document.querySelector(".scroll-progress");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (scrollProgress) {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width = `${scrollPercentage}%`;
    }


    if (backToTop) {

        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    }

});


// Back to Top

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}