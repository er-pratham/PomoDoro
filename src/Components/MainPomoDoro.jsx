import React from 'react';
import '../App.css';
import resetAudioEffect from '../assets/effects/resetEffect.wav';
export default function MainPomoDoro(props) {  
  return (
    <div className='MainPomoDoro' id='pomodoro'>
      <div className="navbar">
        <button id='pmdoro' onClick={()=>{
          props.selectbuttonFunc(1);
        }}>
            Pomodoro
        </button>
        <button id='shrtbrk' onClick={()=>{
          props.selectbuttonFunc(2);
        }}>
            Short Break
        </button>
        <button id='longbrk' onClick={()=>{
          props.selectbuttonFunc(3);
        }}>
            Long Break
        </button>
      </div>
      <div className="mainPomoDoroTimer">
        {Math.floor(props.timeValue/60)<10?`0${Math.floor(props.timeValue/60)}`:Math.floor(props.timeValue/60)}:{props.timeValue%60<10?`0${props.timeValue%60}`:props.timeValue%60}
      </div>
      <div className="buttonTImer">
        <button className='btnTimer' id='startbtn' onClick={props.startFunc}>
          {props.buttonDynValue}
        </button>
        <button className='btnTimer' id="resetbtn" onClick={()=>{
          new Audio(resetAudioEffect).play();
          props.resetFunc()}}>
          Reset
        </button>
      </div>
    </div>
  )
}
