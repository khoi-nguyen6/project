const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const products = JSON.parse(localStorage.getItem("featuredProducts"));
const product = products.find(product => product.id === parseInt(productId)); // Tìm kiếm id sản phẩm

document.getElementById("product-name").innerText = product.name;
document.getElementById("product-image").src = product.image;
document.getElementById("product-price").innerText = product.price;
document.getElementById("product-description").innerText = product.description;
document.getElementById("product-details").innerText = product.details;