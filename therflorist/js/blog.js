const defaultBlogs = [
    {
        id: 1,
        title: "Cách chọn hoa tươi lâu",
        subtitle: "Bí quyết chọn hoa đẹp và giữ hoa lâu tàn",
        category: "Cách chọn hoa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWH_Uk5GhUcs_IXcOtmVodFFYSDVF-blVVw&s",
        content: "<p>Chọn hoa tươi lâu giúp bạn giữ được vẻ đẹp của hoa trong thời gian dài. Hãy chọn hoa có cánh chắc, màu sắc tươi sáng và không bị dập nát.</p>",
        createdAt: "23/07/2025 09:00"
    },
    {
        id: 2,
        title: "Chăm sóc hoa tại nhà",
        subtitle: "Hướng dẫn chăm sóc hoa đơn giản",
        category: "Chăm sóc hoa",
        image: "data:image/jpeg;base64,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",
        content: "<p>Để hoa luôn tươi, hãy thay nước mỗi ngày, cắt gốc hoa và đặt hoa ở nơi thoáng mát, tránh ánh nắng trực tiếp.</p>",
        createdAt: "23/07/2025 10:00"
    },
    {
        id: 3,
        title: "Ý nghĩa hoa cẩm tú cầu",
        subtitle: "Khám phá ý nghĩa của loài hoa đặc biệt này",
        category: "Chia sẻ về đời sống",
        image: "../img/baiviet/ba.jpg",
        content: "<p>Hoa cẩm tú cầu tượng trưng cho sự chân thành, lòng biết ơn và tình cảm sâu sắc.</p>",
        createdAt: "23/07/2025 11:00"
    }
];

if (!localStorage.getItem('blogs') || JSON.parse(localStorage.getItem('blogs')).length === 0) {
    localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
}

// Đăng ký các module mở rộng cho Quill
if (window.Quill && window.Quill.imports && window.Quill.imports['modules/imageResize']) {
    Quill.register('modules/imageResize', window.Quill.imports['modules/imageResize']);
}

// Khởi tạo Quill editor cho crblog.html
$(function() {
    // Khởi tạo Quill một lần duy nhất khi trang load
    let quill = new Quill('#editor', {
        modules: {
            toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean']
            ],
            imageResize: {
                modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
        },
        theme: 'snow'
    });

    // Mở modal tạo mới
    $('#open-create-blog').on('click', function() {
        $('#createBlogModal').modal('show');
        quill.setContents([]); // reset nội dung
        $('#blog-title').val('');
        $('#blog-subtitle').val('');
        $('#blog-category').val('');
        $('#blog-image').val('');
        $('#save-blog').off('click').on('click', saveNewBlog);
    });

    // Hàm lưu mới
    function saveNewBlog() {
        const title = $('#blog-title').val().trim();
        const subtitle = $('#blog-subtitle').val().trim();
        const category = $('#blog-category').val();
        const image = $('#blog-image').val();
        const content = quill.root.innerHTML;
        if (!title || !content || !category) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const id = Date.now();
        blogs.unshift({ id, title, subtitle, content, category, image, createdAt: new Date().toLocaleString() });
        localStorage.setItem('blogs', JSON.stringify(blogs));
        $('#createBlogModal').modal('hide');
        renderBlogList();
    }

    // Hàm chỉnh sửa bài viết
    window.editBlog = function(id) {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let blog = blogs.find(b => b.id === id);
        if (!blog) return;
        $('#createBlogModal').modal('show');
        $('#blog-title').val(blog.title);
        $('#blog-subtitle').val(blog.subtitle);
        $('#blog-category').val(blog.category);
        $('#blog-image').val(blog.image);
        quill.root.innerHTML = blog.content;
        $('#save-blog').off('click').on('click', function() {
            blog.title = $('#blog-title').val().trim();
            blog.subtitle = $('#blog-subtitle').val().trim();
            blog.category = $('#blog-category').val();
            blog.image = $('#blog-image').val();
            blog.content = quill.root.innerHTML;
            localStorage.setItem('blogs', JSON.stringify(blogs));
            $('#createBlogModal').modal('hide');
            renderBlogList();
            $('#save-blog').off('click').on('click', saveNewBlog);
        });
    };

    // Hiển thị danh sách bài viết
    function renderBlogList() {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let html = '';
        if (blogs.length === 0) {
            html = '<div class="text-center mt-4">Chưa có bài viết nào.</div>';
        } else {
            html = blogs.map(blog => `
    <div class="card mb-3 shadow-sm">
        <div class="row g-0">
            <div class="col-md-3">
                <img src="${blog.image}"
                     onerror="this.onerror=null;this.src='../img/baiviet/mot.jpg';"
                     class="img-fluid rounded-start"
                     style="width:100%;height:120px;object-fit:cover;">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <span class="badge bg-light text-dark">${blog.category || ''}</span>
                    <h5 class="card-title fw-bold">
                        <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                            ${blog.title}
                        </a>
                    </h5>
                    <p class="card-text">${blog.subtitle || ''}</p>
                    <div class="mb-2"><small>${blog.createdAt}</small></div>
                    <button class="btn btn-danger btn-sm" onclick="deleteBlog(${blog.id})">Xóa</button>
                    <button class="btn btn-warning btn-sm" onclick="changeCategory(${blog.id})">Chuyển danh mục</button>
                    <button class="btn btn-info btn-sm" onclick="editBlog(${blog.id})">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
`).join('');
        }
        $('#blog-list').html(html);
    }

    // Xóa bài viết
    window.deleteBlog = function(id) {
        if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return;
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs = blogs.filter(b => b.id !== id);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        renderBlogList();
    };

    // Chuyển danh mục
    window.changeCategory = function(id) {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let blog = blogs.find(b => b.id === id);
        if (!blog) return;
        const newCat = prompt('Nhập danh mục mới (Hoa sinh nhật, Hoa khai trương, Hoa cưới):', blog.category);
        if (!newCat) return;
        blog.category = newCat;
        localStorage.setItem('blogs', JSON.stringify(blogs));
        renderBlogList();
    };

    // Hiển thị danh sách khi vào trang
    renderBlogList();
});

