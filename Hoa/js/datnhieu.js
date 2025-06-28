$(document).ready(function () {
    const products = [
    {
    name: "Hoa Tình Yêu",
    price: "350.000đ",
    img: "../img/hoatuoi/nam.jpg"
  }
 
,
    {
    name: "Hoa Hoa Cúc",
    price: "350.000đ",
    img: "../img/hoatuoi/sau.jpg"
  }
  ,
    {
    name: "Hoa Màu Hồng",
    price: "350.000đ",
    img: "../img/hoatuoi/bay.jpg"
  }
  ,
    {
    name: "Hoa Cô Đơn",
    price: "350.000đ",
    img: "../img/hoatuoi/tam.jpg"
  },
  {
    name: "Hoa Hồng Đỏ",
    price: "250.000đ",
    img: "../img/hoatuoi/mot.jpg"
  },
  {
    name: "Hoa Cẩm Chướng",
    price: "200.000đ",
    img: "../img/hoatuoi/hai.jpg"
  },
  {
    name: "Hoa Lan Hồ Điệp",
    price: "350.000đ",
    img: "../img/hoatuoi/ba.jpg"
  },
   {
    name: "Hoa Cẩm Tú Cầu",
    price: "350.000đ",
    img: "../img/hoatuoi/bon.jpg"
  }
];

const productList = document.getElementById('datnhieu');
productList.classList.add('justify-content-center');

products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center';
  col.innerHTML = `
    <div class="card" style="width: 16rem;">
      <img src="${product.img}" class="card-img-top" alt="${product.name}">
      <div class="card-body text-center">
        <h5 class="card-title" style="font-size: 16px;">${product.name}</h5>
        <p class="card-text" style="color: #ff69b4; font-weight: bold;">${product.price}</p>
        <a href="#" class="btn btn-pink" style="background:#ff69b4;color:#fff;">Đặt mua</a>
      </div>
    </div>
  `;
  productList.appendChild(col);
});
});