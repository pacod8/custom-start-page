import  React, { useState , useEffect } from 'react'
import './DateTime.css'


export const DateTime = () => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='date-container'>
            <p className='date-time'>{date.toLocaleDateString("Es",options)} {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime