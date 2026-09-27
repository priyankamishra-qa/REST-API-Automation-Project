const { test, expect } = require('@playwright/test');
const { postData } = require('../test-data/postData');
const { createPost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('POST - Create a new post', async ({ request }) => {

    const response = await createPost(request, postData.validPost);

    expectStatus(response, 201);

    const responseBody = await response.json();

    expect(responseBody.title).toBe(postData.validPost.title);
    expect(responseBody.body).toBe(postData.validPost.body);
    expect(responseBody.userId).toBe(postData.validPost.userId);
    expect(responseBody).toHaveProperty('id');

});