import axiosInstance from "./axiosInstance";


const signUp = (name, email, phone, password) => {
    return axiosInstance.post("register", {
        name,
        phone,
        email,
        password,
    });
};
const verify_phone = ( otp) => {
    return axiosInstance.post("verifyotp", {
        otp,
    });
};

const login = (phone, password) => {
    return axiosInstance.post("login", {
        phone,
        password,
    })
        
};

const googleLogin = (name, email, access_token, imageurl) => {
    return axiosInstance.post("login/google", {
        name,
        email,
        access_token,
        imageurl
    })
        
};

const forgot = (store_id, phone) => {
    return axiosInstance.post("forget-pass", {
        store_id,
        phone,

    });
};

const logout = () => {
    return axiosInstance.post("logout")
        
};


const authService = {
    forgot,
    signUp,
    verify_phone,
    login,
    googleLogin,
    logout,
};
export default authService;