import React, {useState, useEffect, useRef} from "react";
 export const StopWatch=()=>{

    const[isRunning, setIsRunning]=useState(false);
    const[elapsedTime,setElapsedTime]= useState(0);
    
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()- startTimeRef.current);
            },10)
        }
        return()=>{ clearInterval(intervalIdRef.current);};


    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;


    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }
    function formatTime(){
       let hrs = Math.floor(elapsedTime/(1000*60*60));
       let mins = Math.floor(elapsedTime/(1000*60)%60);
       let secs = Math.floor(elapsedTime/(1000)%60);
       let msecs = Math.floor((elapsedTime%1000)/10);

       return`${hrs}:${mins}:${secs}:${msecs}`;
        

    }



    return(
            <div className="stopwatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button className="start-button" onClick={start}>start</button> 
                    <button className="stop-button" onClick={stop}>stop</button> 
                    <button className="reset-button" onClick={reset}>reset</button>
                </div>


            </div>
    );
 }