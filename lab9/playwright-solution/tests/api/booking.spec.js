import { test, expect } from '@playwright/test';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

test.describe('API Tests 🌐', () => {
  test('GET /posts повертає 200 та масив', async () => {
    const res = await axios.get(baseURL);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test('GET /posts/1 повертає правильний запис', async () => {
    const res = await axios.get(`${baseURL}/1`);
    expect(res.data.id).toBe(1);
  });

  test('POST /posts створює запис', async () => {
    const res = await axios.post(baseURL, { title: 'Test', body: 'Text', userId: 1 });
    expect(res.status).toBe(201);
  });
});