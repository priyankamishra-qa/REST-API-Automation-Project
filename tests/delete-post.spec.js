const { test, expect } = require('@playwright/test');
const { deletePost } = require('../utils/apiHelper');
const { expectStatus } = require('../utils/assertions');

test('DELETE - Delete an existing post', async ({ request }) => {

    const response = await deletePost(request, 1);

    expectStatus(response, 200);

});