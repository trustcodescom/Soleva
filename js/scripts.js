// hero image slider
const heroImage = document.querySelector("#hero-image");
const heroWebp = document.querySelector("#hero-webp");

const heroImages = [
    {
        jpg: "assets/images/hero_1.jpg",
        webp: "assets/images/hero_1.webp"
    },
    {
        jpg: "assets/images/hero_2.jpg",
        webp: "assets/images/hero_2.webp"
    },
    {
        jpg: "assets/images/hero_3.jpg",
        webp: "assets/images/hero_3.webp"
    },
    {
        jpg: "assets/images/hero_4.jpg",
        webp: "assets/images/hero_4.webp"
    }
];

let currentImage = 0;

function changeHeroImage() {
    const nextImage = (currentImage + 1) % heroImages.length;
    const imageToLoad = new Image();

    imageToLoad.onload = () => {
        heroImage.classList.add("is-changing");

        setTimeout(() => {
            heroWebp.srcset = heroImages[nextImage].webp;
            heroImage.src = heroImages[nextImage].jpg;

            currentImage = nextImage;

            heroImage.classList.remove("is-changing");
        }, 600);
    };

    imageToLoad.onerror = () => {
        console.error("Unable to load hero image:", heroImages[nextImage].jpg);
    };

    imageToLoad.src = heroImages[nextImage].webp;
}

setInterval(changeHeroImage, 5000);