import React,{useEffect,useState} from 'react'

import { getProjInfo,getProjContributor } from '../../../service'

import projInfoStyle from './index.module.css'

export default function ProjInfo(props) {
  // 获取用户名和项目名
  const username = props.username[0]
  const projname = props.projname[0] 
  
  // 初始化项目的信息和贡献者
  const[projinfo,setprojinfo] = useState('')
  const[projContributor,setprojContributor] = useState('')

  useEffect(()=>{

    // 获得用户项目的一些信息，访问量之类的
    getProjInfo(username,projname)
    .then((res)=>{
      console.log('getProjInfo请求成功',res)
      setprojinfo(res.data)
    })
    .catch((err)=>{
      console.log('getProjInfo请求失败',err)
    })

    // 获得用户项目的贡献者
    getProjContributor(username,projname)
    .then((res)=>{
      console.log('getProjContributor请求成功',res)
      setprojContributor(res.data)
      console.log(projContributor)
    })
    .catch((err)=>{
      console.log('getProjContributor请求失败',err)
    })
  },[])

  return (
    <div className={projInfoStyle.out}>
      <div>About</div>
      <div className={projInfoStyle.description}>
        {projinfo.description}
      </div>
      <a href={projinfo.homepage} className={projInfoStyle.homepage}>
        {projinfo.homepage}
      </a>
      <div className={projInfoStyle.topics}>
        {projinfo&&projinfo.topics.map((item,index)=>{
          return(
            <div key={index}>
              {item}
            </div>
          )
        })}
      </div>
      <div className={projInfoStyle.other}>
        <div><i className={projInfoStyle.iconCode}>&#xe61c;</i>Readme</div>
        <div><i className={projInfoStyle.iconCode}>&#xe6cf;</i>GPL-license</div>
        <div><i className={projInfoStyle.iconCode}>&#xe621;</i><span>{projinfo.stargazers_count} </span> stars</div>
        <div><i className={projInfoStyle.iconCode}>&#xe611;</i><span>{projinfo.subscribers_count} </span> watching</div>
        <div><i className={projInfoStyle.iconCode}>&#xe607;</i><span>{projinfo.forks_count} </span> forks</div>
      </div>
      <div className={projInfoStyle.contributor}>
        <div>Contributors</div>
        <div>
          {projContributor&&projContributor.map((item,index)=>{
            return(
              <div key={index}>
                <div className={projInfoStyle.contributorImg} style={{backgroundImage:`url(${item.avatar_url})`}}></div>
                <div>{item.login}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
