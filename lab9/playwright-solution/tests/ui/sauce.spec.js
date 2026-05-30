import { test, expect } from '@playwright/test';

test.describe('UI Tests 🖥️', () => {
  // Зверни увагу: ми передаємо { page } одразу в тест! Афігеть зручно.
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('1. Заголовок сторінки містить Swag Labs', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('2. Поле логіна присутнє', async ({ page }) => {
    const usernameInput = page.locator('[data-test="username"]');
    await expect(usernameInput).toBeVisible();
  });

  test('3. Можна ввести логін', async ({ page }) => {
    const usernameInput = page.locator('[data-test="username"]');
    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user');
  });
});