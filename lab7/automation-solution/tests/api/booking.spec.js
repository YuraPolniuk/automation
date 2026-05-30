import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

describe('API Tests 🌐', () => {
  test('GET /posts повертає 200 та масив', async () => {
    const res = await axios.get(baseURL);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test('GET /posts/1 повертає потрібний ID', async () => {
    const res = await axios.get(`${baseURL}/1`);
    expect(res.data.id).toBe(1);
  });

  test('POST /posts створює запис із кодом 201', async () => {
    const res = await axios.post(baseURL, { title: 'Test', body: 'Text', userId: 1 });
    expect(res.status).toBe(201);
  });

  test('PUT /posts/1 оновлює дані', async () => {
    const res = await axios.put(`${baseURL}/1`, { id: 1, title: 'New' });
    expect(res.status).toBe(200);
  });

  test('DELETE /posts/1 повертає 200', async () => {
    const res = await axios.delete(`${baseURL}/1`);
    expect(res.status).toBe(200);
  });
});