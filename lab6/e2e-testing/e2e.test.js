import puppeteer from 'puppeteer';
import { jest } from '@jest/globals';

describe('E2E тести для SauceDemo 🚀', () => {
  let browser;
  let page;

  jest.setTimeout(60000);

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  afterEach(async () => {
    await browser.close();
  });

  test('Сценарій 1: Успішна покупка (Happy Path)', async () => {
    // 1. Логін
    await page.type('#user-name', 'standard_user');
    await page.type('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');

    // 2. Додаємо товар (Залізобетонний JS-клік)
    await page.$eval('[data-test="add-to-cart-sauce-labs-backpack"]', el => el.click());

    // 3. Йдемо в корзину
    await page.$eval('.shopping_cart_link', el => el.click());
    await page.waitForSelector('#checkout');

    // 4. Оформлюємо замовлення
    await page.$eval('#checkout', el => el.click());
    await page.waitForSelector('#first-name');
    
    await page.type('#first-name', 'Юрій');
    await page.type('#last-name', 'Польнюк');
    await page.type('#postal-code', '76000');
    await page.$eval('#continue', el => el.click());

    // 5. Завершуємо
    await page.waitForSelector('#finish');
    await page.$eval('#finish', el => el.click());
    await page.waitForSelector('.complete-header');

    // Перевірка
    const successText = await page.$eval('.complete-header', el => el.textContent);
    expect(successText).toContain('Thank you for your order');
  });

  test('Сценарій 2: Помилка авторизації (Негативний кейс)', async () => {
    await page.type('#user-name', 'standard_user');
    await page.type('#password', 'wrong_password_bro'); 
    await page.click('#login-button');

    await page.waitForSelector('[data-test="error"]');
    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    
    expect(errorText).toContain('Username and password do not match');
  });

  test('Сценарій 3: Керування кошиком', async () => {
    // 1. Логін
    await page.type('#user-name', 'standard_user');
    await page.type('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');

    // 2. Додаємо два товари
    await page.$eval('[data-test="add-to-cart-sauce-labs-backpack"]', el => el.click());
    await page.$eval('[data-test="add-to-cart-sauce-labs-bike-light"]', el => el.click());

    // 3. Йдемо в корзину
    await page.$eval('.shopping_cart_link', el => el.click());
    await page.waitForSelector('.cart_list');

    // 4. Видаляємо один товар
    await page.$eval('[data-test="remove-sauce-labs-backpack"]', el => el.click());

    // Чекаємо, поки DOM оновить список до 1 елемента
    await page.waitForFunction(() => document.querySelectorAll('.cart_item').length === 1);

    // Перевірка
    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(1);
  });
});