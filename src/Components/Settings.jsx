import React, { useState } from 'react';
import '../App.css';
export default function Settings(props) {
    const[pmdrtime,setPmdrTime]=useState(props.ptime);
    const[shrttime,setshrttime]=useState(props.stime);
    const[lngtime,setlngtime]=useState(props.ltime);
    const handleChage=(event)=>{
        if(event.target.name==="pmdrtime")
        {
            setPmdrTime(event.target.value);
        }
        else if(event.target.name==="shrttime")
        {
            setshrttime(event.target.value);
        }
        else if(event.target.name==="lngtime"){
            setlngtime(event.target.value);
        }
    }
  return (
    <div className='settings'>
        <h1>Timings</h1>
        <div className="timingset">
            <label htmlFor="pmdrtime">Pomodoro Time:</label>
            <input type="number" name="pmdrtime" onChange={handleChage} id="pmdrtime" value={pmdrtime} min={1} max={99}/>
        </div>
        <div className="timingset">
            <label htmlFor="shrttime">Short Break Time:</label>
            <input type="number" name="shrttime" onChange={handleChage} id="shrttime" value={shrttime} min={1} max={99}/>
        </div>
        <div className="timingset">
            <label htmlFor="lngtime">Long Break Time:</label>
            <input type="number" name="lngtime" onChange={handleChage} id="lngtime" value={lngtime} min={1} max={99}/>
        </div>
        <div className="settingbuttons">
            <button onClick={()=>{
                props.applyFunc(pmdrtime,shrttime,lngtime);
                props.chngsetdis();
            }}>
                Apply
            </button>
            <button onClick={()=>{
                props.chngsetdis()
            }}>
                Cancel
            </button>
        </div>
    </div>
  )
}
