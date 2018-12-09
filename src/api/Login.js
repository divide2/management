import qs from 'qs'
import Api from './Api'

export default {
  loginByUsername(username, password) {
    const params = {
      username,
      password,
      grant_type: 'password'
    }
    const headers = {
      Authorization: 'Basic ' + btoa(`aiNzsAXE8tkOFJN6:12345678`)
    }
    return Api.post('/api/oauth/token', qs.stringify(params), headers)
  },
  logout(token) {
    const headers = {
      Authorization: `bearer ${token}`
    }
    return Api.post('/api/v1/logout', {}, headers)
  },
  getUserInfo(token) {
    const headers = {
      Authorization: `bearer ${token}`
    }
    return Api.get('/api/v1/user', {}, headers)
  }
}
