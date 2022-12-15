import axios from "axios"
import {useNavigate} from "react-router-dom";
import StorageService from "./storageService";
import ToastTemplate from "../util/toastTemplate";

axios.defaults.baseURL = process.env.NEWS_SERVER_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

function setAuthToken(accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

axios.interceptors.response.use(null, (error) => {
    // eslint-disable-next-line no-mixed-operators
    if (error.response && error.response.status === 401 || error.response.status === 403) {
        StorageService.clear();
        ToastTemplate.warn("Дія сесії закінчилась, спробуйте увійти")
        setTimeout(() => useNavigate()("/login"), 4000)
    }

    return Promise.reject(error);
});

export default {
    post: axios.post,
    setAuthToken
}
