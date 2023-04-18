import React ,{useEffect,useState} from 'react'
import { Navigate, useParams } from "react-router-dom"

import { getProjContent } from '../../service'
import { getCookie } from '../../cookie'

import Nav from '../../components/Nav'
import ProjDetail from '../../components/ProjDetail'

export default function Detail() {
  
  // 接收路由传来的参数
  const params = useParams()
  const [username,setusername] = useState(params.username)
  const [projname,setprojname] = useState(params.projname) 

  // 初始化项目的详情内容
  const [projContent,setprojContent] = useState({})
  
  // 页面鉴权，没有token则返回登录页面
  useEffect(()=>{
    if(getCookie('token')==null){
      alert('请登录')
      Navigate('/login')
    }
  },[])

  useEffect(()=>{
    // 获得用户项目的内容，由那些文件组成
    getProjContent(username,projname)
    .then((res)=>{
      console.log('getProjContent请求成功',res)
      setprojContent(res)
    })
    .catch((err)=>{
      console.log('请求失败',err)
    })
  },[])

  return (
    <div>
      <Nav username={[username,setusername]}></Nav>
      <ProjDetail 
        username={[username,setusername]}
        projname={[projname,setprojname]}
        projContent={[projContent,setprojContent]}
      ></ProjDetail>
    </div>
  )
}
