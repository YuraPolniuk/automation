export class SauceInventoryPage {
  constructor(page) {
    this.page = page;

    // Локатори сторінки з товарами 🛍️
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async getPageTitle() {
    return await this.title.textContent();
  }

  async getItemsCount() {
    return await this.inventoryItems.count();
  }

  async addBackpackToCart() {
    await this.addToCartBackpackBtn.click();
  }

  async getCartBadgeCount() {
    return await this.shoppingCartBadge.textContent();
  }
}