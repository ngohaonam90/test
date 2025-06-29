function renderSplienquan(products, currentId, containerId = 'splienquan-container') {
    const related = products.filter((p, idx) => idx != currentId);
    if (!related.length) return;

    const carouselId = "relatedCarousel";
    const itemsPerSlide = 4; // Số sản phẩm mỗi slide
    const slides = [];

    for (let i = 0; i < related.length; i += itemsPerSlide) {
        slides.push(related.slice(i, i + itemsPerSlide));
    }

    const html = `
        <h4 style="font-weight:700;margin-bottom:20px;">Sản phẩm liên quan</h4>
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
            <div class="carousel-inner">
                ${slides.map((slide, idx) => `
                    <div class="carousel-item${idx === 0 ? ' active' : ''}">
                        <div class="d-flex justify-content-center gap-3">
                            ${slide.map(p => `
                                <div class="card h-100 shadow-sm border-0" style="border-radius:14px;width:240px;">
                                    <div style="width:100%;height:180px;display:flex;align-items:center;justify-content:center;border:1.5px solid #eee;border-radius:12px;background:#fff;margin:10px auto;">
                                        <img src="${p.img}" class="card-img-top" alt="${p.name}" style="max-width:95%;max-height:95%;object-fit:cover;border-radius:10px;">
                                    </div>
                                    <div class="card-body text-center">
                                        <h6 class="card-title mb-1" style="font-weight:600;">${p.name}</h6>
                                        <p class="card-text fw-bold mb-2" style="color:#d0021b;">${p.price}</p>
                                        <a href="chitiet.html?id=${products.indexOf(p)}" class="btn btn-sm" style="background:#ff69b4;color:#fff;border-radius:6px;font-weight:500;">Xem chi tiết</a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    `;
    $(`#${containerId}`).html(html);
}