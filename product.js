const products = [
  { name: "Noise Cancelling Headphones", price: 159.99, rating: 5, image: "Images/headphone.jpg" },
  { name: "Bluetooth Speaker", price: 79.49, rating: 4, image: "Images/OIP (1).webp" },
  { name: "Smartwatch Pro", price: 199.00, rating: 5, image: "Images/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg" },
  { name: "USB-C Fast Charger", price: 19.99, rating: 3, image: "Images/61L9SgocbbL._AC_.jpg" },
  { name: "Laptop Stand", price: 35.00, rating: 4, image: "Images/61WWrBLwGxS.jpg" },
  { name: "Gaming Mouse", price: 49.99, rating: 5, image: "Images/Wireless-Gaming-Mouse-Laptop-TSV-Rechargeable-USB-2-4G-PC-Gaming-Mouse-5-Adjustable-DPI-7-Colors-LED-Lights-6-Silent-Buttons-Ergonomic-Optical-Mouse_3485aa67-56fc-4398-9d72-898794108941.7340c9c.webp" },
  { name: "Mechanical Keyboard", price: 89.99, rating: 4, image: "Images/ed1a5e16-c883-4477-addc-92a169b80f1a.7024ea790ae139c3b1c037ee16b404b8.webp" },
  { name: "TWS Earbuds", price: 59.99, rating: 3, image: "Images/OIP (2).webp" },
  { name: "4K Action Camera", price: 129.99, rating: 5, image: "Images/sony_fdr_x3000_action_camera_1278151.jpg" },
];

const productGrid = document.getElementById("productGrid");
const ratingFilter = document.getElementById("ratingFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(filtered) {
  productGrid.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const minRating = parseInt(ratingFilter.value);
  const sortValue = sortPrice.value;

  if (minRating > 0) {
    filtered = filtered.filter(p => p.rating >= minRating);
  }

  if (sortValue === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

ratingFilter.addEventListener("change", filterAndSort);
sortPrice.addEventListener("change", filterAndSort);

displayProducts(products);
