import axios from "axios";

const BASE_URL = "https://620e4f65585fbc3359ddafd3.mockapi.io/nhanvien";

export const nhanVienService = {
  NhanVienList: function () {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  NhanVienDetail: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  NhanVienAdd: function (data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: data,
    });
  },
  NhanVienUpdate: function (id, data) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: data,
    });
  },
  NhanVienDelete: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
};
