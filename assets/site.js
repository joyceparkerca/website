/* ============================================================
   MENU CHUNG – sửa MỘT chỗ này, cả 5 trang cùng đổi.
   Muốn thêm tab mới (ví dụ Khóa học): thêm 1 dòng vào NAV bên dưới.
   Cấu trúc mỗi dòng: ['tên-file.html', 'Chữ hiện trên menu', 'mã-trang']
   ============================================================ */
(function () {
  var NAV = [
    ['index.html', 'Trang chủ', 'index'],
    ['doi-ngu-giao-vien.html', 'Đội ngũ giáo viên', 'doi-ngu-giao-vien'],
    ['lich-hoc.html', 'Lịch học', 'lich-hoc'],
    ['thanh-tich.html', 'Thành tích', 'thanh-tich'],
    ['su-kien.html', 'Sự kiện', 'su-kien']
  ];
  var h = document.getElementById('site-header');
  if (h) {
    var active = h.getAttribute('data-active');
    var links = NAV.map(function (n) {
      return '<a href="' + n[0] + '"' + (n[2] === active ? ' aria-current="page"' : '') + '>' + n[1] + '</a>';
    }).join('');
    h.innerHTML = '<div class="bar"><a class="brand" href="index.html"><img src="images/logo.jpg" alt="Logo Trung Văn Cần Thơ" width="200" height="200"><span>Trung Văn Cần Thơ</span></a>' +
      '<button class="menu-btn" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mainnav"><span></span></button>' +
      '<nav id="mainnav" aria-label="Menu chính">' + links + '</nav></div>';
    var b = h.querySelector('.menu-btn');
    var set = function (o) {
      h.classList.toggle('open', o);
      b.setAttribute('aria-expanded', o);
      b.setAttribute('aria-label', o ? 'Đóng menu' : 'Mở menu');
    };
    b.addEventListener('click', function () { set(!h.classList.contains('open')); });
    h.querySelectorAll('nav a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 720) set(false); });
  }
  /* Năm ở chân trang tự cập nhật */
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
