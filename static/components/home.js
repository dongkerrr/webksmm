export function Home(products) {
    if (!products || !Array.isArray(products)) {
        console.error('Products data is not available or not an array:', products);
        products = [];
    }

    const container = document.createElement('div');
    container.className = 'home-container';

    const content = `
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div class="swiper-slide">
                    <img src="../images/1.png" alt="Slide 1" />
                </div>
                <!-- Slide 2 -->
                <div class="swiper-slide">
                    <img src="../images/2.png" alt="Slide 2" />
                </div>
                <!-- Slide 3 -->
                <div class="swiper-slide">
                    <img src="../images/3.png" alt="Slide 3" />
                </div>
            </div>
            <!-- Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Navigation Buttons -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

        <!-- Search Section -->
        <div class="search-container">
            <h2>Search Product Here</h2>
            <p>Click and search for the product you want here.</p>
            <div class="search-box">
                <input type="text" id="search-input" placeholder="Search products..." />
                <button id="search-button">
                    <img src="../images/searchicon.png" alt="Search" />
                </button>
            </div>
            <div id="search-results"></div>
        </div>
        <div></div>





    `;

    container.innerHTML = content;

    // Initialize Swiper
    setTimeout(() => {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, 0);

    // Add search functionality
    const searchInput = container.querySelector('#search-input');
    const searchButton = container.querySelector('#search-button');
    const searchResults = container.querySelector('#search-results');

    searchButton.addEventListener('click', () => {
    console.log('Products:', products); // Log data produk
    if (!products.length) {
        searchResults.innerHTML = '<div>Product data is currently unavailable. Please try again later.</div>';
        return;
    }

    const query = searchInput.value.toLowerCase();
    if (query) {
        const filteredProducts = products.filter(product =>
            product.namaproduk.toLowerCase().includes(query)
        );
        console.log('Filtered Products:', filteredProducts); // Log hasil pencarian
        displaySearchResults(filteredProducts, searchResults);
    } else {
        searchResults.innerHTML = '<div>Please enter a search term</div>';
    }
});


    return container;
}

function displaySearchResults(products, searchResults) {
    searchResults.classList.add('search-results'); // Tambahkan class grid
    searchResults.innerHTML = products.length
        ? products.map(product => 
            `<div class="search-result-item">
                <a href="/detail/${product.id}">
                    <img src="${product.gambarproduk}" alt="${product.namaproduk}">
                    <p>${product.namaproduk}</p>
                </a>
            </div>`
        ).join('')
        : '<div class="no-results">No products found</div>';
}


