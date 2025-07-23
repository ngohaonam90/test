$('#orderForm').on('submit', function(e) {
    e.preventDefault();
    const order = submitOrder();
    $('#orderModal').modal('hide');
    // Gán dữ liệu vào vùng PDF ẩn
    $('#pdfProductName').text(order.productName || '');
    $('#pdfProductPrice').text(order.productPrice || '');      // Giá gốc
    $('#pdfProductDiscount').text(order.productDiscount || ''); // Giá giảm
    $('#pdfProductQuantity').text(order.productQuantity || '');
    $('#pdfReceiverName').text(order.receiverName || '');
    $('#pdfReceiverPhone').text(order.receiverPhone || '');
    $('#pdfAddress').text(order.address || '');
    $('#pdfCity').text(order.city || '');
    $('#pdfDistrict').text(order.district || '');
    $('#pdfDate').text(order.date || '');
    $('#pdfTime').text(order.time || '');
    $('#pdfNote').text(order.note || '');
    $('#pdfSenderName').text(order.senderName || '');
    $('#pdfSenderPhone').text(order.senderPhone || '');
    $('#pdfSenderEmail').text(order.senderEmail || '');
    $('#pdfRequest').text(order.request || '');
    $('#pdfHideSender').text(order.hideSender ? 'Có' : 'Không');
    $('#pdfVat').text(order.vat ? 'Có' : 'Không');
    $('#pdfStaffCode').text(order.staffCode || '');
    $('#pdfTotal').text(order.total.toLocaleString('vi-VN') + 'đ');

    this.reset();

    // Khi bấm nút tải PDF
    $('#downloadPdfBtn').off('click').on('click', function(e) {
        e.preventDefault();
        const $pdfContent = $('#pdf-content');
        $pdfContent.show();
        html2pdf().set({
            margin: 10,
            filename: 'don-hang.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from($pdfContent[0]).save().then(() => {
            $pdfContent.hide();
        });
    });

    $('#successModal').modal('show');
});

const priceOrigin = $('#productPrice').val();
const priceDiscount = $('#productDiscount').val();
