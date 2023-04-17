import React from 'react'

import ContentNav from './ContentNav'
import UserInfo from './UserInfo'
import ProjectInfo from './ProjectInfo'

import ContentStyle from './index.module.css'

export default function Content(props) {

  // 获取用户信息：
  const [userInfo,setuserInfo] =  props.userInfo
  const [userProj,setuserProj] = props.userProj

  return (
    <div>
      {/* 导航条 */}
      <ContentNav></ContentNav>
      <div className={ContentStyle.content}>
        {/* 用户信息部分 */}
        <UserInfo userInfo={[userInfo,setuserInfo]}></UserInfo>
        {/* 用户的项目列表 */}
        {<ProjectInfo userProj={[userProj,setuserProj]}></ProjectInfo>}
      </div>
    </div>
  )
}
