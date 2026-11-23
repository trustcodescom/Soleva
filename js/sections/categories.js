import { categories } from "../data/categories.js";
import { createCategoryCard } from "../components/categorycard.js";

const categoriesGrid = document.querySelector(".categories-grid");

categoriesGrid.innerHTML = categories
    .map(category => createCategoryCard(category))
    .join("");