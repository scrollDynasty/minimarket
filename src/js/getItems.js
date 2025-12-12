let items = [];

async function getItems() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    items = await response.json();
    showItems();
  } catch (err) {
    console.error('не удалось загрузить товары:', err);
    const container = document.getElementById('products-container');
    if (container) {
      container.innerHTML = '<p>Ошибка загрузки товаров. Попробуй позже.</p>';
    }
  }
}

function showItems() {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = '';

  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="product-image" />
      <div class="product-info">
        <h3 class="product-title">${item.title}</h3>
        <p class="product-price">$${item.price.toFixed(2)}</p>
        <button class="product-add-btn" data-product-id="${item.id}">
          В корзину
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  const buttons = container.querySelectorAll('.product-add-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-product-id'));
      const item = items.find((i) => i.id === itemId);
      if (item) {
        window.dispatchEvent(
          new CustomEvent('addToCart', {
            detail: item,
          })
        );
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', getItems);
} else {
  getItems();
}

window.productsModule = {
  loadProducts: getItems,
  renderProducts: showItems,
};
