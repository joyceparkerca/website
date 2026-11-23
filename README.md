# Trung Văn Cần Thơ – Website

Website tĩnh (chỉ HTML + hình), không cần cài đặt hay build. Đưa lên GitHub rồi kết nối Vercel là chạy.

## Mỗi tab = một file. Muốn đổi tab nào, chỉ sửa file đó

| Tab | File cần sửa | Ảnh để ở |
|---|---|---|
| Trang chủ | `index.html` | `images/trang-chu/` |
| Đội ngũ giáo viên | `doi-ngu-giao-vien.html` | `images/giao-vien/`, `images/doi-ngu/` |
| Lịch học | `lich-hoc.html` | (không có ảnh) |
| Thành tích | `thanh-tich.html` | `images/thanh-tich/` |
| Sự kiện | `su-kien.html` | `images/su-kien/` |

Mỗi file có ghi chú hướng dẫn (đoạn `<!-- ... -->`) ngay chỗ cần thêm nội dung, dễ tìm.

## Phần dùng chung (sửa 1 lần, cả website đổi)
- `assets/site.js` : **menu**. Thêm/bớt tab chỉ sửa danh sách `NAV` ở đầu file. Năm ở chân trang tự cập nhật.
- `assets/site.css` : giao diện của menu.
- Trang Thành tích **tự đếm** số liệu đầu trang (số học viên, HSK5 · 3...), không cần sửa tay.

## Thông tin lặp ở nhiều trang (khi đổi phải sửa ở từng file)
Số điện thoại, link Zalo, địa chỉ, link Google Maps, email nằm trong phần liên hệ của từng trang.
Khi đổi, dùng chức năng **Tìm & thay thế** (VS Code: Ctrl+Shift+H) trên cả thư mục để đổi một lần.

## Thêm ảnh
1. Tên file: chữ thường, không dấu, không khoảng trắng, đuôi `.jpg` (ví dụ `vinh-danh-ban-an-thi-dat-hsk4.jpg`).
2. Dung lượng mỗi ảnh nên dưới khoảng 200 KB (ảnh quá nặng làm trang chậm trên điện thoại).
3. Tên file trong HTML phải **trùng từng chữ** với tên file ảnh (Vercel phân biệt chữ hoa/thường).

## Cập nhật bằng GitHub (không cần cài phần mềm)
1. Vào repo trên github.com.
2. Thêm ảnh: mở thư mục `images/...` > **Add file > Upload files** > kéo ảnh vào > **Commit changes**.
3. Sửa chữ: bấm vào file `.html` > biểu tượng cây bút > sửa > **Commit changes**.
4. Vercel tự cập nhật website sau khoảng 1 phút.

## Kết nối Vercel
Vercel > Add New > Project > chọn repo GitHub này > Framework Preset: **Other** > bấm Deploy.
Build Command và Output Directory để trống.

## Lưu ý riêng tư
Ảnh học viên nhỏ tuổi, bảng điểm, số báo danh: luôn xin phép phụ huynh/học viên và làm mờ số báo danh trước khi đăng.
