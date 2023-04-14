import React from 'react'

import projNavStyle from './index.module.css'

export default function ProjNav(props) {
  // 接收props：
  const username = props.username[0]
  const projname = props.projname[0] 

  return (
    <div className={projNavStyle.out}>
      <div className={projNavStyle.heart}>
        <div className={projNavStyle.top}>
          <div className={projNavStyle.username}>{username}</div>
          <div> / </div>
          <div className={projNavStyle.projname}>{projname}</div>
        </div>
        <div className={projNavStyle.nav}>
          <div><i className={projNavStyle.iconCode}>&#xe60c;</i>Code</div>
          <div><i className={projNavStyle.iconIssues}>&#xe764;</i>Issues</div>
          <div><i className={projNavStyle.iconPull}>&#xe99d;</i>Pull requests</div>
          <div><i className={projNavStyle.iconAction}>&#xec61;</i>Actions</div>
          <div><i className={projNavStyle.iconProj}>&#xe63f;</i>Projects</div>
          <div><i className={projNavStyle.iconSecurity}>&#xe88c;</i>Security</div>
          <div><i className={projNavStyle.iconInsights}>&#xec66;</i>Insights</div>
        </div>
      </div>
    </div>
  )
}
