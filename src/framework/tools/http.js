class HTTP {
    get(url) {
        return sendRequest("GET", url);
    }

    post(url, data) {
        return sendRequest("POST", url, data);
    }
}

function sendRequest(method, url) {
    return fetch(url, {method}).then(response => response.json())
}

export const http = new HTTP();