import { test, expect, request } from '@playwright/test';
test('read color by index', async ({page}) => {
  const apihandling = await request.newContext();
  const res = await apihandling.get('https://api.restful-api.dev/objects/3');
 
  expect(res.status()).toBe(200);
  
  const body = await res.json();
  const name = body.name;
  console.log(body.name);
  const color = body.data.color;
  console.log(body.data.color);
await page.goto("https://testautomationpractice.blogspot.com/");
await page.fill("#name", name);
await page.fill("#email", color);

 
});