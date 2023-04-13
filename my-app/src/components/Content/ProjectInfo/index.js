import React from 'react'
import {Link} from 'react-router-dom'

import dayjs from 'dayjs'

import ProjectStyle from './index.module.css'

export default function ProjectInfo(props) {
  // 获取用户信息
  const userProj = Array.from(props.userProj[0])
  
  return (
    <div className={ProjectStyle.out}>
      <div className={ProjectStyle.topLine}></div>
      {userProj.map((item)=>{
        return(
          <div key={item.id} className={ProjectStyle.proj}>
            <Link to={`/detail?projName=${item.name}`}>
            <div className={ProjectStyle.name}>{item.name}</div>
            </Link>
            <div className={ProjectStyle.description}>{item.description}</div>
            <div className={ProjectStyle.topics}>
              {item.topics.map((el,index)=>{return <div key={index}>{el}</div>})}
            </div>
            <div className={ProjectStyle.otherInfo}>
              <div>收藏：{item.stargazers_count} </div>
              <div> 分享：{item.forks_count}</div>
              <div> Updated on {dayjs(item.updated_at).format('YYYY-MM-DD')}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
