import { products } from "../data/products.js";
import { createProductCard } from "../components/productcard.js";

const newArrivalsGrid = document.querySelector("#new-arrivals-grid");

const newArrivals = products.filter(product => product.isNew).slice(0, 4);

newArrivalsGrid.innerHTML = newArrivals
    .map(product => createProductCard(product, true))
    .join("");