import { test, expect } from "@playwright/test";

test("“Bài học 3: Todo page", async ({ page }) => {
  await test.step("Open the Tài liệu học automation test page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Click to the Bài học 3: Todo page link", async () => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/To-Do List/);
  });

  await test.step("Enter a new task", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });
  await test.step("Delete todos with odd numbers", async () => {
    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        await page.locator(`//li/span[text()='Todo ${i}']/following-sibling::div/button[contains(@onclick, 'deleteTask')]`).click();
      }
    }
  });

 
})