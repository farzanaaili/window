import React from 'react'
import {AiOutlineDownload,AiOutlineDesktop,AiFillPicture,AiFillAccountBook} from 'react-icons/ai'
import {GrPersonalComputer, GrCloudComputer,GrDocumentText} from 'react-icons/gr'
import {RiScreenshotLine} from 'react-icons/ri'
import {SiAdobecreativecloud} from 'react-icons/si'
import {GiNetworkBars} from 'react-icons/gi'

const Hero = () => {
  const style ={
    width:"50%", backgroundColor:"#d3cdcd",  margin:"15px"
  }
  return (
    <>
        
    <div className='heroArea' style={{display:"flex", color:"black", marginTop:"15px"}}>
        <div style={{width:"40%", borderRight:"1px solid rgb(181, 175, 175)"}}><h4>Queek Access</h4>
        
            <div >
            <ul style={{listStyle:"none", textAlign:"left"}}>
                <li><a ><AiOutlineDesktop />Desktop</a></li>
                <li><a><AiOutlineDownload/> Download</a></li>
                <li><a><GrDocumentText/> Document</a></li>
                <li><a><AiFillPicture /> Picture</a></li>
                <li><a><AiFillAccountBook /> Booklist</a></li>
                <li><a><AiFillPicture/>Work</a></li>
                <li><a><RiScreenshotLine />ScreenShoot</a></li>
                <li><a><GrCloudComputer/>One Drive</a></li>
                <li><a><GrPersonalComputer/>This Pc</a></li>
                <li><a><GiNetworkBars/>Network</a></li>
                <li><a><SiAdobecreativecloud/>Creative Cloud Files</a></li>
                <li><a><AiFillPicture /> Picture</a></li>
                <li><a><AiFillAccountBook /> Booklist</a></li>
                <li><a><AiFillPicture/>Work</a></li>
                <li><a><RiScreenshotLine />ScreenShoot</a></li>
                <li><a><GrCloudComputer/>One Drive</a></li>

            </ul>
            </div>
        
        </div>
        <div style={{width:"60%"}}><h4>Frequent folders</h4>
              <div style={{display:"flex"}}>
                <div style={{width:"50%", backgroundColor:"#d3cdcd",  margin:"15px"}}><h3 style={{padding:"5px"}}><AiOutlineDesktop/>This Pc</h3></div>
                <div style={{width:"50%", backgroundColor:"#d3cdcd", margin:"15px"}}><h3 style={{padding:"5px"}}><AiOutlineDesktop/>This Pc</h3></div>
              </div>

              <div style={{display:"flex"}}>
                <div style={style}><h3 style={{padding:"5px",}}><AiOutlineDesktop/>This Pc</h3></div>
                <div style={style}><h3 style={{padding:"5px"}}><AiOutlineDesktop/>This Pc</h3></div>
              </div>
              <div style={{display:"flex"}}>
                <div style={style}><h3 style={{padding:"5px"}}><AiOutlineDesktop/>This Pc</h3></div>
                <div style={style}><h3 style={{padding:"5px"}}><AiOutlineDesktop/>This Pc</h3></div>
              </div>
        </div>
        
       
    </div>
    </>
  )
}

export default Hero