export function createProductCard(product, showNewBadge = false) {
    return `
        <div class="product-card">
            <div class="product-image">
                ${showNewBadge && product.isNew ? '<span class="product-badge">NEW</span>' : ''}
                
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    loading="lazy"
                    decoding="async"
                >
            </div>

            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="product-price">
                    ₦${product.price.toLocaleString("en-NG")}
                </p>
            </div>
        </div>
    `;
}