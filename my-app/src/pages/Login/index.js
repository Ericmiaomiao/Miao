import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'



import loginStyle from './index.module.css'
import { setCookie } from '../../cookie'

export default function Login() {
  let navigate = useNavigate()
  let usernameref = useRef(null)
  let passwordref = useRef(null)

  let sign =()=>{
    if(!usernameref.current.value){
      alert('请输入用户名')
      return
    }
    setCookie('token',usernameref.current.value,1)
    navigate({pathname:'/user'})
  }
  return (
    <div className={loginStyle.out}>
      <div className={loginStyle.loginOut}>
        <div className={loginStyle.logo}>
          <i className={loginStyle.iconlogo}>&#xe644;</i>
        </div>
        <div>登录 Github Viewer</div>
        <div className={loginStyle.inputOut}>
          <div className={loginStyle.text}>用户名</div>
          <div className={loginStyle.input}>
            <input ref={usernameref}/>
          </div>
          <div className={loginStyle.text}>密码</div>
          <div className={loginStyle.input}>
            <input type="password" ref={passwordref}/>
          </div>
          <div className={loginStyle.loginButton} onClick={sign}>Sign in</div>
        </div>

      </div>
    </div>
  )
}
