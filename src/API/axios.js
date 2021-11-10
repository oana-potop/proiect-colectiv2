import axios from '@services/API/api';

export const axiosGetRequest = async (
  url,
  optionalQueryParams,
) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url + optionalQueryParams,
    })
      .then(response => {
        let parsedResponse = response.data;

        resolve(parsedResponse);
      })
      .catch(error => {
        if (error) {
          reject(error);
        }
      });
  });
};

export const axiosPostRequest = async (
  url,
  optionalQueryParams,
  data,
) => {
  var headers = {}

  headers['Content-Type'] = 'application/json';
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url + optionalQueryParams,
      data: data,
      headers: headers,
    })
      .then(response => {
        let parsedResponse = response.data;

        resolve(parsedResponse);
      })
      .catch(error => {
        if (error) {
          reject(error);
        }
      });
  });
};

export const axiosPutRequest = async (
  url,
  id,
  optionalQueryParams,
  data,
) => {
  var headers = {};

  headers['Content-Type'] = 'application/json';
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: url + `/${id}` + optionalQueryParams,
      data: data,
      headers: headers,
    })
      .then(response => {
        let parsedResponse = response.data;

        resolve(parsedResponse);
      })
      .catch(error => {
        if (error) {
          reject(error);
        }
      });
  });
};

export const axiosDeleteRequest = async (url) => {
  const headers = {};

  headers['Content-Type'] = 'application/json';
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { headers: headers })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        if (error) {
          reject(error);
        }
      });
  });
};