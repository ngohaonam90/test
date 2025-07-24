$(document).ready(function () {
    const products = [
      {
  id: "hoamixmax",
  name: "Hoa Mix Max",
  price: "350.000đ",       
  discount: "320.000đ",    
  img: "../img/hoatuoi/mot.jpg",
  desc: "Hoa Mix Max là biểu tượng của tình yêu mãnh liệt và sự bùng nổ cảm xúc. Với sự kết hợp tinh tế giữa nhiều loại hoa tươi sắc màu, bó hoa mang đến vẻ đẹp rực rỡ, thu hút mọi ánh nhìn. Đây là món quà tuyệt vời để thể hiện sự yêu thương, đam mê và sự trân trọng dành cho người đặc biệt trong những dịp quan trọng như sinh nhật, kỷ niệm hay cầu hôn."
},
{
  id: "dongtienmixhoahong",
  name: "Đồng Tiền Mix Hoa Hồng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/hai.jpg",
  desc: "Đồng Tiền Mix Hoa Hồng là sự kết hợp hoàn hảo giữa vẻ đẹp tươi sáng của hoa đồng tiền và sự lãng mạn của hoa hồng. Bó hoa mang ý nghĩa về sự thuần khiết, may mắn và tình cảm chân thành. Phù hợp để tặng bạn bè, đồng nghiệp hoặc người thân trong các dịp lễ nhỏ, tốt nghiệp hay đơn giản là lời chúc mừng đầy yêu thương."
},
{
  id: "hoahongmixphang",
  name: "Hoa Hồng Mix Hoa Phăng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/ba.jpg",
  desc: "Hoa Hồng Mix Hoa Phăng là sự lựa chọn hoàn hảo cho những ai yêu sự tinh tế và trang nhã. Sự hòa quyện nhẹ nhàng giữa hoa hồng và hoa phăng mang đến cảm giác dịu dàng, sâu lắng. Bó hoa này như một lời nhắn nhủ yêu thương và lời chúc an lành đến người nhận, đặc biệt phù hợp cho những dịp gặp mặt thân mật hoặc ngày phụ nữ."
},
{
  id: "dongtienrentrang",
  name: "Đồng Tiền Ren Trắng",
  price: "220.000đ",       
  discount: "199.000đ",    
  img: "../img/hoatuoi/bon.jpg",
  desc: "Đồng Tiền Ren Trắng gây ấn tượng bởi sự trang nhã và vẻ đẹp thanh khiết. Hoa mang biểu tượng của sự riêng biệt, mạnh mẽ nhưng vẫn mềm mại. Đây là món quà ý nghĩa để thể hiện sự tôn trọng, ngưỡng mộ và sự biết ơn với những người phụ nữ dịu dàng, tinh tế trong cuộc sống."
},
{
  id: "dongtienmixhoahonggiay",
  name: "Đồng Tiền Mix Hoa Hồng Giấy",
  price: "180.000đ",       
  discount: "169.000đ",    
  img: "../img/hoatuoi/nam.jpg",
  desc: "Đồng Tiền Mix Hoa Hồng Giấy mang đến một trải nghiệm mới mẻ và đầy nghệ thuật. Sự kết hợp giữa hoa thật và hoa giấy tạo nên bó hoa độc đáo, thể hiện sự chân thành và bền bỉ trong tình cảm. Món quà này thích hợp để bày tỏ lòng biết ơn, tôn vinh những mối quan hệ lâu dài và bền vững."
},
{
  id: "hoahongtronkieng",
  name: "Hoa Hồng Tròn Kiếng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/sau.jpg",
  desc: "Hoa Hồng Tròn Kiếng là biểu tượng của sự chân thật, giản dị nhưng vẫn nổi bật. Với thiết kế tròn gọn gàng và bao bọc bởi lớp kiếng trong suốt, bó hoa mang đến cảm giác hiện đại, tinh tế. Phù hợp để đặt trên bàn làm việc, tặng người yêu, người bạn hoặc dùng làm món quà lưu niệm nhỏ xinh."
},
{
  id: "honggiayden",
  name: "Hồng Giấy Đen",
  price: "150.000đ",       
  discount: "139.000đ",    
  img: "../img/hoatuoi/bay.jpg",
  desc: "Hồng Giấy Đen là sản phẩm dành cho những tâm hồn cá tính và yêu thích sự khác biệt. Với tone màu đen huyền bí kết hợp cùng chất liệu hoa giấy bền bỉ, bó hoa mang đến thông điệp về sự mạnh mẽ, độc lập và cuốn hút. Phù hợp làm quà tặng cho bạn bè thân thiết hoặc những ai yêu thích phong cách nghệ thuật, độc đáo."
},
{
  id: "cattuongxanh",
  name: "Cát Tường Xanh",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/tam.jpg",
  desc: "Cát Tường Xanh đại diện cho sự lạc quan, hy vọng và bình an. Với sắc xanh mát dịu, bó hoa mang đến cảm giác thư thái và dễ chịu cho người nhìn. Đây là lựa chọn hoàn hảo để động viên, khích lệ tinh thần hoặc đơn giản là gửi lời chúc một ngày mới thật nhiều năng lượng tích cực."
},
{
  id: "hoamix",
  name: "Hoa Mix",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/chin.jpg",
  desc: "Hoa Mix là sự pha trộn đầy ngẫu hứng giữa nhiều loại hoa rực rỡ sắc màu, mang đến vẻ đẹp sinh động và vui tươi. Với thông điệp về sự minh bạch, rõ ràng và tự tin trong tình cảm cũng như trong cuộc sống, bó hoa phù hợp để dành tặng những người luôn sống thật với bản thân và truyền cảm hứng cho người khác."
},
{
  id: "caykemmix",
  name: "Cây Kem Mix",
  price: "109.000đ",       
  discount: "89.000đ",    
  img: "../img/hoatuoi/muoi.jpg",
  desc: "Cây Kem Mix là sản phẩm dễ thương và mới lạ, lấy cảm hứng từ chiếc kem ngọt ngào ngày hè. Màu sắc pastel nhẹ nhàng cùng cách phối hoa khéo léo khiến bó hoa trở thành món quà tuyệt vời để thể hiện sự đáng yêu, hồn nhiên. Rất phù hợp để tặng bạn gái, người yêu hoặc đơn giản là dành cho bản thân như một món quà nhỏ xinh."
}

    ];

    const productList = document.getElementById('giam30');
    productList.classList.add('justify-content-center');

    products.forEach((product) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center';
        col.innerHTML = `
            <div class="card" style="width: 16rem;">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title" style="font-size: 16px;">${product.name}</h5>
                    <p class="card-text" style="color: #ff69b4; font-weight: bold;">${product.price}</p>
                    <a href="../html/chitiet.html?id=${product.id}" class="btn btn-pink" style="background:#ff69b4;color:#fff;">Đặt mua</a>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
});
