import { test, expect } from "@playwright/test";

test("Bài học 1: Register Page", async ({ page }) => {
  await test.step("Open the Tài liệu học automation test page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Click to the Bài học 1: Register Page link", async () => {
    await page.locator("//a[text()='Bài học 1: Register Page']").click();
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/User Registration/);
  });

  await test.step("Enter the Username", async () => {
    await page.locator("//input[@id='username']").fill("Minh Nghia");
  });

  await test.step("Enter the Email", async () => {
    await page.locator("//input[@id='email']").fill("MinhNghia@gmail.com");
  });

  await test.step("Select the Gender", async () => {
    await page.locator("//input[@id='male']").check();
  });

  await test.step("Select the Hobbies", async () => {
    await page.locator("//input[@id='reading']").check();
  });

  await test.step("Select the Country", async () => {
    await page.locator("//select[@id='country']").selectOption("United Kingdom");
  });

  await test.step("Enter to the Biography textarea", async () => {
    await page.locator("//textarea[@name='bio']").fill("Hello, my name is Nghia");
  });

  await test.step("Tick to the Newsletter", async () => {
    await page.locator("//input[@id='newsletter']").check();
  });

  await test.step("Click to the Register button", async () => {
    await page.locator("//button[text()='Register']").click();
  });
 
});
