// comment form handler

const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.getElementById('postId').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if(content) {
        await fetch('/api/comments/add', {
            method: 'POST',
            body: JSON.stringify({ post_id, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.location.reload();
    }
};

document.querySelector('#commentForm').addEventListener('submit', commentFormHandler);