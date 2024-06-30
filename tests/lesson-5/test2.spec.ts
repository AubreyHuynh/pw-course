import { test, expect } from "@playwright/test";

test("Bài học 2: Product page", async ({ page }) => {
  await test.step("Open the Tài liệu học automation test page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
  });

  await test.step("Click to the Bài học 2: Product page link", async () => {
    await page.locator("//a[text()='Bài học 2: Product page']").click();
  });

  await test.step("Verify the title page", async () => {
    await expect(page).toHaveTitle(/Simple E-commerce/);
  });

  let productsToAdd = {
    "1": 2, // Thêm 2 sản phẩm Product 1
    "2": 3, // Thêm 3 sản phẩm Product 2
    "3": 1, // Thêm 1 sản phẩm Product 3
  };

  for (const [productId, quantity] of Object.entries(productsToAdd)) {
    await test.step(`Add ${quantity} products Product ${productId} to the package`, async () => {
      for (let i = 0; i < quantity; i++) {
        await page.locator(`//button[@data-product-id='${productId}']`).click();
      }
    });
  }
});
