import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import Header from './Components/Header';
import MainPomoDoro from './Components/MainPomoDoro';
import Footer from './Components/Footer';
import Settings from './Components/Settings';
function App() {
    const [selected,setSelected]=useState(1);
    const [PomoTime,SetPomoTime]=useState(25);
    const [shortbreakTime,setShortBreakTime]=useState(5);
    const [longBreakTime,setLongBreakTime]=useState(60);
    const [settingDisplay,setSettingDisplay]=useState(false);
    const [time,setTime]=useState(0);
    const [buttonValue,setButtonValue]=useState("Start");
    const [clkActive,setClkActive]=useState(false);
    const selectMode=(buttonValue)=>{
      setSelected(buttonValue);
    }
    const ChangeSettingDisplay=()=>{
      setSettingDisplay(!settingDisplay);
    }
    const updateTimings=(value1,value2,value3)=>{
      SetPomoTime(value1);
      setShortBreakTime(value2);
      setLongBreakTime(value3);
    }
    useEffect(()=>{
      if(clkActive && time>0)
      {
        const interval=setInterval(() => {
          setTime(time-1);
          // console.log(time);
        }, 1000);
        return ()=>clearInterval(interval);
      }
    },[clkActive,time])
    const ResetButton=()=>{
      if(selected===1)
      {
        setClkActive(false);
        setTime(PomoTime*60);
        setButtonValue("Start");
      }
      else if(selected===2)
      {
        setClkActive(false);
        setTime(shortbreakTime*60);
        setButtonValue("Start");
      }
      else if(selected===3)
      {
        setClkActive(false);
        setTime(longBreakTime*60);
        setButtonValue("Start");
      }
    }
    const StartButton=()=>{
      setClkActive(!clkActive);
      if(buttonValue==="Start")
      {
        setButtonValue("Pause")
      }
      else
      {
        setButtonValue("Start");
      }
    }
    const selectionChange=()=>{
      if(selected===1)
      {
        document.getElementById('pmdoro').style.backgroundColor="#edbece";
        document.getElementById("startbtn").style.backgroundColor="#edbece";
        document.getElementById("resetbtn").style.backgroundColor="#edbece";
        document.getElementById('shrtbrk').style.backgroundColor="transparent";
        document.getElementById('longbrk').style.backgroundColor="transparent";
        document.body.style.backgroundColor="#FA759E";
        document.getElementById("header_setting").style.backgroundColor="#eb96b3";
        document.getElementById('pomodoro').style.backgroundColor="#eb96b3";
        setTime(PomoTime*60);
        document.title="PomoDoro Timer";
        ResetButton();
      } 
      else if(selected===2)
      {
        document.getElementById('shrtbrk').style.backgroundColor="rgb(150 168 182)";
        document.getElementById("startbtn").style.backgroundColor="rgb(150 168 182)";
        document.getElementById("resetbtn").style.backgroundColor="rgb(150 168 182)";
        document.getElementById('pmdoro').style.backgroundColor="transparent";
        document.getElementById('longbrk').style.backgroundColor="transparent";
        document.body.style.backgroundColor="rgb(57, 112, 151)";
        document.getElementById("header_setting").style.backgroundColor="rgb(110, 147, 173)";
        document.getElementById('pomodoro').style.backgroundColor="rgb(110, 147, 173)"
        setTime(shortbreakTime*60);
        document.title="ShortBreak Timer";
        ResetButton();
      }
      else if(selected===3)
      {
        document.getElementById('longbrk').style.backgroundColor="rgb(180 191 192)";
        document.getElementById("startbtn").style.backgroundColor="rgb(180 191 192)";
        document.getElementById("resetbtn").style.backgroundColor="rgb(180 191 192)";
        document.getElementById('shrtbrk').style.backgroundColor="transparent";
        document.getElementById('pmdoro').style.backgroundColor="transparent";
        document.body.style.backgroundColor="rgb(56, 133, 138)";
        document.getElementById("header_setting").style.backgroundColor="rgb(133 182 185)";
        document.getElementById('pomodoro').style.backgroundColor="rgb(133 182 185)"
        setTime(longBreakTime*60);
        document.title="LongBreak Timer";
        ResetButton();
      }
    }
    useEffect(()=>{
      selectionChange();
    },[selected])
  return (
    <div className="App">
      <Header 
        chngsetdis={ChangeSettingDisplay}
      />
      {settingDisplay?<Settings chngsetdis={ChangeSettingDisplay} applyFunc={updateTimings} ptime={PomoTime} stime={shortbreakTime} ltime={longBreakTime}/>:null}
      <MainPomoDoro 
        selectbuttonFunc={selectMode}
        buttonDynValue={buttonValue}
        timeValue={time}
        startFunc={StartButton}
        resetFunc={ResetButton}
        />
      <Footer />
    </div>
  );
}

export default App;
