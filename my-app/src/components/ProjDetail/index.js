import React from 'react'

import ProjNav from './ProjNav'
import ProjContent from './ProjContent'
import ProjInfo from './ProjInfo'

import projDetailstyle from './index.module.css'

export default function ProjDetail(props) {

  // 接收props：
  const [username,setusername] = props.username
  const [projname,setprojname] = props.projname 
  const [projContent,setprojContent] = props.projContent

  return (
    <div>
      <ProjNav
        username={[username,setusername]}
        projname={[projname,setprojname]}
      ></ProjNav>
      <div className={projDetailstyle.heart}>
        <ProjContent
          projContent={[projContent,setprojContent]}
          username={[username,setusername]}
        ></ProjContent>
        <ProjInfo
          username={[username,setusername]}
          projname={[projname,setprojname]}
        ></ProjInfo>
      </div>   
    </div>
  )
}