// Hiển thị danh sách bài viết ở blog.html
if (window.location.pathname.includes('blog.html')) {
    $(function() {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        // Lấy từ khóa tìm kiếm từ URL
        const params = new URLSearchParams(window.location.search);
        const keyword = (params.get('keyword') || '').toLowerCase();

        // Nếu có từ khóa, lọc theo tên hoặc danh mục
        if (keyword) {
            blogs = blogs.filter(b =>
                (b.title && b.title.toLowerCase().includes(keyword)) ||
                (b.category && b.category.toLowerCase().includes(keyword))
            );
        }

        // Đếm số bài theo danh mục hoa
        let countSinhnhat = blogs.filter(b => b.category === 'Hoa sinh nhật').length;
        let countKhaitruong = blogs.filter(b => b.category === 'Hoa khai trương').length;
        let countCuoi = blogs.filter(b => b.category === 'Hoa cưới').length;
        $('#count-sinhnhat').text(`${countSinhnhat} bài viết`);
        $('#count-khaitruong').text(`${countKhaitruong} bài viết`);
        $('#count-cuoi').text(`${countCuoi} bài viết`);

        // Đếm số bài theo danh mục khác
        let countChonhoa = blogs.filter(b => b.category === 'Cách chọn hoa').length;
        let countChamsoc = blogs.filter(b => b.category === 'Chăm sóc hoa').length;
        let countDoisong = blogs.filter(b => b.category === 'Chia sẻ về đời sống').length;
        $('#count-chonhoa').text(`${countChonhoa} bài viết`);
        $('#count-chamsoc').text(`${countChamsoc} bài viết`);
        $('#count-doisong').text(`${countDoisong} bài viết`);

        // Bài viết nổi bật (bài đầu tiên)
        if (blogs.length > 0) {
            let featured = blogs[0];
            $('#featured-blog').html(`
                <div class="card mb-3 shadow">
                    <img src="${featured.image || '../img/nen/hoadep.jpg'}" class="card-img-top" style="height:300px;object-fit:cover;">
                    <div class="card-body">
                        <span class="badge bg-secondary">${featured.category || ''}</span>
                        <h3 class="card-title mt-2 fw-bold">
                            <a href="blogtt.html?id=${featured.id}" style="text-decoration:none;color:#222;">${featured.title}</a>
                        </h3>
                        <p class="card-text">${featured.subtitle || ''}</p>
                    </div>
                </div>
            `);
        }

        // Các bài viết nhỏ bên phải (tối đa 5 bài tiếp theo)
        let sideBlogs = blogs.slice(1, 6).map(blog => `
            <div class="mb-3 border-bottom pb-2">
                <span class="badge bg-light text-dark">${blog.category || ''}</span>
                <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                    <div class="fw-bold">${blog.title}</div>
                </a>
            </div>
        `).join('');
        $('#side-blogs').html(sideBlogs);

        // Danh sách bài viết còn lại
        let listBlogs = blogs.slice(6).map(blog => `
            <div class="card mb-3 shadow-sm">
                <div class="row g-0">
                    <div class="col-md-3">
                        <a href="blogtt.html?id=${blog.id}">
                            <img src="${blog.image || '../img/nen/hoadep.jpg'}"
                                 onerror="this.src='../img/nen/hoadep.jpg';"
                                 class="img-fluid rounded-start"
                                 style="width:100%;height:120px;object-fit:cover;object-position:center;">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <span class="badge bg-light text-dark">${blog.category || ''}</span>
                            <h5 class="card-title fw-bold">${blog.title}</h5>
                            <p class="card-text">${blog.subtitle || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        $('#list-blogs').html(listBlogs);
    });
}

// Hiển thị chi tiết bài viết ở blogtt.html
if (window.location.pathname.includes('blogtt.html')) {
    $(function() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const blog = blogs.find(b => b.id == id);

        let detailHtml = '';
        if (!blog) {
            detailHtml = '<div class="text-center mt-4">Bài viết không tồn tại.</div>';
        } else {
            detailHtml = `
            <div class="mt-4">
                <h2 class="fw-bold text-center" style="font-size:2rem;">${blog.title}</h2>
                <h5 class="text-muted text-center mb-3">${blog.subtitle || ''}</h5>
                <div class="text-center mb-2">
                    <span class="badge bg-success" style="font-size:1rem;">${blog.category || ''}</span>
                    <span class="ms-2 text-secondary"><small>${blog.createdAt}</small></span>
                </div>
                <div class="text-center mb-4">
                    <img src="${blog.image || '../img/nen/hoadep.jpg'}" alt="Ảnh bài viết" class="blogtt-detail-img">
                </div>
                <div class="blog-content" style="font-size:1.1rem;line-height:1.8;">
                    ${blog.content}
                </div>
                <div class="text-center mt-4">
                    <a href="blog.html" class="btn btn-secondary">Quay lại danh sách</a>
                </div>
            </div>`;
        }
        $('#blog-detail').html(detailHtml);

        // Hiển thị danh sách bài viết mới
        let recentHtml = blogs.slice(0, 5).map(b => `
            <div class="blogtt-sidebar-row">
                <a href="blogtt.html?id=${b.id}">
                    <img src="${b.image || '../img/nen/hoadep.jpg'}" alt="" class="blogtt-sidebar-img">
                </a>
                <div style="flex:1; min-width:0;">
                    <a href="blogtt.html?id=${b.id}" class="blogtt-sidebar-title">${b.title}</a>
                    <div class="blogtt-sidebar-date">${b.createdAt}</div>
                </div>
            </div>
        `).join('');
        $('#recent-blogs').html(recentHtml);
    });
}

// Tìm kiếm bài viết ngay trên crblog.html
if (window.location.pathname.includes('crblog.html')) {
    $(function() {
        $('#search-box').on('input', function() {
            const keyword = $(this).val().toLowerCase();
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            let filtered = blogs.filter(b =>
                (b.title && b.title.toLowerCase().includes(keyword)) ||
                (b.category && b.category.toLowerCase().includes(keyword))
            );
            let html = '';
            if (filtered.length === 0) {
                html = '<div class="text-center mt-4">Không tìm thấy bài viết nào.</div>';
            } else {
                html = filtered.map(blog => `
                    <div class="card mb-3 shadow-sm">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="${blog.image}"
                                     onerror="this.onerror=null;this.src='../img/baiviet/mot.jpg';"
                                     class="img-fluid rounded-start"
                                     style="width:100%;height:120px;object-fit:cover;">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <span class="badge bg-light text-dark">${blog.category || ''}</span>
                                    <h5 class="card-title fw-bold">
                                        <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                                            ${blog.title}
                                        </a>
                                    </h5>
                                    <p class="card-text">${blog.subtitle || ''}</p>
                                    <div class="mb-2"><small>${blog.createdAt}</small></div>
                                    <button class="btn btn-danger btn-sm" onclick="deleteBlog(${blog.id})">Xóa</button>
                                    <button class="btn btn-warning btn-sm" onclick="changeCategory(${blog.id})">Chuyển danh mục</button>
                                    <button class="btn btn-info btn-sm" onclick="editBlog(${blog.id})">Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            $('#blog-list').html(html);
        });
    });
}

// Ví dụ render từng blog:
html += `
  <div class="blog-item">
    <a href="blogtt.html?id=${blog.id}" class="blog-link">
      <h3>${blog.title}</h3>
      <p>${blog.summary}</p>
    </a>
  </div>
`;
$(document).ready(function() {
    let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    let html = '';
    blogs.forEach(blog => {
        html += `
        <div class="blog-item mb-3">
            <a href="blogtt.html?id=${blog.id}" class="blog-link" style="text-decoration:none; color:inherit;">
                <h3>${blog.title}</h3>
                <p>${blog.summary || ''}</p>
            </a>
        </div>
        `;
    });
    $('#list-blogs').html(html);
});

