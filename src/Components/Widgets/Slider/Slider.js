import CircleProgress from '../../CircleProgress/CircleProgress'
import styles from './Slider.module.css'
import { useState } from 'react'

const Slider = ()=>{

    const [progress, setProgress] = useState(0)

    const circularProgress=(value)=>{
        let progress = (value)*10;
        return progress;
    }

    const SliderInputHandler=(event)=>{
        setProgress(event.target.value)
    }

    return(<div className={styles.Slider_Wrapper}>
    <div className={styles.Slider}>
        <div className={styles.Slider_container}>
            <div className={styles.outer_circle}>   
                <div className={styles.outer_main_circle}>
                    <CircleProgress 
                        data-testid="circularProgress"
                        setProgress={setProgress} 
                        progress={circularProgress(progress)}
                        trackWidth={5} 
                        indicatorWidth={5}
                    />
                </div>
            </div>


            <div className={styles.Slider_input}>
                <input 
                    style={{background:"#6CD1DC"}} 
                    type="range" 
                    min="0" 
                    max="10"
                    value={progress}
                    onChange={SliderInputHandler}/>
            </div>
        </div>
    </div>
    </div>)
}

export default Slider