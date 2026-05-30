import puppeteer from 'puppeteer';
import { jest } from '@jest/globals';
import { SauceLoginPage } from '../../business/pages/SauceLoginPage.js';

describe('E2E Tests 🛒', () => {
  let browser, page;
  jest.setTimeout(60000);

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  afterEach(async () => await browser.close());

  test('Сценарій: Успішна покупка та робота POM', async () => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForSelector('.inventory_list');

    await page.$eval('[data-test="add-to-cart-sauce-labs-backpack"]', el => el.click());
    await page.$eval('.shopping_cart_link', el => el.click());
    await page.waitForSelector('#checkout');

    await page.$eval('#checkout', el => el.click());
    await page.waitForSelector('#first-name');
    await page.type('#first-name', 'Юрій');
    await page.type('#last-name', 'Польнюк');
    await page.type('#postal-code', '76000');
    
    await page.$eval('#continue', el => el.click());
    await page.waitForSelector('#finish');
    await page.$eval('#finish', el => el.click());
    await page.waitForSelector('.complete-header');

    const successText = await page.$eval('.complete-header', el => el.textContent);
    expect(successText).toContain('Thank you for your order');
  });
});