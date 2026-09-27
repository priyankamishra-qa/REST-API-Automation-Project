const { test, expect } = require('@playwright/test');
const { postData } = require('../test-data/postData');
const { updatePost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('PUT - Update an existing post', async ({ request }) => {

    const requestBody = {
        id: 1,
        ...postData.updatedPost
    };

    const response = await updatePost(request, 1, requestBody);

    expectStatus(response, 200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(requestBody.id);
    expect(responseBody.title).toBe(postData.updatedPost.title);
    expect(responseBody.body).toBe(postData.updatedPost.body);
    expect(responseBody.userId).toBe(postData.updatedPost.userId);

});