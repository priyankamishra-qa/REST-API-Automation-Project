const { test } = require('@playwright/test');
const { postData } = require('../test-data/postData');
const { createPost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('POST - Create post with invalid data', async ({ request }) => {

    const response = await createPost(request, postData.invalidPost);

    expectStatus(response, 201);

    const responseBody = await response.json();

    if (!responseBody.id) {
        throw new Error('Expected response to contain an id');
    }

});