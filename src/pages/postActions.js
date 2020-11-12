// import fetch from 'isomorphic-fetch';

// * snip *

export function createPost(data) {
    return fetch('http://127.0.0.1:8000/add_post/', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}