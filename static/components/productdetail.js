export function ProductDetail(path) {
    const productId = path.split('/')[2]; 
    const container = document.createElement('div');
    container.className = 'container';

    const content = `
        <h1 class="produk-detail">Detail Produk</h1>
        <div id="product-detail">
            <!-- Product details will go here -->
        </div>
    `;

    container.innerHTML = content;

   
    fetchProductDetails(productId, container.querySelector('#product-detail'));

    return container;
}

async function fetchProductDetails(productId, detailContainer) {
    try {
        const response = await fetch(`https://66c4bab6b026f3cc6cf07c13.mockapi.io/ksm/produkksm/${productId}`);
        const product = await response.json();
        displayProductDetail(product, detailContainer);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

function displayProductDetail(product, detailContainer) {
    // Memeriksa apakah fitur ada atau tidak
    const fiturHTML = product.fitur ? `
        <p><strong>Fitur:</strong></p>
        <ul class="product-feature-list">
            ${product.fitur.split('. ').map(item => `<li>${item}</li>`).join('')}
        </ul>
    ` : '';

    // Memeriksa apakah spesifikasi ada atau tidak
    const spesifikasiHTML = product.spesifikasi ? `
        <p><strong>Spesifikasi:</strong></p>
        <ul class="product-specification-list">
            ${product.spesifikasi.split('. ').map(item => `<li>${item}</li>`).join('')}
        </ul>
    ` : '';

    // Menyusun HTML produk dengan fitur dan spesifikasi yang hanya ditampilkan jika ada
    const productDetail = `
      <div class="product-detail-container">
    <div class="product-detail">
        <div class="product-image-container">
            <img src="${product.gambarproduk}" alt="${product.namaproduk}" class="product-image">
        </div>
        <div class="product-info">
            <h2>${product.namaproduk}</h2>
            <p class="product-description">${product.deskripsi}</p>
            <table class="product-specs">
                <tr><td><strong>Merk:</strong></td><td>${product.merk}</td></tr>
                <tr><td><strong>Model:</strong></td><td>${product.model}</td></tr>
                <tr><td><strong>Jenis Produk:</strong></td><td>${product.jenisproduk}</td></tr>
                <tr><td><strong>Fungsi:</strong></td><td>${product.fungsi}</td></tr>
            </table>
            ${fiturHTML}
            ${spesifikasiHTML}
           
        </div>
         <a href="${product.ekatalog}" target="_blank" class="product-link-detail">Lihat di E-Katalog</a>
    </div>
</div>
    `;

    detailContainer.innerHTML = productDetail;
}


