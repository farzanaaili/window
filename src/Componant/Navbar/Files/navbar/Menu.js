import React from 'react'
import {ImFilesEmpty} from 'react-icons/im'
import {MdOutlineMinimize} from 'react-icons/md'
import {FaRegWindowMaximize} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Menu = ({setFileClick}) => {
  return (
    <div  style={{display:"flex",  justifyContent:"space-between" }} >
        <div className='fmenu'>
        <ul style={{color:"black", listStyle:"none",display:"flex", justifyContent: "space-between"}}>
            <li style={{paddingRight:"15px" }}>
                <a type='button' alt="file"><ImFilesEmpty /></a>
            </li>
            <li style={{paddingRight:"15px" }}>
                <a type='button' alt="file"><ImFilesEmpty /></a>
            </li>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file">File Explorer</a>
            </li>
            
        </ul>
        </div>
        <div>
        <ul style={{color:"black", listStyle:"none", display:"flex", justifyContent: "space-between"}}>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file"><MdOutlineMinimize /></a>
            </li>
            <li style={{paddingRight:"15px"}}>
                <a type='button' alt="file"><FaRegWindowMaximize /></a>
            </li>
            <li style={{paddingRight:"15px"}}>
                <a onClick={setFileClick} type='button' alt="file"><AiOutlineClose /></a>
            </li>
            
        </ul>
        </div>
    </div>
  )
}

export default Menu