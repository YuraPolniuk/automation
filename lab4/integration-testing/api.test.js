import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

describe('JSONPlaceholder API Testing 🚀', () => {

  // 1. GET — всі записи 📚
  describe('GET /posts (Отримання всіх записів)', () => {
    let response;

    beforeAll(async () => {
      response = await axios.get(baseURL);
    });

    test('Статус код має бути 200', () => {
      expect(response.status).toBe(200);
    });

    test('Відповідь має бути масивом', () => {
      expect(Array.isArray(response.data)).toBe(true);
    });

    test('Масив не має бути порожнім', () => {
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  // 2. GET — конкретний запис 🎯
  describe('GET /posts/1 (Отримання одного запису)', () => {
    let response;

    beforeAll(async () => {
      response = await axios.get(`${baseURL}/1`);
    });

    test('Статус код має бути 200', () => {
      expect(response.status).toBe(200);
    });

    test('ID запису має дорівнювати 1', () => {
      expect(response.data.id).toBe(1);
    });

    test('Запис має містити поле title', () => {
      expect(response.data).toHaveProperty('title');
    });
  });

  // 3. POST — створення запису ➕
  describe('POST /posts (Створення нового запису)', () => {
    test('Має повертати статус 201 (Created) та правильні дані', async () => {
      const newPost = {
        title: 'Тестовий заголовок, бро',
        body: 'Кароче, це тіпа тіло поста.',
        userId: 1,
      };

      const response = await axios.post(baseURL, newPost);
      
      expect(response.status).toBe(201);
      expect(response.data.title).toBe(newPost.title);
      expect(response.data).toHaveProperty('id'); // Сервер має видати ID
    });
  });

  // 4. PUT — оновлення запису 🔄
  describe('PUT /posts/1 (Оновлення існуючого запису)', () => {
    test('Має оновлювати дані та повертати статус 200', async () => {
      const updatedPost = {
        id: 1,
        title: 'Афігеть який новий заголовок',
        body: 'Оновили текст',
        userId: 1,
      };

      const response = await axios.put(`${baseURL}/1`, updatedPost);
      
      expect(response.status).toBe(200);
      expect(response.data.title).toBe('Афігеть який новий заголовок');
    });
  });

  // 5. DELETE — видалення запису 🗑️
  describe('DELETE /posts/1 (Видалення запису)', () => {
    test('Має успішно видаляти запис і повертати статус 200', async () => {
      const response = await axios.delete(`${baseURL}/1`);
      
      expect(response.status).toBe(200);
      // JSONPlaceholder при видаленні повертає порожній об'єкт
      expect(Object.keys(response.data).length).toBe(0); 
    });
  });

});