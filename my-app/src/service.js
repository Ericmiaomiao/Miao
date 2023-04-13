import axios from 'axios'


const ajax = axios.create({
  baseURL:'https://api.github.com'
})


// 获取用户的信息
export const getUserInfo =(username)=>{
  return ajax.get(`/users/${username}`)
}

// 获得用户所有的项目
export const getUserProj =(username)=>{
  return ajax.get(`/users/${username}/repos`)
}