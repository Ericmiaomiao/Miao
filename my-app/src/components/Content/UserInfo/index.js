import React ,{useEffect,useRef}from 'react'

import userInfoStyle from './index.module.css'

export default function UserInfo(props) {

  // 获取用户信息
  const userInfo =  props.userInfo[0]

  let outRef = useRef(null)
  let imgRef = useRef(null)
  // 监听左侧用户信息栏控制不动
  useEffect(()=>{
    window.onscroll = ()=>{
      let top = outRef.current.getBoundingClientRect().top
      let windowTop = document.documentElement.scrollTop
      if(top<0){
        outRef.current.style.position = 'fixed'
        outRef.current.style.top = '0'

        imgRef.current.style.width = '200px'
        imgRef.current.style.height = '200px'
      }else if(windowTop<140) {
        outRef.current.style.position = 'absolute'

        imgRef.current.style.width = '300px'
        imgRef.current.style.height = '300px'
      }
    }
  },[])

  return (
    <div className={userInfoStyle.out} ref={outRef}>
      <div className={userInfoStyle.headimg} style={{backgroundImage:`url(${userInfo.avatar_url})`}} ref={imgRef}></div>
      <div className={userInfoStyle.name}>{userInfo.name}</div>
      <div className={userInfoStyle.login}>{userInfo.login}</div>
      <div className={userInfoStyle.followButton}>Follow</div>
      <div className={userInfoStyle.bio}>{userInfo.bio}</div>
      <div className={userInfoStyle.follow}>
        <div className={userInfoStyle.followers}>{userInfo.followers} <span>followers ·</span></div>
        <div className={userInfoStyle.following}>{userInfo.following} <span>following</span></div>
      </div>
      <div className={userInfoStyle.otherInfo}>
        {userInfo.company?<div>公司：{userInfo.company}</div>:''}
        {userInfo.location?<div>地址：{userInfo.location}</div>:''}
        {userInfo.blog?<div>博客：{userInfo.blog}</div>:''}
      </div>
    </div>
  )
}
