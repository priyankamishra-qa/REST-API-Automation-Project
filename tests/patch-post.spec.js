const { test, expect } = require('@playwright/test');
const { postData } = require('../test-data/postData');
const { patchPost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('PATCH - Update specific field of a post', async ({ request }) => {

    const response = await patchPost(request, 1, postData.partialUpdate);

    expectStatus(response, 200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe(postData.partialUpdate.title);
    expect(responseBody).toHaveProperty('body');
    expect(responseBody).toHaveProperty('userId');

});