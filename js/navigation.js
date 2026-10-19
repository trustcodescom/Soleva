document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuBtn = document.querySelector(".menu-btn");
    const navContainer = document.querySelector(".nav-container");
    const menuIcon = menuBtn?.querySelector("i");

    // Search dropdown
    const searchContainer = document.querySelector(".search-container");
    const searchToggle = document.querySelector(".search-toggle");
    const searchInput = document.querySelector(".search-input");

    // Account dropdown
    const accountContainer = document.querySelector(".account-container");
    const accountToggle = document.querySelector(".account-toggle");

    // Close mobile navigation
    function closeMenu() {
        if (!menuBtn || !navContainer) return;

        navContainer.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");

        menuIcon?.classList.remove("fa-xmark");
        menuIcon?.classList.add("fa-bars");
    }

    // Close search dropdown
    function closeSearch() {
        if (!searchContainer || !searchToggle) return;

        searchContainer.classList.remove("active");
        searchToggle.setAttribute("aria-expanded", "false");
        searchToggle.setAttribute("aria-label", "Open search");
    }

    // Close account dropdown
    function closeAccount() {
        if (!accountContainer || !accountToggle) return;

        accountContainer.classList.remove("active");
        accountToggle.setAttribute("aria-expanded", "false");
    }

    // Close all interactive panels
    function closeAll() {
        closeMenu();
        closeSearch();
        closeAccount();
    }

    // Toggle mobile navigation
    menuBtn?.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = !navContainer.classList.contains("active");

        closeSearch();
        closeAccount();

        if (isOpen) {
            navContainer.classList.add("active");
            menuBtn.setAttribute("aria-expanded", "true");
            menuBtn.setAttribute("aria-label", "Close navigation menu");

            menuIcon?.classList.remove("fa-bars");
            menuIcon?.classList.add("fa-xmark");
        } else {
            closeMenu();
        }
    });

    // Close navigation after selecting a link
    navContainer?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Toggle search dropdown
    searchToggle?.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = !searchContainer.classList.contains("active");

        closeMenu();
        closeAccount();

        if (isOpen) {
            searchContainer.classList.add("active");
            searchToggle.setAttribute("aria-expanded", "true");
            searchToggle.setAttribute("aria-label", "Close search");
            searchInput?.focus();
        } else {
            closeSearch();
        }
    });

    // Toggle account dropdown
    accountToggle?.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = !accountContainer.classList.contains("active");

        closeMenu();
        closeSearch();

        if (isOpen) {
            accountContainer.classList.add("active");
            accountToggle.setAttribute("aria-expanded", "true");
        } else {
            closeAccount();
        }
    });

    // Close panels when clicking outside them
    document.addEventListener("click", (event) => {
        const clickedInsideMenu =
            navContainer?.contains(event.target) ||
            menuBtn?.contains(event.target);

        const clickedInsideSearch =
            searchContainer?.contains(event.target);

        const clickedInsideAccount =
            accountContainer?.contains(event.target);

        if (!clickedInsideMenu) {
            closeMenu();
        }

        if (!clickedInsideSearch) {
            closeSearch();
        }

        if (!clickedInsideAccount) {
            closeAccount();
        }
    });

    // Close panels with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            const searchWasOpen =
                searchContainer?.classList.contains("active");

            const menuWasOpen =
                navContainer?.classList.contains("active");

            const accountWasOpen =
                accountContainer?.classList.contains("active");

            closeAll();

            if (searchWasOpen) {
                searchToggle?.focus();
            } else if (accountWasOpen) {
                accountToggle?.focus();
            } else if (menuWasOpen) {
                menuBtn?.focus();
            }
        }
    });
});