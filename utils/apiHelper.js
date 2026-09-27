async function getPost(request, postId) {
    return await request.get(`/posts/${postId}`);
}

async function createPost(request, data) {
    return await request.post('/posts', {
        data: data
    });
}

async function updatePost(request, postId, data) {
    return await request.put(`/posts/${postId}`, {
        data: data
    });
}

async function patchPost(request, postId, data) {
    return await request.patch(`/posts/${postId}`, {
        data: data
    });
}

async function deletePost(request, postId) {
    return await request.delete(`/posts/${postId}`);
}

module.exports = {
    getPost,
    createPost,
    updatePost,
    patchPost,
    deletePost
};