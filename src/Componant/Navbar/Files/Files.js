import React from 'react'
import Hero from './heroArea/Hero'
import Menu from './navbar/Menu'
import SMenu from './navbar/SMenu'

const Files = ({setFileClick}) => {
  return (
    <div style={{background:"#ffff" , width:"60%", height:"630px", position:"fixed" , left:"250px", bottom:"340px"}}>
      <Menu setFileClick={setFileClick}/>
      <SMenu />
      <Hero />
    </div>
  )
}

export default Files