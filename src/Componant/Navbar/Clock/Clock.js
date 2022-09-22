import {React, useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Clock.css'

const Clock = ({time,date}) => {
  const [dates, setDates] = useState(new Date());

  return (
    <div className='clockArea' style={{background:"rgb(53, 57, 65)" , width:"30%", height:"730px", position:"fixed" , right:"0", bottom:"40px"}}>
      <div style={{fontSize:"30px", textAlign:"left", padding:"15px"}}> 
       <div>{time}</div> 
        <div style={{borderBottom:"1px solid rgb(181 175 175)", paddingBottom:"15px"}}>{date} </div>

        <div className='calender'>
         
      
      <div className='calendar-container'>
        <Calendar onChange={setDates} value={dates} />
      </div>
     
    
          </div>
        
      </div>
    </div>
  )
}

export default Clock