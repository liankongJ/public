import axios from 'axios';
import { userUrl } from './axiosUrl';

const resources = {
  SourceMirror: axios.create({
    baseURL: userUrl
  })
}

resources.SourceMirror.interceptors.response.use(response, error);

function response(response) {
  return response
}
function error(error) {
  console.log('error', error)
  if (error.response.status === 401) {
    console.log('error', error)
  }
  // 响应错误
  return Promise.reject(error)
}

export const {
  SourceMirror
} = resources