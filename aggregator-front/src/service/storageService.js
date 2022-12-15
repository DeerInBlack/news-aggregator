const KEY = 'credentials';

class StorageService {

    store(credentials) {
        localStorage.setItem(KEY, JSON.stringify(credentials));
    }

    clear() {
        localStorage.clear();
    }

    isAuthenticated() {
        return localStorage.getItem(KEY) !== null;
    }

    isAdmin() {
        return this.data?.role === "admin";
    }

    isUser() {
        return this.data?.role === "user";
    }

    get accessToken() {
        return this.data?.accessToken;
    }

    get username() {
        return this.data?.username;
    }

    get email() {
        return this.data?.email;
    }

    get data() {
        return JSON.parse(localStorage.getItem(KEY));
    }
}

export default new StorageService();
