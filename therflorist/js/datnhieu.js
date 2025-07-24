$(document).ready(function () {
    const products = [
       {
  id: "mothoadongtien",
  name: "Một Hoa Đồng Tiền",
  price: "25.000đ",       
  discount: "19.000đ",    
  img: "../img/hoatuoi/muoimot.jpg",
  desc: "Một Hoa Đồng Tiền tuy nhỏ nhưng mang ý nghĩa lớn – đại diện cho sự kiên cường, mạnh mẽ và không ngừng vươn lên trong cuộc sống. Thích hợp làm hoa điểm trong các bó hoa hoặc cắm riêng trong bình nhỏ để làm sáng bừng không gian học tập, làm việc hoặc quán cà phê."
},
{
  id: "haihai",
  name: "Hai Hai",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/muoihai.jpg",
  desc: "Bó hoa 'Hai Hai' gồm 4 bông hoa tươi thắm, mang phong cách tối giản nhưng tinh tế. Dành tặng cho những ai yêu sự mộc mạc, nhẹ nhàng và giản dị trong cuộc sống. Phù hợp cho các dịp tặng bạn bè, đồng nghiệp hoặc trang trí bàn học, bàn làm việc."
},
{
  id: "camtucauxanhdam",
  name: "Cẩm Tú Cầu Xanh Đậm",
  price: "420.000đ",       
  discount: "399.000đ",    
  img: "../img/hoatuoi/muoiba.jpg",
  desc: "Cẩm Tú Cầu Xanh Đậm gây ấn tượng mạnh mẽ với kích thước siêu to và sắc xanh lạ mắt. Là biểu tượng của sự chân thành và thấu hiểu, bó hoa này mang đến cảm giác sang trọng, tinh tế, cực kỳ phù hợp trong các sự kiện lớn, lễ cưới, hoặc quà tặng cho người đặc biệt."
},
{
  id: "hoahong",
  name: "Hoa Hồng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/muoibon.jpg",
  desc: "Hoa Hồng đỏ – biểu tượng của tình yêu nồng nàn và đam mê cháy bỏng. Với thiết kế đơn giản, hoa dễ dàng mix thêm cùng nhiều loại hoa khác để tạo thành bó hoa ý nghĩa cho các dịp như tỏ tình, kỷ niệm, sinh nhật hay ngày Valentine."
},
{
  id: "hoahonghong",
  name: "Hoa Hồng Hồng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/muoinam.jpg",
  desc: "Hoa Hồng Hồng mang vẻ đẹp ngọt ngào, tượng trưng cho sự ngây thơ và tình yêu đầu đời. Phù hợp để mix cùng các loại hoa khác tạo thành bó hoa tinh tế, nhẹ nhàng dành tặng cho mẹ, em gái hoặc người yêu trong những dịp đặc biệt."
},
{
  id: "hoahongmixgiayhong",
  name: "Hoa Hồng Mix Giấy Hồng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/muoisau.jpg",
  desc: "Hoa Hồng Mix Giấy Hồng là sự kết hợp giữa hoa thật và giấy nghệ thuật, tạo nên một thiết kế ấn tượng và bền đẹp. Phù hợp cho các dịp lễ tặng, sự kiện trang trí hoặc quà lưu niệm mang tính biểu tượng cao, thể hiện tình cảm nhẹ nhàng nhưng sâu sắc."
},
{
  id: "hoadongtientrang",
  name: "Hoa Đồng Tiền Trắng",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/muoibay.jpg",
  desc: "Hoa Đồng Tiền Trắng mang thông điệp về sự tinh khôi, trung thực và tấm lòng trong sáng. Hoa dễ dàng phối hợp với nhiều kiểu bó, rất phù hợp để làm quà tặng trong các dịp lễ tri ân, khai trương hoặc đơn giản là lời chúc may mắn đến người nhận."
},
{
  id: "camtucaumixhoahong",
  name: "Cẩm Tú Cầu Mix Hoa Hồng",
  price: "180.000đ",       
  discount: "169.000đ",    
  img: "../img/hoatuoi/muoitam.jpg",
  desc: "Sự hòa quyện giữa Cẩm Tú Cầu và Hoa Hồng tạo nên bó hoa vừa lãng mạn, vừa ấm áp. Màu sắc nhẹ nhàng, thiết kế hài hòa giúp bó hoa phù hợp trong nhiều dịp: sinh nhật, tốt nghiệp, lễ cưới hoặc để thể hiện lời cảm ơn chân thành."
},
{
  id: "hoadongtienbaba",
  name: "Hoa Đồng Tiền Ba Ba",
  price: "50.000đ",       
  discount: "39.000đ",    
  img: "../img/hoatuoi/muoichin.jpg",
  desc: "Hoa Đồng Tiền Ba Ba là lựa chọn tiết kiệm nhưng vẫn mang lại hiệu ứng thị giác bắt mắt. Với 3 bông hoa tươi sáng, bó hoa nhỏ này thích hợp để mix thêm cùng các loại hoa khác hoặc tặng như lời chúc mừng đơn giản, tinh tế và đầy thiện ý."
},
{
  id: "tucau",
  name: "Tú Cầu size Vừa",
  price: "120.000đ",       
  discount: "99.000đ",    
  img: "../img/hoatuoi/haimuoi.jpg",
  desc: "Tú Cầu size Vừa là biểu tượng của sự gắn kết và yêu thương chân thành. Kích cỡ vừa phải, dễ mix cùng nhiều loại hoa khác để tạo nên bó hoa trang nhã và giàu ý nghĩa. Phù hợp để tặng mẹ, người yêu, bạn thân hoặc dùng trong các buổi lễ trang trọng."
}

    ];

    const productList = document.getElementById('datnhieu');
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
