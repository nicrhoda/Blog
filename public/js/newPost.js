//handler for new post

const newPostFormHandler = async () => {
    const heading = document.getElementById('heading').value.trim();
    const content = document.getElementById('content').value.trim();

    const response = await fetch('/api/posts/newPost', {
        method: 'POST',
        body: JSON.stringify({ heading, content }),
        headers: { 'Content-Type': 'application/json' }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('something went wrong');
    }
};

document.querySelector('#newPost').addEventListener('submit', newPostFormHandler);