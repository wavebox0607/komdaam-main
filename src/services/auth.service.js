import axiosInstance from "./axiosInstance";


const signUp = (store_id, phone) => {
    return axiosInstance.post("register", {
        store_id,
        phone,

    })
};
const forgot = (store_id, phone) => {
    return axiosInstance.post("forget-pass", {
        store_id,
        phone,

    });
};
const verify_phone = (otp) => {
    return axiosInstance.post("verifyotp", { otp });
};

const passwordReset = (user_id, password, confirm_password) => {
    return axiosInstance.post("change-password", {
        user_id,
        password,
        confirm_password
    });
};

const login = (store_id, phone, password) => {
    return axiosInstance.post("login", {
        store_id,
        phone,
        password,
    })
        .then((response) => {
            return response.data;
        });
};

const logout = () => {
    return axiosInstance.post("logout")
        .then((response) => {
            return response.data;
        });
};

const authService = {
    signUp,
    verify_phone,
    login,
    logout,
    forgot,
    passwordReset
};
export default authService;