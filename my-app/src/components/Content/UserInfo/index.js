import React from 'react'

import userInfoStyle from './index.module.css'

export default function UserInfo(props) {

  // 获取用户信息
  const userInfo =  props.userInfo[0]

  return (
    <div className={userInfoStyle.out}>
      <div className={userInfoStyle.headimg} style={{backgroundImage:`url(${userInfo.avatar_url})`}}></div>
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
