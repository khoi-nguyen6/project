// Featured Products Array
const featuredProducts = [
    {
        id: 1,
        name: "Adidas YOUNG Suede",
        price: 100,
        image: "../img/sneaker1.webp",
        description: "Classic suede sneakers with a retro-inspired design for casual and comfortable wear.",
        details: "Featuring premium suede material and a durable gum sole, the Adidas YOUNG Suede sneakers provide all-day comfort and timeless style. Perfect for any occasion, these sneakers are a must-have for your collection."
    },
    {
        id: 2,
        name: "Nike Dunk Low Safari",
        price: 120,
        image: "../img/sneaker2.webp",
        description: "Vibrant animal-inspired design for bold style statements.",
        details: "The Nike Dunk Low Safari combines vibrant prints and premium construction. With a speckled pattern, comfortable padding, and iconic swoosh logo, these sneakers are perfect for standing out in any crowd."
    },
    {
        id: 3,
        name: "Supreme x Nike Air Force 1",
        price: 140,
        image: "../img/sneaker3.webp",
        description: "A stylish collaboration blending iconic Nike and Supreme aesthetics.",
        details: "Featuring a crisp white leather upper with a bold red swoosh and subtle Supreme branding, this edition of the Nike Air Force 1 redefines streetwear luxury. Durable, comfortable, and fashion-forward, it's ideal for sneaker enthusiasts."
    },
    {
        "id": 4,
        "name": "Air Jordan 1 Low",
        "price": 150,
        "image": "../img/sneaker4.webp",
        "description": "Đôi giày cổ thấp với phối màu trắng, xám và đen, mang lại phong cách thời trang đơn giản và năng động.",
        "details": "Đôi Air Jordan 1 Low được làm từ chất liệu da cao cấp, với đế giữa bằng cao su, mang lại cảm giác thoải mái và bền bỉ khi mang. Logo Swoosh đen nổi bật trên nền trắng."
    },
    {
        "id": 5,
        "name": "Air Jordan 1 High Retro",
        "price": 170,
        "image": "../img/sneaker5.webp",
        "description": "Đôi giày cổ cao phối màu đen và vàng ánh kim, mang lại vẻ ngoài sang trọng và nổi bật.",
        "details": "Air Jordan 1 High Retro được thiết kế với phần cổ cao hỗ trợ tốt cho mắt cá chân. Chất liệu da mềm mại và lớp đệm êm ái giúp đôi giày phù hợp cả trong thể thao và thời trang."
    },
    {
        "id": 6,
        "name": "Nike Kobe 9 Elite",
        "price": 180,
        "image": "../img/sneaker6.webp",
        "description": "Đôi giày bóng rổ cổ cao với màu trắng chủ đạo, thiết kế tối ưu cho hiệu suất và sự thoải mái.",
        "details": "Nike Kobe 9 Elite nổi bật với công nghệ Flyknit mang lại sự ôm chân hoàn hảo, phần đế carbon hỗ trợ tăng độ bền và giảm trọng lượng, phù hợp với các vận động viên bóng rổ."
    }
];

// Get products from localStorage or fallback to default
const products = localStorage.getItem("featuredProducts") ? JSON.parse(localStorage.getItem("featuredProducts")) : featuredProducts;
localStorage.setItem("featuredProducts", JSON.stringify(products));

let containerFeaturedProducts = "";

// Loop through products and generate HTML
for (let i = 0; i < products.length; i++) {
    containerFeaturedProducts += `
        <div class="col-md-4">
            <a class="card" href="../product/product.html?id=${products[i].id}">
                <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}">
                <div class="card-body">
                    <h3 class="card-title">${products[i].name}</h3>
                    <p class="card-price">$${products[i].price}</p>
                </div>
            </a>
        </div>
    `;
}

// Add the products to the featured-products section
document.getElementById("featured-products").innerHTML = containerFeaturedProducts;

// Apply fade-in effect to featured products
window.onload = () => {
    const productCards = document.querySelectorAll(".card");
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, index * 200); // Stagger the animation for a nice effect
    });
};
