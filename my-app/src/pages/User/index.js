import React ,{useState,useEffect}from 'react'

import Nav from '../../components/Nav'
import Content from '../../components/Content'
import { getUserInfo,getUserProj } from '../../service'

export default function User() {

  // 初始化用户信息
  const [userInfo,setuserInfo] = useState({})
  // 初始化用户所有的项目
  const [userProj,setuserProj] = useState({})
 
  useEffect(()=>{

    // 获取用户信息：bailicangdu
    getUserInfo('bailicangdu')
    .then((res)=>{
      console.log('getUserInfo请求成功',res)
      setuserInfo(res.data)
    })
    .catch((err)=>{
      console.log('getUserInfo请求失败',err)
    })

    // 获得用户所有的项目
    getUserProj('bailicangdu')
    .then((res)=>{
      console.log('getUserProj请求成功',res)
      setuserProj(res.data)
    })
    .catch((err)=>{
      console.log('getUserProj请求失败',err)
    })
  },[])

  return (
    <div>
      {/* 用户界面导航条 */}
      <Nav></Nav>
      {/* 用户界面的内容 */}
      <Content userInfo={[userInfo,setuserInfo]} userProj={[userProj,setuserProj]}></Content>
    </div>
  )
}
