// Navigation search toggle
const searchContainer = document.querySelector(".search-container");
const searchToggle = document.querySelector(".search-toggle");
const searchInput = document.querySelector(".search-input");

searchToggle.addEventListener("click", () => {
    const isOpen = searchContainer.classList.toggle("active");

    searchToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        searchInput.focus();
    }
});