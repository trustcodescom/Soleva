import { products } from "../data/products.js";
import { createProductCard } from "../components/productcard.js";

const featuredProductsGrid = document.querySelector("#featured-products-grid");

const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);

featuredProductsGrid.innerHTML = featuredProducts
    .map(product => createProductCard(product))
    .join("");