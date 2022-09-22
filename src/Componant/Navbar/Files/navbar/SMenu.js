import React from 'react'
import {AiFillQuestionCircle, AiOutlineDown,AiOutlineArrowDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const sMenu = () => {
  return (
    <>
    <div  style={{display:"flex", height:"25px" , border:"1px solid rgb(181, 175, 175)" }} >
        <div style={{marginTop:"-15px", display:"flex", justifyContent:"space-between", width:"100%"}}>
        <div >
        <ul style={{color:"black", listStyle:"none",display:"flex", justifyContent: "space-between"}}>
            
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file">File</a>
            </li>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file">Home</a>
            </li>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file">Share</a>
            </li>
            
        </ul>
        </div>
        <div>
        <ul style={{color:"black", listStyle:"none", display:"flex", justifyContent: "space-between"}}>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file"><AiOutlineDown /></a>
            </li>
            <li style={{paddingRight:"15px" , color:"blue"}}>
                <a type='button' alt="file"><AiFillQuestionCircle /></a>
            </li>
            
            
        </ul>
        </div>
        </div>
    </div>
    <div style={{marginTop:"10px", textAlign:"right", color:"black"}}>
        <AiOutlineArrowLeft  style={{ width:"50px", height:"18px"}}/>
        <AiOutlineArrowRight style={{ width:"50px", height:"18px"}} />
        <AiOutlineArrowDown style={{ width:"50px", height:"18px"}} />
        <input placeholder='Queeck Access' style={{width:"250px",border:"1px solid rgb(181, 175, 175)", height:"20px", marginRight:"5px"}}>
        </input>
        <input placeholder='search here' style={{width:"400px",border:"1px solid rgb(181, 175, 175)", height:"20px",marginRight:"5px"}}></input>
    </div>

    </>
  )
}

export default sMenu