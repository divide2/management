import axios from 'axios'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth'

export const Method = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PUT: 'put'
}

axios.interceptors.request.use(config => {
  if (this.localStorage.getItem('token')) {
    config.headers = {
      Authorization: 'Bearer ' + this.localStorage.getItem('token')
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

const Api = {
  post: (url, data, headers) => req(url, data, Method.POST, headers),
  get: (url, params, headers) => req(url, params, Method.GET, headers),
  delete: (url, data) => req(url, data, Method.DELETE),
  put: (url, data) => req(url, data, Method.PUT)
}

const req = (url, data, method = 'get', headers) => {
  return new Promise((resolve, reject) => {
    axios({ method, url: url, data, params: method === 'get' ? data : {}, headers: headers }).then((res) => {
      if (res.status <= 200) {
        resolve(res.data)
      } else if (res.status > 200 && res.status < 300) {
        resolve(res.data)
        // Message.success(res.data.message)
      } else {
        resolve(res.data)
      }
    }).catch((error) => {
      // todo 错误消息是否需要弹出，还是由前端处理后端错误消息在提交之前处理？？？
      // Message.error( error.response.data.error || error.response.data.message)
      reject(error)
    })
  })
}
export default Api
