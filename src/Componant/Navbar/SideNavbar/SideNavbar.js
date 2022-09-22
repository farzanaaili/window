import React from "react";
import './SideNavbar.css'
import {SiAdobe} from 'react-icons/si'
import {DiIllustrator} from 'react-icons/di'

// image
import ph from '../SideNavbar/a.jpg'
import illistrator from '../SideNavbar/i.png'
function SlideNavbar() {

  return (
   <>
   <div className="sideNavber" style={{background:"rgb(53, 57, 65)" , width:"50%", height:"930px", position:"fixed" , left:"0", bottom:"40px"}}>
    
    <div className="sidebarItem">
      <h4>#</h4>
     <div className="itemArea" >
     <ul style={{display:"block" , textAlign:"left", fontSize:"8px"}}>
        <li>
          <a><h4>A</h4></a>
        </li>
        <li>
          <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><SiAdobe style={{fontSize:"30px", color:"blue", padding:"2px"}}/>Adobe Photoshop</a>
        </li>
        <li>
          <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li>
        <li><h4>B</h4></li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>        </li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>        </li><li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>        
        </li>
        <li>
          <a><h4>C</h4></a>
        </li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><SiAdobe style={{fontSize:"30px", color:"blue", padding:"2px"}}/>Adobe Photoshop</a>
        </li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li>
        <li><h4>D</h4></li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li><li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li><li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li>
        <li>
          <a><h4>E</h4></a>
        </li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><SiAdobe style={{fontSize:"30px", color:"blue", padding:"2px"}}/>Adobe Photoshop</a>
        </li>
        <li>
        <a style={{display:"flex", alignItem:"center",marginRight:"5px", cursor:"pointer"}}><DiIllustrator style={{fontSize:"30px", color:"blue", padding:"2px"}}/> Adobe Illustrator</a>
        </li>
        
      </ul>
     </div>

    </div>
    <div style={{width:"300px"}}>
    <h4>Productivity</h4>
      <img style={{width:"120px", height:"100px"}} src={ph} alt="Photoshop"></img>
      <img style={{width:"100px", height:"120px"}} src={illistrator} alt="illistrator"></img>
      <img style={{width:"120px", height:"100px"}} src={ph} alt="Photoshop"></img>
      <img style={{width:"120px", height:"120px"}} src={illistrator} alt="illistrator"></img>
    </div>
   </div>

   </>
  );
}

export default SlideNavbar;