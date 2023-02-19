import React from 'react';
import '../App.css';
// Material UI
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Header(props) {
  return (
    <div className='header'>
    <a href="/">
        <h1>
            <ArrowCircleRightIcon style={{marginRight:"6px"}} className="icn-setting"/>
            PomoDoro
        </h1>
    </a>    
    <button id='header_setting' onClick={()=>{
      props.chngsetdis();
    }}>
        <SettingsIcon style={{marginRight:"4px"}}/> Setting
    </button>
    </div>
  )
}

