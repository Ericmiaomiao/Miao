import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import dayjs from 'dayjs'
import ProjectStyle from './index.module.css'

import Paging from './Paging'

export default function ProjectInfo(props) {
  // 获取用户所有项目信息
  const [userProj,setuserProj] = props.userProj

  // 按分享排序
  const sort1 =()=>{
    for(let i =1;i<userProj.length; i++){
      for(let j =0; j<userProj.length-i;j++){
        if(userProj[j].forks_count<userProj[j+1].forks_count){
          var temp = userProj[j];      //定义一个临时变量temp
          userProj[j] = userProj[j + 1];
          userProj[j + 1] = temp;
        }
      }
    }
    setuserProj([...userProj])
  }
  // 按收藏排序
  const sort2 =()=>{
    for(let i =1;i<userProj.length; i++){
      for(let j =0; j<userProj.length-i;j++){
        if(userProj[j].stargazers_count<userProj[j+1].stargazers_count){
          var temp = userProj[j];      //定义一个临时变量temp
          userProj[j] = userProj[j + 1];
          userProj[j + 1] = temp;
        }
      }
    }
    setuserProj([...userProj])
  }

  useEffect(()=>{
    console.log('1',userProj)
  },[userProj])

  // 初始化分页数组容器
  const [pagecontainer,setpagecontainer] = useState('')
  
  return (
    <div className={ProjectStyle.out}>
      <Paging 
        userProj={[userProj,setuserProj]}
        pagecontainer={[pagecontainer,setpagecontainer]}
      ></Paging>
      <div onClick={sort1}>分享量</div>
      <div onClick={sort2}>收藏量</div>
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
