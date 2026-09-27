
const { test, expect } = require('@playwright/test');
const { getPost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('GET - Fetch a single post', async ({ request }) => {

    const response = await getPost(request, 1);

    expectStatus(response, 200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('body');
    expect(responseBody).toHaveProperty('userId');

});
test('GET - Validate posts response', async ({ request }) => {

    const response = await request.get('/posts');

    expectStatus(response, 200);

    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBe(100);
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('title');
    expect(responseBody[0]).toHaveProperty('body');
    expect(responseBody[0]).toHaveProperty('userId');

});
test('GET - Validate response headers', async ({ request }) => {

    const response = await request.get('/posts/1');

    expectStatus(response, 200);

    const contentType = response.headers()['content-type'];

    expect(contentType).toContain('application/json');

});