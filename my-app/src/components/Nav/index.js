import React,{useRef,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import Navstyle from './index.module.css'

export default function Nav(props) {
  let navigate = useNavigate()
  let inputRef = useRef(null) 
  
  // 初始化用户名
  const [username,setusername] = props.username
  
  // 点击search，更改用户名
  let search=()=>{
    if(!inputRef.current.value){
      alert('请输入用户名')
      return
    }
    let name = inputRef.current.value
    setusername(name)
    navigate({pathname:'/user'},{state:{username:name}})
  }
  
  // 搜索框value值和用户名绑定
  useEffect(()=>{
    inputRef.current.value = username
  },[username])

  return (
    <div>
      <div className={Navstyle.out}>
        <div className={Navstyle.center}>
          <div className={Navstyle.logo}>
            <i className={Navstyle.iconlogo}>&#xe644;</i>
          </div>
          <div className={Navstyle.menu}>
            Github Viewer
          </div>
          <div className={Navstyle.search}>
            <input ref={inputRef}/>
            <div onClick={search}>Search</div>
          </div>
        </div>
      </div>
    </div>
  )
}
