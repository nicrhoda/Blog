//delete post handler

const deletePostHandler = async () => {
    const id = document.getElementById('postId').value.trim();
    console.log(id);

    const response = await fetch(`/api/posts/deletePost/${id}`, {
        method: 'DELETE',
    });
    if(response.ok) {
        document.location.reload();
    } else {
        alert('Something went wrong');
    }
};

document.querySelectorAll('.deleteBtn').forEach(item => {
    item.addEventListener('click', deletePostHandler);
});