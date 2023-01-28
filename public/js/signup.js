//signup handler

const signupFormHandler = async () => {

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if(username && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/');
        } else {
            document.getElementById('formValidation').innerHTML = 
            `<div class="alert" role="alert">Please enter a valid username and password</div>`
        }
    }
    if(username === "" || password === "") {
        document.getElementById('formValidation').innerHTML = 
        `<div class="alert" role="alert">Please enter a valid username and password</div>`
    }
};

const signupSubmit = document.querySelector('#signup');
signupSubmit.addEventListener('click', function() {signupFormHandler()});