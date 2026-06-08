import { test, expect } from '@playwright/test';

test('Terms of Use page', async ({ page }) => {
    await page.goto('https://app.reflectivelearnings.com/vi/personal-information');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - heading "ĐỒNG Ý XỬ LÝ DỮ LIỆU CÁ NHÂN" [level=1]
      - paragraph:
        - text: Bằng việc xác nhận đồng ý, tôi (sau đây gọi là "Chủ thể dữ liệu") tự nguyện cho phép
        - strong: Công ty TNHH Reflective Learnings
        - text: "(sau đây gọi là \\"Công ty\\") thực hiện xử lý dữ liệu cá nhân của tôi với các nội dung sau:"
      - heading "1. Loại dữ liệu cá nhân được xử lý" [level=3]
      - list:
        - listitem:
          - strong: "Dữ liệu cá nhân cơ bản:"
          - text: Họ tên, Email, Số điện thoại, Địa chỉ, Thông tin đăng nhập. (Dùng để liên hệ, xác nhận đơn hàng, quản lý tài khoản).
        - listitem:
          - strong: "Dữ liệu Cá nhân Nhạy cảm bao gồm Dữ liệu Bản sắc và Nội dung Riêng tư:"
          - text: Thông tin khai báo về Điểm mạnh, Giá trị (theo mô hình EMBLEM), Nhật ký Cá nhân, các phản hồi trong bài đánh giá. (Dùng để phân tích, cá nhân hóa và gợi ý phát triển bản thân).
        - listitem:
          - strong: "Dữ liệu Tự động:"
          - text: Địa chỉ IP, ID thiết bị, loại trình duyệt, hệ điều hành, cookie, lịch sử mua hàng, luồng nhấp chuột URL (URL clickstream). (Dùng để cải thiện chất lượng dịch vụ và đảm bảo an toàn hệ thống).
      - heading "2. Mục đích xử lý dữ liệu" [level=3]
      - list:
        - listitem:
          - strong: "Cung cấp Dịch vụ Cốt lõi:"
          - text: Chấm điểm, phân tích, cá nhân hóa nội dung và đề xuất phát triển bản thân.
        - listitem:
          - strong: "Hỗ trợ và Vận hành:"
          - text: Xử lý thanh toán, thực hiện đơn hàng, giải quyết các vấn đề kỹ thuật và thông báo về các dịch vụ mới.
        - listitem:
          - strong: "Cải tiến và Nghiên cứu:"
          - text: Sử dụng kết quả đánh giá, thông tin nhân khẩu học và các dữ liệu tổng hợp (dưới dạng ẩn danh, không nhận dạng cá nhân) cho mục đích nghiên cứu khoa học, đào tạo và cải tiến chất lượng thuật toán.
      - heading "3. Tuyên bố miễn trừ trách nhiệm (Disclaimer)" [level=3]
      - paragraph: "Tôi xác nhận hiểu rằng:"
      - list:
        - listitem: Các gợi ý từ dịch vụ mang tính chất tham khảo để hỗ trợ quá trình phản tư.
        - listitem: Công ty không cung cấp dịch vụ y tế, trị liệu tâm lý chuyên sâu hay tư vấn tài chính.
        - listitem: Tôi hoàn toàn chịu trách nhiệm về mọi quyết định và hành động cá nhân sau khi tham khảo kết quả từ dịch vụ.
      - heading "4. Quyền của Chủ thể dữ liệu" [level=3]
      - paragraph: "Tôi có đầy đủ các quyền theo quy định của pháp luật, bao gồm:"
      - list:
        - listitem: Quyền biết, truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu.
        - listitem:
          - strong: "Quyền rút lại sự đồng ý:"
          - text: Tôi có thể rút lại sự đồng ý bất kỳ lúc nào tại mục "Cài đặt" trong ứng dụng.
        - listitem: /Quyền hạn chế xử lý, quyền phản đối xử lý và quyền khiếu nại theo quy định của Luật Bảo vệ dữ liệu cá nhân \\d+\\./
      - heading "5. Cam kết bảo mật" [level=3]
      - paragraph: Công ty cam kết áp dụng các biện pháp bảo mật tiêu chuẩn (mã hóa dữ liệu) và tuyệt đối không bán thông tin cá nhân của tôi cho bên thứ ba vì mục đích quảng cáo thương mại.
      - heading "6. Thời gian xử lý dữ liệu" [level=3]
      - paragraph: Dữ liệu được xử lý kể từ khi tôi nhấn "Đồng ý" cho đến khi tôi yêu cầu xóa tài khoản hoặc rút lại sự đồng ý, trừ trường hợp pháp luật có quy định khác về thời hạn lưu trữ.
      `);
})