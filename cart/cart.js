// Get cart data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear previous cart content
    cartItemsContainer.innerHTML = "";
    let total = 0;

    // Generate HTML for each cart item
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: 
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        ${item.quantity}
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </p>
                    <p>Total: $${itemTotal}</p>
                    <button onclick="removeItem(${index})" class="btn btn-danger">Remove</button>
                </div>
            </div>
        `;
    });

    // Update total
    cartTotalElement.innerText = total.toFixed(2);
}

// Update item quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;

    // Prevent quantity from being less than 1
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render cart
    renderCart();
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render cart
    renderCart();
}

// Checkout button functionality
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // Here, integrate with payment gateway if needed
});

// Render cart 
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});