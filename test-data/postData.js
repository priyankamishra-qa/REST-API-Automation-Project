const postData = {

    validPost: {
        title: 'QA Automation Test',
        body: 'This post was created using Playwright API automation.',
        userId: 1
    },

    updatedPost: {
        title: 'Updated QA Post',
        body: 'This post was updated using Playwright API automation.',
        userId: 1
    },

    partialUpdate: {
        title: 'Partially Updated QA Post'
    },

    invalidPost: {
        title: '',
        body: '',
        userId: null
    }

};

module.exports = { postData };