export class SauceInventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
  }

  async getItemsCount() {
    return await this.inventoryItems.count();
  }
}