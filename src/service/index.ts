import axios from "axios";

// let token = localStorage.getItem('token');

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
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
};
