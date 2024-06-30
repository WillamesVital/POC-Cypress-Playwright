const { test, expect } = require('@playwright/test');

test.describe('JSONPlaceholder API Tests', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com';

  test('should fetch a list of posts', async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts`);
    expect(response.status()).toBe(200);
  });

  test('should fetch a single post', async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts/1`);
    const post = await response.json();
    expect(post).toHaveProperty('id', 1);
  });

  test('should create a new post', async ({ request }) => {
    const response = await request.post(`${apiUrl}/posts`, {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    });
    const post = await response.json();
    expect(post).toMatchObject({
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  });
  
});
