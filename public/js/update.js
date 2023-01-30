// update form handler

const updateFormHandler = async () => {

    const user_id = document.getElementById('userId').value.trim();
    const heading = document.getElementById('heading').value.trim();
    const content = document.getElementById('content').value.trim();
    const post_id = location.pathname.split('/')[2];

    console.log(post_id);
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ heading, content, user_id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('something went wrong');
    }
};

document.getElementById('updtBtn').addEventListener('click', updateFormHandler);