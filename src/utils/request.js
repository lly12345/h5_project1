import axios from 'axios'
// import { message } from 'antd'
import { stringify } from 'qs'
import config from '../../config'

const MODE = import.meta.env.MODE
console.log(MODE);
const getRequest = (method) => {
    return (url, data, options = {}) => {
        let base = config[MODE]
        return axios({
            baseURL: base.apiBaseUrl,
            method,
            url,
            ...(method === 'POST' ? { data: options.string ? stringify(data) : data } : {}),
            params: method === 'GET' ? data : options.params,
            headers: {
                "encrypt": 0,
                "token": window.localStorage.getItem('token'),
                'Content-Type': "application/json;charset=utf-8",
                ...options.headers,

            },
            withCredentials:false, // 设为true,服务器才能拿到cookie
        }).then(res=>{
            if(typeof res.data !== 'object'){
                console.error('数据格式响应错误：', res.data)
                console.error('前方拥挤，请刷新再试')
                return Promise.reject(res)
            }
            return res.data
        }) .catch((err) => {
            console.error('系统错误', 2)
            return Promise.reject(err)
          })
    }
}

export const get = getRequest('GET')

export const post = getRequest('POST')