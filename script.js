document.addEventListener("DOMContentLoaded", () => {
    // Get all the necessary elements
    const container = document.querySelector(".container");
    const content = document.querySelector(".content");
    const knowMoreBtn = document.getElementById("knowMoreBtn");
    const hiddenContent = document.querySelector(".hidden-content");
    const backButton = document.querySelector(".back-button");

    // Handle "Know More" button click
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener("click", () => {
            container.classList.add("slide");
        });
    }

    // Handle back button click
    if (backButton) {
        backButton.addEventListener("click", () => {
            container.classList.remove("slide");
        });
    }

    // Handle scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
});
