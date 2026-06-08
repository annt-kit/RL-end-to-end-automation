import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Manual EMBLEM - Save - Cannot save 801 Characters each field', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/reflection');
  
  //ESSENCE
  await expect(page.locator('div').filter({ hasText: /^Essence$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Essence$/ }).click();

  await expect(page.getByRole('heading', { name: 'Giá trị cốt lõi của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' }).fill('ESSENCE là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có nững người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, càng cố gắng xây dựng hình ả.');
  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toHaveValue('ESSENCE là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có nững người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, càng cố gắng xây dựng hình ả.');
  
  //MOTIVATORS
  await expect(page.locator('div').filter({ hasText: /^Motivators$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Motivators$/ }).click();

  await expect(page.getByRole('heading', { name: 'Động lực của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toBeVisible();
  
  await page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' }).fill('MOTIVATORS là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, càng cố gắng xây dựng hìn.');
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toHaveValue('MOTIVATORS là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, càng cố gắng xây dựng hìn.');
  
  //BRILLIANCES
  await expect(page.locator('div').filter({ hasText: /^Brilliances$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Brilliances$/ }).click();

  await expect(page.getByRole('heading', { name: 'Tài năng nổi bật của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' }).fill('BRILLIANCES là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán g.');
  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toHaveValue('BRILLIANCES là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán g.');
  
  //LIMITATIONS
  await expect(page.locator('div').filter({ hasText: /^Limitations$/ })).toBeVisible();
  await page.getByText('Limitations').click();
  
  await expect(page.getByRole('heading', { name: 'Điểm hạn chế tiềm ẩn của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' }).fill('LIMITATIONS là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán g.');
  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toHaveValue('LIMITATIONS là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán g.');

  //ENVIRONMENT FIT
  await expect(page.locator('div').filter({ hasText: /^Environment Fit$/ })).toBeVisible();
  await page.getByText('Environment Fit').click();

  await expect(page.getByRole('heading', { name: 'Môi trường phù hợp của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' }).fill('ENVIRONMENT FIT là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng hì.');
  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toHaveValue('ENVIRONMENT FIT là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng hì.');
  
  //MATCH
  await expect(page.locator('div').filter({ hasText: /^Match$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Match$/ }).click();

  await expect(page.getByRole('heading', { name: 'Cơ hội tương thích' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' }).fill('MATCH là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán giả của.');
  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toHaveValue('MATCH là thứ còn sót lại sau khi mọi lớp vỏ bọc đã rơi xuống. Người ta thường dành quá nhiều thời gian để chạy theo những điều dễ nhìn thấy: thành tích, danh tiếng, những con số, những lời khen, những bức ảnh được chọn lọc kỹ càng trước khi đăng tải lên mạng xã hội. Nhưng rồi sẽ có một ngày, khi mọi âm thanh bên ngoài dần im lặng, con người buộc phải đối diện với một câu hỏi rất đơn giản: điều gì thật sự thuộc về mình? Không phải thứ được người khác công nhận, mà là thứ vẫn còn tồn tại kể cả khi không ai nhìn thấy.Có những người bước qua tuổi trẻ với cảm giác mình luôn phải chứng minh điều gì đó. Họ học thật giỏi để được công nhận, làm việc thật chăm để không bị bỏ lại, cố gắng trở thành phiên bản “đủ tốt” theo định nghĩa của xã hội. Nhưng nghịch lý nằm ở chỗ, cố gắng xây dựng khán giả của.');

  await expect(page.getByRole('button', { name: 'Hoàn thành' })).toBeVisible();
  await expect(page.getByRole('button', {name: 'Hoàn thành'})).toBeDisabled();
});