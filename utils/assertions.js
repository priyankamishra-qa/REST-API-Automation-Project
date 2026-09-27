function expectStatus(response, expectedStatus) {
    if (response.status() !== expectedStatus) {
        throw new Error(
            `Expected status ${expectedStatus}, but received ${response.status()}`
        );
    }
}

module.exports = {
    expectStatus
};