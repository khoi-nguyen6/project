const featuredProducts = [
    {
        id: 1,
        name: "Sneaker 1",
        price: 100,
        image: "../img/sneaker1.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        name: "Sneaker 2",
        price: 100,
        image: "../img/sneaker2.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        name: "Sneaker 3",
        price: 100,
        image: "../img/sneaker3.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        name: "Sneaker 4",
        price: 100,
        image: "../img/sneaker4.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        name: "Sneaker 5",
        price: 100,
        image: "../img/sneaker5.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 6,
        name: "Sneaker 6",
        price: 100,
        image: "../img/sneaker6.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
];
const products = localStorage.getItem("featuredProducts") ? JSON.parse(localStorage.getItem("featuredProducts")) : featuredProducts;
localStorage.setItem("featuredProducts", JSON.stringify(products));

let containerFeaturedProducts = "";

for (let i = 0; i < products.length; i++) {
    containerFeaturedProducts += `
        <div class="col-md-4">
            <a class="card" href="../product/product.html?id=${products[i].id}">
                <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}">
                <h3>${products[i].name}</h3>
                <p>${products[i].price}</p>
            </a>
        </div>
    `;
}
document.getElementById("featured-products").innerHTML = containerFeaturedProducts;