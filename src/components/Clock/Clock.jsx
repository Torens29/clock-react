import { useEffect, useState } from 'react';
import styles from './Clock.module.css';


export const Clock =() =>{

    const [time, setTime] = useState(new Date())
     
    useEffect(() =>{
        setTimeout(()=>setTime(new Date()), 1000)
    })
    

    return (
        <div className={styles["clock"]} >
            <div className={styles.center}></div>
            
            <div className={styles["hours-container"]}>
              <div className={styles["hours"]} style={{transform: `rotate(${((time.getHours()%12)*30) + (time.getMinutes()/10)}deg)`}}></div>
            </div>
            <div className={styles["minutes-container"]}>
              <div className={styles["minutes"]} style={{transform: `rotate(${time.getMinutes() * 6}deg)`}}></div>
            </div>
            <div className={styles["seconds-container"]}>
              <div className={styles["seconds"]} style={{transform: `rotate(${time.getSeconds() * 6}deg)`}}></div>
            </div>
        </div>
    )
}