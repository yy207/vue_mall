import axios from 'axios'

export function requestInstance(config){
  const instance = axios.create({
    baseURL:"http://localhost:8888",
    timeout:5000
  })
  // 1. 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  },err => {
    console.log("request",err);
  })

  //2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log("response",err);
  })

  return instance(config)
}

