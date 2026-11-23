const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });

        // Open the clicked item if it was previously closed
        if (!isOpen) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});