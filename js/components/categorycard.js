export function createCategoryCard(category) {
    return `
        <a href="${category.link}" class="category-card">
            <img
                src="${category.image}"
                alt="${category.name}"
                loading="lazy"
                decoding="async"
            >

            <div class="category-info">
                <h3>${category.name}</h3>
                <span>Explore &rarr;</span>
            </div>
        </a>
    `;
}