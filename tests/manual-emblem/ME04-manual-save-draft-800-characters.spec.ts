import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/reflection');

  //ESSENCE
  await expect(page.locator('div').filter({ hasText: /^Essence$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Essence$/ }).click();

  await expect(page.getByRole('heading', { name: 'Giá trị cốt lõi của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' }).fill('ESSENCE không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọ.');
  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toHaveValue('ESSENCE không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọ.');

  //MOTIVATORS
  await expect(page.locator('div').filter({ hasText: /^Motivators$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Motivators$/ }).click();

  await expect(page.getByRole('heading', { name: 'Động lực của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toBeVisible();
  
  await page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' }).fill('MOTIVATORS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu ti.');
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toHaveValue('MOTIVATORS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu ti.');
  
  //BRILLIANCES
  await expect(page.locator('div').filter({ hasText: /^Brilliances$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Brilliances$/ }).click();

  await expect(page.getByRole('heading', { name: 'Tài năng nổi bật của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' }).fill('BRILLIANCES không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu t.');
  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toHaveValue('BRILLIANCES không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu t.');
  
  //LIMITATIONS
  await expect(page.locator('div').filter({ hasText: /^Limitations$/ })).toBeVisible();
  await page.getByText('Limitations').click();
  
  await expect(page.getByRole('heading', { name: 'Điểm hạn chế tiềm ẩn của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' }).fill('LIMITATIONS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn.');
  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toHaveValue('LIMITATIONS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn.');
  
  //ENVIRONMENT FIT
  await expect(page.locator('div').filter({ hasText: /^Environment Fit$/ })).toBeVisible();
  await page.getByText('Environment Fit').click();

  await expect(page.getByRole('heading', { name: 'Môi trường phù hợp của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' }).fill('ENVIRONMENT FIT không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh đã đư.');
  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toHaveValue('ENVIRONMENT FIT không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh đã đư.');
  
  //MATCH
  await expect(page.locator('div').filter({ hasText: /^Match$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Match$/ }).click();

  await expect(page.getByRole('heading', { name: 'Cơ hội tương thích' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' }).fill('MATCH không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọc l.');
  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toHaveValue('MATCH không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọc l.');
  
  //SUBMIT
  await expect(page.getByRole('button', { name: 'Quay lại', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Quay lại', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Quay lại', exact: true }).click();

  await expect(page.getByRole('button', { name: 'Lưu', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Lưu', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Lưu', exact: true }).click();

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/home/emblem');

  //GO BACK AND CHECK DATA CONSISTENCY
  await expect(page.getByRole('button', { name: 'Bắt Đầu' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Bắt Đầu' })).toBeEnabled();
  await page.getByRole('button', { name: 'Bắt Đầu' }).click();

  await expect(page.getByRole('button', { name: 'Tạo thủ công' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tạo thủ công' })).toBeEnabled();
  await page.getByRole('button', { name: 'Tạo thủ công' }).click();

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/home/emblem/reflection');
  
  //MAIN ASSERTIONS

  //ESSENCE
  await expect(page.locator('div').filter({ hasText: /^Essence$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Essence$/ }).click();
  
  await expect(page.getByRole('heading', { name: 'Giá trị cốt lõi của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Điều gì tôi không bao giờ thỏ' })).toHaveValue('ESSENCE không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọ.');

  //MOTIVATORS
  await expect(page.locator('div').filter({ hasText: /^Motivators$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Motivators$/ }).click();

  await expect(page.getByRole('heading', { name: 'Động lực của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toBeVisible();
  
  await expect(page.getByRole('textbox', { name: 'Điều gì khiến tôi tự nhiên mu' })).toHaveValue('MOTIVATORS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu ti.');
  
  //BRILLIANCES
  await expect(page.locator('div').filter({ hasText: /^Brilliances$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Brilliances$/ }).click();

  await expect(page.getByRole('heading', { name: 'Tài năng nổi bật của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Việc gì tôi có thể làm dễ dà' })).toHaveValue('BRILLIANCES không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được ưu t.');
  
  //LIMITATIONS
  await expect(page.locator('div').filter({ hasText: /^Limitations$/ })).toBeVisible();
  await page.getByText('Limitations').click();
  
  await expect(page.getByRole('heading', { name: 'Điểm hạn chế tiềm ẩn của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Việc gì mình luôn thấy khó, d' })).toHaveValue('LIMITATIONS không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn.');
  
  //ENVIRONMENT FIT
  await expect(page.locator('div').filter({ hasText: /^Environment Fit$/ })).toBeVisible();
  await page.getByText('Environment Fit').click();

  await expect(page.getByRole('heading', { name: 'Môi trường phù hợp của bạn là gì?' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Trong kiểu môi trường nào mì' })).toHaveValue('ENVIRONMENT FIT không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh đã đư.');
  
  //MATCH
  await expect(page.locator('div').filter({ hasText: /^Match$/ })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Match$/ }).click();

  await expect(page.getByRole('heading', { name: 'Cơ hội tương thích' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Vai trò hay hướng đi nào vừa' })).toHaveValue('MATCH không nằm trong những điều quá lớn lao như người ta thường tưởng. Nó không phải một khoảnh khắc rực rỡ được ghi nhớ bởi hàng nghìn người, cũng không phải một danh hiệu đủ đẹp để đặt lên hồ sơ hay mạng xã hội. Essence là phần còn lại khi mọi lớp vỏ bọc dần biến mất. Là con người thật của ai đó trong những ngày không ai nhìn thấy, không ai khen ngợi, không ai kỳ vọng. Có những người dành cả tuổi trẻ để chạy theo việc trở thành “đủ tốt” trong mắt người khác, để rồi đến một ngày nhận ra họ đã quá xa lạ với chính mình. Họ quen với việc phải thể hiện rằng mình ổn, mình mạnh mẽ, mình thành công, đến mức không còn nhớ cảm giác sống thật là như thế nào. Thế giới hiện đại khiến con người dễ bị cuốn vào nhịp độ vội vã. Người ta so sánh sự tiến bộ của bản thân với những hình ảnh được chọn lọc l.');
});