import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'chai';
import { chromium } from 'playwright';
import { SauceLoginPage } from '../pages/SauceLoginPage.js';
import { SauceInventoryPage } from '../pages/SauceInventoryPage.js';

// Кароче, правильний спосіб задати таймаут ⏱️
setDefaultTimeout(15000);

let browser, page, loginPage, inventoryPage;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new SauceLoginPage(page);
  inventoryPage = new SauceInventoryPage(page);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('я відкриваю сторінку авторизації', async function () {
  await loginPage.navigate();
});

When('я вводжу логін {string} та пароль {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('заголовок сторінки має містити {string}', async function (expectedTitle) {
  const title = await page.title();
  expect(title).to.include(expectedTitle);
});

Then('на сторінці відображаються товари', async function () {
  const count = await inventoryPage.getItemsCount();
  expect(count).to.be.greaterThan(0);
});