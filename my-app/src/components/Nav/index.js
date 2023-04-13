import React,{useRef,useEffect} from 'react'

import Navstyle from './index.module.css'

export default function Nav(props) {
  
  // 初始化用户名
  const [username,setusername] = props.username
  let inputRef = useRef(null) 
  
  // 点击search，更改用户名
  let search=()=>{
    let name = inputRef.current.value
    setusername(name)
  }
  
  // 搜索框value值和用户名绑定
  useEffect(()=>{
    inputRef.current.value = username
  },[username])

  return (
    <div>
      <div className={Navstyle.out}>
        <div className={Navstyle.center}>
          <div className={Navstyle.logo}></div>
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
