import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import dayjs from 'dayjs'
import ProjectStyle from './index.module.css'

import Paging from './Paging'

export default function ProjectInfo(props) {
  // 获取用户所有项目信息
  const [userProj,setuserProj] = props.userProj

  // 分页数组容器
  const [pagecontainer,setpagecontainer] = useState('')

  useEffect(()=>{
    console.log('分页结果',pagecontainer)
  },[pagecontainer])
  
  return (
    <div className={ProjectStyle.out}>
      <Paging 
        userProj={[userProj,setuserProj]}
        pagecontainer={[pagecontainer,setpagecontainer]}
      ></Paging>
      <div className={ProjectStyle.topLine}></div>
      {pagecontainer&&pagecontainer.map((item)=>{
        return(
          <div key={item.id} className={ProjectStyle.proj}>
            <Link to={`/detail/${item.owner.login}/${item.name}`}>
            <div className={ProjectStyle.name}>{item.name}</div>
            </Link>
            <div className={ProjectStyle.description}>{item.description}</div>
            <div className={ProjectStyle.topics}>
              {item.topics.map((el,index)=>{return <div key={index}>{el}</div>})}
            </div>
            <div className={ProjectStyle.otherInfo}>
              <div><i className={ProjectStyle.iconcollect}>&#xe621;</i>{item.stargazers_count} </div>
              <div> <i className={ProjectStyle.iconshare}>&#xe654;</i>{item.forks_count}</div>
              <div> Updated on {dayjs(item.updated_at).format('YYYY-MM-DD')}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
