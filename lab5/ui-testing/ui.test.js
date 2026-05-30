import puppeteer from 'puppeteer';
import { jest } from '@jest/globals';

describe('UI тести SauceDemo 🚀', () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  afterEach(async () => {
    await browser.close();
  });

  test('1. Заголовок сторінки містить "Swag Labs"', async () => {
    const title = await page.title();
    expect(title).toContain('Swag Labs');
  });

  test('2. Поле для логіна (username) присутнє', async () => {
    const usernameInput = await page.$('#user-name');
    expect(usernameInput).not.toBeNull();
  });


  test('3. Поле для пароля (password) присутнє', async () => {
    const passwordInput = await page.$('#password');
    expect(passwordInput).not.toBeNull();
  });


  test('4. Кнопка "Login" відображається', async () => {
    const loginBtn = await page.$('#login-button');
    expect(loginBtn).not.toBeNull();
  });

  test('5. Можна ввести текст у поле логіна', async () => {
    await page.type('#user-name', 'standard_user');
    const inputValue = await page.$eval('#user-name', el => el.value);
    expect(inputValue).toBe('standard_user');
  });
}); 