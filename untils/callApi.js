import axios from "axios";

export const URL = "https://dummyjson.com";

export default function callApi(endpoint, method = "GET", data, headers) {
  return axios({
    method: method,
    url: `${URL}/${endpoint}`,
    data: data,
    headers: headers,
  });
}
