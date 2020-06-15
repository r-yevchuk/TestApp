

class Api {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/';
    }

    get(endpoint) {
        return fetch(this.getApiEndpoint(endpoint))
            .then(response =>  response.json()
                .then(data => ({error: null, status: response.status, data: data})))
        .catch((error) => {
            return { error: error.response };
        });
    }

    getApiEndpoint(endpoint) {
        if (this.apiUrl.endsWith('/') && endpoint.startsWith('/')) {
            return `${this.apiUrl.slice(0, -1)}${endpoint}`;
        }
        if (!this.apiUrl.endsWith('/') && !endpoint.startsWith('/')) {
            return `${this.apiUrl}/${endpoint}`;
        }
        return `${this.apiUrl}${endpoint}`;
    }
}

export default new Api();
