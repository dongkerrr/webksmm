export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer-container';
    footer.style.cssText = `
        width: 100%;
        background-color: #1d2d5b;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        clear: both;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    `;
    footer.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start;">
            <div style="flex: 3; min-width: 400px; margin-bottom: 20px;">
                <h2 style="font-weight: bold; margin-bottom: 15px;">PT. Kolega Surya Medika</h2>
                <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8; font-size: 14px;">
                    <li>Ruko New Mariposa Blok FH. 51-52 Jl. Jlopo No. 18 Gedangan, Grogol, Sukoharjo</li>
                    <li>Senin - Jumat, 08:00 - 16:00 WIB (GMT+07.00)</li>
                    <li>Telp : (0271) 572 2059</li>
                    <li>Wa   : 0852 5757 4447</li>
                    <li>Email : kolegasuryamedika@yahoo.com</li>
                    <li>
                        <a href="https://www.google.com/maps/search/Ruko+New+Mariposa+Blok+FH.+51-52+Jl.+Jlopo+No.+18+Gedangan,+Grogol,+Sukoharjo/@-7.6100743,110.8002442,17z/data=!3m1!4b1?hl=id&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="color: #fff; text-decoration: none;">
                            Lihat di Google Maps
                        </a>
                    </li>
                </ul>
            </div>
            <div style="flex: 1; min-width: 200px; padding-top: 45px; margin-bottom: 20px;">
                <h5 style="font-weight: bold; margin-bottom: 15px;">Ikuti Kami</h5>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <a href="https://facebook.com" target="_blank" style="color: #fff; font-size: 20px;">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" style="color: #fff; font-size: 20px;">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" style="color: #fff; font-size: 20px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" style="color: #fff; font-size: 20px;">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 14px;">
            <p>&copy; 2025 PT. Kolega Surya Medika | Semua Hak Dilindungi</p>
        </div>
    `;
    return footer;
}
