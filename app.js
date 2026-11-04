
const products = [
  {
    id: 1,
    name: "Pão artesanal",
    category: "Padaria local",
    price: 7.00,
    unit: "unidade",
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600"
  },
  {
    id: 2,
    name: "Mel natural",
    category: "Produção regional",
    price: 18.00,
    unit: "pote",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600"
  },
  {
    id: 3,
    name: "Tomates frescos",
    category: "Hortaliças",
    price: 6.00,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600"
  },
  {
    id: 4,
    name: "Alface orgânica",
    category: "Hortaliças",
    price: 4.00,
    unit: "unidade",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600"
  }
];

let cart = [];

const productList = document.getElementById("product-list");

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function renderProducts() {
  productList.innerHTML = products.map(product => `
    <article class="product-card">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-info">
        <p>${product.category}</p>
        <h3>${product.name}</h3>

        <span class="product-price">
          ${formatPrice(product.price)}
        </span>
        <small> / ${product.unit}</small>

        <button
          class="add-button"
          onclick="addToCart(${product.id})"
        >
          + Adicionar ao pedido
        </button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
  alert(product.name + " adicionado ao pedido!");
}

function updateCart() {
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  console.log("Itens no pedido:", totalItems);
  console.log("Carrinho:", cart);
}

renderProducts();
