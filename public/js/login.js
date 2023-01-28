//login handler

const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/');
        } else {
            document.getElementById('formValidation').innerHTML =
            `<div class="alert" role="alert">Incorrect username or password</div>`
        }
    }
    if(username === "" || password === "") {
        document.getElementById('formValidation').innerHTML =
        `<div class="alert" role="alert">username and password required</div>`
    }
};

const loginSubmit = document.getElementById('login-form');
loginSubmit.addEventListener('submit', loginFormHandler);