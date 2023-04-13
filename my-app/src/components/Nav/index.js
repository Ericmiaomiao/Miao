import React from 'react'

import Navstyle from './index.module.css'

export default function Nav() {
  return (
    <div>
      <div className={Navstyle.out}>
        <div className={Navstyle.center}>
          <div className={Navstyle.logo}></div>
          <div className={Navstyle.menu}>
            Github Viewer
          </div>
          <div className={Navstyle.search}>
            Search or jump to...
          </div>
        </div>
      </div>
    </div>
  )
}
