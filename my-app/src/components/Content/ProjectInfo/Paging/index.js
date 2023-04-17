import React ,{useState,useEffect}from 'react'

import pagingstyle from './index.module.css' 

export default function Paging(props) {
  // 获取用户所有项目的所有数据
  let userProj = props.userProj[0]
  // 获取分页数组容器
  let setpagecontainer = props.pagecontainer[1]

  // 初始化页数
  let [num,setnum] = useState(1)
  // 初始化最大页数
  let [maxnum,setmaxnum] = useState(0)
  // 初始化每页的元素数量
  let everynum = useState(5)[0]

  // 初次渲染时，计算最大的页数赋给最大页数
  useEffect(()=>{
    setmaxnum(Math.ceil(userProj.length/everynum))
  },[userProj])

  // 分页函数处理，更新分页数组的内容
  let fenye =(userProj)=>{
    setpagecontainer(userProj.slice((num-1)*everynum,(num-1)*everynum+everynum))
  }

  // 页数改变后，执行分页函数
  useEffect(()=>{
    fenye(userProj)
  },[num,userProj])

  // 上一页函数
  let dele = ()=>{
    setnum(num-1)
  }
  // 下一页函数
  let add =()=>{
    setnum(num+1)
  }
  
  return (
    <div className={pagingstyle.out}>
      {num>1&&<div onClick={dele}>上一页</div>}
      {userProj&&<div>{num}/{maxnum}</div>}
      {num<maxnum&&<div onClick={add}>下一页</div>}  
    </div>
  )
}
