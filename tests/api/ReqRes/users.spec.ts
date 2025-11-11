import { test, expect } from '@playwright/test';

test.describe('ReqRes API - Get Users', () => {
  test('should get a list of users and validate the response', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users');
    
    // Check if the response status is 200 (OK)
    expect(response.ok()).toBeTruthy();
    
    const responseBody = await response.json();
    
    // Log the response body for debugging
    console.log('Response Body:', JSON.stringify(responseBody, null, 2));
    
    // Basic validation on the response structure
    expect(responseBody).toHaveProperty('page');
    expect(responseBody).toHaveProperty('data');
    expect(Array.isArray(responseBody.data)).toBe(true);
    expect(responseBody.data.length).toBeGreaterThan(0);
    
    // Validate the structure of the first user object
    const firstUser = responseBody.data[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');
  });
});