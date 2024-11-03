// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img ,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/may1.jpg',
'Máy tiện ren sắt HGS50-Lăn ren tới sắt phi 36mm-380v/ 3phase',
'DESIGNED',
' 26500000',
`
Giảm giá lên đến 30% khi mua hàng tại Minh Long

Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km

Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km.`,
'Đặt ngay !')

BestSeller.add('./asset/img/may2.jpg',
'Máy uốn ống 1 trục phi 38 – 220v',
'DESIGNED',
'21900000',
`
Giảm giá lên đến 30% khi mua hàng tại Minh Long

Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km

Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
'Đặt ngay !');


BestSeller.add('./asset/img/may3.jpg',
    'Máy uốn ống 1 trục phi 51 – 220v',
    'DESIGNED',
    '25000000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may4.jpg',
    'Máy uốn ống 1 trục thủy lực phi 76 – 220v',
    'DESIGNED',
    '51000000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may5.jpg',
    'MÁY UỐN SẮT NGHỆ THUẬT SK20',
    'DESIGNED',
    '3000000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may6.jpg',
    'Máy uốn ống bằng tay D40',
    'DESIGNED',
    '4900000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may7.jpg',
    'Máy uốn ống 3 trục mini (D40)',
    'DESIGNED',
    '21900000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}
FeatureProduct.add('./asset/img/may5.jpg',
    'MÁY UỐN SẮT NGHỆ THUẬT SK20',
    'DESIGNED',
    '3000000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
FeatureProduct.add('./asset/img/may6.jpg',
    'Máy uốn ống bằng tay D40',
    'TRADITIONAL',
    '4900000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    
FeatureProduct.add('./asset/img/may7.jpg',
    'Máy uốn ống 3 trục mini (D40)',
    'TRADITIONAL',
    '21900000',
    `
    Giảm giá lên đến 30% khi mua hàng tại Minh Long
    
    Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
    
    Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km`,
    'Đặt ngay !');
    FeatureProduct.add('./asset/img/may1.jpg',
        'Máy tiện ren sắt HGS50-Lăn ren tới sắt phi 36mm-380v/ 3phase',
        'TRADITIONAL',
        ' 26500000',
        `
        Giảm giá lên đến 30% khi mua hàng tại Minh Long
        
        Tư vấn 24/7 và MIỄN PHÍ lắp đặt đối với những đơn hàng có bán kính 15km
        
        Vận chuyển miễn phí các loại máy móc, thiết bị trong bán kính 15km.`,
        'Đặt ngay !')
        

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));