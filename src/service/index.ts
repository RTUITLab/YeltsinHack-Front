import axios from 'axios';

// let token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: "http://192.168.125.30:8000",
    withCredentials: false,
    // headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "x-access-token": token,
    // },
    timeout: 10000,
});

export const apiStatistics = {
    getAreas() {
        return apiClient.get(`/areas`);
    },
    getCameras() {
        return apiClient.get(`/cameras`);
    },
}