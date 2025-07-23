function submitOrder() {
    const priceDiscount = $('#productDiscount').val();
    const quantity = parseInt($('#productQuantity').val(), 10) || 1;
    // Xử lý giá giảm (loại bỏ ký tự . và đ)
    const priceDiscountNum = parseInt(priceDiscount.replace(/[^\d]/g, ''), 10) || 0;
    const total = priceDiscountNum * quantity;

    const order = {
        id: 'order_' + Date.now(),
        senderName: $('#senderName').val(),
        senderPhone: $('#senderPhone').val(),
        senderEmail: $('#senderEmail').val(),
        receiverName: $('#receiverName').val(),
        receiverPhone: $('#receiverPhone').val(),
        address: $('#address').val(),
        city: $('#city').val(),
        district: $('#district').val(),
        date: $('#date').val(),
        time: $('#time').val(),
        note: $('#note').val(),
        request: $('#request').val(),
        hideSender: $('#hideSender').is(':checked'),
        vat: $('#vat').is(':checked'),
        staffCode: $('#staffCode').val(),
        createdAt: new Date().toISOString().slice(0,10),
        // Thông tin sản phẩm
        productName: $('#productName').val(),
        productPrice: $('#productPrice').val(),
        productDiscount: priceDiscount, // Thêm giá giảm
        productQuantity: quantity,
        total: total // Thành tiền (giá giảm * số lượng)
    };
    saveOrder(order);
    return order; // trả về object để dùng cho PDF
}