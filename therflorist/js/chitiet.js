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
},


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
},

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
},

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

];

// Lấy id từ URL
function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

$(document).ready(function () {
    const id = getParam('id');
    const product = products.find(p => p.id === id);
    const related = products.filter(p => p.id !== id);

    if (product) {
        $('#product-detail').html(`
      <div class="row g-4 align-items-start" style="margin-bottom:40px;">
        <div class="col-md-6 text-center">
          <div style="width:420px;height:420px;display:flex;align-items:center;justify-content:center;border:2px solid #eee;border-radius:16px;background:#fff;margin:auto;">
            <img src="${product.img}" alt="${product.name}" style="max-width:97%;max-height:97%;object-fit:cover;border-radius:12px;">
          </div>
        </div>
        <div class="col-md-6">
          <div style="border-bottom:2px solid #ff69b4;padding-bottom:14px;margin-bottom:18px;">
            <h2 class="mb-1" style="font-size:2rem;display:inline-block;">${product.name}</h2>
            <span class="fw-bold" style="font-size: 2rem; float:right; color:#d0021b;">
              ${
                product.discount && product.discount !== product.price
                  ? `<span style="text-decoration:line-through;color:#888;font-size:1.3rem;margin-right:10px;">${product.price}</span>
                     <span style="color:#d0021b;">${product.discount}</span>`
                  : `<span>${product.price}</span>`
              }
            </span>
            <div style="clear:both"></div>
          </div>
          <div class="mb-3 d-flex align-items-center">
            <label for="soluong" class="me-2 mb-0 fw-semibold" style="font-size:1.1rem;">Số lượng:</label>
            <input type="number" id="soluong" min="1" value="1" class="form-control" style="width:90px;">
          </div>
          <div class="mb-3 d-flex gap-2">
            <button class="btn" style="background:#ff9800;color:#fff;font-weight:600;width:120px;" data-bs-toggle="modal" data-bs-target="#orderModal">ĐẶT HÀNG</button>
            <a href="https://www.messenger.com/t/105154285853407/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0" target="_blank" class="btn" style="background:#2196f3;color:#fff;font-weight:600;width:120px;text-decoration:none;">TƯ VẤN</a>
          </div>
          <div class="mb-3 d-flex align-items-center gap-3">
            <div style="color:#ff9800;font-size:1.2rem;"><i class="bi bi-clock"></i> Giao NHANH trong 60 phút</div>
            <div style="color:#ff69b4;font-size:1.2rem;"><i class="bi bi-gift"></i> Tặng miễn phí thiệp</div>
          </div>
          <div class="mt-4">
            <h5 style="border-bottom:1.5px solid #eee;padding-bottom:8px;margin-bottom:18px;font-weight:600;">Mô tả sản phẩm</h5>
            <div style="font-size:1.08rem;line-height:1.7;color:#444;">${product.desc || ""}</div>
          </div>
        </div>
      </div>
      <div class="mt-5" id="splienquan-container"></div>
    `);
        // Gọi hàm render splienquan
        renderSplienquan(products, id);
    } else {
        $('#product-detail').html('<div class="alert alert-danger">Không tìm thấy sản phẩm!</div>');
    }
});

$(document).on('click', '[data-bs-target="#orderModal"]', function() {
    const id = getParam('id');
    const product = products.find(p => p.id === id);
    const qty = $('#soluong').val();

    // Đẩy vào input hidden của modal
    $('#productName').val(product.name);
    $('#productPrice').val(product.price); // Giá gốc
    $('#productDiscount').val(product.discount || product.price); // Giá giảm (nếu không có thì lấy giá gốc)
    $('#productQuantity').val(qty);
});
