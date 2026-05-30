import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../../pages/SauceLoginPage.js';
import { SauceInventoryPage } from '../../pages/SauceInventoryPage.js';

test.describe('SauceDemo UI Tests — з POM 🚀', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    // Ініціалізуємо наші Page Objects
    loginPage = new SauceLoginPage(page);
    inventoryPage = new SauceInventoryPage(page);
    
    await loginPage.navigate();
  });

  test('1. Успішна авторизація', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    const title = await inventoryPage.getPageTitle();
    expect(title).toContain('Products');
  });

  test('2. Кількість товарів більше нуля', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    const count = await inventoryPage.getItemsCount();
    expect(count).toBeGreaterThan(0);
  });

  test('3. Додавання товару в кошик', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    
    const badgeCount = await inventoryPage.getCartBadgeCount();
    expect(badgeCount).toBe('1');
  });
});