$(document).ready(function () {
    // Lấy sản phẩm từ localStorage nếu có, nếu không thì dùng mảng mặc định
    let products = JSON.parse(localStorage.getItem('hoasn_products') || '[]');
    if (!products.length) {
        products = [
           {
  id: "huongduong",
  name: "Hoa Hướng Dương",
  price: "180.000đ",       
  discount: "169.000đ",    
  img: "../img/hoatuoi/haimot.jpg",
  desc: "Hoa Hướng Dương – loài hoa luôn hướng về ánh sáng, tượng trưng cho sự mạnh mẽ, kiên định và hy vọng. Với sắc vàng rực rỡ, bó hoa này phù hợp để gửi gắm thông điệp tích cực, lạc quan đến người thân, bạn bè hoặc đồng nghiệp. Có thể mix thêm để tạo sự nổi bật và cá tính."
},
{
  id: "huongduongmixdongtien",
  name: "Hướng Dương Mix Đồng Tiền",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/haihai.jpg",
  desc: "Sự kết hợp giữa Hướng Dương và Đồng Tiền tạo nên bó hoa vừa rực rỡ, vừa thân thiện. Tượng trưng cho niềm vui, may mắn và khởi đầu tươi sáng, đây là món quà lý tưởng cho dịp khai trương, sinh nhật hoặc những buổi gặp mặt quan trọng."
},
{
  id: "caykemhoahuongduong",
  name: "Cây Kem Hoa Hướng Dương",
  price: "60.000đ",       
  discount: "49.000đ",    
  img: "../img/hoatuoi/haiba.jpg",
  desc: "Cây Kem Hoa Hướng Dương là lựa chọn dễ thương, nhỏ gọn nhưng vẫn đủ nổi bật với sắc vàng tươi tắn. Phù hợp để làm quà tặng ngẫu hứng cho bạn bè, đồng nghiệp hoặc người thương. Có thể kết hợp thêm hoa giấy hoặc nơ để tăng tính nghệ thuật."
},
{
  id: "caykemhoacuchoami",
  name: "Cây Kem Hoa Cúc Họa Mi",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/haibon.jpg",
  desc: "Cúc Họa Mi mang vẻ đẹp nhẹ nhàng, mộc mạc và thuần khiết. Khi được biến tấu dưới dạng cây kem, bó hoa trở nên sinh động, đáng yêu và mới lạ. Rất thích hợp để tặng những cô nàng yêu phong cách vintage, thơ mộng hay những ai yêu thiên nhiên giản dị."
},
{
  id: "tucaumixhoahong",
  name: "Tú Cầu Mix Hoa Hồng",
  price: "150.000đ",       
  discount: "139.000đ",    
  img: "../img/hoatuoi/hainam.jpg",
  desc: "Sự hòa quyện giữa nét lãng mạn của Hoa Hồng và vẻ nhẹ nhàng của Cẩm Tú Cầu tạo nên bó hoa tinh tế, sang trọng. Thích hợp cho các dịp như sinh nhật, kỷ niệm hoặc chúc mừng thành công. Bó hoa mang thông điệp yêu thương, chân thành và sâu sắc."
},
{
  id: "hoahongloang",
  name: "Hoa Hồng Loang",
  price: "180.000đ",       
  discount: "169.000đ",    
  img: "../img/hoatuoi/haisau.jpg",
  desc: "Hoa Hồng Loang nổi bật với màu sắc độc đáo, lạ mắt, tượng trưng cho sự phá cách, cá tính và gu thẩm mỹ riêng biệt. Bó hoa này dành riêng cho những ai yêu thích sự mới mẻ, độc đáo, rất phù hợp để thể hiện cá tính hoặc dành tặng người đặc biệt."
},
{
  id: "hoabi",
  name: "Hoa Bi",
  price: "90.000đ",       
  discount: "79.000đ",    
  img: "../img/hoatuoi/haibay.jpg",
  desc: "Hoa Bi tuy nhỏ nhắn nhưng góp phần quan trọng tạo nên tổng thể hài hòa, mềm mại cho bất kỳ bó hoa nào. Tượng trưng cho sự khiêm nhường, nhẹ nhàng và tinh tế, Hoa Bi thường được dùng làm hoa điểm hoặc tặng riêng như một lời chúc nhẹ nhàng, sâu sắc."
},
{
  id: "huongduongcodon",
  name: "Hướng Dương Cô Đơn",
  price: "40.000đ",       
  discount: "29.000đ",    
  img: "../img/hoatuoi/haitam.jpg",
  desc: "Hướng Dương Cô Đơn – chỉ một cành hoa nhưng mang ý nghĩa sâu sắc về sự mạnh mẽ và độc lập. Đây là món quà nhỏ mang lại cảm giác ấm áp, thường được chọn để gửi gắm những thông điệp tinh tế hoặc đơn giản là để tô điểm bàn học, bàn làm việc."
},
{
  id: "hoahongmixbi",
  name: "Hoa Hồng Mix Bi",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/haichin.jpg",
  desc: "Sự kết hợp giữa Hoa Hồng và Hoa Bi mang đến vẻ đẹp hài hòa, cân đối giữa sự nổi bật và nhẹ nhàng. Bó hoa này phù hợp để tặng trong nhiều dịp – từ sinh nhật, hẹn hò đến các buổi lễ trang trọng – như một cách thể hiện tình cảm sâu sắc và trân trọng."
},
{
  id: "camtucautron",
  name: "Cẩm Tú Cầu Tròn",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/bamuoi.jpg",
  desc: "Cẩm Tú Cầu Tròn mang vẻ đẹp cân đối và mềm mại, tượng trưng cho sự gắn bó và chân thành. Màu sắc tươi sáng cùng hình dáng tròn đầy giúp bó hoa trở thành lựa chọn lý tưởng cho các dịp lễ, sự kiện hoặc đơn giản là món quà thể hiện sự quan tâm, sẻ chia."
}

        ];
    }

    const productList = document.getElementById('hoasn');
    productList.classList.add('justify-content-center');

    products.forEach((product) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center';
        col.innerHTML = `
            <div class="card" style="width: 16rem;">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title" style="font-size: 16px;">${product.name}</h5>
                    <p class="card-text" style="color: #ff69b4; font-weight: bold;">
                        ${
                            product.discount
                                ? `<span style="text-decoration:line-through;color:#888;">${product.price}</span> <span style="color:#ff69b4;">${product.discount}</span>`
                                : product.price
                        }
                    </p>
                    <a href="../html/chitiet.html?id=${product.id}" class="btn btn-pink" style="background:#ff69b4;color:#fff;">Đặt mua</a>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
});
