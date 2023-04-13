import React ,{useEffect} from 'react'
// import Nav from '../../components/Nav'
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  const [searchParams]=useSearchParams()
  const params=Object.fromEntries(searchParams)

  useEffect(()=>{
    console.log(params)
  },[])

  return (
    <div>
      {/* <Nav></Nav> */}

    </div>
  )
}
