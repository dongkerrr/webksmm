import { Home } from './components/home.js';
import { Content } from './components/content.js';
import { ProductDetail } from './components/productdetail.js';

let products = []; // Variabel global untuk menyimpan data produk

// Ambil data produk saat load
async function fetchAndSetProducts() {
    try {
        const response = await fetch('https://66c4bab6b026f3cc6cf07c13.mockapi.io/ksm/produkksm');
        products = await response.json();
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

const routes = {
    '/': () => Home(products), 
    '/home': () => Home(products),
    '/content': () => Content(),
    '/detail': ProductDetail
};

async function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (!products.length) {
        await fetchAndSetProducts(); // Ambil data produk jika belum tersedia
    }

    if (path.startsWith('/detail')) {
        const renderComponent = ProductDetail(path);
        app.appendChild(renderComponent);
    } else {
        const renderComponent = routes[path] ? routes[path]() : routes['/']();
        app.appendChild(renderComponent);
    }

}

window.addEventListener('popstate', router);
window.addEventListener('load', router);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        window.history.pushState({}, '', anchor.getAttribute('href'));
        router();
    });
});


export default router;
