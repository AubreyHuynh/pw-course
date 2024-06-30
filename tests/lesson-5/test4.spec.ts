import { test, expect } from "@playwright/test";

test("Bài học 4: Personal notes", async ({ page }) => {
  await test.step("Open the Tài liệu học automation test page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Click to the Bài học 4: Personal notes page link", async () => {
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Personal Notes/);
  });

  let notes = [
    { title: "Xe ben điện có thể vừa chạy vừa sạc", content: "Nguyên mẫu xe ben siêu lớn chạy bằng pin của Hitachi đang hoạt động thử nghiệm tại mỏ đồng - vàng lộ thiên Kansanshi ở Zambia, giúp giảm khí thải." },
    { title: "Mỏ kim cương hồng lớn nhất thế giới", content: "Trong 37 năm hoạt động, mỏ Argyle sản xuất hơn 865 triệu carat (172 tấn) kim cương thô và 90% kim cương hồng trên thế giới." },
    { title: "Những động vật xanh dương cực hiếm trong tự nhiên", content: "Một số loài động vật có thể mang màu xanh dương độc đáo do đột biến gene hoặc cấu tạo đặc biệt trên cơ thể." },
    { title: "Canada xây nhà máy hút CO2 lớn nhất thế giới", content: "Nhà máy loại bỏ carbon trực tiếp (CDR) lớn nhất thế giới có thể triệt tiêu hơn 109.000 tấn carbon dioxide (CO2) mỗi năm đang được xây dựng ở Quebec, Canada." },
    { title: "Điều gì xảy ra với tàu Hằng Nga 6 ở vùng tối Mặt Trăng?", content: "Tàu Hằng Nga 6 không trang bị máy sưởi để giúp tàu sống sót qua đêm Mặt Trăng lạnh lẽo kéo dài." },
    { title: "Khoa học công nghệ giúp nâng đà tăng trưởng kinh tế Hà Tĩnh", content: "Các hoạt động nghiên cứu, ứng dụng và chuyển giao khoa học công nghệ và đổi mới sáng tạo góp phần nâng giá trị sản phẩm chủ lực, bảo hộ nhãn hiệu cho sản phẩm hàng hóa địa phương." },
    { title: "Tàu sợi carbon đầu tiên trên thế giới tốc độ 140 km/h", content: "Với bộ khung làm từ vật liệu composite sợi carbon, tàu chở khách Cetrovo 1.0 nhẹ hơn, tiết kiệm nhiên liệu, giảm khí thải và cũng chạy êm hơn." },
    { title: "Nhiều doanh nghiệp Việt ngại ứng dụng AI vì lo bị thay thế", content: "Ứng dụng trí tuệ nhân tạo (AI) giúp nâng cao năng suất, nhưng nhiều doanh nghiệp Việt ngại ứng dụng vì nhân viên sợ mất việc làm, theo đại diện KPMG." },
    { title: "Kỷ lục truyền 402 Tb dữ liệu bằng cáp quang", content: "Các nhà khoa học Nhật Bản đạt tốc độ truyền 402 Tb/giây dữ liệu bằng cáp quang thương mại nhờ khai thác những băng tần chưa từng sử dụng." },
    { title: "Vệ tinh Nga vỡ khiến các phi hành gia tạm thời trú ẩn", content: "9 phi hành gia trên Trạm Vũ trụ Quốc tế (ISS) nhanh chóng di chuyển sang 3 tàu vũ trụ hôm 27/6, khi một vệ tinh vỡ trên quỹ đạo." }

  ];

  for (let note of notes) {
    await test.step("Enter note title", async () => {
      await page.locator("//input[@id='note-title']").fill(note.title);
    });

    await test.step("Enter note content", async () => {
      await page.locator("//textarea[@id='note-content']").fill(note.content);
    });

    await test.step("Click to Add note button", async () => {
      await page.locator("//button[@id='add-note']").click();
    });
  }

  await test.step("Search for the note", async () => {
    const randomArticle = notes[Math.floor(Math.random() * notes.length)];
    await page.locator("//input[@id='search']").fill(randomArticle.title);
    await expect(page.locator('text=' + randomArticle.title)).toBeVisible();
  });
  
});