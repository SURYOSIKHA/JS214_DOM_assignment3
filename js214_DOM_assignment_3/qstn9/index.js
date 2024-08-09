const products = [
    // ... (copy the products array from the assignment)
];

const productsContainer = document.getElementById('products-container');
const filterByCategory = document.getElementById('filterByCategory');
const sortByPrice = document.getElementById('sortByPrice');
const sortByRating = document.getElementById('sortByRating');

function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <p class="product-description">${product.description}</p>
            <p class="product-category">Category: ${product.category}</p>
            <p class="product-rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        `;

        productsContainer.appendChild(productCard);
    });
}

function filterProducts() {
    let filteredProducts = [...products];
    const category = filterByCategory.value;
    const priceSort = sortByPrice.value;
    const ratingSort = sortByRating.value;

    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (priceSort === 'price-low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'price-high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (ratingSort === 'rating-low-to-high') {
        filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (ratingSort === 'rating-high-to-low') {
        filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    displayProducts(filteredProducts);
}

filterByCategory.addEventListener('change', filterProducts);
sortByPrice.addEventListener('change', filterProducts);
sortByRating.addEventListener('change', filterProducts);

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
