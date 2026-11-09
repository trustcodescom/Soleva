const heroSlides = [
    // {
    //     eyebrow: "NEW ARRIVALS",
    //     title: "Find Your Perfect Pair.",
    //     description:
    //         "Discover footwear that brings timeless style to everyday life.",
    //     buttonText: "Explore Collection",
    //     buttonLink: "shop.html",
    //     image: "assets/images/hero/shoe_1.jpeg",
    //     imageAlt: "Featured Soleva footwear"
    // },

    // {
    //     eyebrow: "EVERYDAY ESSENTIALS",
    //     title: "Style Made for Every Step.",
    //     description:
    //         "Explore versatile footwear designed for your everyday style.",
    //     buttonText: "Shop Essentials",
    //     buttonLink: "shop.html",
    //     image: "assets/images/hero/shoe_2.jpeg",
    //     imageAlt: "Soleva everyday footwear"
    // },

    {
        eyebrow: "THE LATEST COLLECTION",
        title: "Make Every Step Count.",
        description:
            "Discover distinctive footwear that completes your look.",
        buttonText: "Discover More",
        buttonLink: "shop.html",
        image: "assets/images/hero/shoe_3.jpeg",
        imageAlt: "Soleva featured collection"
    }
];




const slidesContainer = document.querySelector(".hero-slides");

heroSlides.forEach((slide, index) => {
    const slideElement = document.createElement("article");

    slideElement.classList.add("hero-slide");

    if (index === 0) {
        slideElement.classList.add("active");
    }

    slideElement.innerHTML = `
        <div class="hero-content">
            <p class="hero-eyebrow">${slide.eyebrow}</p>

            <h1>${slide.title}</h1>

            <p class="hero-description">
                ${slide.description}
            </p>

            <a href="${slide.buttonLink}" class="btn btn-primary">
                ${slide.buttonText}
            </a>
        </div>

        <div class="hero-image">
            <img src="${slide.image}" alt="${slide.imageAlt}">
        </div>
    `;

    slidesContainer.appendChild(slideElement);
});