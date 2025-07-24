$(document).ready(function () {
    // Xóa toàn bộ dữ liệu localStorage
 

    // Lấy sản phẩm từ localStorage nếu có, nếu không thì dùng mảng mặc định
    let products = JSON.parse(localStorage.getItem('hoatn_products') || '[]');
    if (!products.length) {
        products = [
            // Thêm sản phẩm mặc định cho hoa tốt nghiệp ở đây
           {
  id: "camtucaumixlonxon",
  name: "Cẩm Tú Cầu Mix Lộn Xộn",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/bamot.jpg",
  desc: "Cẩm Tú Cầu Mix Lộn Xộn mang đến vẻ đẹp ngẫu hứng nhưng đầy cuốn hút. Sự pha trộn giữa các nhánh hoa đa màu tạo cảm giác phá cách, độc đáo và nổi bật. Phù hợp với những ai yêu sự sáng tạo, trẻ trung và muốn gửi gắm thông điệp về một tình cảm chân thành không rập khuôn."
},
{
  id: "hoabimixhoahong",
  name: "Hoa Bi Mix Hoa Hồng",
  price: "100.000đ",       
  discount: "89.000đ",    
  img: "../img/hoatuoi/bahai.jpg",
  desc: "Sự kết hợp giữa Hoa Bi nhẹ nhàng và Hoa Hồng quyến rũ tạo nên bó hoa vừa ngọt ngào vừa trang nhã. Thích hợp cho các dịp như sinh nhật, hẹn hò hoặc những buổi gặp gỡ thân mật. Một món quà không cầu kỳ nhưng vẫn tràn đầy cảm xúc."
},
{
  id: "camtron",
  name: "Cam Tron",
  price: "190.000đ",       
  discount: "179.000đ",    
  img: "../img/hoatuoi/baba.jpg",
  desc: "Cam Tron nổi bật với sắc cam rực rỡ, là biểu tượng của sự nhiệt huyết, đam mê và niềm vui sống. Thiết kế tròn trịa thể hiện sự trọn vẹn, bền chặt trong tình cảm. Bó hoa rất phù hợp cho những dịp chúc mừng thành công, khai trương hoặc đơn giản là một lời chúc rực rỡ."
},
{
  id: "camtucau01",
  name: "Cẩm Tú Cầu 01",
  price: "150.000đ",       
  discount: "139.000đ",    
  img: "../img/hoatuoi/babon.jpg",
  desc: "Cẩm Tú Cầu 01 mang vẻ đẹp nhẹ nhàng và tinh khiết. Mỗi cánh hoa nhỏ kết thành hình cầu như gợi nhắc đến sự gắn bó bền chặt và đồng hành trong cuộc sống. Phù hợp để dành tặng người thân yêu, bạn bè hoặc trang trí trong không gian ấm cúng."
},
{
  id: "camtucau02",
  name: "Cẩm Tú Cầu 02",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/banam.jpg",
  desc: "Cẩm Tú Cầu 02 là phiên bản nhỏ gọn và tinh tế, mang lại cảm giác gần gũi và thân thiện. Với sắc hoa nhẹ nhàng, đây là lựa chọn lý tưởng để làm quà tặng trong các dịp như lễ tốt nghiệp, cảm ơn hay chỉ đơn giản là muốn tạo niềm vui bất ngờ cho người nhận."
},
{
  id: "mix01",
  name: "Mix 01",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/basau.jpg",
  desc: "Mix 01 là bó hoa đa sắc mang phong cách hiện đại, phù hợp với mọi độ tuổi và dịp lễ. Các loại hoa được phối một cách hài hòa, tạo cảm giác tươi mới và đầy sức sống. Đây là món quà dễ dàng 'ghi điểm' trong mắt người nhận nhờ vẻ đẹp sinh động và năng lượng tích cực."
},
{
  id: "hoahongmixlonxon",
  name: "Hoa Hồng Mix Lộn Xộn",
  price: "320.000đ",       
  discount: "299.000đ",    
  img: "../img/hoatuoi/babay.jpg",
  desc: "Hoa Hồng Mix Lộn Xộn là sự phối trộn phá cách giữa các loại hoa hồng khác màu, mang đậm cá tính và tinh thần tự do. Bó hoa như một bản tuyên ngôn về sự độc lập trong tình yêu và cuộc sống. Phù hợp với những tâm hồn nghệ sĩ, mạnh mẽ và đầy cảm xúc."
},
{
  id: "hoahongtrang01",
  name: "Hoa Hồng Trắng 01",
  price: "180.000đ",       
  discount: "169.000đ",    
  img: "../img/hoatuoi/batam.jpg",
  desc: "Hoa Hồng Trắng 01 mang sắc trắng thuần khiết, biểu tượng của sự chân thành, giản dị và thanh tao. Phù hợp để gửi gắm lời xin lỗi, lời cảm ơn hoặc làm quà trong các dịp cần sự tinh tế và lịch sự. Một món quà ý nghĩa dành cho người quan trọng trong đời bạn."
},
{
  id: "hoahongtron02",
  name: "Hoa Hồng Tròn 02",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/bachin.jpg",
  desc: "Hoa Hồng Tròn 02 là sự lựa chọn tối giản nhưng đầy tinh tế. Thiết kế gọn gàng, phù hợp để tặng trong các dịp như sinh nhật, chúc mừng hoặc tặng bạn gái. Dù không cầu kỳ nhưng bó hoa vẫn thể hiện trọn vẹn sự quan tâm và tinh thần lãng mạn."
},
{
  id: "hoahongtron03",
  name: "Hoa Hồng Tròn 03",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/bonmuoi.jpg",
  desc: "Hoa Hồng Tròn 03 mang dáng vẻ hiện đại với cách bó tròn đều tay, phù hợp với những ai yêu thích sự gọn gàng, đơn giản và thanh lịch. Là món quà hoàn hảo cho bạn bè, đồng nghiệp hay người thương, giúp truyền tải thông điệp yêu thương nhẹ nhàng nhưng sâu sắc."
}


    const productList = document.getElementById('hoatn');
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
