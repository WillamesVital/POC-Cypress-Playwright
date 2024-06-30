const { test, expect } = require('@playwright/test');

test('should have the correct title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.textContent('h1');
  expect(title).toBe('Example Domain');
});
