// hero image slider
const heroImage = document.querySelector("#hero-image");

const heroImages = [
    "assets/images/hero_1.jpg",
    "assets/images/hero_2.jpg",
    "assets/images/hero_3.jpg",
    "assets/images/hero_4.jpg"
];

let currentImage = 0;

function changeHeroImage() {
    const nextImage = (currentImage + 1) % heroImages.length;
    const imageToLoad = new Image();

    imageToLoad.onload = () => {
        heroImage.classList.add("is-changing");

        setTimeout(() => {
            heroImage.src = heroImages[nextImage];
            currentImage = nextImage;

            heroImage.classList.remove("is-changing");
        }, 600);
    };

    imageToLoad.onerror = () => {
        console.error("Unable to load hero image:", heroImages[nextImage]);
    };

    imageToLoad.src = heroImages[nextImage];
}

setInterval(changeHeroImage, 5000);