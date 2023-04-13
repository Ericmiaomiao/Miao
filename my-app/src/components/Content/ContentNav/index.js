import React from 'react'

import contentNavstlye from './index.module.css'

export default function ContentNav() {
  return (
    <div className={contentNavstlye.out}>
      <div className={contentNavstlye.nav}>
        <div>Overview</div>
        <div>Repositories</div>
        <div>Projects</div>
        <div>Packages</div>
        <div>Stars</div>
      </div>
    </div>
  )
}
