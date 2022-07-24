import axiosInstance from "./axiosInstance";
class Request {
    async get(url) {
      return axiosInstance.get(url).then((res) => res.data);
    }
    async post(url, body) {
      return axiosInstance.post(url, body).then((res) => res.data);
    }
    async update(url, body) {
      return axiosInstance.patch(url, body).then((res) => res.data);
    }
    async delete(url) {
      return axiosInstance.delete(url).then((res) => res.data);
    }
  }
  
  const httpReq = new Request();
  
  export default httpReq;