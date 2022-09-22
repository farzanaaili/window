import  {React, useState} from  'react'
import { AiFillWindows, AiOutlineSearch, AiOutlineFile , AiOutlineMail, AiOutlineDesktop} from "react-icons/ai";
import { BsRecord, BsVolumeUpFill } from "react-icons/bs";
import background from '../bg.jpg'
import Clock from './Clock/Clock';
import './Navbar.css'
import SlideNavbar from './SideNavbar/SideNavbar';
import Files from './Files/Files';

const Navbar = () => {
    const [time, setTime]=useState();
    const updateTime =() =>{
            const time = new Date().toLocaleTimeString();
            setTime(time)
    }
    setInterval(updateTime);
    const [date, setDate]=useState();
    const updateDate =() =>{
        const date = new Date().toLocaleDateString();
        setDate(date)
    }
    setInterval(updateDate);
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const [clicks, setClicks]= useState(false);
    const handleClickTwo =() =>setClicks(!clicks)
    const [fileClick, setFileClick]=useState(false);
    const handleFileClick =() => setFileClick(!fileClick)
    return (
    <div className='footers'>
    <img className='footersImg' src={background} alt='bodyImg'></img>
    <div className='footer-nav' >
        <div className='left-nav '>
            <ul style={{display:"flex", justifyContent: "space-between"}}>
                <li>
                  <a onClick={handleClick} style={{marginLeft:"-25px"}} type='button' >
                  {click ? (<AiFillWindows  style={{color:"gray"}} />) : ( <AiFillWindows   style={{color:"white"}} />) }

                  </a>
                </li>
                <li>
                    <a  type='button'><AiOutlineSearch/></a>
                </li>
                <li>
                    <a type='button'><BsRecord/></a>
                </li>
                <li>
                    <a onClick={handleFileClick} type='button'><AiOutlineFile/></a>
                </li>
                <li>
                    <a type='button'><AiOutlineMail/></a>
                </li>
            </ul>
        </div>
        <div className='right-nav '>
            <ul style={{display:"flex", justifyContent: "space-between"}}>
                <li>
                 <a type='button' ><AiOutlineDesktop/></a >
                </li>
                <li>
                 <a type='button'><BsVolumeUpFill/></a>
                </li>
                <li onClick={handleClickTwo} type="button" style={{fontSize:"12px", textAlign:"center"}}>
                    <div>{time}</div>
                    <div>{date}</div>
                    </li>
                
            </ul>
            
        </div>
        {click && <SlideNavbar/>}
        {clicks && <Clock time={time} date={date} />}
        {fileClick && <Files setFileClick={handleFileClick} />}
    </div>
    </div>
  )
}

export default Navbar