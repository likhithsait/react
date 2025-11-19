import { useState } from "react"
import styles from "./Counter.module.css";

export const Counter = ()=>{


    const [count, setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
        };
    const Decrement=()=>{
        setCount(count-1);
    }
    const Reset=()=>{
        setCount(count-count);
    }
    return(
        <div className={styles.counterBox}>

            <h1 className={styles.countValue}>{count}</h1>
            <button onClick={Decrement} className={`${styles.btn} ${styles.decrement}`} >
                -
            </button> 
            
            <button onClick={Reset} className={`${styles.btn} ${styles.reset}`}>
                ↺
            </button>

            <button onClick={Increment} className={`${styles.btn} ${styles.increment}`}>
                +
            </button>

       
        </div>
    )


}