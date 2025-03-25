export function Content() {
    const container = document.createElement('div');
    container.className = 'container';

    const content = `
        <h2 class="produk-title">Produk Kami</h2>
        <div id="product-list" class="product-grid"></div>
    `;

    container.innerHTML = content;

    
    fetchProducts(container.querySelector('#product-list'));

    return container;
}

async function fetchProducts(productList) {
    try {
        const response = await fetch('https://66c4bab6b026f3cc6cf07c13.mockapi.io/ksm/produkksm');
        const products = await response.json();
        productList.products = products; // Simpan data produk ke elemen DOM
        displayProducts(products, productList);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products, productList) {
    productList.classList.add('product-list'); 
    productList.innerHTML = ''; 
    products.forEach(product => {
        const productItem = `
            <div class="product-container">
                <div class="product-item">
                    <a href="/detail/${product.id}" class="product-link">
                        <img src="${product.gambarproduk}" alt="${product.namaproduk}">
                    </a>
                    <h3><a href="/detail/${product.id}">${product.namaproduk}</a></h3>
                </div>
            </div>
        `;
        productList.innerHTML += productItem;
    });
}

