import puppeteer from 'puppeteer';
import { jest } from '@jest/globals';

describe('UI Tests 🖥️', () => {
  let browser, page;
  jest.setTimeout(30000);

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  afterEach(async () => await browser.close());

  test('1. Заголовок містить Swag Labs', async () => {
    expect(await page.title()).toContain('Swag Labs');
  });
  test('2. Поле логіна існує', async () => {
    expect(await page.$('#user-name')).not.toBeNull();
  });
  test('3. Поле пароля існує', async () => {
    expect(await page.$('#password')).not.toBeNull();
  });
  test('4. Кнопка входу існує', async () => {
    expect(await page.$('#login-button')).not.toBeNull();
  });
  test('5. Можна ввести логін', async () => {
    await page.type('#user-name', 'standard_user');
    const val = await page.$eval('#user-name', el => el.value);
    expect(val).toBe('standard_user');
  });
});