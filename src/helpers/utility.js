import axios from "axios";

export const gitHubDomain = () => 'https://api.github.com/';
export const gitHubInstance = () => {
    const instance = axios.create({
        baseURL: gitHubDomain(),
        timeout: 5000,
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    return instance;
};

export const getSession = () => JSON.parse(window.sessionStorage.getItem('user'))
export const dropSession = () => window.sessionStorage.removeItem('user');