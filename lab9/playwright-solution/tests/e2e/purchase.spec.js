import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../../pages/SauceLoginPage.js';

test.describe('E2E Tests 🛒', () => {
  test('Сценарій: Успішна покупка (Happy Path)', async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    
    // 1. Логін
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Додаємо товар
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 3. Перехід у кошик
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // 4. Оформлення
    await page.locator('[data-test="firstName"]').fill('Юрій');
    await page.locator('[data-test="lastName"]').fill('Польнюк');
    await page.locator('[data-test="postalCode"]').fill('76000');
    await page.locator('[data-test="continue"]').click();

    // 5. Завершення
    await page.locator('[data-test="finish"]').click();

    // Перевірка
    const completeHeader = page.locator('.complete-header');
    await expect(completeHeader).toContainText('Thank you for your order');
  });
});