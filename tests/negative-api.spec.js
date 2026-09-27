const { test } = require('@playwright/test');
const { getPost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('GET - Validate non-existent post', async ({ request }) => {

    const response = await getPost(request, 9999);

    expectStatus(response, 404);

});