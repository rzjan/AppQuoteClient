import { authHeader, config } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll

};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 
                   'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'    
                  },
        body: JSON.stringify({ username, password })
    };

    //return fetch(config.apiUrl + 'auth/login', requestOptions)
    return fetch(config.apiUrl + 'auth/login', requestOptions)
        .then(handleResponse, handleError)
        .then(user => {
            console.log(user);
            if (user) {
                console.log('usertoken', user);
                localStorage.setItem('user', JSON.stringify(user.access_token));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users', requestOptions).then(handleResponse, handleError);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.apiUrl + '/auth/register', requestOptions).then(handleResponse, handleError);
}

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}