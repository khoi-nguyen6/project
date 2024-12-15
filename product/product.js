// Get product ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Check if productId is valid
if (!productId || isNaN(productId)) {
    alert("Product not found. Redirecting to homepage.");
    window.location.href = "/"; // Redirect to homepage if invalid product ID
} else {
    // Retrieve products from localStorage
    const products = JSON.parse(localStorage.getItem("featuredProducts"));

    // Find the product with the matching ID
    const product = products ? products.find(product => product.id === parseInt(productId)) : null;

    // Check if the product exists
    if (product) {
        // Populate product details
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-image").alt = product.name;
        document.getElementById("product-price").innerText = `$${product.price}`;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-details").innerText = product.details;

        // Populate related products (5 options for demonstration)
        const relatedProductsContainer = document.querySelector(".related-products");
        products.slice(0, 5).forEach(option => {
            const relatedProductElement = document.createElement("div");
            relatedProductElement.classList.add("related-product");
            relatedProductElement.innerHTML = `
                <img src="${option.image}" alt="${option.name}" class="img-fluid">
                <h5>${option.name}</h5>
                <p>$${option.price}</p>
                <button class="btn btn-secondary">View Details</button>
            `;
            relatedProductsContainer.appendChild(relatedProductElement);
        });

        // Update page title
        document.title = `${product.name} - Product Detail`;

    } else {
        alert("Product not found. Redirecting to homepage.");
        window.location.href = "/"; // Redirect to homepage if product is not found
    }

    // Tab Switching Logic
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');

            // Remove active class from all tabs and panes
            tabItems.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked tab and corresponding pane
            item.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}
